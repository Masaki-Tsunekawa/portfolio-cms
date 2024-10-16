import { z } from "zod";

export const productSchema = z.object({
  name: z.string().max(255).nullable().optional().describe("name"),
  quantity: z
    .number()
    .min(0, "Quantity must be greater than or equal to 0")
    .nullable()
    .optional()
    .describe("quantity"),
  condition: z.number().int().nullable().optional().describe("condition"),
  status: z.number().int().nullable().optional().describe("status"),
  note: z.string().max(255).nullable().optional().describe("note"),
});

export type productSchema = z.infer<typeof productSchema>;
