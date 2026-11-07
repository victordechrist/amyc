import { z } from "zod";

const COMMON_PASSWORDS = new Set([
  "password",
  "password1",
  "password123",
  "123456",
  "12345678",
  "123456789",
  "1234567890",
  "qwerty",
  "qwerty123",
  "letmein",
  "welcome",
  "welcome1",
  "admin",
  "admin123",
  "iloveyou",
  "monkey",
  "dragon",
  "football",
  "baseball",
  "abc123",
  "111111",
  "123123",
  "passw0rd",
  "p@ssw0rd",
  "student123",
  "amyc123",
]);

export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters.")
  .max(128, "Password must be at most 128 characters.")
  .refine(
    (value) => !COMMON_PASSWORDS.has(value.toLowerCase()),
    "This password is too common. Please choose a stronger one.",
  );

export function getPasswordError(password: string): string | null {
  const result = passwordSchema.safeParse(password);
  if (result.success) return null;
  return result.error.issues[0]?.message ?? "Invalid password.";
}
