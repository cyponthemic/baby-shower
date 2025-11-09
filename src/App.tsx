import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);

  if (!showForm) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center p-6 watercolor-bg">
        <div className="w-full max-w-2xl flex flex-col items-center justify-center">
          <img 
            src="/parent-picnic-invitation.jpg" 
            alt="Parent Picnic Invitation" 
            className="w-full h-auto rounded-3xl shadow-2xl"
          />
          <button 
            className="mt-8 px-10 py-4 text-base font-medium rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all duration-200"
            onClick={() => setShowForm(true)}
          >
            RSVP
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 watercolor-bg">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-12 md:p-16 space-y-8">
        <header className="text-center space-y-3">
          <p className="text-sm text-gray-600 font-light tracking-wide uppercase">
            belle & alex are throwing a
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-warm-text tracking-tight">
            PARENT PICNIC
          </h1>
          <p className="text-base text-gray-600 font-light leading-relaxed max-w-md mx-auto">
            bring a camping chair & a picnic rug, & come send us off to parenthood
          </p>
        </header>

        <section className="pt-8 space-y-6">
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
            Event details
          </h2>
          <div className="bg-gray-50 rounded-2xl p-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Date:</span>
              <span className="text-gray-600">Saturday 13 December, 10:30 a.m</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Location:</span>
              <span className="text-gray-600">Edinburgh Gardens</span>
            </div>
          </div>
        </section>

        <section className="pt-4 space-y-6">
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
            RSVP
          </h2>

          <form
            name="baby-shower-rsvp"
            method="POST"
            data-netlify="true"
            action="/thanks.html"
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="baby-shower-rsvp" />

            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-sm"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-sm"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="food" className="block text-sm font-medium text-gray-700">
                Food requirements / notes
              </label>
              <textarea
                id="food"
                name="food_requirements"
                placeholder="Veggie / vegan / allergies / anything else we should know"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-sm min-h-[100px] resize-y"
              />
              <p className="text-xs text-gray-500">Leave blank if you're easy.</p>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-gray-800 text-white font-medium hover:bg-gray-700 transition-all duration-200 text-base"
            >
              Send RSVP
            </button>

            <p className="text-xs text-gray-400 text-center pt-2">
              We're keeping this invite paperless and simple – thanks for RSVPing 💛
            </p>
            <p className="text-xs text-gray-400 text-center">
              Please RSVP so we can plan food and drinks.
            </p>
          </form>
        </section>
      </div>
    </div>
  );
}

export default App;
