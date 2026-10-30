const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require("cors");

const multer = require('multer');
const { randomUUID } = require('crypto');
const path = require('path');
const {
  s3,
  bucket,
  PutObjectCommand,
  GetObjectCommand,
} = require('./rustfs');

const app = express()


app.use(cors({credentials: true}));
// app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// ROUTES



// MULTER CONFIGURATION FOR FILE UPLOADS
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // Maximum 5 MB per file
    files: 1,
  },
});



const PORT = process.env.SERVER_PORT || 10000
// const DB_URL = process.env.NODE_ENV == 'development' ? process.env.DB_URL : process.env.MONGODB_DEV
const DB_URL = process.env.MONGODB_URI;

if (!DB_URL) {
    throw new Error('MONGODB_URI environment variable is missing');
}

// connect to DATABASE
mongoose.connect(DB_URL).then((info)=>{
    console.log(`Connected to Database`)
}).catch((err)=>{
    console.log(err)
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

const User = mongoose.model('User', userSchema);


const array = [
    {name: 'John', age: 30},
    {name: 'Jane', age: 25},
    {name: 'Bob', age: 40}
]

app.get('/', (req, res)=>{
    res.status(200).json({status: 1, message:'Sucessful', data: array })
})

app.get('/users', async (req, res) => {
    console.log('GET /users called');
    try {
        const users = await User.find();

        res.status(200).json({
            status: 1,
            message: 'Users retrieved successfully',
            data: users
        });
    } catch (err) {
        console.error(err);

        res.status(500).json({
            status: 0,
            message: 'Failed to retrieve users'
        });
    }
});

// Upload a file to RustFS
app.post('/files', (req, res, next) => {
  upload.single('file')(req, res, (err) => {
    if (err) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(413).json({
          status: 0,
          message: 'File must not exceed 5 MB',
        });
      }

      return res.status(400).json({
        status: 0,
        message: 'Invalid file upload',
      });
    }

    next();
  });
}, async (req, res) => {
  console.log('POST /files called', req.file); // REMOVE LATER
  if (!req.file) {
    return res.status(400).json({
      status: 0,
      message: 'Please select a file',
    });
  }

  try {
    const extension = path.extname(req.file.originalname)
      .replace(/[^a-zA-Z0-9.]/g, '')
      .slice(0, 15);

    const key = `${randomUUID()}${extension}`;

    await s3.send(new PutObjectCommand({
      Bucket: bucket,
      Key: "profile/"+key,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
    }));

    res.status(201).json({
      status: 1,
      message: 'File uploaded successfully',
      data: {
        key,
        downloadPath: `/api/files/${key}`,
      },
    });
  } catch (err) {
    console.error('RustFS upload failed:', err.name, err.message);

    res.status(500).json({
      status: 0,
      message: 'Failed to upload file',
    });
  }
});


// Retrieve a file from RustFS
app.get('/files/:key', async (req, res) => {
  try {
    const result = await s3.send(new GetObjectCommand({
      Bucket: bucket,
      Key: req.params.key,
    }));

    res.setHeader(
      'Content-Type',
      result.ContentType || 'application/octet-stream'
    );

    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${path.basename(req.params.key)}"`
    );

    result.Body.pipe(res);
  } catch (err) {
    if (err.name === 'NoSuchKey' || err.name === 'NotFound') {
      return res.status(404).json({
        status: 0,
        message: 'File not found',
      });
    }

    console.error('RustFS retrieval failed:', err.name, err.message);

    res.status(500).json({
      status: 0,
      message: 'Failed to retrieve file',
    });
  }
});


const webSocketServer = app.listen(PORT, '0.0.0.0', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('SERVER CONNECTED');
});


app.get('/adduser', async (req, res) => {
    console.log(req.query.name, req.query.email);
    try {
        const user = await User.create({
            name: req.query.name || 'Default Name',
            email: req.query.email || 'Default Email',
        });

        res.status(201).json({
            status: 1,
            message: 'User created successfully',
            data: user
        });
    } catch (err) {
        console.error(err);

        res.status(500).json({
            status: 0,
            message: 'Failed to create user'
        });
    }
});


