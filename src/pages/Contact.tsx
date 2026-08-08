import { Phone, MapPin, Clock, Instagram } from 'lucide-react';
import { usePageMeta } from '../lib/seo';

export default function Contact() {
  usePageMeta(
    'Contact Us | Nib & Nosh Cafe',
    'Get in touch with Nib & Nosh Cafe in Rajajinagar, Bengaluru. Call +91 99860 88681 or DM us @nib_and_nosh on Instagram. Open daily 12–10 PM.',
    '/contact'
  );

  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-blue-800 py-14 text-center">
        <p className="text-blue-300 text-sm font-medium uppercase tracking-widest mb-2">Get in Touch</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">Contact Us</h1>
        <p className="text-blue-200 text-sm">We'd love to hear from you</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="font-serif text-2xl font-bold text-blue-800 mb-6">Reach Nib & Nosh</h2>

        {/* Phone */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50 mb-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
              <p className="text-gray-500 text-sm mb-2">For reservations, party bookings or any queries</p>
              <a href="tel:+919986088681" className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
                +91 99860 88681
              </a>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50 mb-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Visit Us</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No 59, 13, 19th Main Rd, 2nd Block,<br />
                Rajajinagar, Bengaluru,<br />
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

        {/* Social */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50 mb-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
              <Instagram className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Follow Us</h3>
              <p className="text-gray-500 text-sm mb-2">DM us on Instagram for the latest updates</p>
              <a
                href="https://instagram.com/nib_and_nosh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors"
              >
                @nib_and_nosh
              </a>
            </div>
          </div>
        </div>

        {/* Hours */}
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
      </div>
    </div>
  );
}
