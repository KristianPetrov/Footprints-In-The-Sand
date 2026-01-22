"use client";

import { FormEvent, useState } from "react";

type InsuranceCarrierOption =
  | ""
  | "Blue Shield of California"
  | "Blue Cross Blue Shield"
  | "Anthem Blue Cross"
  | "HMSA (Hawaii Medical Service Association)"
  | "Aetna"
  | "Magellan Health"
  | "Cigna"
  | "Health Net"
  | "UnitedHealthcare"
  | "Centene Corporation"
  | "Other";

type IntakeFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  insuranceCarrierChoice: InsuranceCarrierOption;
  insuranceCarrierOther: string;
  coverageNotes: string;
};

const defaultValues: IntakeFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  insuranceCarrierChoice: "",
  insuranceCarrierOther: "",
  coverageNotes: "",
};

type SubmissionStatus = "idle" | "sending" | "success" | "error";

export function IntakeForm ()
{
  const [values, setValues] = useState<IntakeFormValues>(defaultValues);
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [message, setMessage] = useState("");

  const updateField = (field: keyof IntakeFormValues, value: string) =>
  {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) =>
  {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    try {
      const insuranceCarrier =
        values.insuranceCarrierChoice === "Other"
          ? values.insuranceCarrierOther.trim()
          : values.insuranceCarrierChoice;

      const payload = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        dateOfBirth: values.dateOfBirth,
        insuranceCarrier,
        coverageNotes: values.coverageNotes,
      };

      const response = await fetch("/api/intake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setValues(defaultValues);
      setStatus("success");
      setMessage("We received your intake. A guide will reach out shortly.");
    } catch {
      setStatus("error");
      setMessage("We could not process that submission. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full min-w-0 max-w-full flex-col gap-5 rounded-3xl border border-white/15 bg-white/5 p-6 text-white shadow-[-10px_-10px_60px_rgba(8,20,24,0.4)] backdrop-blur"
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
            className="min-h-[44px] rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-base font-normal normal-case text-[#0f2f38] focus:border-[#f7c99b] focus:outline-none"
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
            className="min-h-[44px] rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-base font-normal normal-case text-[#0f2f38] focus:border-[#f7c99b] focus:outline-none"
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
            className="min-h-[44px] rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-base font-normal normal-case text-[#0f2f38] focus:border-[#f7c99b] focus:outline-none"
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
            className="min-h-[44px] rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-base font-normal normal-case text-[#0f2f38] focus:border-[#f7c99b] focus:outline-none"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
          <span>Date of birth</span>
          <input
            type="date"
            name="dateOfBirth"
            value={values.dateOfBirth}
            onChange={(event) => updateField("dateOfBirth", event.target.value)}
            className="min-h-[44px] rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-base font-normal normal-case text-[#0f2f38] focus:border-[#f7c99b] focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
          <span>Insurance carrier</span>
          <select
            name="insuranceCarrierChoice"
            value={values.insuranceCarrierChoice}
            onChange={(event) => {
              const nextValue = event.target.value as InsuranceCarrierOption;
              setValues((prev) => ({
                ...prev,
                insuranceCarrierChoice: nextValue,
                insuranceCarrierOther: nextValue === "Other" ? prev.insuranceCarrierOther : "",
              }));
            }}
            className="min-h-[44px] rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-base font-normal normal-case text-[#0f2f38] focus:border-[#f7c99b] focus:outline-none"
          >
            <option value="">Select one</option>
            <option value="Blue Shield of California">Blue Shield of California</option>
            <option value="Blue Cross Blue Shield">Blue Cross Blue Shield</option>
            <option value="Anthem Blue Cross">Anthem Blue Cross</option>
            <option value="HMSA (Hawaii Medical Service Association)">HMSA (Hawaii Medical Service Association)</option>
            <option value="Aetna">Aetna</option>
            <option value="Magellan Health">Magellan Health</option>
            <option value="Cigna">Cigna</option>
            <option value="Health Net">Health Net</option>
            <option value="UnitedHealthcare">UnitedHealthcare</option>
            <option value="Centene Corporation">Centene Corporation</option>
            <option value="Other">Other</option>
          </select>
        </label>
      </div>

      {values.insuranceCarrierChoice === "Other" && (
        <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
          <span>Other insurance carrier</span>
          <input
            type="text"
            name="insuranceCarrierOther"
            value={values.insuranceCarrierOther}
            onChange={(event) => updateField("insuranceCarrierOther", event.target.value)}
            className="min-h-[44px] rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-base font-normal normal-case text-[#0f2f38] focus:border-[#f7c99b] focus:outline-none"
          />
        </label>
      )}

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

      <div className="flex flex-col gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-[#f7c99b] px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#1b2e35] transition hover:bg-[#f9d9b8] disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
        >
          {status === "sending" ? "Submitting..." : "Send Intake"}
        </button>
        {message && (
          <p
            className={`text-sm ${status === "success" ? "text-[#b9f4d3]" : status === "error" ? "text-[#ffb3b3]" : "text-white"
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



