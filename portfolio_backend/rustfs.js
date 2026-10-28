const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} = require('@aws-sdk/client-s3');

if (!process.env.RUSTFS_ACCESS_KEY ||
    !process.env.RUSTFS_SECRET_KEY) {
  throw new Error('RustFS credentials are missing');
}

const s3 = new S3Client({
  endpoint: process.env.RUSTFS_ENDPOINT || 'http://rustfs:9000',
  region: 'us-east-1',
  forcePathStyle: true,
  credentials: {
    accessKeyId: process.env.RUSTFS_ACCESS_KEY,
    secretAccessKey: process.env.RUSTFS_SECRET_KEY,
  },
});

const bucket = process.env.RUSTFS_BUCKET || 'portfolio-files';

module.exports = {
  s3,
  bucket,
  PutObjectCommand,
  GetObjectCommand,
};