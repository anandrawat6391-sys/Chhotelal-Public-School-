import { GraduationCap, Facebook, Youtube, Instagram } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t-4 border-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group cursor-pointer w-max">
              <div className="w-10 h-10 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img src="/assets/logo.jpg" alt="Chhotelal Public School Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-bold font-display text-white tracking-tight">
                Chhotelal
              </span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Empowering students to discover their passion, build character, and achieve academic excellence in a supportive community.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61587628715667" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@chhotelalschoolpadari?si=VBBb51epMurfWVsG" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/chhotelalpublicjuniorschoolbst?igsh=MWY1dDJwdXI2NnlhZw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-display">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#academics" className="hover:text-secondary transition-colors">Academics</a></li>
              <li><a href="#admissions" className="hover:text-secondary transition-colors">Admissions</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">School Calendar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-display">Programs</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-secondary transition-colors">Early Years</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Primary Education</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Middle School</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">High School</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Extracurriculars</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-display">Newsletter</h4>
            <p className="text-slate-400 mb-4">Subscribe to receive updates, news, and school highlights.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors"
              />
              <button className="bg-primary text-white font-semibold rounded-lg px-4 py-3 hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Chhotelal Public School. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
