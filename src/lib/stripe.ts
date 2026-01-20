import Stripe from "stripe";

let stripeInstance: Stripe | null = null;

export const getStripe = (): Stripe => {
    if (stripeInstance) return stripeInstance;

    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
        throw new Error("STRIPE_SECRET_KEY is not set");
    }

    stripeInstance = new Stripe(secretKey, {
        typescript: true,
    });

    return stripeInstance;
};

export const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID;

export const createCheckoutSession = async (email?: string) => {
    if (!STRIPE_PRICE_ID) {
        throw new Error("STRIPE_PRICE_ID is not set");
    }

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        line_items: [
            {
                price: STRIPE_PRICE_ID,
                quantity: 1,
            },
        ],
        ...(email && { customer_email: email }),
        success_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/download?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/#pricing`,
        metadata: {
            product: "french-tech-sender",
        },
        allow_promotion_codes: true,
        billing_address_collection: "required",
    });

    return session;
};

export const retrieveCheckoutSession = async (sessionId: string) => {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ["customer", "line_items"],
    });

    return session;
};

export const verifyWebhookSignature = (
    payload: string | Buffer,
    signature: string
): Stripe.Event => {
    if (!process.env.STRIPE_WEBHOOK_SECRET) {
        throw new Error("STRIPE_WEBHOOK_SECRET is not set");
    }

    const stripe = getStripe();
    return stripe.webhooks.constructEvent(
        payload,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
    );
};
