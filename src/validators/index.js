"use client";

import { z } from "zod";

export const transferScheme = z.object({
  address: z.string().min(2),
});
