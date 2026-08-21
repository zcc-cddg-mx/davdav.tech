"use client";

import { useState, useRef } from "react";
import Button from "@/components/ui/Button";

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.message.trim()) errors.message = "Message is required.";
  else if (data.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters.";
  return errors;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [state, setState] = useState<FormState>("idle");
  const honeypotRef = useRef<HTMLInputElement>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setState("loading");

    try {
      const payload = new FormData();
      payload.append("name", formData.name.trim());
      payload.append("email", formData.email.trim());
      payload.append("company", formData.company.trim());
      payload.append("message", formData.message.trim());
      payload.append("_honeypot", honeypotRef.current?.value ?? "");

      const res = await fetch("/contact.php", {
        method: "POST",
        body: payload,
      });

      if (res.ok) {
        setState("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-6 h-6 text-emerald-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
          Message sent successfully
        </h3>
        <p className="text-sm text-[var(--muted)]">
          Thank you for reaching out. I&apos;ll get back to you within 1–2 business days.
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-6 text-sm text-[var(--color-primary)] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot — hidden from real users */}
      <div aria-hidden="true" className="hidden">
        <input
          ref={honeypotRef}
          type="text"
          name="_honeypot"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[var(--foreground)] mb-1.5"
          >
            Name <span className="text-[var(--color-primary)]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={`w-full rounded-lg border bg-[var(--card)] px-3.5 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] outline-none transition-colors focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 ${
              errors.name
                ? "border-red-500/60"
                : "border-[var(--border)]"
            }`}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[var(--foreground)] mb-1.5"
          >
            Email <span className="text-[var(--color-primary)]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className={`w-full rounded-lg border bg-[var(--card)] px-3.5 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] outline-none transition-colors focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 ${
              errors.email
                ? "border-red-500/60"
                : "border-[var(--border)]"
            }`}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Company */}
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-[var(--foreground)] mb-1.5"
        >
          Company{" "}
          <span className="text-[var(--muted)] font-normal">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your organization"
          className="w-full rounded-lg border border-[var(--border)] bg-[var(--card)] px-3.5 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] outline-none transition-colors focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[var(--foreground)] mb-1.5"
        >
          Message <span className="text-[var(--color-primary)]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me how I can help..."
          className={`w-full rounded-lg border bg-[var(--card)] px-3.5 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] outline-none transition-colors resize-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 ${
            errors.message
              ? "border-red-500/60"
              : "border-[var(--border)]"
          }`}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      {/* Error banner */}
      {state === "error" && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-500">
          Something went wrong sending your message. Please try again or email
          me directly at{" "}
          <a
            href="mailto:david.duarte@davdav.tech"
            className="underline underline-offset-2"
          >
            david.duarte@davdav.tech
          </a>
          .
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="md"
        disabled={state === "loading"}
        className="w-full sm:w-auto"
      >
        {state === "loading" ? (
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            Sending…
          </span>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
