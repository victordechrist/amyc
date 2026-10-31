"use client";

import React, { useState } from "react";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Select } from "./Select";
import { SubmitButton } from "./SubmitButton";
import { CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please select a inquiry topic.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message content is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate client-side validation and submit response delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    }, 800);
  };

  const subjectOptions = [
    { value: "general", label: "General Inquiry" },
    { value: "admissions", label: "Program Admissions & Bootcamps" },
    { value: "mentorship", label: "Mentorship Opportunities" },
    { value: "partnership", label: "Corporate Partnership / Hiring" },
    { value: "donation", label: "Donations & Sponsorship" },
  ];

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
          <AlertCircle className="h-3.5 w-3.5" />
          <span>Form Demo (Backend Not Connected Yet)</span>
        </div>
        <h3 className="mt-3 font-heading text-xl font-bold text-foreground">
          Send Us a Message
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Fill out the form below and our team will get back to you within 1-2
          business days.
        </p>
      </div>

      {isSuccess && (
        <div className="mb-6 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-800 dark:text-emerald-200">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <div>
              <h4 className="text-sm font-semibold">
                Message Submitted (Simulated)
              </h4>
              <p className="mt-1 text-xs leading-relaxed opacity-90">
                Thank you for reaching out! Client-side validation succeeded.
                Note: Backend API connection will be activated in a future
                release.
              </p>
              <button
                type="button"
                onClick={() => setIsSuccess(false)}
                className="mt-2 text-xs font-semibold underline hover:no-underline"
              >
                Send another message
              </button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <Input
          label="Full Name"
          name="name"
          placeholder="e.g. Alex Johnson"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          error={errors.name}
          required
        />

        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="alex@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={errors.email}
          required
        />

        <Select
          label="Inquiry Topic"
          name="subject"
          options={subjectOptions}
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          error={errors.subject}
          required
        />

        <Textarea
          label="Message"
          name="message"
          placeholder="How can we help you or how would you like to collaborate?"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          error={errors.message}
          required
        />

        <div className="pt-2">
          <SubmitButton
            isLoading={isSubmitting}
            loadingText="Sending Message..."
            className="w-full sm:w-auto"
          >
            Submit Message
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
