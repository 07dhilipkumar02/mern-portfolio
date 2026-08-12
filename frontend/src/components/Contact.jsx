import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Send } from "lucide-react";
import { sendContactMessage } from "../api.js";

export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", text: "" });

  if (!profile) return null;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", text: "" });
    try {
      await sendContactMessage(form);
      setStatus({ state: "success", text: "Message sent successfully!" });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        state: "error",
        text: err.response?.data?.message || "Something went wrong. Try again.",
      });
    }
  };

  const info = [
    { Icon: Mail, label: "Email", value: profile.contact?.email },
    { Icon: Phone, label: "Phone", value: profile.contact?.phone },
    { Icon: MapPin, label: "Location", value: profile.contact?.location },
    { Icon: Github, label: "GitHub", value: profile.contact?.github },
    { Icon: Linkedin, label: "LinkedIn", value: profile.contact?.linkedin },
    { Icon: Globe, label: "Portfolio", value: profile.contact?.portfolio },
  ];

  return (
    <section id="contact" className="section-container py-16">
      <div className="flex items-center gap-2 text-primary mb-2">
        <Mail size={18} /> <span className="text-sm font-medium">Get In Touch</span>
      </div>
      <h2 className="text-3xl font-bold mb-2">Let's Work Together!</h2>
      <p className="text-gray-400 mb-8">
        I'm currently open to new opportunities. Let's build something amazing!
      </p>

      <div className="grid md:grid-cols-[1fr_1.4fr] gap-8">
        <form
          onSubmit={handleSubmit}
          className="bg-panel border border-border rounded-2xl p-6 flex flex-col gap-4"
        >
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-bg border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary"
          />
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="bg-bg border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary"
          />
          <textarea
            required
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            className="bg-bg border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none"
          />
          <button
            type="submit"
            disabled={status.state === "loading"}
            className="inline-flex items-center justify-center gap-2 bg-primary text-black font-medium rounded-md px-5 py-3 hover:bg-primaryDark transition-colors disabled:opacity-60"
          >
            <Send size={16} /> {status.state === "loading" ? "Sending..." : "Send Message"}
          </button>
          {status.text && (
            <p className={`text-sm ${status.state === "error" ? "text-red-400" : "text-primary"}`}>
              {status.text}
            </p>
          )}
        </form>

        <div className="grid sm:grid-cols-2 gap-4 content-start">
          {info.map(({ Icon, label, value }) => (
            <div key={label} className="bg-panel border border-border rounded-xl p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0">
                <Icon size={16} />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-500">{label}</p>
                <p className="text-sm text-gray-200 truncate">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
