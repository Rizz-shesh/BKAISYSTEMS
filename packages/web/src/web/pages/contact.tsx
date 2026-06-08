import { useEffect } from "react";

const FORM_ID = "ELpsu0UWhFAK29q6gdvf";
const BOOKING_URL = `https://app.chrisbhustling.com/widget/form/${FORM_ID}`;
const FORM_EMBED_SCRIPT = "https://app.chrisbhustling.com/js/form_embed.js";
const PHONE = "1-724-201-3759";
const PHONE_HREF = "tel:+17242013759";

export default function ContactPage() {
	useEffect(() => {
		if (document.querySelector(`script[src="${FORM_EMBED_SCRIPT}"]`)) {
			return;
		}

		const script = document.createElement("script");
		script.src = FORM_EMBED_SCRIPT;
		script.async = true;
		document.body.appendChild(script);
	}, []);

	return (
		<>
			<Styles />
			<header className="header">
				<div className="container nav">
					<a className="brand" href="/"><img src="/bk-logo-transparent.png" alt="BK AI Systems" /><span>BK AI Systems</span></a>
					<nav className="nav-links"><a href="/">Home</a><a href="/about">About</a><a href="/blog">Blog</a><a href="/contact">Contact Us</a></nav>
				</div>
			</header>
			<main>
				<section className="hero">
					<div className="container hero-grid">
						<div>
							<div className="kicker hero-kicker">Contact Us</div>
							<h1>Start automating today.</h1>
							<p>Have you been searching for a solution to AI systems? BK AI Systems can help you deploy a conversational AI receptionist built for your business.</p>
							<div className="actions">
								<a className="btn btn-primary" href="#book-a-call">Book a Call</a>
								<a className="btn btn-outline" href={PHONE_HREF}>Call {PHONE}</a>
							</div>
						</div>
						<div className="contact-card">
							<h2>Book a call with BK AI Systems.</h2>
							<p>We will review how your business captures, responds to, and follows up with leads, then show where AI and GHL automation can increase booked opportunities.</p>
							<ul>
								<li>24/7 automated customer communication</li>
								<li>Instant response times</li>
								<li>Higher lead capture rates</li>
								<li>Scalable AI systems</li>
							</ul>
						</div>
					</div>
				</section>
				<section className="booking-section" id="book-a-call">
					<div className="container">
						<div className="booking-head">
							<div className="kicker">Book a Call</div>
							<h2>Choose a time and tell us about your business.</h2>
							<p>The form below connects directly to BK AI Systems in GHL so your request is captured and ready for follow-up.</p>
						</div>
						<div className="booking-frame">
							<iframe
								src={BOOKING_URL}
								style={{ width: "100%", height: "100%", border: "none", borderRadius: 0 }}
								id={`inline-${FORM_ID}`}
								data-layout='{"id":"INLINE"}'
								data-trigger-type="alwaysShow"
								data-trigger-value=""
								data-activation-type="alwaysActivated"
								data-activation-value=""
								data-deactivation-type="neverDeactivate"
								data-deactivation-value=""
								data-form-name="BK Ai System Form"
								data-height="1197"
								data-layout-iframe-id={`inline-${FORM_ID}`}
								data-form-id={FORM_ID}
								title="BK Ai System Form"
							/>
						</div>
					</div>
				</section>
			</main>
			<footer className="footer"><div className="container">&copy; 2026 BK AI Systems. All rights reserved.</div></footer>
		</>
	);
}

function Styles() {
	return <style>{`*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#f8fafc;color:#111827;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}a{text-decoration:none;color:inherit}.container{width:min(1160px,calc(100% - 40px));margin:0 auto}.header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.92);backdrop-filter:blur(18px);border-bottom:1px solid rgba(17,24,39,.08)}.nav{height:76px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand{display:inline-flex;align-items:center;gap:12px;font-weight:850}.brand img{width:42px;height:42px}.nav-links{display:flex;gap:26px;color:#5b6678;font-size:14px;font-weight:700}.hero{min-height:calc(100vh - 76px);display:flex;align-items:center;padding:90px 0;background-image:linear-gradient(90deg,rgba(5,10,20,.92),rgba(5,10,20,.45)),url("/hero-contact.png");background-size:cover;background-position:center;color:#fff}.hero-grid{display:grid;grid-template-columns:1fr .85fr;gap:48px;align-items:center}.kicker{color:#1155cc;font-size:12px;font-weight:900;letter-spacing:.12em;text-transform:uppercase}.hero-kicker{color:#93c5fd}h1{margin:18px 0;font-size:clamp(46px,7vw,82px);line-height:.96;letter-spacing:-.06em}h2{margin:10px 0 14px;font-size:clamp(30px,4vw,50px);line-height:1.06;letter-spacing:-.045em}.hero p{color:rgba(255,255,255,.78);font-size:19px;line-height:1.65}.actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}.btn{display:inline-flex;align-items:center;justify-content:center;min-height:46px;padding:0 20px;border-radius:8px;font-size:14px;font-weight:850}.btn-primary{background:#1155cc;color:#fff}.btn-outline{background:#fff;color:#111827}.contact-card{background:#fff;color:#111827;border-radius:8px;padding:32px;box-shadow:0 24px 70px rgba(0,0,0,.24)}.contact-card h2{margin:0 0 12px;font-size:30px;letter-spacing:-.04em}.contact-card p{color:#64748b}.contact-card ul{margin:22px 0 0;padding-left:20px;color:#4b5563;line-height:1.8}.booking-section{padding:88px 0;background:#fff}.booking-head{max-width:780px;margin:0 auto 34px;text-align:center}.booking-head p{margin:0;color:#5f6b7b;font-size:17px;line-height:1.68}.booking-frame{height:1197px;overflow:hidden;border:1px solid rgba(17,24,39,.1);border-radius:8px;background:#fff;box-shadow:0 20px 60px rgba(17,24,39,.08)}.footer{background:#111827;color:#cbd5e1;padding:36px 0}@media(max-width:900px){.nav{height:auto;padding:14px 0;align-items:flex-start;flex-direction:column}.nav-links{flex-wrap:wrap}.hero-grid{grid-template-columns:1fr}.booking-frame{height:1220px}}`}</style>;
}
