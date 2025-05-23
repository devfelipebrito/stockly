import { z } from "zod";

export const upsertProductSchema = z.object({
  id: z.string().uuid().optional(),
  name: z
    .string()
    .trim()
    .min(1, { message: "O nome do produto é obrigatorio." }),
  price: z.number().min(0.01, { message: "O preço do produto é obrigatorio." }),
  stock: z.coerce
    .number()
    .positive({ message: "A quantidade em estoque deve ser positiva." })
    .int()
    .min(0, { message: "O estoque do produto é obrigatorio." }),
});

export type UpsertProductSchema = z.infer<typeof upsertProductSchema>;
