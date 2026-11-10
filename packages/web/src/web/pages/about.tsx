import { CtaBand, Layout, SectionHead, usePageMeta } from "../components/layout";
import { BOOK_CALL_PATH } from "../lib/site";

const advantages = [
	"24/7 automated customer communication",
	"Instant response times",
	"Fewer missed leads",
	"Less time spent on routine questions",
	"Handles more leads as you grow",
];

const capabilities = [
	"Answer customer questions instantly",
	"Capture and qualify new leads",
	"Schedule appointments automatically",
	"Provide product or service information",
	"Route inquiries to the right department",
	"Operate 24/7 without breaks or missed calls",
];

const industries = [
	"Real estate companies",
	"Medical practices",
	"Law firms",
	"Contractors",
	"E-commerce brands",
	"Local service providers",
	"Customer support teams",
];

export default function AboutPage() {
	usePageMeta("About | BK AI Systems", "BK AI Systems sets up AI receptionists and GHL automation so service businesses answer every lead and book more appointments.");

	return (
		<Layout>
			<section className="page-hero">
				<div className="container">
					<div className="kicker">About us</div>
					<h1>An AI front desk for businesses that <span className="grad">live on inbound leads.</span></h1>
					<p className="lead">BK AI Systems builds AI assistants that answer calls, texts and web chats, qualify the lead and book the appointment, so nothing slips through when your team is busy.</p>
				</div>
			</section>

			<section className="section">
				<div className="container grid-2" style={{ gap: 48, alignItems: "start" }}>
					<SectionHead kicker="Who we are" title="AI receptionists and chatbots so you never miss another opportunity." />
					<div style={{ display: "grid", gap: 18, color: "var(--muted)", fontSize: 17, lineHeight: 1.75 }}>
						<p>We specialize in AI chatbots and conversational AI receptionists powered by ChatGPT, helping businesses capture leads, answer customer questions and automate routine communication without hiring additional staff.</p>
						<p>Our goal is simple: help businesses never miss another opportunity.</p>
					</div>
				</div>
			</section>

			<section className="section alt">
				<div className="container grid-2">
					<div className="panel panel-bracket">
						<div className="kicker">Vision</div>
						<h3 style={{ fontSize: 40, margin: "14px 0" }}>Every lead should get an answer, even at 9 PM.</h3>
						<p>BK AI Systems sets up AI receptionists and chatbots that cover the hours your team cannot.</p>
						<p style={{ marginTop: 14 }}>We keep tuning the assistant based on real conversations, so it gets better over time.</p>
					</div>
					<div className="panel panel-bracket">
						<div className="kicker">Work smarter with AI</div>
						<h3 style={{ fontSize: 40, margin: "14px 0" }}>Your AI receptionist is ready to work 24/7.</h3>
						<p>We set it up and run it for you. You do not need technical skills.</p>
						<ul className="ticks">{advantages.map((a) => <li key={a}>{a}</li>)}</ul>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="container">
					<SectionHead center kicker="Why choose us" title="What we do, who we help, and why it works.">
						Faster replies mean fewer lost leads, and your team spends its time on the work that needs a person.
					</SectionHead>
					<div className="grid-3">
						<div className="panel">
							<h3>What we do</h3>
							<ul className="ticks">{capabilities.map((c) => <li key={c}>{c}</li>)}</ul>
						</div>
						<div className="panel">
							<h3>Who we help</h3>
							<ul className="ticks">{industries.map((c) => <li key={c}>{c}</li>)}</ul>
						</div>
						<div className="panel">
							<h3>Why BK AI Systems</h3>
							<p>Traditional reception and support services are expensive and limited by business hours. Our assistants reply at any hour, in seconds, so you can take on more leads without hiring more front-desk staff.</p>
						</div>
					</div>
				</div>
			</section>

			<CtaBand
				kicker="BK AI Systems for you"
				title="The ultimate solution to AI systems is here."
				text="Looking for AI that fits your business? Our solution is tailored to it."
				primary={{ href: BOOK_CALL_PATH, label: "Book a Call" }}
				secondary={{ href: "/templates", label: "Browse templates" }}
			/>
		</Layout>
	);
}
