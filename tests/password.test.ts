import { describe, expect, it } from "vitest";
import { getPasswordError, passwordSchema } from "../lib/password";

describe("passwordSchema", () => {
  it("accepts a strong password", () => {
    expect(passwordSchema.safeParse("Tr0ub4dor&3").success).toBe(true);
    expect(getPasswordError("Tr0ub4dor&3")).toBeNull();
  });

  it("rejects passwords shorter than 8 characters", () => {
    const result = passwordSchema.safeParse("Short1!");
    expect(result.success).toBe(false);
    expect(getPasswordError("Short1!")).toBe(
      "Password must be at least 8 characters.",
    );
  });

  it("rejects passwords longer than 128 characters", () => {
    const result = passwordSchema.safeParse("a".repeat(129));
    expect(result.success).toBe(false);
    expect(getPasswordError("a".repeat(129))).toBe(
      "Password must be at most 128 characters.",
    );
  });

  it("rejects common passwords case-insensitively", () => {
    expect(passwordSchema.safeParse("Password").success).toBe(false);
    expect(passwordSchema.safeParse("PASSWORD123").success).toBe(false);
    expect(getPasswordError("Password")).toBe(
      "This password is too common. Please choose a stronger one.",
    );
  });

  it("rejects non-string input", () => {
    expect(passwordSchema.safeParse(12345678).success).toBe(false);
  });
});
