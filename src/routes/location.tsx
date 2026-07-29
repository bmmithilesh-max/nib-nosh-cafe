import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Location & Contact | Nib & Nosh Cafe, Rajajinagar" },
      {
        name: "description",
        content:
          "Find Nib & Nosh Cafe at No 59, 13, 19th Main Rd, 2nd Block, Rajajinagar, Bengaluru. Open daily 12 PM – 10 PM.",
      },
      { property: "og:title", content: "Location & Contact | Nib & Nosh Cafe" },
      {
        property: "og:description",
        content: "Visit us in Rajajinagar, Bengaluru — open daily from 12 PM to 10 PM.",
      },
    ],
  }),
  component: Location,
});

function Location() {
  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      <div className="bg-blue-800 py-14 text-center">
        <p className="text-blue-300 text-sm font-medium uppercase tracking-widest mb-2">Find Us</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">
          Location & Contact
        </h1>
        <p className="text-blue-200 text-sm">Come visit us in Rajajinagar</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="font-serif text-2xl font-bold text-blue-800 mb-6">Visit Nib & Nosh</h2>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50 mb-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No 59, 13, 19th Main Rd, 2nd Block,
                <br />
                Rajajinagar, Bengaluru,
                <br />
                Karnataka 560010
              </p>
              <a
                href="https://maps.google.com/?q=Nib+%26+Nosh+Cafe+Rajajinagar+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50 mb-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
              <a
                href="tel:+919876543210"
                className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
              >
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50 mb-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Opening Hours</h3>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between gap-8">
                  <span className="text-gray-500">Monday – Friday</span>
                  <span className="text-gray-800 font-medium">12:00 PM – 10:00 PM</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span className="text-gray-500">Saturday – Sunday</span>
                  <span className="text-gray-800 font-medium">12:00 PM – 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
              <Instagram className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Follow Us</h3>
              <a
                href="https://instagram.com/nibnoshcafe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
              >
                @nibnoshcafe
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-sm">
          <iframe
            title="Nib & Nosh Cafe Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4586!2d77.5511!3d12.9979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzU2LjEiTiA3N8KwMzMnMDMuOSJF!5e0!3m2!1sen!2sin!4v1680000000000"
            width="100%"
            height="280"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}