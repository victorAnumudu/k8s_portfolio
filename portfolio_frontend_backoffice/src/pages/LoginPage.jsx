import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate();
  return (
  <div className="login-page">
    <Link className="login-brand" to="login.html">AM<span>.</span></Link>
    <main className="login-layout">
      <section className="login-story">
        <p className="eyebrow"><span className="status-dot"></span> PRIVATE WORKSPACE</p>
        <h1>Your work.<br /><em>Your space.</em></h1>
        <p className="login-intro">A thoughtful little space to keep track of the people connecting with you and the work that comes next.</p>
        <div className="login-art" aria-hidden="true">
          <div className="art-circle circle-one"></div><div className="art-circle circle-two"></div>
          <div className="art-card"><span>AM / BACKOFFICE</span><strong>Good work<br />starts with<br /><em>good people.</em></strong><i>✦</i></div>
          <span className="art-caption">DESIGNED WITH INTENTION — 2026</span>
        </div>
      </section>

      <section className="login-form-side">
        <div className="login-card">
          <p className="section-label">WELCOME BACK</p>
          <h2>Sign in<span>.</span></h2>
          <p className="login-subtitle">Enter your administrator details to continue.</p>
          <form id="login-form">
            <div className="form-field">
              <label for="email">Email address</label>
              <input id="email" name="email" type="email" autocomplete="username" placeholder="you@example.com" required />
            </div>
            <div className="form-field">
              <label for="password">Password</label>
              <div className="password-wrap"><input id="password" name="password" type="password" autocomplete="current-password" placeholder="Enter your password" required /><button className="password-toggle" type="button" id="toggle-password" aria-label="Show password">Show</button></div>
            </div>
            <p className="login-message" id="login-message" role="status">This is a UI starter. Connect it to your backend authentication before using it to protect real data.</p>
            <button className="button button-dark login-submit" type="button" onClick={()=>navigate('/')}>Continue <span>↗</span></button>
          </form>
          <Link className="login-back" to="../index.html">← Back to portfolio</Link>
        </div>
        <footer className="login-footer"><span>© <span id="year"></span> Alex Morgan</span><span>PRIVATE BY DESIGN <b>✦</b></span></footer>
      </section>
    </main>
  </div>
  )
}
