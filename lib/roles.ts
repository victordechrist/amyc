export const ROLE_LABELS: Record<string, string> = {
  STUDENT: "Student",
  MENTOR: "Mentor",
  PARTNER: "Partner",
  DONOR: "Donor",
  ADMIN: "Admin",
};

export function roleLabel(role?: string | null): string {
  if (!role) return "Member";
  return ROLE_LABELS[role] ?? role;
}
