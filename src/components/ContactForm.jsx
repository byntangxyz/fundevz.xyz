"use client";

import { useState } from "react";
import {
  Send,
  Loader2,
  CheckCircle,
  XCircle,
  User,
  Mail,
  MessageSquare,
} from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [focusedField, setFocusedField] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Failed to send message");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="relative">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-500/5 to-transparent rounded-3xl blur-3xl -z-10" />

      <form
        onSubmit={handleSubmit}
        className="space-y-4 md:space-y-6 relative bg-secondary/30 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-border/50 shadow-xl"
      >
        {/* Name Input */}
        <div className="group">
          <label
            htmlFor="name"
            className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
              focusedField === "name" ? "text-primary" : "text-foreground"
            }`}
          >
            Name
          </label>
          <div className="relative">
            <User
              className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                focusedField === "name"
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            />
            <input
              type="text"
              id="name"
              name="name"
              required
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField("")}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground hover:border-primary/50"
              placeholder="John Doe"
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="group">
          <label
            htmlFor="email"
            className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
              focusedField === "email" ? "text-primary" : "text-foreground"
            }`}
          >
            Email
          </label>
          <div className="relative">
            <Mail
              className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                focusedField === "email"
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            />
            <input
              type="email"
              id="email"
              name="email"
              required
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField("")}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground hover:border-primary/50"
              placeholder="john@example.com"
            />
          </div>
        </div>

        {/* Message Textarea */}
        <div className="group">
          <label
            htmlFor="message"
            className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
              focusedField === "message" ? "text-primary" : "text-foreground"
            }`}
          >
            Message
          </label>
          <div className="relative">
            <MessageSquare
              className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${
                focusedField === "message"
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            />
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField("")}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-none text-foreground placeholder:text-muted-foreground hover:border-primary/50"
              placeholder="Tell me about your project..."
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="group w-full px-6 py-4 rounded-xl bg-gradient-to-r from-primary to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none flex items-center justify-center gap-3 relative overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative flex items-center gap-3">
            {status === "loading" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Send Message</span>
              </>
            )}
          </span>
        </button>

        {/* Status Messages */}
        {status === "success" && (
          <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 text-green-600 dark:text-green-400 animate-in slide-in-from-bottom duration-500">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">Success!</p>
              <p className="text-xs opacity-90">
                Your message has been sent. I'll get back to you soon!
              </p>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-red-500/10 to-rose-500/10 border border-red-500/30 text-red-600 dark:text-red-400 animate-in slide-in-from-bottom duration-500">
            <XCircle className="w-5 h-5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">Error!</p>
              <p className="text-xs opacity-90">{errorMessage}</p>
            </div>
          </div>
        )}
      </form>

      {/* Bottom decorative element */}
      <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </div>
  );
}
