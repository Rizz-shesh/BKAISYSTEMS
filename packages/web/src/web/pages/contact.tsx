const BOOKING_URL =
	"https://app.growthhub365.com/v2/location/oN7FYs5uP7gL7raoK7Nu/form-builder-v2/ELpsu0UWhFAK29q6gdvf";
const PHONE = "1-724-201-3759";
const PHONE_HREF = "tel:+17242013759";

export default function ContactPage() {
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
							<div className="kicker">Contact Us</div>
							<h1>Start automating today.</h1>
							<p>Have you been searching for a solution to AI systems? BK AI Systems can help you deploy a conversational AI receptionist built for your business.</p>
							<div className="actions">
								<a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a Free Consultation</a>
								<a className="btn btn-outline" href={PHONE_HREF}>Call {PHONE}</a>
							</div>
						</div>
						<div className="contact-card">
							<h2>Test an AI Receptionist for your business.</h2>
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
			</main>
			<footer className="footer"><div className="container">© 2026 BK AI Systems. All rights reserved.</div></footer>
		</>
	);
}

function Styles() {
	return <style>{`*{box-sizing:border-box}body{margin:0;background:#f8fafc;color:#111827;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}a{text-decoration:none;color:inherit}.container{width:min(1160px,calc(100% - 40px));margin:0 auto}.header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.92);backdrop-filter:blur(18px);border-bottom:1px solid rgba(17,24,39,.08)}.nav{height:76px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand{display:inline-flex;align-items:center;gap:12px;font-weight:850}.brand img{width:42px;height:42px}.nav-links{display:flex;gap:26px;color:#5b6678;font-size:14px;font-weight:700}.hero{min-height:calc(100vh - 76px);display:flex;align-items:center;padding:90px 0;background-image:linear-gradient(90deg,rgba(5,10,20,.92),rgba(5,10,20,.45)),url("/hero-contact.png");background-size:cover;background-position:center;color:#fff}.hero-grid{display:grid;grid-template-columns:1fr .85fr;gap:48px;align-items:center}.kicker{color:#93c5fd;font-size:12px;font-weight:900;letter-spacing:.12em;text-transform:uppercase}h1{margin:18px 0;font-size:clamp(46px,7vw,82px);line-height:.96;letter-spacing:-.06em}.hero p{color:rgba(255,255,255,.78);font-size:19px;line-height:1.65}.actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}.btn{display:inline-flex;align-items:center;justify-content:center;min-height:46px;padding:0 20px;border-radius:8px;font-size:14px;font-weight:850}.btn-primary{background:#1155cc;color:#fff}.btn-outline{background:#fff;color:#111827}.contact-card{background:#fff;color:#111827;border-radius:8px;padding:32px;box-shadow:0 24px 70px rgba(0,0,0,.24)}.contact-card h2{margin:0 0 12px;font-size:30px;letter-spacing:-.04em}.contact-card p{color:#64748b}.contact-card ul{margin:22px 0 0;padding-left:20px;color:#4b5563;line-height:1.8}.footer{background:#111827;color:#cbd5e1;padding:36px 0}@media(max-width:900px){.nav{height:auto;padding:14px 0;align-items:flex-start;flex-direction:column}.nav-links{flex-wrap:wrap}.hero-grid{grid-template-columns:1fr}}`}</style>;
}
