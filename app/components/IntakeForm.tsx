"use client";

import { FormEvent, useState } from "react";

type IntakeFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContact: "phone" | "email";
  insuranceCarrier: string;
  coverageNotes: string;
  supportFocus: string;
  notes: string;
};

const defaultValues: IntakeFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  preferredContact: "phone",
  insuranceCarrier: "",
  coverageNotes: "",
  supportFocus: "",
  notes: "",
};

type SubmissionStatus = "idle" | "sending" | "success" | "error";

export function IntakeForm() {
  const [values, setValues] = useState<IntakeFormValues>(defaultValues);
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [message, setMessage] = useState("");

  const updateField = (field: keyof IntakeFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/intake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setValues(defaultValues);
      setStatus("success");
      setMessage("We received your intake. A guide will reach out shortly.");
    } catch (error) {
      setStatus("error");
      setMessage("We could not process that submission. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-3xl border border-white/15 bg-white/5 p-6 text-white shadow-[-10px_-10px_60px_rgba(8,20,24,0.4)] backdrop-blur"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
          <span>First name *</span>
          <input
            type="text"
            name="firstName"
            required
            value={values.firstName}
            onChange={(event) => updateField("firstName", event.target.value)}
            className="rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-base font-normal normal-case text-[#0f2f38] focus:border-[#f7c99b] focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
          <span>Last name *</span>
          <input
            type="text"
            name="lastName"
            required
            value={values.lastName}
            onChange={(event) => updateField("lastName", event.target.value)}
            className="rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-base font-normal normal-case text-[#0f2f38] focus:border-[#f7c99b] focus:outline-none"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
          <span>Email *</span>
          <input
            type="email"
            name="email"
            required
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-base font-normal normal-case text-[#0f2f38] focus:border-[#f7c99b] focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
          <span>Phone *</span>
          <input
            type="tel"
            name="phone"
            required
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-base font-normal normal-case text-[#0f2f38] focus:border-[#f7c99b] focus:outline-none"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
          <span>Preferred contact method *</span>
          <select
            name="preferredContact"
            value={values.preferredContact}
            onChange={(event) =>
              updateField("preferredContact", event.target.value as IntakeFormValues["preferredContact"])
            }
            className="rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-base font-normal normal-case text-[#0f2f38] focus:border-[#f7c99b] focus:outline-none"
          >
            <option value="phone">Phone call</option>
            <option value="email">Email response</option>
          </select>
        </label>
        <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
          <span>Insurance carrier</span>
          <input
            type="text"
            name="insuranceCarrier"
            value={values.insuranceCarrier}
            onChange={(event) => updateField("insuranceCarrier", event.target.value)}
            className="rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-base font-normal normal-case text-[#0f2f38] focus:border-[#f7c99b] focus:outline-none"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
        <span>Insurance / coverage notes</span>
        <textarea
          name="coverageNotes"
          rows={3}
          value={values.coverageNotes}
          onChange={(event) => updateField("coverageNotes", event.target.value)}
          className="rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-base font-normal normal-case text-[#0f2f38] focus:border-[#f7c99b] focus:outline-none"
        />
      </label>

      <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
        <span>Primary support focus *</span>
        <select
          name="supportFocus"
          required
          value={values.supportFocus}
          onChange={(event) => updateField("supportFocus", event.target.value)}
          className="rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-base font-normal normal-case text-[#0f2f38] focus:border-[#f7c99b] focus:outline-none"
        >
          <option value="">Select one</option>
          <option value="detox-support">Detox or stabilization</option>
          <option value="dual-diagnosis">Dual-diagnosis treatment</option>
          <option value="trauma-therapy">Trauma & process groups</option>
          <option value="family-support">Family support</option>
          <option value="aftercare">Aftercare planning</option>
          <option value="other">Something else</option>
        </select>
      </label>

      <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
        <span>What should we know?</span>
        <textarea
          name="notes"
          rows={4}
          value={values.notes}
          onChange={(event) => updateField("notes", event.target.value)}
          className="rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-base font-normal normal-case text-[#0f2f38] focus:border-[#f7c99b] focus:outline-none"
        />
      </label>

      <div className="flex flex-col gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-full bg-[#f7c99b] px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#1b2e35] transition hover:bg-[#f9d9b8] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? "Submitting..." : "Send Intake"}
        </button>
        {message && (
          <p
            className={`text-sm ${
              status === "success" ? "text-[#b9f4d3]" : status === "error" ? "text-[#ffb3b3]" : "text-white"
            }`}
            role="status"
            aria-live="polite"
          >
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
