import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { registerSchema, formatRegisterError } from "@/lib/validation";
import {
  isThrottled,
  recordAttempt,
  registerThrottle,
} from "@/lib/auth-throttle";

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const throttleKey = `register:${ip}`;

  if (
    await isThrottled(
      throttleKey,
      registerThrottle.limit,
      registerThrottle.windowMinutes,
    )
  ) {
    return NextResponse.json(
      { ok: false, error: "Too many attempts. Please try again later." },
      { status: 429 },
    );
  }
  await recordAttempt(throttleKey);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  const parsed = registerSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: formatRegisterError(parsed.error) },
      { status: 400 },
    );
  }

  const { name, password } = parsed.data;
  const email = parsed.data.email;

  const existing = await prisma.user.findUnique({
    where: { email },
    select: { id: true },
  });
  if (existing) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "An account with this email already exists. Try signing in instead.",
      },
      { status: 409 },
    );
  }

  const passwordHash = await bcrypt.hash(password, 10);
  await prisma.user.create({
    data: { name, email, password: passwordHash, role: "STUDENT" },
  });

  return NextResponse.json({ ok: true }, { status: 201 });
}
