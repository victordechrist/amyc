import { describe, expect, it } from "vitest";
import { roleLabel } from "../lib/roles";

describe("roleLabel", () => {
  it("maps known roles to display labels", () => {
    expect(roleLabel("STUDENT")).toBe("Student");
    expect(roleLabel("MENTOR")).toBe("Mentor");
    expect(roleLabel("ADMIN")).toBe("Admin");
  });

  it("falls back gracefully", () => {
    expect(roleLabel(undefined)).toBe("Member");
    expect(roleLabel(null)).toBe("Member");
    expect(roleLabel("UNKNOWN")).toBe("UNKNOWN");
  });
});
