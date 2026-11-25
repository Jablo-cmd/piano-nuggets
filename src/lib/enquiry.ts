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
  })
  .superRefine((v, ctx) => {
    const add = (path: string, message: string) => ctx.addIssue({ code: "custom", path: [path], message });
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
