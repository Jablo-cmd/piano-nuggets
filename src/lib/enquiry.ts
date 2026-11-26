import { z } from "zod";

export const formats = ["studio", "home", "online"] as const;
const required = (msg: string) => z.string().trim().min(1, msg);

export const enquirySchema = z
  .object({
    learnerName: required("Please enter the learner's full name.").max(100),
    age: z.coerce
      .number({ message: "Please enter the learner's age." })
      .int("Age must be a whole number.")
      .min(3, "Please enter a valid age.")
      .max(110, "Please enter a valid age."),
    guardianName: z.string().trim().max(100).optional().default(""),
    guardianPhone: z.string().trim().max(30).optional().default(""),
    phone: z.string().trim().max(30).optional().default(""),
    email: z.string().trim().max(120).optional().default(""),
    format: z.enum(formats, { message: "Please choose a lesson format." }),
    lessonType: z.enum(["individual", "group"], { message: "Please choose individual or group lessons." }),
    experience: z.enum(["beginner", "some", "returning"], { message: "Please select the learner's piano experience." }),
    frequency: z.enum(["once", "twice"], { message: "Please choose how often you would like lessons." }),
    instrument: z.enum(["piano", "keyboard", "none", "other"], { message: "Please tell us which instrument is available." }),
    suburb: z.string().trim().max(100).optional().default(""),
    platform: z.enum(["", "zoom", "other", "unsure"]).optional().default(""),
    materials: z.enum(["", "yes", "no", "more-info"]).optional().default(""),
    guardianConfirm: z.boolean().optional().default(false),
    consent: z.boolean().optional().default(false),
    /** Honeypot: real visitors never see or fill this. */
    company: z.string().max(200).optional().default(""),
  })
  .superRefine((v, ctx) => {
    const add = (path: string, message: string) => ctx.addIssue({ code: "custom", path: [path], message });
    if (!v.consent) add("consent", "Please agree so we can contact you about lessons.");
    const minor = v.age < 18;
    if (minor) {
      if (!v.guardianName) add("guardianName", "A parent or guardian's name is required for learners under 18.");
      if (!v.guardianPhone) add("guardianPhone", "A parent or guardian's contact number is required for learners under 18.");
      if (!v.guardianConfirm) add("guardianConfirm", "Please confirm a parent or guardian is submitting or overseeing this enquiry.");
    } else if (!v.phone && !v.email) {
      add("phone", "Please give a phone number or an email address.");
    }
    if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) add("email", "Please enter a valid email address.");
    if (v.phone && !/^[+()\d\s-]{7,20}$/.test(v.phone)) add("phone", "Please enter a valid phone number.");
    if (v.guardianPhone && !/^[+()\d\s-]{7,20}$/.test(v.guardianPhone)) add("guardianPhone", "Please enter a valid phone number.");
    if (v.format === "home" && !v.suburb) add("suburb", "Please tell us your suburb or area so we can quote for travel.");
  });

export type EnquiryInput = z.input<typeof enquirySchema>;
export type Enquiry = z.output<typeof enquirySchema>;
export type EnquiryErrors = Record<string, string>;

export function validateEnquiry(raw: unknown): { ok: true } | { ok: false; errors: EnquiryErrors } {
  const r = enquirySchema.safeParse(raw);
  if (r.success) return { ok: true };
  const errors: EnquiryErrors = {};
  for (const i of r.error.issues) {
    const k = String(i.path[0] ?? "form");
    if (!errors[k]) errors[k] = i.message;
  }
  return { ok: false, errors };
}

export function parseEnquiry(raw: unknown): { ok: true; data: Enquiry } | { ok: false; errors: EnquiryErrors } {
  const r = enquirySchema.safeParse(raw);
  if (r.success) return { ok: true, data: r.data };
  const errors: EnquiryErrors = {};
  for (const i of r.error.issues) {
    const k = String(i.path[0] ?? "form");
    if (!errors[k]) errors[k] = i.message;
  }
  // The cross-field rules only run once the basic fields are valid, so report missing consent here as well.
  const consented = !!raw && typeof raw === "object" && (raw as Record<string, unknown>).consent === true;
  if (!consented && !errors.consent) errors.consent = "Please agree so we can contact you about lessons.";
  return { ok: false, errors };
}

const L = {
  format: { studio: "At the Fresh Wind Music studio", home: "At home", online: "Online" },
  lessonType: { individual: "Individual", group: "Group" },
  experience: { beginner: "Complete beginner", some: "Some experience", returning: "Returning player" },
  frequency: { once: "Once a week", twice: "Twice a week" },
  instrument: { piano: "Piano", keyboard: "Keyboard", none: "None yet", other: "Other" },
  platform: { zoom: "Zoom", other: "Another platform", unsure: "Not sure yet" },
  materials: { yes: "Interested", no: "Not interested", "more-info": "Would like more information" },
} as const;

/** Plain-text enquiry used for both the email to the team and the WhatsApp fallback. */
export function buildEnquiryText(d: Enquiry): string {
  const lines = [
    `Learner: ${d.learnerName} (age ${d.age})`,
    `Piano experience: ${L.experience[d.experience]}`,
    `Instrument available: ${L.instrument[d.instrument]}`,
  ];
  if (d.age < 18) lines.push(`Parent or guardian: ${d.guardianName}, ${d.guardianPhone}`);
  if (d.phone) lines.push(`Phone: ${d.phone}`);
  if (d.email) lines.push(`Email: ${d.email}`);
  lines.push(`Preferred format: ${L.format[d.format]}`);
  if (d.format === "home" && d.suburb) lines.push(`Suburb or area: ${d.suburb}`);
  if (d.format === "online" && d.platform) lines.push(`Online platform: ${L.platform[d.platform as keyof typeof L.platform]}`);
  lines.push(`Lessons: ${L.lessonType[d.lessonType]}, ${L.frequency[d.frequency].toLowerCase()}`);
  if (d.materials) lines.push(`Instructional material pack (R850, optional): ${L.materials[d.materials as keyof typeof L.materials]}`);
  lines.push("", "Consent given on the website to be contacted about lessons. This is an enquiry, not a confirmed booking.");
  return lines.join("\n");
}
