import React, { useState } from "react";
import { Send, MessageSquare, Mail, MapPin, Sparkles, Check, PhoneCall, Gift } from "lucide-react";

interface ContactProps {
  isDarkMode: boolean;
}

export default function Contact({ isDarkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Custom Bead Fitting Inquiries",
    message: ""
  });
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate sending message to Angela
    setIsSubmitSuccess(true);
    setTimeout(() => {
      setIsSubmitSuccess(false);
      setFormData({ name: "", email: "", subject: "Custom Bead Fitting Inquiries", message: "" });
    }, 6000);
  };

  const handleInstantWhatsApp = () => {
    const defaultText = `Hello Angela! I'm interested in discussing a potential project setup, database evaluation collaboration, or inquiring about custom Ghanaian waist beads. Let's connect!`;
    window.open(`https://wa.me/233500000000?text=${encodeURIComponent(defaultText)}`, "_blank");
  };

  const handleInstantEmail = () => {
    window.open(`mailto:kegzela4real.AM@gmail.com?subject=Portfolio Inquiry - Angela Ogechi Mba&body=Hello Angela!`, "_blank");
  };

  return (
    <section
      id="contact"
      className={`py-24 px-6 lg:px-8 border-t relative overflow-hidden ${
        isDarkMode ? "bg-stone-950 border-white/5" : "bg-white border-stone-100"
      }`}
    >
      {/* Background radial highlight */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gold-400/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-gold-400 mb-2 flex items-center justify-center gap-2">
            <span className="w-6 h-[1px] bg-emerald-600 dark:bg-gold-400" />
            Let's Collaborate
            <span className="w-6 h-[1px] bg-emerald-600 dark:bg-gold-400" />
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight mb-4">
            Connect With <span className="text-gradient-gold italic font-normal">Angela</span>
          </h2>
          <p className={`text-sm md:text-base leading-relaxed ${isDarkMode ? "text-stone-400" : "text-stone-600"}`}>
            Ready to integrate a high-precision remote Data Annotator or commission a gorgeous custom-fit collection of handmade African beads in Accra? Reach out today!
          </p>
        </div>

        {/* Contact Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Instant Access Metadata */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className={`text-xl font-serif font-bold ${isDarkMode ? "text-white" : "text-stone-950"}`}>
                Instant Consultations & Custom Fittings
              </h3>
              <p className={`text-xs md:text-sm leading-relaxed ${isDarkMode ? "text-stone-400" : "text-stone-600"}`}>
                I am actively accepting freelance annotation metrics audits, prompt engineering evaluations, and bespoke retail orders for authentic Krobo glass jewel sets.
              </p>
            </div>

            {/* Quick cards */}
            <div className="space-y-4">
              {/* Location Card */}
              <div className={`p-4 rounded-2xl border flex items-center gap-4 ${
                isDarkMode ? "bg-stone-900/40 border-white/5" : "bg-stone-50 border-stone-150"
              }`}>
                <div className="w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center text-gold-500 shrink-0">
                  <MapPin className="w-5 h-5 animate-bounce" />
                </div>
                <div>
                  <h4 className={`text-xs font-mono uppercase tracking-widest text-stone-500 font-bold`}>
                    My Creative Hub
                  </h4>
                  <p className={`text-sm font-semibold ${isDarkMode ? "text-stone-200" : "text-stone-800"}`}>
                    Accra, Ghana
                  </p>
                </div>
              </div>

              {/* Direct Mail Card */}
              <button
                onClick={handleInstantEmail}
                className={`w-full text-left p-4 rounded-2xl border flex items-center gap-4 transition-all duration-300 hover:scale-101 cursor-pointer ${
                  isDarkMode ? "bg-stone-900/40 border-white/5 hover:border-gold-400/20" : "bg-stone-50 border-stone-150 hover:border-gold-500/20"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`text-xs font-mono uppercase tracking-widest text-stone-500 font-bold`}>
                    Professional Email
                  </h4>
                  <p className={`text-sm font-semibold ${isDarkMode ? "text-stone-200" : "text-stone-800"}`}>
                    kegzela4real.AM@gmail.com
                  </p>
                </div>
              </button>

              {/* Whatsapp Trigger */}
              <button
                onClick={handleInstantWhatsApp}
                className={`w-full text-left p-4 rounded-2xl border flex items-center gap-4 transition-all duration-300 hover:scale-101 cursor-pointer ${
                  isDarkMode ? "bg-stone-900/40 border-white/5 hover:border-emerald-500/20" : "bg-stone-50 border-stone-150 hover:border-emerald-500/20"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-600 shrink-0">
                  <MessageSquare className="w-5 h-5 fill-emerald-600 text-transparent" />
                </div>
                <div>
                  <h4 className={`text-xs font-mono uppercase tracking-widest text-stone-500' font-bold`}>
                    Direct WhatsApp Chat
                  </h4>
                  <p className={`text-sm font-semibold text-[#22c55e]`}>
                    +233 (0) 50 000 0000
                  </p>
                </div>
              </button>
            </div>

            {/* Cultural Motto */}
            <div className={`p-4 rounded-xl border border-dashed border-stone-500/20 text-xs text-center flex items-center gap-2 ${
              isDarkMode ? "text-stone-400" : "text-stone-600"
            }`}>
              <Gift className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Bespoke gift boxes are hand-wrapped with biodegradable papers and a handwritten thank you note.</span>
            </div>
          </div>

          {/* Right Column: HTML Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 md:p-10 rounded-3xl border relative overflow-hidden ${
              isDarkMode
                ? "bg-stone-900/30 border-white/5 shadow-2xl"
                : "bg-stone-50 border-stone-200 shadow-lg"
            }`}>
              
              {/* Overlay success check dialog */}
              {isSubmitSuccess && (
                <div className="absolute inset-0 bg-stone-950/95 backdrop-blur-sm z-15 flex flex-col justify-center items-center text-center p-6 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500 flex items-center justify-center text-[#22c55e] mb-4">
                    <Check className="w-6 h-6 animate-pulse" />
                  </div>
                  <h3 className="font-serif font-black text-xl text-white">Message Dispatched!</h3>
                  <p className="text-stone-300 text-xs max-w-md mt-2 leading-relaxed">
                    Thank you, <span className="text-gold-400 font-bold">{formData.name}</span>! Your request concerning &ldquo;{formData.subject}&rdquo; has been sent securely. Angela will reach back inside 24 hours. Akwaaba!
                  </p>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-6 animate-pulse">
                    Self-destructing dialog...
                  </span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-5">
                {/* Form fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className={`block text-xs font-mono uppercase tracking-wider ${isDarkMode ? "text-stone-400" : "text-stone-500"}`}>
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="e.g. Abena Mensah"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-sans focus:outline-none focus:ring-1 transition-all ${
                        isDarkMode
                          ? "bg-stone-950 border-white/5 text-stone-100 focus:border-gold-400 focus:ring-gold-400"
                          : "bg-white border-stone-200 text-stone-900 focus:border-gold-500 focus:ring-gold-500"
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className={`block text-xs font-mono uppercase tracking-wider ${isDarkMode ? "text-stone-400" : "text-stone-500"}`}>
                      Your Email *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="e.g. abena@enterprise.gh"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-sans focus:outline-none focus:ring-1 transition-all ${
                        isDarkMode
                          ? "bg-stone-950 border-white/5 text-stone-100 focus:border-gold-400 focus:ring-gold-400"
                          : "bg-white border-stone-200 text-stone-900 focus:border-gold-500 focus:ring-gold-500"
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className={`block text-xs font-mono uppercase tracking-wider ${isDarkMode ? "text-stone-400" : "text-stone-500"}`}>
                    Category / Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-sans focus:outline-none focus:ring-1 transition-all ${
                      isDarkMode
                        ? "bg-stone-950 border-white/5 text-stone-100 focus:border-gold-400 focus:ring-gold-400"
                        : "bg-white border-stone-200 text-stone-900 focus:border-gold-500 focus:ring-gold-500"
                    }`}
                  >
                    <option value="Custom Bead Fitting Inquiries">Custom Bead Fitting Inquiries</option>
                    <option value="Freelance Data Annotation Contract">Freelance Data Annotation Contract</option>
                    <option value="AI Training & Preference Sprints">AI Training & Preference Sprints</option>
                    <option value="Wholesale Bead Orders inside Ghana">Wholesale Bead Orders inside Ghana</option>
                    <option value="Collaborative Creative Workshops">Collaborative Creative Workshops</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className={`block text-xs font-mono uppercase tracking-wider ${isDarkMode ? "text-stone-400" : "text-stone-500"}`}>
                    Detailed Message Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    placeholder="Write details of your ideal project requirements, materials, sizing, or contract schedules..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-sans focus:outline-none focus:ring-1 transition-all resize-none ${
                      isDarkMode
                        ? "bg-stone-950 border-white/5 text-stone-100 focus:border-gold-400 focus:ring-gold-400"
                        : "bg-white border-stone-200 text-stone-900 focus:border-gold-500 focus:ring-gold-500"
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 to-amber-700 hover:shadow-[0_0_20px_-5px_rgba(185,118,36,0.3)] text-stone-950 font-sans font-extrabold text-sm tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Transmit Message To Accra
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
