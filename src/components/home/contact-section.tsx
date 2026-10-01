"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="contact-form">
      {/* Static Decorative Flight Trail */}
      <div className="absolute top-6 right-8 md:right-24 w-60 md:w-72 pointer-events-none select-none z-0 opacity-40">
        <img
          src="/images/plane-trail-3.png"
          alt="Flight Trail"
          className="w-full h-auto"
        />
      </div>

      <div className="max-w-[1560px] mx-auto px-3 sm:px-5 lg:px-7 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-navy mb-4"
          >
            Start Your Journey Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Have questions? Our team of expert education counsellors is ready to help you navigate your study abroad options.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-light-blue rounded-3xl p-8 md:p-10 border border-gray-100">
              <h3 className="text-2xl font-bold text-navy mb-8">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-royal-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Phone</p>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+94760344695" className="text-lg font-bold text-navy hover:text-royal-blue transition-colors">
                        <span className="text-sm font-normal text-gray-500 mr-2">LK:</span>+94 76 034 4695
                      </a>
                      <a href="tel:+917305314877" className="text-lg font-bold text-navy hover:text-royal-blue transition-colors">
                        <span className="text-sm font-normal text-gray-500 mr-2">IN:</span>+91 7305314877
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-royal-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
                    <a href="mailto:adhigroupofcompany@gmail.com" className="text-lg font-bold text-navy hover:text-royal-blue transition-colors break-all">
                      adhigroupofcompany@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-royal-blue" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Sri Lanka Office</p>
                      <p className="text-lg font-medium text-navy leading-relaxed">
                        Chankanai East, Chankanai,<br />
                        Jaffna, Sri Lanka
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">India Office</p>
                      <p className="text-lg font-medium text-navy leading-relaxed">
                        38/21, G-1, Rajeshwari nagar,<br />
                        Thanjavur - 613005,<br />
                        Tamil Nadu, India.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-royal-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Opening Hours</p>
                    <p className="text-lg font-medium text-navy leading-relaxed">
                      Monday – Saturday<br />
                      8:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Static Travel Suitcase Decorative Accent */}
              <div className="absolute -bottom-10 -right-8 w-36 sm:w-44 md:w-52 pointer-events-none select-none z-20 hidden lg:block drop-shadow-2xl">
                <img
                  src="/images/travel-suitcase.png"
                  alt="Travel Suitcase with Stickers"
                  className="w-full h-auto drop-shadow-xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4 min-h-[400px]">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <Send className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy">Thank You!</h3>
                  <p className="text-gray-600">
                    Our education counsellor will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="text-sm font-medium text-gray-700">Full Name</label>
                      <input required type="text" id="contact-name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="text-sm font-medium text-gray-700">Email Address</label>
                      <input required type="email" id="contact-email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contact-phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                      <input required type="tel" id="contact-phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="+1 234 567 8900" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-dest" className="text-sm font-medium text-gray-700">Preferred Destination</label>
                      <select required id="contact-dest" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 outline-none transition-all bg-gray-50 focus:bg-white">
                        <option value="">Select a destination</option>
                        <option value="UK">United Kingdom</option>
                        <option value="Australia">Australia</option>
                        <option value="Canada">Canada</option>
                        <option value="Europe">Europe</option>
                        <option value="Japan">Japan</option>
                        <option value="Asia">Asia</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-level" className="text-sm font-medium text-gray-700">Interested Study Level</label>
                    <select required id="contact-level" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 outline-none transition-all bg-gray-50 focus:bg-white">
                      <option value="">Select a level</option>
                      <option value="Undergraduate">Undergraduate (Bachelors)</option>
                      <option value="Postgraduate">Postgraduate (Masters)</option>
                      <option value="PhD">PhD / Doctorate</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-sm font-medium text-gray-700">Message</label>
                    <textarea required id="contact-message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 outline-none transition-all bg-gray-50 focus:bg-white resize-none" placeholder="How can we help you?"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-navy hover:bg-royal-blue text-white py-4 rounded-xl font-semibold transition-colors shadow-lg shadow-navy/20 flex items-center justify-center gap-2 text-lg">
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
