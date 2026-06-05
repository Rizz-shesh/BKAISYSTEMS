import { useState } from "react";

const BOOKING_URL =
	"https://app.growthhub365.com/v2/location/oN7FYs5uP7gL7raoK7Nu/form-builder-v2/ELpsu0UWhFAK29q6gdvf";
const PHONE = "1-724-201-3759";
const PHONE_HREF = "tel:+17242013759";

const outcomes = [
	{ value: "24/7", label: "Instant lead response" },
	{ value: "5-7 days", label: "Typical launch window" },
	{ value: "20+ hrs", label: "Admin time saved weekly" },
	{ value: "30 days", label: "Money-back guarantee" },
];

const services = [
	{
		title: "AI Receptionist",
		text: "Answers website, SMS, and inbox questions instantly, then guides prospects toward the next step.",
	},
	{
		title: "Lead Qualification",
		text: "Asks the right questions, captures contact details, scores intent, and separates serious buyers from browsers.",
	},
	{
		title: "CRM Automation",
		text: "Creates contacts, updates GHL pipeline stages, stores conversation notes, and alerts your team automatically.",
	},
	{
		title: "Appointment Booking",
		text: "Routes qualified prospects to your calendar and sends confirmation and follow-up messages.",
	},
];

const included = [
	{
		title: "Automated Follow-Up Sequences",
		text: "If a lead does not respond, the system continues the conversation through intelligent SMS and email follow-up.",
	},
	{
		title: "24/7 Instant AI Response",
		text: "Your business responds immediately to website chats, text messages, and social media inquiries, even after hours.",
	},
	{
		title: "Automated Lead Capture and GHL CRM Organization",
		text: "Every conversation becomes a tracked contact inside your CRM. No lost data. No manual entry.",
	},
	{
		title: "Smart Lead Qualification",
		text: "The system asks the right questions, filters serious prospects, and routes them automatically.",
	},
	{
		title: "Pipeline Visibility and Reporting",
		text: "You can see where each lead stands in your sales process and where follow-up is needed.",
	},
	{
		title: "Installation and Ongoing Support",
		text: "We configure, launch, and optimize your system so it runs smoothly from day one.",
	},
];

const industries = [
	"Real estate companies",
	"Medical practices",
	"Law firms",
	"Contractors",
	"E-commerce brands",
	"Local service providers",
];

const process = [
	{
		title: "Lead Flow Audit",
		text: "We review where inquiries come from, how fast your team responds, and where opportunities get lost.",
	},
	{
		title: "System Build",
		text: "We configure the AI scripts, intake questions, CRM stages, automations, calendar routing, and follow-up.",
	},
	{
		title: "Launch",
		text: "Your assistant goes live across your website, SMS, forms, and connected tools with testing before handoff.",
	},
	{
		title: "Optimization",
		text: "We improve answers, routing, and follow-up based on real customer conversations and booking outcomes.",
	},
];

const faqs = [
	{
		q: "Who is this built for?",
		a: "BK AI Systems is built for US service businesses that rely on inbound leads, appointments, consultations, quotes, or customer inquiries.",
	},
	{
		q: "What is included in the software package?",
		a: "Your package can include an AI chat assistant, conversational AI receptionist, GHL CRM setup, lead capture automation, a customer conversation dashboard, appointment routing, automated follow-up, installation, and ongoing support.",
	},
	{
		q: "Do I need to replace my current CRM or website?",
		a: "Usually no. We design the system around your current workflow and connect the tools you already use whenever possible, especially GoHighLevel for CRM, calendars, pipelines, and workflows.",
	},
	{
		q: "How fast can we launch?",
		a: "Most first versions can go live in 5 to 7 business days after access, intake details, and approval of the workflow.",
	},
	{
		q: "What happens after launch?",
		a: "We monitor the system, review conversations, improve prompts, and tune the workflow so it keeps getting better.",
	},
	{
		q: "Can I test the AI receptionist first?",
		a: "Yes. The goal of the free AI lead-flow audit is to show how an AI receptionist could work for your business before you commit.",
	},
	{
		q: "Is there a guarantee?",
		a: "Yes. We offer a 30-day money-back guarantee so you can move forward with less risk.",
	},
];

