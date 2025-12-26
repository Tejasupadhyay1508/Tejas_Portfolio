import { storage } from "./storage";
import { contactMessageSchema } from "@shared/schema";
import { sendContactEmail } from "./mailer";
export async function registerRoutes(httpServer, app) {
    app.post("/api/contact", async (req, res) => {
        try {
            const result = contactMessageSchema.safeParse(req.body);
            if (!result.success) {
                return res.status(400).json({
                    success: false,
                    error: result.error.errors[0].message
                });
            }
            const contactMessage = result.data;
            await storage.saveContactMessage(contactMessage);
            await sendContactEmail(contactMessage);
            return res.status(200).json({
                success: true,
                message: "Message received successfully"
            });
        }
        catch (error) {
            console.error("Contact form error:", error);
            return res.status(500).json({
                success: false,
                error: "Failed to send message"
            });
        }
    });
    return httpServer;
}
