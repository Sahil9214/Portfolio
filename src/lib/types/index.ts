import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(3, { message: "Name must be at least 3 characters" }),
    email: z.email({  message: "Invalid email address" }),
    message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export type contactFormStore = z.infer<typeof contactSchema>;


