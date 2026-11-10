export const BRAND = "BK AI Systems";
export const TEMPLATE_BRAND = "GrowthHub365";
export const PHONE = "1-724-201-3759";
export const PHONE_HREF = "tel:+17242013759";
export const BOOKING_URL = "https://app.chrisbhustling.com/widget/form/ELpsu0UWhFAK29q6gdvf";
export const BOOK_CALL_PATH = "/contact#book-a-call";

export const NAV_LINKS = [
	{ href: "/", label: "Home" },
	{ href: "/templates", label: "Templates" },
	{ href: "/about", label: "About" },
	{ href: "/blog", label: "Blog" },
	{ href: "/contact", label: "Contact" },
] as const;

export type Template = {
	id: string;
	name: string;
	category: "Snapshot" | "Workflow" | "Funnel" | "AI Agent";
	tagline: string;
	features: string[];
	/** Where the Buy button goes: GHL funnel, Stripe payment link, or snapshot share link. */
	checkoutUrl: string;
	/** Optional display price, e.g. "$97". Leave undefined to hide it. */
	price?: string;
	badge?: string;
	/** True until a real checkout link exists. Shows "Coming soon" instead of a buy button. */
	comingSoon?: boolean;
};

/**
 * PLACEHOLDER CATALOG - edit this list.
 * Replace each `checkoutUrl` with the real GHL funnel / Stripe payment link / snapshot share link,
 * and add `price` when you want it shown on the card.
 * Until a real link is set, buttons fall back to the contact page.
 */
const TODO_LINK = "/contact#book-a-call";

export const TEMPLATES: Template[] = [
	{
		id: "ai-receptionist-snapshot",
		name: "AI Receptionist Snapshot",
		category: "Snapshot",
		tagline: "The full AI front-desk setup for GHL: chat, SMS, qualification and booking, ready to import.",
		features: ["AI chat + SMS bot prompts", "Lead qualification flow", "Calendar booking routing", "Pipeline stages + tags"],
		checkoutUrl: TODO_LINK,
		comingSoon: true,
		badge: "Coming soon",
	},
	{
		id: "missed-call-textback",
		name: "Missed-Call Text-Back",
		category: "Workflow",
		tagline: "Turn every missed call into a conversation within seconds.",
		features: ["Instant SMS reply", "Smart follow-up sequence", "Auto-add to pipeline", "Staff notification"],
		checkoutUrl: TODO_LINK,
		comingSoon: true,
	},
	{
		id: "lead-nurture-pack",
		name: "Lead Nurture Workflow Pack",
		category: "Workflow",
		tagline: "SMS and email follow-up sequences that keep cold leads warm without manual work.",
		features: ["5-day, 14-day and 30-day sequences", "Reactivation campaign", "Stop-on-reply logic", "Editable copy"],
		checkoutUrl: TODO_LINK,
		comingSoon: true,
	},
	{
		id: "review-booster",
		name: "Review Booster",
		category: "Workflow",
		tagline: "Ask happy customers for reviews automatically after every job or appointment.",
		features: ["Post-service review request", "Negative feedback routing", "Google review link step", "Reminder sequence"],
		checkoutUrl: TODO_LINK,
		comingSoon: true,
	},
	{
		id: "appointment-funnel",
		name: "Appointment Funnel",
		category: "Funnel",
		tagline: "A high-converting landing page and booking flow for local service businesses.",
		features: ["Landing page + thank-you page", "Calendar + form built in", "Confirmation + reminders", "Mobile optimized"],
		checkoutUrl: TODO_LINK,
		comingSoon: true,
	},
	{
		id: "ai-voice-agent",
		name: "AI Voice + Chat Agent Prompts",
		category: "AI Agent",
		tagline: "Tested prompts and knowledge-base scaffolds for AI agents that sound like your business.",
		features: ["Receptionist + sales prompts", "FAQ knowledge-base template", "Handoff rules", "Industry variations"],
		checkoutUrl: TODO_LINK,
		comingSoon: true,
	},
];

export const TEMPLATE_CATEGORIES = ["All", "Snapshot", "Workflow", "Funnel", "AI Agent"] as const;

export function isExternal(url: string) {
	return /^https?:\/\//i.test(url);
}

/**
 * DEMO VIDEO - paste a YouTube/Vimeo/Loom *embed* URL (e.g. https://www.youtube.com/embed/XXXX)
 * or a direct .mp4 path in /public (e.g. "/demo.mp4"). Leave "" to hide the section.
 */
export const DEMO_VIDEO_URL = "/demo.mp4";

export type Proof = {
	quote: string;
	/** Anonymous is fine, e.g. "Owner, HVAC company" */
	who: string;
	/** Optional, e.g. "Pennsylvania" */
	place?: string;
	/** Optional headline result, e.g. "+11 booked jobs in 30 days" */
	result?: string;
};

/**
 * PROOF - add ONLY real, permitted quotes/results. Leave empty to hide the section.
 * Names are optional; role + industry is enough.
 */
export const PROOF: Proof[] = [];
