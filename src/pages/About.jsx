import React from "react";
import { assets } from "../assets/assets";
import { Truck, ShieldCheck, Heart, Clock, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24 animate-fade-in-up">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-10 sm:gap-12 lg:gap-20">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-50 text-green-600 text-sm font-medium border border-green-100">
            About MyShop
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight font-display">
            Our Journey of Bringing <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-500">Freshness</span> to Your Doorstep
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-green-500 pl-6 py-2">
            "We believe that everyone deserves easy access to high-quality, organic, and ethically sourced food. Our mission is to bridge the gap between local farmers and your kitchen."
          </p>
          <div className="pt-4 grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">10k+</div>
              <div className="text-sm text-gray-500 mt-1">Happy Customers</div>
            </div>
            <div className="text-center border-x border-gray-100">
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-500 mt-1">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-500 mt-1">Delivery Support</div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative mt-8 md:mt-0 px-4 sm:px-0">
          <div className="absolute -top-10 -right-4 sm:-right-10 w-32 sm:w-48 h-32 sm:h-48 bg-green-50 rounded-full blur-3xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-4 sm:-left-10 w-32 sm:w-48 h-32 sm:h-48 bg-emerald-100 rounded-full blur-3xl opacity-70 animate-pulse"></div>
          <div className="relative rounded-4xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20 transform hover:scale-[1.02] transition-transform duration-500 animate-zoom-in">
            <img 
              src={assets.about} 
              alt="Fresh Produce" 
              className="w-full h-auto object-cover aspect-4/3 sm:aspect-auto"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-slate-50 -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-16 lg:px-16 py-20 rounded-[3rem]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">
              Why We Stand Out
            </h2>
            <p className="text-gray-600 uppercase tracking-widest font-medium text-sm">
              Our Core Commitments to You
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              icon={<ShieldCheck className="w-8 h-8 text-green-600" />}
              title="Uncompromising Quality"
              description="Every product in our catalog undergoes rigorous quality checks to ensure you receive only the best."
            />
            <ValueCard 
              icon={<Truck className="w-8 h-8 text-emerald-600" />}
              title="Lightning Fast Hub"
              description="Our optimized logistics network ensures your groceries arrive within hours of being harvested."
            />
            <ValueCard 
              icon={<Heart className="w-8 h-8 text-pink-500" />}
              title="Ethically Sourced"
              description="We partner directly with farmers who practice sustainable and animal-friendly farming methods."
            />
            <ValueCard 
              icon={<Award className="w-8 h-8 text-amber-500" />}
              title="Price Guarantee"
              description="Bringing you the highest quality products at competitive prices you won't find anywhere else."
            />
          </div>
        </div>
      </section>

      {/* Our Story Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 order-2 md:order-1">
          <div className="space-y-4 mt-8">
            <div className="bg-green-600 h-64 rounded-2xl overflow-hidden shadow-lg transform translate-y-4">
               <img src={assets.img12} alt="" className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition duration-500" />
            </div>
            <div className="bg-gray-200 h-48 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
               <img src={assets.img17} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-100 h-48 rounded-2xl overflow-hidden shadow-lg">
               <img src={assets.img5} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="bg-emerald-500 h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
               <img src={assets.img19} alt="" className="w-full h-full object-cover grayscale-30 hover:grayscale-0 transition duration-500" />
            </div>
          </div>
        </div>
        
        <div className="space-y-6 sm:space-y-8 order-1 md:order-2">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-green-600 font-bold uppercase tracking-wider text-sm flex items-center justify-center md:justify-start gap-2">
              <span className="w-8 h-[2px] bg-green-600"></span>
              The Beginning
            </h3>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-display">It All Started with a Simple Idea.</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              MyShop was born out of a desire for simplicity in a complicated world. We saw a disconnect between the bounty of nature and the urban consumer. We wanted to make sure that the freshness of the farm was just a click away.
            </p>
          </div>

          <div className="space-y-6">
            <StoryFeature 
              icon={<Users className="w-5 h-5" />}
              title="Community Driven"
              text="Supporting over 200 local families and small-scale farmers in the region."
            />
            <StoryFeature 
              icon={<Clock className="w-5 h-5" />}
              title="Time-Saving"
              text="Reducing the average grocery shopping time by 80% for our busy customers."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gray-900 rounded-[3rem] px-8 py-16 sm:px-16 sm:py-24 text-center">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative">
          <h2 className="text-3xl font-bold text-white tracking-tight sm:text-5xl">
            Want to Be a Part of Our Story?
          </h2>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Join thousands of happy customers who have already discovered the secret to a healthier and fresher lifestyle.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <button className="px-8 py-4 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition-all shadow-xl shadow-green-600/20 active:scale-95">
              Start Shopping Now
            </button>
            <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition-all backdrop-blur-md border border-white/10 active:scale-95">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ValueCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
    <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

const StoryFeature = ({ icon, title, text }) => (
  <div className="flex gap-4 items-start group">
    <div className="mt-1 p-2 bg-green-50 text-green-600 rounded-lg group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-bold text-gray-900 mb-1">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
    </div>
  </div>
);

export default About;