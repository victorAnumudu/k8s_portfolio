import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'


export default function App() {
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [formMessage, setFormMessage] = useState('')

  const handleContactSubmit = (event) => {
    event.preventDefault()
    axios.get('/api/adduser',{name: contactName, email: contactEmail})
    .then((response) => {
      console.log(response.data)
      setFormMessage(`Thanks, ${contactName}! Your details have been entered.`)
      setContactName('')
      setContactEmail('')
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
      setFormMessage(`Opps, something went wrong.`)
    }).finally(() => {
      setTimeout(() => {
        setFormMessage('')
      }, 5000)
    })
  }

  useEffect(() => {
    axios.get('/api/users')
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])


  return (
    <>
      <div className="cursor-glow" aria-hidden="true" />
      <header className="site-header" id="top">
        <a className="logo" href="#top" aria-label="Homepage">AM<span>.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Let's talk <span>↗</span></a>
        <button className="menu-toggle" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span>
        </button>
      </header>

      <div className="mobile-menu" aria-hidden="true">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="dot"></span>
              Available for select projects
            </p>

            <h1>
              I build digital
              <br />
              <em>experiences</em> that
              <br />
              people remember.
            </h1>

            <p className="hero-description">
              Frontend developer focused on crafting fast,
              accessible and beautifully considered interfaces
              for ambitious brands and products.
            </p>

            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                Explore my work <span>↓</span>
              </a>

              <a className="text-link" href="#contact">
                Start a conversation <span>↗</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orb orb-one"></div>
            <div className="orb orb-two"></div>

            <div className="visual-card">
              <img
                src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=85"
                alt="Creative interface design on a laptop"
              />

              <div className="visual-overlay">
                <span>01 / 04</span>
                <span>Interface design</span>
              </div>
            </div>

            <div className="floating-note">
              <span>✦</span>
              <strong>
                Pixel
                <br />
                perfect
              </strong>
            </div>
          </div>
        </section>

        <section className="marquee" aria-label="Services">
          <div className="marquee-track">
            <span>FRONTEND DEVELOPMENT</span>
            <i>✦</i>
            <span>UI ENGINEERING</span>
            <i>✦</i>
            <span>RESPONSIVE DESIGN</span>
            <i>✦</i>
            <span>WEB EXPERIENCES</span>
            <i>✦</i>

            <span>FRONTEND DEVELOPMENT</span>
            <i>✦</i>
            <span>UI ENGINEERING</span>
            <i>✦</i>
            <span>RESPONSIVE DESIGN</span>
            <i>✦</i>
            <span>WEB EXPERIENCES</span>
            <i>✦</i>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="section-label">01 — About</div>

          <div className="about-content">
            <div>
              <h2>
                Turning thoughtful
                <br />
                <span>ideas into interfaces.</span>
              </h2>
            </div>

            <div className="about-text">
              <p className="large-copy">
                I’m Alex, a frontend developer who cares about the details
                that make a website feel effortless.
              </p>

              <p>
                I combine clean code, strong visual hierarchy and a deep
                respect for the user to create digital products that look
                great and work even better. From landing pages to complex
                web applications, I turn designs and ideas into polished,
                responsive experiences.
              </p>

              <a className="underlined-link" href="#contact">
                More about me <span>↗</span>
              </a>
            </div>
          </div>

          <div className="stats">
            <div>
              <strong>04+</strong>
              <span>Years experience</span>
            </div>

            <div>
              <strong>32</strong>
              <span>Projects delivered</span>
            </div>

            <div>
              <strong>18</strong>
              <span>Happy clients</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Attention to detail</span>
            </div>
          </div>
        </section>

        <section className="work section" id="work">
          <div className="section-heading">
            <div className="section-label">02 — Selected work</div>
            <p>A few projects that show how I think, design and build.</p>
          </div>

          <div className="projects">
            <article className="project project-large">
              <a href="#" className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=85"
                  alt="Fintech dashboard project"
                />
                <span className="project-number">01</span>
                <span className="view-project">View case study ↗</span>
              </a>

              <div className="project-meta">
                <div>
                  <h3>Northstar Finance</h3>
                  <p>Fintech / Product design</p>
                </div>
                <div className="tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>
              </div>
            </article>

            <article className="project">
              <a href="#" className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85"
                  alt="Interior design website"
                />
                <span className="project-number">02</span>
                <span className="view-project">View case study ↗</span>
              </a>

              <div className="project-meta">
                <div>
                  <h3>Atelier No. 8</h3>
                  <p>Architecture / Studio</p>
                </div>
                <div className="tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JS</span>
                </div>
              </div>
            </article>

            <article className="project">
              <a href="#" className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                  alt="Business collaboration platform"
                />
                <span className="project-number">03</span>
                <span className="view-project">View case study ↗</span>
              </a>

              <div className="project-meta">
                <div>
                  <h3>Common Ground</h3>
                  <p>Collaboration / SaaS</p>
                </div>
                <div className="tags">
                  <span>UI</span>
                  <span>CSS</span>
                  <span>JS</span>
                </div>
              </div>
            </article>

            <article className="project project-wide">
              <a href="#" className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=85"
                  alt="E-commerce product interface"
                />
                <span className="project-number">04</span>
                <span className="view-project">View case study ↗</span>
              </a>

              <div className="project-meta">
                <div>
                  <h3>Form &amp; Function</h3>
                  <p>E-commerce / Brand</p>
                </div>
                <div className="tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="section-label">03 — Capabilities</div>

          <div className="skills-grid">
            <div>
              <h2>
                What I bring
                <br />
                <em>to the table.</em>
              </h2>
            </div>

            <div className="skill-list">
              <div className="skill-item">
                <span>01</span>
                <div>
                  <h3>Frontend Development</h3>
                  <p>
                    Semantic HTML, modern CSS, JavaScript and accessible
                    responsive interfaces.
                  </p>
                </div>
                <b>↗</b>
              </div>

              <div className="skill-item">
                <span>02</span>
                <div>
                  <h3>UI Implementation</h3>
                  <p>
                    Turning Figma designs into accurate, scalable and
                    maintainable frontends.
                  </p>
                </div>
                <b>↗</b>
              </div>

              <div className="skill-item">
                <span>03</span>
                <div>
                  <h3>Interaction &amp; Motion</h3>
                  <p>
                    Purposeful micro-interactions that make products feel
                    intuitive and alive.
                  </p>
                </div>
                <b>↗</b>
              </div>

              <div className="skill-item">
                <span>04</span>
                <div>
                  <h3>Performance</h3>
                  <p>
                    Fast-loading experiences with clean structure, optimized
                    assets and best practices.
                  </p>
                </div>
                <b>↗</b>
              </div>
            </div>
          </div>

          <div className="tech-stack">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>Tailwind CSS</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>Figma</span>
            <span>REST APIs</span>
          </div>
        </section>

        <section className="testimonial">
          <div className="quote-mark">“</div>

          <blockquote>
            Alex has that rare combination of technical precision and visual
            taste. The final product was faster, cleaner and more polished
            than we imagined.
          </blockquote>

          <div className="quote-author">
            <span></span>
            <div>
              <strong>Jordan Lee</strong>
              <small>Product Lead, Common Ground</small>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-top">
            <div className="section-label">04 — Contact</div>
            <span>Have a project in mind?</span>
          </div>

          <div className="contact-main">
            <h2>
              Let’s make
              <br />
              <em>something great.</em>
            </h2>

            <a className="contact-email" href="mailto:hello@alexmorgan.dev">
              hello@alexmorgan.dev <span>↗</span>
            </a>
          </div>

          <div className="contact-form-section">
            <div className="contact-form-copy">
              <p className="section-label">Let's connect</p>
              <h3>Stay in the loop.</h3>
              <p>Leave your name and email, and let's start a conversation.</p>
            </div>

            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-field">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  value={contactName}
                  onChange={(event) => setContactName(event.target.value)}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={contactEmail}
                  onChange={(event) => setContactEmail(event.target.value)}
                  required
                />
              </div>

              <button className="contact-submit" type="submit">
                Send <span aria-hidden="true">↗</span>
              </button>
              {formMessage && <p className="form-message" role="status">{formMessage}</p>}
            </form>
          </div>

          <div className="contact-bottom">
            <div className="socials">
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
              <a href="#">Dribbble</a>
            </div>

            <p>
              © <span>{new Date().getFullYear()}</span> Alex Morgan. All rights reserved.
            </p>

            <a href="#top">Back to top ↑</a>
          </div>
        </section>
      </main>
    </>
  )
}

    