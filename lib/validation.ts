import { z } from "zod";
import { passwordSchema } from "./password";

export const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Full name is required.")
    .max(100, "Name must be 100 characters or fewer."),
  email: z.string().trim().toLowerCase().pipe(z.email()),
  password: passwordSchema,
});

export type RegisterInput = z.infer<typeof registerSchema>;

export function formatRegisterError(error: z.ZodError): string {
  const issue = error.issues[0];
  if (!issue) return "Please check your details and try again.";
  if (issue.path[0] === "email") return "Please enter a valid email address.";
  return issue.message || "Please check your details and try again.";
}
