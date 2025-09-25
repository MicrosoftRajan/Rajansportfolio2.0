import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    RESEND_API_KEY: z.string().min(1), // server-only
  },
  client: {
    SITE_URL: z.string().url(), // client-safe
  },
  runtimeEnv: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL, // use client-safe env
  },
})
