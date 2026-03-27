import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Download, Loader2 } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSendEmail = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((response) => {
        console.log('EmailJS Success:', response);
        setStatus('success');
        formRef.current?.reset();
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Feel free to reach out. I'm always open to new opportunities and collaborations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8 lg:col-span-1"
        >
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">hoantt0712@gmail.com</p>
              </div>
            </div>

            {/* <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400"></p>
              </div>
            </div> */}

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">GitHub</h3>
                <a href="https://github.com/TiepHoang07" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors underline cursor-pointer">https://github.com/TiepHoang07</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">Praha, Czech Republic</p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-primary rounded-2xl text-white dark:text-black">
            <p className="text-xl text-black font-bold mb-4">Want to see my full CV?</p>
            <p className="text-sm opacity-90 mb-6">
              Download my detailed resume to learn more about my experience and technical background.
            </p>
            <a
              onClick={() => alert("CV is not ready yet, please contact me directly")}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-black text-black dark:text-white rounded-xl font-bold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <Download className="w-5 h-5" /> Download CV
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <form
            ref={formRef}
            onSubmit={handleSendEmail}
            className="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold ml-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold ml-1">Subject</label>
              <input
                type="text"
                name="subject"
                required
                placeholder="How can I help you?"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold ml-1">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status !== 'idle'}
              className="w-full btn-primary py-4 rounded-xl flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              {status !== 'sending' && (
                <>
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
              {status === 'sending' && (
                <>
                  Sending...
                  <Loader2 className="w-5 h-5 animate-spin" />
                </>
              )}
            </button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-green-600 dark:text-green-400 font-medium text-sm"
              >
                Thank you for your message, I will get back to you as soon as possible.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-red-600 dark:text-red-400 font-medium text-sm"
              >
                Something went wrong. Please try again or email me directly.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};
