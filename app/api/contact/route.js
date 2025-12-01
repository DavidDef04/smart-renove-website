export async function POST(req) {
    try {
        const formData = await req.formData();
        const turnstileToken = formData.get("cf-turnstile-response");

        // Vérification turnstile
        const verifyRes = await fetch(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            {
                method: "POST",
                body: new URLSearchParams({
                    secret: process.env.TURNSTILE_SECRET_KEY,
                    response: turnstileToken,
                }),
            }
        ).then((r) => r.json());

        if (!verifyRes.success) {
            return new Response(JSON.stringify({ message: "Validation de sécurité échouée, Veuillez recharger le site svp !" }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        // Envoi au webhook n8n (avec fichiers)
        const n8nResponse = await fetch(process.env.N8N_WEBHOOK_URL, {
            method: "POST",
            body: formData,
        });

        if (!n8nResponse.ok) {
            return new Response(JSON.stringify({ message: "Erreur lors de l'envoi du message" }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            });
        }

        return new Response(JSON.stringify({ message: "Message envoyé avec succès" }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch(error) {
        console.error("Erreur API contact:", error);
        return new Response(JSON.stringify({ message: "Erreur du serveur" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}