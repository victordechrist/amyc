import { prisma } from "@/lib/prisma";

const SIGN_IN_LIMIT = 5;
const SIGN_IN_WINDOW_MINUTES = 15;
const REGISTER_LIMIT = 10;
const REGISTER_WINDOW_MINUTES = 60;

async function prune(key: string, windowMinutes: number) {
  const cutoff = new Date(Date.now() - windowMinutes * 60 * 1000);
  await prisma.authAttempt.deleteMany({
    where: { key, createdAt: { lt: cutoff } },
  });
}

export async function isThrottled(
  key: string,
  limit: number,
  windowMinutes: number,
): Promise<boolean> {
  await prune(key, windowMinutes);
  const windowStart = new Date(Date.now() - windowMinutes * 60 * 1000);
  const count = await prisma.authAttempt.count({
    where: { key, createdAt: { gte: windowStart } },
  });
  return count >= limit;
}

export async function recordAttempt(key: string) {
  await prisma.authAttempt.create({ data: { key } });
}

export async function clearAttempts(key: string) {
  await prisma.authAttempt.deleteMany({ where: { key } });
}

export const signInThrottle = {
  limit: SIGN_IN_LIMIT,
  windowMinutes: SIGN_IN_WINDOW_MINUTES,
};

export const registerThrottle = {
  limit: REGISTER_LIMIT,
  windowMinutes: REGISTER_WINDOW_MINUTES,
};
