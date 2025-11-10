import { useState } from "react";
import { EVENT } from "./constants";

interface RSVPFormProps {
  onSuccess?: () => void;
}

export default function RSVPForm({ onSuccess }: RSVPFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
  
    const myForm = event.currentTarget;
    const formData = new FormData(myForm);
  
    // Convert FormData to URL-encoded string
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      params.append(key, value.toString());
    });
  
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString()
    })
      .then(() => {
        if (onSuccess) {
          onSuccess();
        } else {
          window.location.href = "/thanks.html";
        }
    })
    .catch((error: Error) => {
        setSubmitError(error.message || "Something went wrong. Please try again.");
        setIsSubmitting(false);
    });
  };

  return (
    <section className="pt-4 space-y-6">
      <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
        RSVP
      </h2>

      <form
        name={EVENT.formName}
        method="POST"
        data-netlify="true"
        action="/thanks.html"
        className="space-y-6"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value={EVENT.formName} />

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
          disabled={isSubmitting}
          className="w-full py-4 rounded-full bg-gray-800 text-white font-medium hover:bg-gray-700 transition-all duration-200 text-base disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send RSVP"}
        </button>

        {submitError && (
          <p className="text-xs text-red-500 text-center pt-2">
            {submitError}
          </p>
        )}

        <p className="text-xs text-gray-400 text-center pt-2">
          We're keeping this invite paperless and simple – thanks for RSVPing 💛
        </p>
        <p className="text-xs text-gray-400 text-center">
          Please RSVP so we can plan food and drinks.
        </p>
      </form>
    </section>
  );
}

