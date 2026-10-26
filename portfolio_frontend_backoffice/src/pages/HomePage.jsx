import React from 'react'

export default function HomePage() {
  return (
  <div class="admin-page">
    <aside class="sidebar">
      <a class="brand" href="admin.html" aria-label="Alex Morgan backoffice">AM<span>.</span></a>
      <p class="sidebar-caption">WORKSPACE</p>
      <nav class="side-nav" aria-label="Backoffice navigation">
        <a class="side-link active" href="admin.html"><span class="nav-icon">▦</span> Overview</a>
        <a class="side-link" href="#contacts"><span class="nav-icon">↗</span> Contact submissions <span class="nav-count" id="side-count">—</span></a>
      </nav>
      <div class="sidebar-bottom">
        <div class="profile-mark">AM</div>
        <div class="profile-copy"><strong>Alex Morgan</strong><span>Administrator</span></div>
        <button class="icon-button logout-button" id="logout-button" aria-label="Sign out" title="Sign out">↗</button>
      </div>
    </aside>

    <main class="admin-main">
      <header class="topbar">
        <div class="breadcrumb">Workspace <span>/</span> Overview</div>
        <a class="back-link" href="../index.html">← View portfolio</a>
      </header>

      <section class="welcome-row">
        <div>
          <p class="eyebrow"><span class="status-dot"></span> BACKOFFICE / OVERVIEW</p>
          <h1>Good to see you<span>.</span></h1>
          <p class="welcome-description">A clear view of the people reaching out through your portfolio.</p>
        </div>
        <div class="date-chip" id="today-date">TODAY</div>
      </section>

      <section class="stats-grid" aria-label="Submission summary">
        <article class="stat-card">
          <div class="stat-top"><span>Total submissions</span><span class="stat-symbol">↗</span></div>
          <strong id="total-count">—</strong>
          <p>All contact records returned by the API</p>
        </article>
        <article class="stat-card">
          <div class="stat-top"><span>With email addresses</span><span class="stat-symbol">＠</span></div>
          <strong id="email-count">—</strong>
          <p>Records containing an email address</p>
        </article>
        <article class="stat-card stat-card-accent">
          <div class="stat-top"><span>Latest submission</span><span class="stat-symbol">✦</span></div>
          <strong class="latest-value" id="latest-date">—</strong>
          <p>Based on available date fields</p>
        </article>
      </section>

      <section class="table-panel" id="contacts">
        <div class="table-heading">
          <div>
            <p class="section-label">CONTACTS / DIRECTORY</p>
            <h2>Contact submissions</h2>
            <p class="table-subtitle">Names and email addresses submitted through your website.</p>
          </div>
          <button class="button button-dark" id="refresh-button"><span class="refresh-icon">↻</span> Refresh list</button>
        </div>

        <div class="table-tools">
          <label class="search-box"><span aria-hidden="true">⌕</span><input id="search-input" type="search" placeholder="Search name or email…" aria-label="Search contacts" /></label>
          <span class="result-count" id="result-count">Loading records…</span>
        </div>

        <div class="table-wrap">
          <table>
            <thead><tr><th class="number-col">#</th><th>CONTACT</th><th>EMAIL ADDRESS</th><th>STATUS</th></tr></thead>
            <tbody id="contacts-body">
              <tr><td colspan="4" class="empty-state"><span class="loading-dot"></span> Loading contacts…</td></tr>
            </tbody>
          </table>
        </div>
        <div class="table-footer"><span id="footer-count">Waiting for data</span><span>PORTFOLIO / CONTACTS</span></div>
        <p class="api-note" id="api-note" role="status">Connecting to <code>/api/users</code>…</p>
      </section>
      <footer class="admin-footer"><span>© <span id="year"></span> Alex Morgan</span><span>MADE WITH INTENTION <b>✦</b></span></footer>
    </main>

  </div>
  )
}
