import { useState } from "react";
import { CtaBand, Layout, SectionHead, usePageMeta } from "../components/layout";
import { TemplateCard } from "../components/template-card";
import { BOOK_CALL_PATH, DEMO_VIDEO_URL, PHONE, PHONE_HREF, PROOF, TEMPLATES } from "../lib/site";

const stats = [
	{ value: "24/7", label: "Instant lead response" },
	{ value: "5-7", label: "Days to launch" },
	{ value: "30", label: "Day money-back guarantee" },
];

const services = [
	{ title: "AI Receptionist", text: "Answers website, SMS and inbox questions instantly, then guides prospects to the next step." },
	{ title: "Lead Qualification", text: "Asks the right questions, captures contact details and separates serious buyers from browsers." },
	{ title: "CRM Automation", text: "Creates contacts, moves GHL pipeline stages, stores notes and alerts your team automatically." },
	{ title: "Appointment Booking", text: "Routes qualified prospects to your calendar and sends confirmations and follow-ups." },
];

const steps = [
	{ title: "Lead Flow Audit", text: "We review where inquiries come from, how fast you respond and where opportunities get lost." },
	{ title: "System Build", text: "We configure AI scripts, intake questions, CRM stages, automations and calendar routing." },
	{ title: "Launch", text: "Your assistant goes live across website, SMS, forms and tools, tested before handoff." },
	{ title: "Optimization", text: "We tune answers, routing and follow-up based on real conversations and booking outcomes." },
];

const industries = ["Real estate", "Medical practices", "Law firms", "Contractors", "E-commerce brands", "Local service providers"];

const faqs = [
	{ q: "Who is this built for?", a: "US service businesses that rely on inbound leads, appointments, consultations, quotes or customer inquiries." },
	{ q: "What is included in the done-for-you package?", a: "An AI chat assistant and conversational AI receptionist, GHL CRM setup, lead capture automation, a conversation dashboard, appointment routing, automated follow-up, installation and ongoing support." },
	{ q: "What are GrowthHub365 templates?", a: "Ready-made GoHighLevel assets (snapshots, workflows, funnels and AI agent prompts) you can buy and import yourself. Prefer it done for you? Book a call and we build it for your business." },
	{ q: "Do I need to replace my CRM or website?", a: "Usually no. We design around your current workflow and connect the tools you already use, especially GoHighLevel for CRM, calendars, pipelines and workflows." },
	{ q: "How fast can we launch?", a: "Most first versions go live in 5 to 7 business days after access, intake details and workflow approval." },
	{ q: "What happens after launch?", a: "We monitor the system, review conversations, improve prompts and tune the workflow so it keeps getting better." },
	{ q: "Can I test the AI receptionist first?", a: "Yes. The free AI lead-flow audit shows how an AI receptionist could work for your business before you commit." },
	{ q: "Is there a guarantee?", a: "Yes. We offer a 30-day money-back guarantee on done-for-you setups." },
];

