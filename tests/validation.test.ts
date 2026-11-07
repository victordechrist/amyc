import { describe, expect, it } from "vitest";
import { formatRegisterError, registerSchema } from "../lib/validation";

describe("registerSchema", () => {
  it("accepts a valid registration payload", () => {
    const result = registerSchema.safeParse({
      name: "Ada Lovelace",
      email: "Ada@Example.com",
      password: "Tr0ub4dor&3",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.email).toBe("ada@example.com");
    }
  });

  it("rejects a missing name", () => {
    const result = registerSchema.safeParse({
      name: "   ",
      email: "ada@example.com",
      password: "Tr0ub4dor&3",
    });
    expect(result.success).toBe(false);
  });

  it("rejects an invalid email", () => {
    const result = registerSchema.safeParse({
      name: "Ada",
      email: "not-an-email",
      password: "Tr0ub4dor&3",
    });
    expect(result.success).toBe(false);
  });

  it("rejects a weak password", () => {
    const result = registerSchema.safeParse({
      name: "Ada",
      email: "ada@example.com",
      password: "password",
    });
    expect(result.success).toBe(false);
  });

  it("maps email errors to a friendly message", () => {
    const result = registerSchema.safeParse({
      name: "Ada",
      email: "not-an-email",
      password: "Tr0ub4dor&3",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(formatRegisterError(result.error)).toBe(
        "Please enter a valid email address.",
      );
    }
  });
});
