import { useState } from "react";
import { EVENT } from "./constants";

interface RSVPFormProps {
  onSuccess?: () => void;
}

export default function RSVPForm({ onSuccess }: RSVPFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [extraGuests, setExtraGuests] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [canAttend, setCanAttend] = useState<"yes" | "no" | null>(null);

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

  // Show intro question if not answered yet
  if (canAttend === null) {
    return (
      <section className="pt-4 space-y-6">
        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
       Can you make it?
        </h2>
        <div className="space-y-4">
          {/* <p className="text-base text-gray-600 font-light leading-relaxed max-w-md">
          Please RSVP so we can plan food.  
          </p> */}
          <div className="flex flex-col md:flex-row gap-4">
            <button
              type="button"
              onClick={() => setCanAttend("yes")}
              className="flex-1 py-4 rounded-full bg-gray-800 text-white font-medium hover:bg-gray-700 transition-all duration-200 text-base"
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => setCanAttend("no")}
              className="flex-1 py-4 rounded-full border-2 border-gray-800 text-gray-800 font-medium hover:bg-gray-50 transition-all duration-200 text-base"
            >
              No
            </button>
          </div>
        </div>
      </section>
    );
  }

  const isFullForm = canAttend === "yes";

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
        <input type="hidden" name="can_attend" value={canAttend} />

        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-base"
          />
        </div>

        {isFullForm && (
          <>
            {extraGuests.map((guest, index) => (
              <div key={index} className="space-y-2">
                <label htmlFor={`guest-${index}`} className="block text-sm font-medium text-gray-700">
                  Guest {index + 1} name
                </label>
                <div className="flex gap-2">
                  <input
                    id={`guest-${index}`}
                    type="text"
                    value={guest}
                    onChange={(e) => {
                      const updated = [...extraGuests];
                      updated[index] = e.target.value;
                      setExtraGuests(updated);
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-base"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const updated = extraGuests.filter((_, i) => i !== index);
                      setExtraGuests(updated);
                    }}
                    className="px-4 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all text-sm"
                    aria-label="Remove guest"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={() => setExtraGuests([...extraGuests, ""])}
              disabled={name.trim() === "" || (extraGuests.length > 0 && extraGuests[extraGuests.length - 1]?.trim() === "")}
              className="w-full py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
            >
              + Add guest
            </button>

            {/* Hidden fields for guests data */}
            <input
              type="hidden"
              name="guests"
              value={extraGuests.filter(g => g.trim() !== "").join(", ")}
            />
            <input
              type="hidden"
              name="guest_count"
              value={extraGuests.filter(g => g.trim() !== "").length}
            />

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
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-base"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="food" className="block text-sm font-medium text-gray-700">
                Dietaries
              </label>
              <textarea
                id="food"
                name="food_requirements"
                
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-base min-h-[100px] resize-y"
              />
              
            </div>
          </>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 rounded-full bg-gray-800 text-white font-medium hover:bg-gray-700 transition-all duration-200 text-base disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "RSVP"}
        </button>

        {submitError && (
          <p className="text-xs text-red-500 text-center pt-2">
            {submitError}
          </p>
        )}

        <div className="text-center">
          <button
            type="button"
            onClick={() => setCanAttend(null)}
            className="text-sm text-gray-600 hover:text-gray-800 underline"
          >
            Go back
          </button>
        </div>
      </form>
    </section>
  );
}

