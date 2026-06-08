const PHONE = "1-724-201-3759";
const PHONE_HREF = "tel:+17242013759";

const advantages = [
	"24/7 automated customer communication",
	"Instant response times",
	"Higher lead capture rates",
	"Lower staffing costs",
	"Scalable AI systems that grow with your business",
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
	return (
		<>
			<PageStyles />
			<div className="page">
				<SiteHeader />
				<main>
					<section className="hero about-hero">
						<div className="container">
							<div className="hero-content">
								<div className="eyebrow">About Us</div>
								<h1>10 years of experience building smarter business systems.</h1>
								<p>
									BK AI Systems is an AI automation agency that provides businesses with intelligent conversational assistants designed to handle customer communication 24/7.
								</p>
							</div>
						</div>
					</section>

					<section className="section">
						<div className="container split">
							<div>
								<div className="kicker">About BK AI Systems</div>
								<h2>AI receptionists and chatbots that help businesses never miss another opportunity.</h2>
							</div>
							<div className="copy-card">
								<p>
									We specialize in AI chatbots and conversational AI receptionists powered by ChatGPT, helping businesses capture leads, answer customer questions, and automate routine communication without hiring additional staff.
								</p>
								<p>
									Our goal is simple: help businesses never miss another opportunity.
								</p>
							</div>
						</div>
					</section>

					<section className="section white">
						<div className="container grid-2">
							<div className="panel dark">
								<div className="kicker">Vision</div>
								<h2>Business communication should be intelligent, automated, and always available.</h2>
								<p>
									BK AI Systems was created to help businesses transition into that future by providing affordable AI receptionists and chatbots that work around the clock.
								</p>
								<p>
									As artificial intelligence continues to evolve, our mission is to help companies stay ahead by integrating powerful AI tools into everyday business operations.
								</p>
							</div>
							<div className="panel">
								<div className="kicker">Work Smarter with AI</div>
								<h2>Your AI receptionist is ready to work 24/7.</h2>
								<p>
									BK AI Systems makes it easy for businesses to deploy powerful conversational AI without needing technical expertise.
								</p>
								<ul className="clean-list">
									{advantages.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</div>
						</div>
					</section>

					<section className="section">
						<div className="container">
							<div className="section-head center">
								<div className="kicker">Why Choose Us</div>
								<h2>What we do, who we help, and why BK AI Systems works.</h2>
								<p>
									By automating front-line communication, businesses can improve response time, increase conversions, and free their teams to focus on higher-value work.
								</p>
							</div>
							<div className="grid-3">
								<div className="panel">
									<h3>What We Do</h3>
									<ul className="clean-list">
										{capabilities.map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</div>
								<div className="panel">
									<h3>Who We Can Help</h3>
									<ul className="clean-list">
										{industries.map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</div>
								<div className="panel">
									<h3>Why BK AI Systems</h3>
									<p>
										Traditional customer support and reception services can be expensive and limited by business hours. Our conversational assistants provide 24/7 communication, instant response times, higher lead capture rates, lower staffing costs, and scalable systems that grow with your business.
									</p>
								</div>
							</div>
						</div>
					</section>

					<section className="cta">
						<div className="container cta-box">
							<div>
								<div className="kicker">BK AI Systems For You</div>
								<h2>The ultimate solution to AI systems is here.</h2>
								<p>Have you been searching for a solution to AI systems? Look no further. Our solution is tailored for your business.</p>
							</div>
							<a className="btn btn-primary" href="/contact#book-a-call">Book a Call</a>
						</div>
					</section>
				</main>
				<SiteFooter />
			</div>
		</>
	);
}

function SiteHeader() {
	return (
		<header className="header">
			<div className="container nav">
				<a className="brand" href="/">
					<img src="/bk-logo-transparent.png" alt="BK AI Systems" />
					<span>BK AI Systems</span>
				</a>
				<nav className="nav-links" aria-label="Main navigation">
					<a href="/">Home</a>
					<a href="/about">About</a>
					<a href="/blog">Blog</a>
					<a href="/contact">Contact Us</a>
				</nav>
				<a className="phone-link" href={PHONE_HREF}>{PHONE}</a>
			</div>
		</header>
	);
}

function SiteFooter() {
	return (
		<footer className="footer">
			<div className="container footer-inner">
				<a className="brand" href="/">
					<img src="/bk-logo-transparent.png" alt="BK AI Systems" />
					<span>BK AI Systems</span>
				</a>
				<div>© 2026 BK AI Systems. All rights reserved.</div>
			</div>
		</footer>
	);
}

function PageStyles() {
	return (
		<style>{`
			*{box-sizing:border-box}body{margin:0;background:#f8fafc;color:#111827;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}a{color:inherit;text-decoration:none}.container{width:min(1160px,calc(100% - 40px));margin:0 auto}.header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.92);backdrop-filter:blur(18px);border-bottom:1px solid rgba(17,24,39,.08)}.nav{height:76px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand{display:inline-flex;align-items:center;gap:12px;font-weight:850;letter-spacing:-.02em;white-space:nowrap}.brand img{width:42px;height:42px;object-fit:contain}.nav-links{display:flex;gap:26px;color:#5b6678;font-size:14px;font-weight:700}.nav-links a:hover{color:#111827}.phone-link{color:#1155cc;font-size:14px;font-weight:800}.hero{padding:100px 0;color:#fff;background-image:linear-gradient(90deg,rgba(5,10,20,.92),rgba(5,10,20,.45)),url("/hero-about.png");background-size:cover;background-position:center}.hero-content{max-width:790px}.eyebrow,.kicker{color:#1155cc;font-size:12px;font-weight:900;letter-spacing:.12em;text-transform:uppercase}.hero .eyebrow{display:inline-flex;padding:8px 12px;border-radius:999px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.18);color:#dbeafe}h1{margin:22px 0;font-size:clamp(44px,6vw,78px);line-height:.98;letter-spacing:-.06em}h2{margin:10px 0 14px;font-size:clamp(30px,4vw,50px);line-height:1.06;letter-spacing:-.045em}.hero p,.section-head p,.panel p,.copy-card p,.cta p{font-size:17px;line-height:1.68;color:#5f6b7b}.hero p{font-size:20px;color:rgba(255,255,255,.78)}.section{padding:92px 0}.section.white{background:#fff}.split,.grid-2{display:grid;grid-template-columns:1fr 1fr;gap:36px;align-items:start}.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.panel,.copy-card{background:#fff;border:1px solid rgba(17,24,39,.09);border-radius:8px;padding:30px;box-shadow:0 14px 40px rgba(17,24,39,.07)}.panel.dark{background:#111827;color:#fff}.panel.dark h2{color:#fff}.panel.dark p{color:#cbd5e1}.panel h3{margin:0 0 14px;font-size:20px}.clean-list{list-style:none;margin:20px 0 0;padding:0;display:grid;gap:10px;color:#4b5563;font-size:14px;line-height:1.45}.clean-list li{display:grid;grid-template-columns:18px 1fr;gap:8px}.clean-list li:before{content:"✓";color:#15803d;font-weight:900}.section-head.center{text-align:center;max-width:780px;margin:0 auto 42px}.cta{background:#0f172a;color:#fff;padding:78px 0}.cta-box{display:grid;grid-template-columns:1fr auto;gap:34px;align-items:center}.cta h2{color:#fff}.cta p{color:#cbd5e1}.btn{display:inline-flex;align-items:center;justify-content:center;min-height:46px;padding:0 20px;border-radius:8px;font-size:14px;font-weight:850}.btn-primary{background:#1155cc;color:#fff}.footer{background:#111827;color:#cbd5e1;padding:36px 0}.footer-inner{display:flex;align-items:center;justify-content:space-between;gap:24px;font-size:14px}.footer .brand{color:#fff}@media(max-width:900px){.nav{height:auto;padding:14px 0;align-items:flex-start;flex-direction:column}.nav-links{flex-wrap:wrap}.split,.grid-2,.grid-3,.cta-box{grid-template-columns:1fr}.section{padding:68px 0}}
		`}</style>
	);
}
