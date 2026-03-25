import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, Facebook, Twitter, Instagram } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thank you! Your message has been sent successfully.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in-up">
      <div className="text-center space-y-4 mb-20 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
          Let’s Start a <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-500">Conversation</span>
        </h1>
        <p className="text-lg text-gray-600">
          Have a question about our products, delivery, or sustainability practices? Our dedicated team is here to help you every step of the way.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Contact Information Column */}
        <div className="lg:col-span-1 space-y-8 animate-zoom-in">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <MessageSquare className="text-green-600" />
              Contact Details
            </h2>
            
            <div className="space-y-6">
              <ContactInfo 
                icon={<Mail className="w-5 h-5" />}
                label="Email Our Team"
                value="support@myshop.com"
                subValue="Response in under 2h"
              />
              <ContactInfo 
                icon={<Phone className="w-5 h-5" />}
                label="Give Us a Call"
                value="+91 6380644509"
                subValue="Mon - Sat, 9am - 6pm"
              />
              <ContactInfo 
                icon={<MapPin className="w-5 h-5" />}
                label="Visit Our Hub"
                value="123 Fresh Market Street"
                subValue="Coimbatore, Tamil Nadu"
              />
            </div>

            <div className="pt-8 border-t border-slate-100 space-y-4">
               <div className="flex items-center gap-3 text-sm text-gray-500 font-medium italic">
                 <Clock className="w-4 h-4 text-emerald-500" />
                 "Quality is not just a promise, it's our heritage."
               </div>
            </div>
          </div>

          {/* Social Presence Card */}
          <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white overflow-hidden relative group">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10 space-y-4 text-center">
              <Globe className="w-10 h-10 text-green-400 mx-auto animate-pulse" />
              <h3 className="text-xl font-bold">Follow Our Fresh Story</h3>
              <p className="text-slate-400 text-sm">Join 10k+ people getting daily organic tips and exclusive offers.</p>
              <div className="flex justify-center gap-4 pt-4">
                <button className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition duration-300"><Facebook className="w-5 h-5" /></button>
                <button className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition duration-300"><Twitter className="w-5 h-5" /></button>
                <button className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition duration-300"><Instagram className="w-5 h-5" /></button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl shadow-slate-200/30 border border-white">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="text-sm font-bold text-gray-700 ml-1">Your Full Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe" 
                required
                className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-300 outline-none placeholder:text-gray-400"
              />
            </div>
            <div className="space-y-4">
              <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com" 
                required
                className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-300 outline-none placeholder:text-gray-400"
              />
            </div>
            <div className="sm:col-span-2 space-y-4">
              <label className="text-sm font-bold text-gray-700 ml-1">Inquiry Subject</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help you?" 
                required
                className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-300 outline-none placeholder:text-gray-400"
              />
            </div>
            <div className="sm:col-span-2 space-y-4">
              <label className="text-sm font-bold text-gray-700 ml-1">Your Message</label>
              <textarea 
                rows="6" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..." 
                required
                className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-300 outline-none resize-none placeholder:text-gray-400"
              ></textarea>
            </div>
            <div className="sm:col-span-2 pt-4">
              <button 
                type="submit" 
                className="w-full sm:w-auto px-10 py-5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-green-600/20 active:scale-[0.98]"
              >
                Send Your Message <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Trust Badges - Map Replacement */}
      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
        <TrustBadge label="24/7 Support" detail="Live Chat assistance anytime" />
        <TrustBadge label="Safe Logistics" detail="Contactless & sterile delivery" />
        <TrustBadge label="Direct Sourcing" detail="Straight from farmers" />
        <TrustBadge label="Easy Returns" detail="30-day hassle-free process" />
      </div>
    </div>
  );
};

const ContactInfo = ({ icon, label, value, subValue }) => (
  <div className="flex gap-5 group">
    <div className="p-4 bg-green-50 text-green-600 rounded-2xl group-hover:bg-green-600 group-hover:text-white transition-all duration-500 shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{label}</p>
      <p className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">{value}</p>
      <p className="text-xs text-gray-500 mt-1">{subValue}</p>
    </div>
  </div>
);

const TrustBadge = ({ label, detail }) => (
  <div className="p-8 border-2 border-slate-50 rounded-3xl text-center hover:border-green-100 transition-colors duration-300">
    <h4 className="text-lg font-bold text-gray-900">{label}</h4>
    <p className="text-sm text-gray-500 mt-2 leading-relaxed">{detail}</p>
  </div>
);

export default Contact;

