import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// This file is used to create a Prisma Client instance that can be reused across the application.
// It also ensures that the Prisma Client is only created once in development mode to avoid issues with hot reloading.