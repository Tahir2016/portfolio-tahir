"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { contactData } from "@/data/contactData";

const labelClass =
  "mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground";

const fieldClass =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-[13px] text-foreground transition-colors duration-200 placeholder:text-muted-foreground/60 hover:border-accent/40 focus:border-accent/70";

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  autoComplete?: string;
  className?: string;
}

const Field = ({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
  className = "",
}: FieldProps) => (
  <div className={className}>
    <label htmlFor={`contact-${name}`} className={labelClass}>
      {label}
    </label>
    <input
      id={`contact-${name}`}
      name={name}
      type={type}
      required
      placeholder={placeholder}
      autoComplete={autoComplete}
      className={fieldClass}
    />
  </div>
);

const ContactFormPanel = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const mailSubject = subject || `New message from ${name}`;
    const mailBody = `${message}\n\n—\n${name}\n${email}`;

    setStatus("Opening your email app…");
    window.location.href = `mailto:${contactData.email}?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(mailBody)}`;
  };

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-white/85 p-4 shadow-lg backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:border-accent/45 dark:border-slate-800/50 dark:bg-[#0b101b]/90">
      {/* top accent line */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-accent/40 transition-colors duration-300 group-hover:bg-accent/70"
      />
      {/* The four "corner detailing" marks (border-l-t, border-r-t, border-b-l,
          border-b-r) are gone: the target design has no corner brackets, and the
          card's own rounded border is the frame. The top accent hairline stays. */}

      <h3 className="text-[1.2rem] font-semibold leading-tight tracking-tight text-foreground">
        Send a Message
      </h3>
      <p className="mt-1.5 text-[12.5px] leading-[1.6] text-muted-foreground">
        Have a project in mind or just want to say hello? Drop me a message.
      </p>

      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
        <Field
          label="Name"
          name="name"
          placeholder="Your name"
          autoComplete="name"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
        />
        <Field label="Subject" name="subject" placeholder="What is this about?" />

        <div>
          <label htmlFor="contact-message" className={labelClass}>
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            placeholder="Tell me about your project…"
            className={`${fieldClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-accent-foreground transition-[background-color,box-shadow,transform] duration-200 hover:bg-accent/85 hover:shadow-[0_0_20px_-4px_color-mix(in_srgb,var(--accent)_70%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-card active:scale-[0.98] active:shadow-none"
        >
          SEND A MESSAGE
          <Send
            aria-hidden
            className="size-4 transition-transform duration-200 group-hover/btn:translate-x-1"
          />
        </button>

        <p
          aria-live="polite"
          className="min-h-4 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-green/90"
        >
          {status}
        </p>
      </form>
    </article>
  );
};

export default ContactFormPanel;
