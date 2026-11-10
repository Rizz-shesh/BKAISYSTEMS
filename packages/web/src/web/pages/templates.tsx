import { useState } from "react";
import { CtaBand, Layout, SectionHead, usePageMeta } from "../components/layout";
import { TemplateCard } from "../components/template-card";
import { BOOK_CALL_PATH, TEMPLATES, TEMPLATE_BRAND, TEMPLATE_CATEGORIES } from "../lib/site";

const how = [
	{ title: "Choose", text: "Pick the template that matches the bottleneck: follow-up, missed calls, booking or AI replies." },
	{ title: "Checkout", text: "Secure checkout on GHL or Stripe. You receive your import link right away." },
	{ title: "Import & launch", text: "Import into your GoHighLevel sub-account, swap in your brand details and go live." },
];

export default function TemplatesPage() {
	usePageMeta(
		`${TEMPLATE_BRAND} GHL Templates | BK AI Systems`,
		"Ready-made GoHighLevel snapshots, workflows, funnels and AI agent templates from GrowthHub365. Import in minutes.",
	);
	const [category, setCategory] = useState<(typeof TEMPLATE_CATEGORIES)[number]>("All");
	const shown = category === "All" ? TEMPLATES : TEMPLATES.filter((t) => t.category === category);

	return (
		<Layout>
			<section className="page-hero">
				<div className="container">
					<div className="kicker">{TEMPLATE_BRAND} templates</div>
					<h1>GHL templates that <span className="grad">launch in minutes.</span></h1>
					<p className="lead">
						Snapshots, workflows, funnels and AI agent prompts for GoHighLevel. Import them into your account and start capturing and converting leads.
					</p>
					<div className="meta"><span>Import into GHL</span><span>GoHighLevel native</span><span>Editable</span></div>
				</div>
			</section>

			<section className="section">
				<div className="container">
					<div className="filters" role="group" aria-label="Filter templates">
						{TEMPLATE_CATEGORIES.map((c) => (
							<button key={c} type="button" className="filter" aria-pressed={category === c} onClick={() => setCategory(c)}>{c}</button>
						))}
					</div>
					<div className="grid-3">
						{shown.map((t) => <TemplateCard key={t.id} template={t} />)}
					</div>
				</div>
			</section>

			<section className="section alt">
				<div className="container">
					<SectionHead center kicker="How it works" title="From checkout to live in three steps." />
					<div className="grid-3 steps">
						{how.map((s) => (
							<div className="panel step" key={s.title}><h3>{s.title}</h3><p>{s.text}</p></div>
						))}
					</div>
				</div>
			</section>

			<CtaBand
				kicker="Want it done for you?"
				title="We'll install and customize it for your business."
				text="Skip the setup. BK AI Systems builds, tests and launches the full AI + GHL system for you, backed by a 30-day money-back guarantee."
				primary={{ href: BOOK_CALL_PATH, label: "Book a Call" }}
				secondary={{ href: "/", label: "See done-for-you" }}
			/>
		</Layout>
	);
}
