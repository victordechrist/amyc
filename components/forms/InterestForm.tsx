"use client";

import React, { useState } from "react";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Select } from "./Select";
import { SubmitButton } from "./SubmitButton";
import { SKILL_TRACKS } from "@/lib/data/tracks";
import { CheckCircle2, Info } from "lucide-react";

export interface InterestFormProps {
  defaultRole?: string;
  defaultTrack?: string;
  title?: string;
  subtitle?: string;
}

export function InterestForm({
  defaultRole = "student",
  defaultTrack = "",
  title = "Registration & Interest Form",
  subtitle = "Register your interest in upcoming bootcamps, mentorship programs, or partnership opportunities.",
}: InterestFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: defaultRole,
    preferredTrack: defaultTrack,
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

    if (!formData.role) {
      newErrors.role = "Please select how you want to get involved.";
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
      setFormData({
        name: "",
        email: "",
        role: defaultRole,
        preferredTrack: defaultTrack,
        message: "",
      });
      setErrors({});
    }, 800);
  };

  const roleOptions = [
    { value: "student", label: "Student / Learner (Apply for Bootcamp)" },
    { value: "mentor", label: "Industry Mentor (Volunteer)" },
    { value: "partner", label: "Corporate Partner / Employer" },
    { value: "donor", label: "Donor / Sponsor" },
  ];

  const trackOptions = SKILL_TRACKS.map((track) => ({
    value: track.slug,
    label: track.title,
  }));

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
          <Info className="h-3.5 w-3.5" />
          <span>Interactive Registration Stub</span>
        </div>
        <h3 className="mt-3 font-heading text-xl font-bold text-foreground">
          {title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      </div>

      {isSuccess && (
        <div className="mb-6 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-800 dark:text-emerald-200">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <div>
              <h4 className="text-sm font-semibold">
                Interest Registered (Simulated)
              </h4>
              <p className="mt-1 text-xs leading-relaxed opacity-90">
                Your details have been validated client-side! Note: Backend
                storage and email notifications will be connected in an upcoming
                phase.
              </p>
              <button
                type="button"
                onClick={() => setIsSuccess(false)}
                className="mt-2 text-xs font-semibold underline hover:no-underline"
              >
                Submit another application
              </button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input
            label="Full Name"
            name="name"
            placeholder="e.g. Jordan Smith"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            error={errors.name}
            required
          />

          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="jordan@example.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            error={errors.email}
            required
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Select
            label="I Want to Get Involved As"
            name="role"
            options={roleOptions}
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            error={errors.role}
            required
          />

          <Select
            label="Preferred Skill Track (Optional)"
            name="preferredTrack"
            options={trackOptions}
            placeholder="Select a track (optional)"
            value={formData.preferredTrack}
            onChange={(e) =>
              setFormData({ ...formData, preferredTrack: e.target.value })
            }
          />
        </div>

        <Textarea
          label="Additional Background / Notes"
          name="message"
          placeholder="Tell us briefly about your background, goals, or questions."
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          error={errors.message}
        />

        <div className="pt-2">
          <SubmitButton
            isLoading={isSubmitting}
            loadingText="Registering..."
            className="w-full sm:w-auto"
          >
            Submit Application / Interest
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
