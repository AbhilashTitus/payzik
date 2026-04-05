"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Hammer, CircleDot, Clock, ShieldCheck, Mail } from "lucide-react";

export default function MaintenanceMode() {
  return (
    <main className="min-h-screen w-full bg-[#030712] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[160px]" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[160px]" 
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 flex flex-col items-center max-w-3xl w-full text-center space-y-12"
      >
        <motion.div
           initial={{ scale: 0.9, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ delay: 0.2, duration: 0.5 }}
           className="relative group cursor-default"
        >
          <div className="absolute -inset-4 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <Image
            src="/assets/payzik-logo.svg"
            alt="Payzik Logo"
            width={200}
            height={54}
            className="h-14 w-auto relative"
            priority
          />
        </motion.div>

        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wide uppercase"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            System Optimisation
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.1] px-4">
            Forging the next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400">
              level of payments
            </span>
          </h1>
          
          <p className="text-slate-400 text-xl max-w-xl mx-auto leading-relaxed font-light">
            We are currently updating our infrastructure to provide a more robust and resilient payment orchestration layer.
          </p>
        </div>

        {/* <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl px-4"
        >
          {[
            { icon: Clock, label: "Expected Downtime", value: "≈ 45 Minutes" },
            { icon: ShieldCheck, label: "System Integrity", value: "Secure" },
            { icon: CircleDot, label: "Current Status", value: "Updating" },
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md flex flex-col items-center gap-3 transition-all hover:bg-white/[0.05] hover:border-white/20">
              <item.icon className="w-6 h-6 text-blue-400" />
              <div className="flex flex-col">
                <span className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold">{item.label}</span>
                <span className="text-white text-lg font-medium">{item.value}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="pt-12 flex flex-col items-center gap-8"
        >
          <div className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
            <Mail className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
            <a href="mailto:support@payzik.com" className="text-slate-400 group-hover:text-white transition-colors text-sm font-medium">
              Get notified when we&apos;re back
            </a>
          </div>
          
          <div className="flex items-center gap-4">
             {[1, 2, 3].map((i) => (
               <motion.div 
                 key={i}
                 animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
                 transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                 className="w-1.5 h-1.5 rounded-full bg-blue-500/50" 
               />
             ))}
          </div>
        </motion.div> */}
      </motion.div>
      
      <footer className="absolute bottom-10 flex flex-col items-center gap-2">
        <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.3em]">
          &copy; {new Date().getFullYear()} Payzik Engineering
        </p>
      </footer>
    </main>
  );
}
