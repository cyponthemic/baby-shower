import "./App.css";

function App() {
  return (
    <div className="page">
      <main className="card">
        <header>
          <h1>Baby Shower</h1>
          <p className="tagline">
            Join us to celebrate! Please RSVP so we can plan food and drinks.
          </p>
        </header>

        <section aria-label="Event details">
          <h2 className="section-title">Event details</h2>
          <div className="details">
            <div className="detail-row">
              <span className="detail-label">Date:</span>
              <span>Monday 1 December, 11:00am – 2:00pm</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Location:</span>
              <span>Eddy Gardens, Melbourne</span>
            </div>
          </div>
        </section>

        <section aria-label="RSVP form">
          <h2 className="section-title">RSVP</h2>

          {/* Netlify form submission */}
          <form
            name="baby-shower-rsvp"
            method="POST"
            data-netlify="true"
            action="/thanks.html"
          >
            {/* Required hidden field for Netlify */}
            <input type="hidden" name="form-name" value="baby-shower-rsvp" />

            <div className="field">
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" type="text" required />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="food">Food requirements / notes</label>
              <textarea
                id="food"
                name="food_requirements"
                placeholder="Veggie / vegan / allergies / anything else we should know"
              />
              <p className="hint">Leave blank if you’re easy.</p>
            </div>

            <button type="submit">Send RSVP</button>

            <p className="footer-note">
              We’re keeping this invite paperless and simple – thanks for RSVPing 💛
            </p>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
