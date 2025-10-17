import { z } from "zod";

const genderEnum = z.enum(["Male", "Female", "Other"]);
const status = z.enum(["Single", "Married", "Divorced", "Other"]);
const relationshipEnum = z.enum(["Father", "Mother", "Uncle", "Aunt", "Sibling", "Other"]);

export const applicationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email(),
  phone: z.string().min(10, "Invalid phone number"),
  dateOfBirth: z
    .string()
    .refine((val) => !isNaN(new Date(val).getTime()), {
      message: "Invalid date. Expected YYYY-MM-DD",
    }),
  gender: genderEnum,
  status: status,
  nationality: z.string().min(1, "Nationality is required"),
  idNumber: z.coerce.number({
    error: "National ID must be a number",
  }).int(),
  province: z.string().min(1, "Province is required"),
  district: z.string().min(1, "District is required"),
  sector: z.string().min(1, "Sector is required"),
  cell: z.string().min(1, "Cell is required"),
  village: z.string().min(1, "Village is required"),
  highSchool: z.string().min(1, "High school is required"),
  graduationYear: z
    .number({ error: "Graduation year must be a number" })
    .int()
    .min(1900, "Invalid graduation year")
    .max(new Date().getFullYear(), "Graduation year cannot be in the future"),
  combination: z.string().min(1, "Combination is required"),
  aggregateScore: z.string().min(1, "Aggregate score is required"),
  preferredUniversity: z.string().min(1, "Preferred university is required"),
  fatherName: z.string().min(1, "Father's name is required"),
  motherName: z.string().min(1, "Mother's name is required"),
  guardianPhone: z
    .number({ error: "Guardian phone must be a number" })
    .int()
    .positive("Guardian phone must be positive"),
  relationship: relationshipEnum,
  hasDisability: z.coerce.boolean(),
  specifyDisability: z.string().optional().nullable(),
});