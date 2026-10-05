const FEEDBACK_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe4XbyIi1fH14g8KF44dqA-fQu7hj36cOsJaCEGej5HQfX0zg/viewform?embedded=true";
const FEEDBACK_FORM_LINK = "https://forms.gle/epP4ENVGCr7UCTJT9";

export default function FeedbackPage() {
	return (
		<>
			<Styles />
			<header className="header">
				<div className="container nav">
					<a className="brand" href="/"><img src="/bk-logo.png" alt="BK AI Systems" /><span>BK AI Systems</span></a>
					<nav className="nav-links" aria-label="Main navigation">
						<a href="/">Home</a><a href="/about">About</a><a href="/blog">Blog</a><a href="/contact">Contact Us</a><a href="/feedback" aria-current="page">Leave Feedback</a>
					</nav>
				</div>
			</header>
			<main>
				<section className="intro"><div className="container intro-copy"><div className="kicker">Client Feedback</div><h1>Help us serve you better.</h1><p>Your experience matters. This short survey takes about two minutes and helps us improve our services across BK AI Systems and our partner websites.</p></div></section>
				<section className="form-section"><div className="container"><div className="form-shell"><iframe src={FEEDBACK_FORM_URL} title="Client Service Feedback Survey" loading="lazy">Loading feedback form…</iframe></div><p className="form-fallback">Having trouble viewing the form? <a href={FEEDBACK_FORM_LINK} target="_blank" rel="noopener noreferrer">Open the survey in a new tab</a>.</p></div></section>
			</main>
			<footer className="footer"><div className="container footer-inner"><div>&copy; 2026 BK AI Systems. All rights reserved.</div><div className="footer-links"><a href="/contact">Contact Us</a><a href="/feedback">Leave Feedback</a></div></div></footer>
		</>
	);
}

function Styles() {
	return <style>{`*{box-sizing:border-box}body{margin:0;background:#f8fafc;color:#111827;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}a{text-decoration:none;color:inherit}.container{width:min(1160px,calc(100% - 40px));margin:0 auto}.header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.94);backdrop-filter:blur(18px);border-bottom:1px solid rgba(17,24,39,.08)}.nav{min-height:76px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand{display:inline-flex;align-items:center;gap:12px;font-weight:850;white-space:nowrap}.brand img{width:42px;height:42px;object-fit:contain}.nav-links{display:flex;align-items:center;gap:24px;color:#5b6678;font-size:14px;font-weight:700}.nav-links a:hover,.nav-links a[aria-current="page"]{color:#1155cc}.intro{padding:76px 0 54px;color:#fff;background:linear-gradient(135deg,#061636,#1155cc)}.intro-copy{max-width:800px}.kicker{color:#bfdbfe;font-size:12px;font-weight:900;letter-spacing:.12em;text-transform:uppercase}h1{margin:14px 0 16px;font-size:clamp(42px,6vw,72px);line-height:1;letter-spacing:-.055em}.intro p{max-width:720px;margin:0;color:rgba(255,255,255,.82);font-size:19px;line-height:1.65}.form-section{padding:56px 0 80px;background:#eef4ff}.form-shell{max-width:820px;height:1280px;margin:0 auto;overflow:hidden;border:1px solid rgba(17,24,39,.1);border-radius:12px;background:#fff;box-shadow:0 24px 70px rgba(17,24,39,.12)}.form-shell iframe{width:100%;height:100%;border:0}.form-fallback{text-align:center;color:#64748b;font-size:14px}.form-fallback a{color:#1155cc;font-weight:800;text-decoration:underline}.footer{background:#111827;color:#cbd5e1;padding:34px 0}.footer-inner{display:flex;justify-content:space-between;gap:24px;font-size:14px}.footer-links{display:flex;gap:20px;font-weight:800}@media(max-width:900px){.nav{padding:14px 0;align-items:flex-start;flex-direction:column}.nav-links{flex-wrap:wrap;gap:14px 18px}.intro{padding:58px 0 44px}.form-section{padding:34px 0 56px}.form-shell{height:1370px;border-radius:8px}.footer-inner{flex-direction:column}.footer-links{flex-wrap:wrap}}`}</style>;
}