export default function HomePage() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [openFaq, setOpenFaq] = useState<number | null>(0);

	return (
		<>
			<style>{`
				* { box-sizing: border-box; }
				html { scroll-behavior: smooth; }
				body {
					margin: 0;
					color: #111827;
					background: #f8fafc;
					font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
				}
				a { color: inherit; text-decoration: none; }
				img { display: block; max-width: 100%; }
				button { font: inherit; }
				.page { min-height: 100vh; overflow: hidden; }
				.container { width: min(1160px, calc(100% - 40px)); margin: 0 auto; }

				.header {
					position: sticky;
					top: 0;
					z-index: 50;
					background: rgba(255,255,255,.92);
					backdrop-filter: blur(18px);
					border-bottom: 1px solid rgba(17,24,39,.08);
				}
				.nav {
					height: 76px;
					display: flex;
					align-items: center;
					justify-content: space-between;
					gap: 24px;
				}
				.brand {
					display: inline-flex;
					align-items: center;
					gap: 12px;
					font-weight: 850;
					letter-spacing: -.02em;
					white-space: nowrap;
				}
				.brand img { width: 42px; height: 42px; object-fit: contain; }
				.brand span { font-size: 18px; }
				.nav-links {
					display: flex;
					align-items: center;
					gap: 26px;
					color: #5b6678;
					font-size: 14px;
					font-weight: 700;
				}
				.nav-links a:hover { color: #111827; }
				.nav-actions { display: flex; align-items: center; gap: 12px; }
				.phone-link { color: #1155cc; font-size: 14px; font-weight: 800; }
				.btn {
					display: inline-flex;
					align-items: center;
					justify-content: center;
					min-height: 46px;
					padding: 0 20px;
					border-radius: 8px;
					border: 1px solid transparent;
					font-size: 14px;
					font-weight: 850;
					transition: transform .18s ease, box-shadow .18s ease, background .18s ease, border-color .18s ease;
				}
				.btn:hover { transform: translateY(-1px); }
				.btn-primary {
					background: #1155cc;
					color: #fff;
					box-shadow: 0 16px 34px rgba(17,85,204,.24);
				}
				.btn-primary:hover { background: #0d47ad; box-shadow: 0 20px 42px rgba(17,85,204,.3); }
				.btn-secondary {
					background: rgba(255,255,255,.92);
					color: #111827;
					border-color: rgba(255,255,255,.55);
				}
				.btn-outline {
					background: #fff;
					border-color: rgba(17,24,39,.14);
					color: #111827;
				}
				.menu-btn {
					display: none;
					width: 44px;
					height: 44px;
					border: 1px solid rgba(17,24,39,.14);
					border-radius: 8px;
					background: #fff;
					color: #111827;
					font-weight: 850;
				}
				.mobile-menu { display: none; padding: 0 0 18px; }
				.mobile-menu.open { display: grid; gap: 8px; }
				.mobile-menu a {
					padding: 12px 0;
					border-bottom: 1px solid rgba(17,24,39,.08);
					color: #4b5563;
					font-weight: 800;
				}

				.hero {
					position: relative;
					min-height: calc(100vh - 76px);
					display: flex;
					align-items: center;
					padding: 86px 0 110px;
					color: #fff;
					background-image:
						linear-gradient(90deg, rgba(5,10,20,.92) 0%, rgba(5,10,20,.72) 46%, rgba(5,10,20,.28) 100%),
						url("/hero-ai-ops.png");
					background-size: cover;
					background-position: center;
				}
				.hero::after {
					content: "";
					position: absolute;
					left: 0;
					right: 0;
					bottom: 0;
					height: 120px;
					background: linear-gradient(transparent, #f8fafc);
					pointer-events: none;
				}
				.hero-content {
					position: relative;
					z-index: 1;
					max-width: 760px;
				}
				.eyebrow {
					display: inline-flex;
					align-items: center;
					gap: 9px;
					padding: 8px 12px;
					border-radius: 999px;
					background: rgba(255,255,255,.12);
					border: 1px solid rgba(255,255,255,.18);
					color: #dbeafe;
					font-size: 12px;
					font-weight: 850;
					letter-spacing: .08em;
					text-transform: uppercase;
				}
				.eyebrow::before {
					content: "";
					width: 8px;
					height: 8px;
					border-radius: 50%;
					background: #22c55e;
					box-shadow: 0 0 0 5px rgba(34,197,94,.14);
				}
				h1 {
					margin: 22px 0 22px;
					font-size: clamp(44px, 6vw, 82px);
					line-height: .96;
					letter-spacing: -.06em;
				}
				.hero-copy {
					max-width: 660px;
					margin: 0;
					color: rgba(255,255,255,.78);
					font-size: 20px;
					line-height: 1.62;
				}
				.hero-actions {
					display: flex;
					flex-wrap: wrap;
					gap: 12px;
					margin-top: 32px;
				}
				.hero-proof {
					display: flex;
					flex-wrap: wrap;
					gap: 16px;
					margin-top: 28px;
					color: rgba(255,255,255,.75);
					font-size: 14px;
				}
				.hero-proof span {
					display: inline-flex;
					align-items: center;
					gap: 8px;
				}
				.hero-proof span::before {
					content: "";
					width: 6px;
					height: 6px;
					border-radius: 50%;
					background: #93c5fd;
				}

				.stats {
					position: relative;
					z-index: 2;
					margin-top: -58px;
					display: grid;
					grid-template-columns: repeat(4, 1fr);
					gap: 16px;
				}
				.stat {
					background: #fff;
					border: 1px solid rgba(17,24,39,.08);
					border-radius: 8px;
					padding: 24px;
					box-shadow: 0 18px 44px rgba(17,24,39,.09);
				}
				.stat strong {
					display: block;
					color: #1155cc;
					font-size: 30px;
					letter-spacing: -.04em;
					line-height: 1;
				}
				.stat span {
					display: block;
					color: #64748b;
					font-size: 13px;
					font-weight: 650;
					margin-top: 8px;
				}

				.founder-section {
					position: relative;
					padding: 96px 0;
					background:
						linear-gradient(135deg, rgba(17,85,204,.94), rgba(6,22,54,.96)),
						url("/hero-about.png");
					background-size: cover;
					background-position: center;
					color: #fff;
				}
				.founder-section::before {
					content: "";
					position: absolute;
					inset: 0;
					background:
						radial-gradient(circle at 12% 18%, rgba(125,211,252,.32), transparent 34%),
						linear-gradient(90deg, rgba(3,7,18,.36), rgba(3,7,18,.08));
					pointer-events: none;
				}
				.founder-grid {
					position: relative;
					z-index: 1;
					display: grid;
					grid-template-columns: 1.02fr .98fr;
					gap: 64px;
					align-items: center;
				}
				.founder-copy { max-width: 590px; }
				.founder-copy h2 {
					margin: 12px 0 22px;
					color: #fff;
					font-size: clamp(38px, 5vw, 68px);
					line-height: .98;
				}
				.founder-copy p {
					margin: 0 0 20px;
					color: rgba(255,255,255,.84);
					font-size: 18px;
					line-height: 1.68;
				}
				.founder-copy .eyebrow { background: rgba(255,255,255,.14); }
				.founder-actions {
					display: flex;
					flex-wrap: wrap;
					gap: 12px;
					margin-top: 30px;
				}
				.founder-photo {
					position: relative;
					border-radius: 8px;
					overflow: hidden;
					box-shadow: 0 32px 80px rgba(3,7,18,.36);
					border: 1px solid rgba(255,255,255,.22);
					background: rgba(255,255,255,.08);
				}
				.founder-photo img {
					width: 100%;
					height: 560px;
					object-fit: cover;
					object-position: center 18%;
				}
				.founder-note {
					position: absolute;
					left: 18px;
					right: 18px;
					bottom: 18px;
					display: flex;
					justify-content: space-between;
					gap: 18px;
					padding: 16px 18px;
					border-radius: 8px;
					background: rgba(3,7,18,.74);
					backdrop-filter: blur(14px);
					color: rgba(255,255,255,.82);
					font-size: 13px;
					line-height: 1.45;
				}
				.founder-note strong {
					display: block;
					color: #fff;
					font-size: 15px;
				}

				.section { padding: 92px 0; }
				.section.white { background: #fff; }
				.section-head {
					max-width: 760px;
					margin-bottom: 42px;
				}
				.section-head.center {
					margin-left: auto;
					margin-right: auto;
					text-align: center;
				}
				.kicker {
					color: #1155cc;
					font-size: 12px;
					font-weight: 900;
					letter-spacing: .12em;
					text-transform: uppercase;
				}
				h2 {
					margin: 10px 0 14px;
					color: #111827;
					font-size: clamp(32px, 4vw, 52px);
					line-height: 1.06;
					letter-spacing: -.045em;
				}
				.section-head p,
				.lead {
					margin: 0;
					color: #5f6b7b;
					font-size: 17px;
					line-height: 1.68;
				}

				.problem-grid {
					display: grid;
					grid-template-columns: 1.05fr .95fr;
					gap: 42px;
					align-items: start;
				}
				.problem-panel {
					background: #111827;
					color: #fff;
					border-radius: 8px;
					padding: 34px;
				}
				.problem-panel h3 { margin: 0 0 16px; font-size: 25px; letter-spacing: -.03em; }
				.problem-panel p { margin: 0; color: #cbd5e1; line-height: 1.7; }
				.loss-list {
					display: grid;
					gap: 12px;
					margin-top: 24px;
				}
				.loss-item {
					display: flex;
					gap: 12px;
					padding: 14px;
					border-radius: 8px;
					background: rgba(255,255,255,.06);
					color: #e5e7eb;
				}
				.loss-item strong { color: #fff; }
				.solution-card {
					background: #fff;
					border: 1px solid rgba(17,24,39,.09);
					border-radius: 8px;
					padding: 32px;
					box-shadow: 0 14px 40px rgba(17,24,39,.07);
				}
				.solution-card img {
					width: 100%;
					height: 255px;
					object-fit: cover;
					border-radius: 8px;
					margin-bottom: 24px;
				}

				.service-grid {
					display: grid;
					grid-template-columns: repeat(4, 1fr);
					gap: 16px;
				}
				.service-card, .industry-card, .included-card, .faq-item {
					background: #fff;
					border: 1px solid rgba(17,24,39,.09);
					border-radius: 8px;
					box-shadow: 0 12px 32px rgba(17,24,39,.05);
				}
				.service-card {
					padding: 26px;
					min-height: 238px;
				}
				.card-num {
					width: 38px;
					height: 38px;
					display: grid;
					place-items: center;
					border-radius: 8px;
					background: #eaf1ff;
					color: #1155cc;
					font-weight: 900;
					margin-bottom: 26px;
				}
				.service-card h3, .industry-card h3 {
					margin: 0 0 10px;
					color: #111827;
					font-size: 19px;
					letter-spacing: -.02em;
				}
				.service-card p, .industry-card p {
					margin: 0;
					color: #64748b;
					line-height: 1.62;
					font-size: 14px;
				}
				.included-grid {
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					gap: 16px;
				}
				.included-card {
					padding: 24px;
				}
				.included-card h3 {
					margin: 0 0 10px;
					color: #111827;
					font-size: 18px;
					letter-spacing: -.02em;
				}
				.included-card p {
					margin: 0;
					color: #64748b;
					font-size: 14px;
					line-height: 1.62;
				}

				.split {
					display: grid;
					grid-template-columns: .95fr 1.05fr;
					gap: 56px;
					align-items: center;
				}
				.image-frame {
					border-radius: 8px;
					overflow: hidden;
					box-shadow: 0 26px 60px rgba(17,24,39,.16);
					border: 1px solid rgba(17,24,39,.08);
				}
				.image-frame img {
					width: 100%;
					height: 430px;
					object-fit: cover;
				}
				.check-list {
					display: grid;
					gap: 15px;
					margin-top: 28px;
				}
				.check-item {
					display: grid;
					grid-template-columns: 30px 1fr;
					gap: 12px;
					align-items: start;
					color: #4b5563;
					line-height: 1.58;
				}
				.check {
					width: 30px;
					height: 30px;
					display: grid;
					place-items: center;
					border-radius: 50%;
					background: #dcfce7;
					color: #15803d;
					font-weight: 900;
				}

				.process-grid {
					display: grid;
					grid-template-columns: repeat(4, 1fr);
					gap: 16px;
					counter-reset: step;
				}
				.process-card {
					background: #111827;
					color: #fff;
					border-radius: 8px;
					padding: 28px;
					min-height: 245px;
				}
				.process-card::before {
					counter-increment: step;
					content: "Step " counter(step);
					display: inline-block;
					color: #93c5fd;
					font-size: 12px;
					font-weight: 900;
					letter-spacing: .1em;
					text-transform: uppercase;
					margin-bottom: 40px;
				}
				.process-card h3 {
					margin: 0 0 10px;
					font-size: 20px;
					letter-spacing: -.02em;
				}
				.process-card p {
					margin: 0;
					color: #cbd5e1;
					line-height: 1.62;
					font-size: 14px;
				}

				.industry-grid {
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					gap: 16px;
				}
				.industry-card { padding: 24px; }
				.about-card {
					background: #fff;
					border: 1px solid rgba(17,24,39,.09);
					border-radius: 8px;
					padding: 32px;
					box-shadow: 0 14px 40px rgba(17,24,39,.07);
				}
				.about-card h2 { margin-top: 0; }
				.about-card p {
					color: #5f6b7b;
					font-size: 16px;
					line-height: 1.7;
				}
				.about-layout {
					display: grid;
					grid-template-columns: .9fr 1.1fr;
					gap: 24px;
					align-items: stretch;
				}
				.about-stat {
					display: grid;
					gap: 16px;
					align-content: start;
					background: #111827;
					color: #fff;
					border-radius: 8px;
					padding: 32px;
				}
				.about-stat strong {
					font-size: clamp(52px, 8vw, 92px);
					line-height: .9;
					letter-spacing: -.07em;
				}
				.about-stat span {
					color: #93c5fd;
					font-weight: 900;
					letter-spacing: .08em;
					text-transform: uppercase;
					font-size: 12px;
				}
				.about-columns {
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					gap: 16px;
					margin-top: 24px;
				}
				.mini-panel {
					background: #f8fafc;
					border: 1px solid rgba(17,24,39,.08);
					border-radius: 8px;
					padding: 22px;
				}
				.mini-panel h3 {
					margin: 0 0 12px;
					font-size: 18px;
					letter-spacing: -.02em;
				}
				.clean-list {
					list-style: none;
					margin: 0;
					padding: 0;
					display: grid;
					gap: 10px;
					color: #4b5563;
					font-size: 14px;
					line-height: 1.45;
				}
				.clean-list li {
					display: grid;
					grid-template-columns: 18px 1fr;
					gap: 8px;
				}
				.clean-list li::before {
					content: "\\2713";
					color: #15803d;
					font-weight: 900;
				}
				.blog-panel {
					background: #fff;
					border: 1px solid rgba(17,24,39,.09);
					border-radius: 8px;
					padding: 32px;
					box-shadow: 0 14px 40px rgba(17,24,39,.07);
				}
				.blog-panel p {
					margin: 0;
					color: #5f6b7b;
					font-size: 16px;
					line-height: 1.7;
				}

				.guarantee {
					background: #0f172a;
					color: #fff;
					padding: 78px 0;
				}
				.guarantee-box {
					display: grid;
					grid-template-columns: 1fr auto;
					gap: 34px;
					align-items: center;
				}
				.guarantee h2 { color: #fff; margin-top: 0; }
				.guarantee p { color: #cbd5e1; max-width: 690px; line-height: 1.7; margin: 0; }
				.guarantee-badge {
					min-width: 220px;
					border: 1px solid rgba(255,255,255,.18);
					border-radius: 8px;
					padding: 24px;
					text-align: center;
					background: rgba(255,255,255,.06);
				}
				.guarantee-badge strong {
					display: block;
					font-size: 42px;
					letter-spacing: -.05em;
				}
				.guarantee-badge span { color: #cbd5e1; font-size: 13px; font-weight: 700; }

				.faq-list {
					max-width: 890px;
					margin: 0 auto;
					display: grid;
					gap: 12px;
				}
				.faq-item { overflow: hidden; }
				.faq-q {
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: space-between;
					gap: 20px;
					border: 0;
					background: transparent;
					padding: 21px 22px;
					color: #111827;
					text-align: left;
					font-weight: 850;
					cursor: pointer;
				}
				.faq-a {
					padding: 0 22px 22px;
					color: #64748b;
					line-height: 1.68;
				}

				.final-cta {
					padding: 92px 0;
					background: #fff;
				}
				.final-box {
					display: grid;
					grid-template-columns: 1fr auto;
					gap: 34px;
					align-items: center;
					padding: 38px;
					border-radius: 8px;
					background: #eef4ff;
					border: 1px solid #cfe0ff;
				}
				.final-box h2 { margin-top: 0; }
				.final-box p { margin: 0; color: #4b5563; line-height: 1.65; max-width: 690px; }
				.final-actions {
					display: flex;
					flex-wrap: wrap;
					gap: 12px;
					justify-content: flex-end;
				}

				.footer {
					background: #111827;
					color: #cbd5e1;
					padding: 36px 0;
				}
				.footer-inner {
					display: flex;
					align-items: center;
					justify-content: space-between;
					gap: 24px;
					font-size: 14px;
				}
				.footer .brand { color: #fff; }
				.footer-links {
					display: flex;
					gap: 18px;
					font-weight: 800;
				}

				@media (max-width: 1020px) {
					.nav-links, .nav-actions { display: none; }
					.menu-btn { display: inline-grid; place-items: center; }
					.stats, .service-grid, .included-grid, .process-grid, .industry-grid { grid-template-columns: repeat(2, 1fr); }
					.problem-grid, .split, .about-layout, .founder-grid, .guarantee-box, .final-box { grid-template-columns: 1fr; }
					.final-actions { justify-content: flex-start; }
					.founder-photo img { height: 480px; }
				}
				@media (max-width: 660px) {
					.container { width: min(100% - 28px, 1160px); }
					.nav { height: 68px; }
					.brand span { font-size: 16px; }
					.hero { min-height: auto; padding: 64px 0 104px; }
					.hero-copy { font-size: 17px; }
					.stats, .service-grid, .included-grid, .process-grid, .industry-grid { grid-template-columns: 1fr; }
					.founder-section { padding: 68px 0; }
					.founder-grid { gap: 34px; }
					.founder-copy p { font-size: 16px; }
					.founder-photo img { height: 390px; }
					.founder-note { position: static; border-radius: 0; }
					.section, .final-cta { padding: 68px 0; }
					.image-frame img, .solution-card img { height: 260px; }
					.problem-panel, .solution-card, .final-box { padding: 24px; }
					.about-columns { grid-template-columns: 1fr; }
					.footer-inner { flex-direction: column; align-items: flex-start; }
				}
			`}</style>

			<div className="page">
				<header className="header">
					<div className="container">
						<div className="nav">
							<a className="brand" href="#top">
								<img src="/bk-logo-transparent.png" alt="BK AI Systems" />
								<span>BK AI Systems</span>
							</a>
							<nav className="nav-links" aria-label="Main navigation">
								<a href="/">Home</a>
								<a href="/about">About</a>
								<a href="/blog">Blog</a>
								<a href="/contact">Contact Us</a>
							</nav>
							<div className="nav-actions">
								<a className="phone-link" href={PHONE_HREF}>{PHONE}</a>
								<a className="btn btn-primary" href="/contact">Contact Us</a>
							</div>
							<button className="menu-btn" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation">
								{menuOpen ? "Close" : "Menu"}
							</button>
						</div>
						<div className={`mobile-menu${menuOpen ? " open" : ""}`}>
							<a href="/" onClick={() => setMenuOpen(false)}>Home</a>
							<a href="/about" onClick={() => setMenuOpen(false)}>About</a>
							<a href="/blog" onClick={() => setMenuOpen(false)}>Blog</a>
							<a href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
						</div>
					</div>
				</header>

				<main id="top">
					<section className="hero">
						<div className="container">
							<div className="hero-content">
								<div className="eyebrow">Built for US service businesses</div>
								<h1>Book more customers from the leads you already get.</h1>
								<p className="hero-copy">
									BK AI Systems installs intelligent AI and GHL CRM infrastructure that responds instantly, qualifies leads, books appointments, and follows up automatically, 24/7.
								</p>
								<div className="hero-actions">
									<a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Test an AI Receptionist</a>
									<a className="btn btn-secondary" href={PHONE_HREF}>Call {PHONE}</a>
								</div>
								<div className="hero-proof">
									<span>Test it for your business in 60 seconds</span>
									<span>Done-for-you setup</span>
									<span>30-day money-back guarantee</span>
								</div>
							</div>
						</div>
					</section>

					<div className="container">
						<div className="stats">
							{outcomes.map((item) => (
								<div className="stat" key={item.label}>
									<strong>{item.value}</strong>
									<span>{item.label}</span>
								</div>
							))}
						</div>
					</div>

					<section className="founder-section" id="founder">
						<div className="container">
							<div className="founder-grid">
								<div className="founder-copy">
									<div className="eyebrow">Meet the founder</div>
									<h2>Hi, I&apos;m Chris Bell.</h2>
									<p>
										At BK AI Systems, we are a team of dedicated professionals committed to revolutionizing the way businesses operate through advanced automation solutions.
									</p>
									<p>
										With years of experience in the industry, we specialize in helping companies streamline their workflows, integrate tools seamlessly, and achieve greater efficiency with user-friendly automation software.
									</p>
									<p>
										Our mission is to empower businesses to focus on growth and innovation while we handle the repetitive tasks that slow them down.
									</p>
									<div className="founder-actions">
										<a className="btn btn-secondary" href="/about">About BK AI Systems</a>
										<a className="btn btn-primary" href="/contact">Start Automating Today</a>
									</div>
								</div>
								<div className="founder-photo">
									<img src="/img-founder.png" alt="Chris Bell, founder of BK AI Systems" />
									<div className="founder-note">
										<div>
											<strong>BK AI Systems</strong>
											AI receptionists, GHL automation, and lead response systems.
										</div>
										<div>Built for 24/7 customer communication.</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="section" id="problem">
						<div className="container">
							<div className="problem-grid">
								<div className="problem-panel">
									<div className="kicker">The Revenue Leak</div>
									<h2 style={{ color: "#fff", marginBottom: 16 }}>Most leads are lost before a salesperson ever talks to them.</h2>
									<p>
										US customers expect fast answers. If your team misses a call, waits hours to reply, forgets a follow-up, or manually copies information into a CRM, revenue quietly slips away.
									</p>
									<div className="loss-list">
										<div className="loss-item"><strong>Slow response:</strong> prospects move to the next business.</div>
										<div className="loss-item"><strong>Manual intake:</strong> details get missed or entered late.</div>
										<div className="loss-item"><strong>No follow-up:</strong> interested buyers go cold.</div>
										<div className="loss-item"><strong>Disconnected tools:</strong> chat, calendar, CRM, and reporting do not work together.</div>
									</div>
								</div>
								<div className="solution-card">
									<img src="/workflow-ghl-crm.png" alt="GHL CRM automation workflow for lead capture and appointment booking" />
									<div className="kicker">The Fix</div>
									<h2 style={{ fontSize: "clamp(28px,3vw,40px)" }}>An AI front desk connected to your GHL pipeline.</h2>
									<p className="lead">
										The system answers, qualifies, books, records, and triggers GHL follow-up automatically while your team focuses on the conversations that are ready to close.
									</p>
								</div>
							</div>
						</div>
					</section>

					<section className="section white" id="services">
						<div className="container">
							<div className="section-head center">
								<div className="kicker">What You Get</div>
								<h2>A complete customer response system, not another tool to manage.</h2>
								<p>We build the automation around your actual lead flow, your services, your booking process, and the way your team sells.</p>
							</div>
							<div className="service-grid">
								{services.map((service, index) => (
									<div className="service-card" key={service.title}>
										<div className="card-num">{index + 1}</div>
										<h3>{service.title}</h3>
										<p>{service.text}</p>
									</div>
								))}
							</div>
						</div>
					</section>

					<section className="section">
						<div className="container">
							<div className="section-head center">
								<div className="kicker">What Is Included</div>
								<h2>Everything needed to capture, qualify, track, and follow up.</h2>
								<p>From manual lead handling to an organized AI + GHL system, each component is designed to save time and create more revenue-generating conversations.</p>
							</div>
							<div className="included-grid">
								{included.map((item) => (
									<div className="included-card" key={item.title}>
										<h3>{item.title}</h3>
										<p>{item.text}</p>
									</div>
								))}
							</div>
						</div>
					</section>

					<section className="section">
						<div className="container">
							<div className="split">
								<div className="image-frame">
									<img src="/workflow-ghl-crm.png" alt="GoHighLevel CRM workflow automation" />
								</div>
								<div>
									<div className="kicker">GHL Workflow Automation</div>
									<h2>From first message to GHL follow-up, every step has a job.</h2>
									<p className="lead">
										Professional websites convert when the offer is clear and the follow-up is fast. BK AI Systems connects AI intake with GoHighLevel so every qualified lead lands in the right pipeline, calendar flow, and follow-up sequence.
									</p>
									<div className="check-list">
										{[
											"Instant answers for common service, pricing, and availability questions.",
											"Structured qualification so your team knows who is worth calling first.",
											"Appointment routing that moves ready buyers directly to your GHL calendar.",
											"GHL contact records, notes, tags, and pipeline updates your team can actually use.",
											"GHL workflow triggers for SMS, email, missed-call text-back, and reactivation follow-up.",
										].map((item) => (
											<div className="check-item" key={item}>
												<div className="check">{"\u2713"}</div>
												<div>{item}</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="section white">
						<div className="container">
							<div className="section-head center">
								<div className="kicker">Best Fit</div>
								<h2>Built for local and appointment-based businesses.</h2>
								<p>If customers call, message, request quotes, book consultations, or ask service questions, AI response automation can improve your conversion path.</p>
							</div>
							<div className="industry-grid">
								{industries.map((industry) => (
									<div className="industry-card" key={industry}>
										<h3>{industry}</h3>
										<p>Capture inquiries, qualify demand, and route the right prospects to your team faster.</p>
									</div>
								))}
							</div>
						</div>
					</section>

					<section className="section" id="process">
						<div className="container">
							<div className="section-head center">
								<div className="kicker">How We Launch</div>
								<h2>A simple rollout designed to get live fast.</h2>
								<p>We handle the technical setup, your team reviews the customer experience, and the system improves as real conversations come in.</p>
							</div>
							<div className="process-grid">
								{process.map((item) => (
									<div className="process-card" key={item.title}>
										<h3>{item.title}</h3>
										<p>{item.text}</p>
									</div>
								))}
							</div>
						</div>
					</section>

					<section className="guarantee">
						<div className="container">
							<div className="guarantee-box">
								<div>
									<div className="kicker">Risk Reversal</div>
									<h2>Try the system with a 30-day money-back guarantee.</h2>
									<p>
										We are confident that AI reception and GHL automation can improve the way your business handles leads. If the system is not the right fit within the first 30 days, you are protected.
									</p>
								</div>
								<div className="guarantee-badge">
									<strong>30</strong>
									<span>Day Guarantee</span>
								</div>
							</div>
						</div>
					</section>

					<section className="section white" id="faq">
						<div className="container">
							<div className="section-head center">
								<div className="kicker">FAQ</div>
								<h2>Questions US business owners ask before starting.</h2>
							</div>
							<div className="faq-list">
								{faqs.map((faq, index) => (
									<div className="faq-item" key={faq.q}>
										<button className="faq-q" type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
											<span>{faq.q}</span>
											<span>{openFaq === index ? "-" : "+"}</span>
										</button>
										{openFaq === index ? <div className="faq-a">{faq.a}</div> : null}
									</div>
								))}
							</div>
						</div>
					</section>

				</main>

				<footer className="footer">
					<div className="container">
						<div className="footer-inner">
							<a className="brand" href="#top">
								<img src="/bk-logo-transparent.png" alt="BK AI Systems" />
								<span>BK AI Systems</span>
							</a>
							<div>&copy; 2026 BK AI Systems. All rights reserved.</div>
							<div className="footer-links">
								<a href="/">Home</a>
								<a href="/about">About</a>
								<a href="/blog">Blog</a>
								<a href="/contact">Contact Us</a>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
}
