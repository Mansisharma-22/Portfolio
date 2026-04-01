// Contact.jsx
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, User, MessageSquare } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/Mansisharma-22", color: "hover:text-foreground hover:border-foreground/40" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mansi-sharma-707413340/", color: "hover:text-blue-400 hover:border-blue-400/40" },
    { icon: Mail, label: "Email", href: "mailto:mansisharma22@gmail.com", color: "hover:text-primary hover:border-primary/40" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Environment variables se values lena
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );
      
      console.log('Email sent:', result.text);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // 5 seconds baad success message hide karein
      setTimeout(() => setStatus(''), 5000);
      
    } catch (error) {
      console.error('Email error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blob-purple" />
        <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full blob-pink" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            I&apos;m currently looking for new opportunities. Whether you have a
            question or just want to say hi, I&apos;ll do my best to get back to
            you!
          </p>

          {/* Contact Form - YAHAN FORM ADD HUA HAI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto mb-12"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-3 glass rounded-xl border border-primary/15 focus:border-primary/30 focus:outline-none transition-all text-foreground placeholder:text-muted-foreground/70"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full pl-10 pr-4 py-3 glass rounded-xl border border-primary/15 focus:border-primary/30 focus:outline-none transition-all text-foreground placeholder:text-muted-foreground/70"
                />
              </div>

              {/* Message Input */}
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Your Message"
                  className="w-full pl-10 pr-4 py-3 glass rounded-xl border border-primary/15 focus:border-primary/30 focus:outline-none transition-all text-foreground placeholder:text-muted-foreground/70"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 gradient-bg text-white rounded-xl font-medium shadow-glow text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/20 text-green-600 dark:text-green-400 px-4 py-3 rounded-xl border border-green-500/30"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/20 text-red-600 dark:text-red-400 px-4 py-3 rounded-xl border border-red-500/30"
                >
                  ✗ Failed to send. Please try again or email me directly.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Original "Say Hello" button - Isko hatana hai toh hata sakte hain */}
          {/* <motion.a
            href="mailto:john@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 gradient-bg text-white rounded-2xl font-medium shadow-glow text-lg mb-12"
          >
            <Send className="w-6 h-6" />
            Say Hello
          </motion.a> */}

          Social Links
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-4 mt-8"
          >
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`p-4 glass rounded-xl text-muted-foreground border border-primary/15 ${social.color} transition-all`}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;