export default function HomePage() {
	usePageMeta(
		"BK AI Systems | AI Receptionists, GHL Automation & Templates",
		"BK AI Systems builds AI receptionists and GHL automation that capture leads, respond instantly and book more customers 24/7, plus ready-made GrowthHub365 templates.",
	);

	return (
		<Layout>
			<section className="hero">
				<div className="container hero-grid">
					<div>
						<div className="status-pill rise"><span className="pulse" /> Built for US service businesses</div>
						<h1 className="rise d1">Book more customers from the <span className="grad">leads you already get.</span></h1>
						<p className="lead rise d2">
							We set up an AI assistant that answers every call, text and web inquiry in seconds, asks the right questions, and books the appointment for you, day or night.
						</p>
						<div className="hero-actions rise d3">
							<a className="btn btn-primary" href={BOOK_CALL_PATH}>Book a Call</a>
							<a className="btn btn-ghost" href="/templates">Browse Templates</a>
						</div>
						<div className="hero-proof">
							<span>Done-for-you setup</span>
							<span>GoHighLevel native</span>
							<span>30-day money-back guarantee</span>
						</div>
					</div>

					<div className="console panel-bracket rise d2" aria-hidden="true">
						<div className="console-bar"><i /><i /><i /> AI receptionist / live <span>&#9679; online</span></div>
						<div className="console-body">
							<div className="msg"><small>Example &middot; Lead &middot; 9:47 PM</small>Hi, do you have availability for a quote this week?</div>
							<div className="msg ai"><small>AI receptionist &middot; 2 sec</small>Absolutely! I can get you booked. What's the service address and best phone number?</div>
							<div className="msg"><small>Lead</small>14 Maple St, 724-555-0148. Thursday works.</div>
							<div className="msg ai"><small>AI receptionist</small>Booked: Thursday 10:00 AM. Confirmation sent by text.</div>
							<div className="pipe">
								<div>New lead<b>12</b></div>
								<div>Qualified<b>8</b></div>
								<div>Booked<b>5</b></div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="container">
				<div className="stats panel-bracket">
					{stats.map((s) => (
						<div className="stat" key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
					))}
				</div>
			</div>

			{DEMO_VIDEO_URL ? (
				<section className="section" id="demo">
					<div className="container">
						<SectionHead center kicker="See it work" title="Watch a lead get answered, qualified and booked in under a minute." />
						<div className="video-frame panel-bracket">
							{DEMO_VIDEO_URL.endsWith(".mp4") ? (
								<DemoPlayer src={DEMO_VIDEO_URL} poster="/demo-poster.jpg" />
							) : (
								<iframe src={DEMO_VIDEO_URL} title="BK AI Systems demo" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowFullScreen loading="lazy" />
							)}
						</div>
					</div>
				</section>
			) : null}

			{PROOF.length > 0 ? (
				<section className="section alt" id="proof">
					<div className="container">
						<SectionHead center kicker="Real results" title="What business owners say." />
						<div className="grid-3">
							{PROOF.map((p) => (
								<figure className="panel proof" key={p.quote}>
									{p.result ? <div className="proof-result">{p.result}</div> : null}
									<blockquote>&ldquo;{p.quote}&rdquo;</blockquote>
									<figcaption>{p.who}{p.place ? ` · ${p.place}` : ""}</figcaption>
								</figure>
							))}
						</div>
					</div>
				</section>
			) : null}

			<section className="section" id="problem">
				<div className="container grid-2" style={{ alignItems: "start", gap: 48 }}>
					<div>
						<SectionHead kicker="The revenue leak" title="Most leads are lost before a salesperson ever talks to them.">
							Customers expect fast answers. If your team misses a call, waits hours to reply or forgets a follow-up, revenue quietly slips away.
						</SectionHead>
						<div className="loss">
							<div><strong>Slow response:</strong> prospects move to the next business.</div>
							<div><strong>Manual intake:</strong> details get missed or entered late.</div>
							<div><strong>No follow-up:</strong> interested buyers go cold.</div>
							<div><strong>Disconnected tools:</strong> chat, calendar, CRM and reporting don't talk.</div>
						</div>
					</div>
					<div className="panel panel-bracket">
						<img src="/workflow-ghl-crm.jpg" alt="GHL CRM automation workflow for lead capture and appointment booking" loading="lazy" style={{ marginBottom: 24, border: "1px solid var(--line)" }} />
						<div className="kicker">The fix</div>
						<h3 style={{ fontSize: 40, margin: "12px 0" }}>An AI front desk connected to your GHL pipeline.</h3>
						<p>The system answers, qualifies, books, records and triggers follow-up automatically while your team focuses on closing.</p>
					</div>
				</div>
			</section>

			<section className="section alt" id="services">
				<div className="container">
					<SectionHead center kicker="Done-for-you" title="A complete customer response system, not another tool to manage.">
						We build the automation around your lead flow, your services, your booking process and the way your team sells.
					</SectionHead>
					<div className="grid-4">
						{services.map((s, i) => (
							<div className="panel" key={s.title}>
								<span className="idx">0{i + 1} /</span>
								<h3>{s.title}</h3>
								<p>{s.text}</p>
							</div>
						))}
					</div>
					<div className="meta" style={{ justifyContent: "center", marginTop: 40 }}>
						{industries.map((i) => <span key={i}>{i}</span>)}
					</div>
				</div>
			</section>

			<section className="section" id="templates">
				<div className="container">
					<SectionHead center kicker="GrowthHub365 templates" title="Prefer to build it yourself? Start with a proven template.">
						GoHighLevel assets packaged so you can import them yourself. Prefer it done for you? Book a call.
					</SectionHead>
					<div className="grid-3">
						{TEMPLATES.slice(0, 3).map((t) => <TemplateCard key={t.id} template={t} />)}
					</div>
					<div style={{ textAlign: "center", marginTop: 40 }}>
						<a className="btn btn-primary" href="/templates">View all templates</a>
					</div>
				</div>
			</section>

			<section className="section alt">
				<div className="container founder">
					<figure className="founder-photo panel-bracket" style={{ margin: 0 }}>
						<img src="/img-founder.jpg" alt="Chris Bell, founder of BK AI Systems" loading="lazy" />
						<figcaption><strong>Chris Bell</strong>Founder, BK AI Systems</figcaption>
					</figure>
					<div className="founder-copy">
						<div className="kicker">Meet the founder</div>
						<h2>Hi, I'm Chris Bell.</h2>
						<p>I set up AI front desks for service businesses, so missed calls and late replies turn into booked appointments.</p>
						<p>You get an assistant that answers, qualifies and books, connected to your GoHighLevel pipeline. I build it, test it and stay on to improve it.</p>
						<div className="hero-actions" style={{ marginTop: 6 }}>
							<a className="btn btn-primary" href={BOOK_CALL_PATH}>Book a Call</a>
							<a className="btn btn-ghost" href="/about">About us</a>
						</div>
					</div>
				</div>
			</section>

			<section className="section alt" id="process">
				<div className="container">
					<SectionHead center kicker="How we launch" title="A simple rollout designed to get live fast." />
					<div className="grid-4 steps">
						{steps.map((s) => (
							<div className="panel step" key={s.title}>
								<h3>{s.title}</h3>
								<p>{s.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="section">
				<div className="container">
					<div className="cta-band panel-bracket">
						<div>
							<div className="kicker">Risk reversal</div>
							<h2>Try the system with a 30-day money-back guarantee.</h2>
							<p>If the done-for-you system isn't the right fit within the first 30 days, you're protected.</p>
						</div>
						<div className="guarantee-badge"><strong>30</strong><span>Day guarantee</span></div>
					</div>
				</div>
			</section>

			<section className="section alt" id="faq">
				<div className="container">
					<SectionHead center kicker="FAQ" title="Questions owners ask before starting." />
					<div className="faq">
						{faqs.map((f, i) => (
							<details key={f.q} open={i === 0}>
								<summary>{f.q}</summary>
								<p>{f.a}</p>
							</details>
						))}
					</div>
				</div>
			</section>

			<CtaBand
				kicker="Ready when you are"
				title="Stop losing leads. Start booking them."
				text={`Book a free AI lead-flow audit, or call ${PHONE}. Prefer DIY? Grab a template and launch today.`}
				primary={{ href: BOOK_CALL_PATH, label: "Book a Call" }}
				secondary={{ href: PHONE_HREF, label: `Call ${PHONE}` }}
			/>
		</Layout>
	);
}

function DemoPlayer({ src, poster }: { src: string; poster: string }) {
	const [playing, setPlaying] = useState(false);
	if (playing) {
		return <video src={src} poster={poster} controls autoPlay playsInline />;
	}
	return (
		<button type="button" className="video-thumb" onClick={() => setPlaying(true)} aria-label="Play demo video (39 seconds)">
			<img src={poster} alt="" loading="lazy" />
			<span className="play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></span>
			<span className="video-len">Watch the 39-sec demo</span>
		</button>
	);
}
