import { useEffect, useState, type ReactNode } from "react";
import { useLocation } from "wouter";
import { BOOK_CALL_PATH, BRAND, NAV_LINKS, PHONE, PHONE_HREF } from "../lib/site";

export function usePageMeta(title: string, description?: string) {
	useEffect(() => {
		document.title = title;
		if (description) {
			document.querySelector('meta[name="description"]')?.setAttribute("content", description);
		}
		window.scrollTo(0, window.location.hash ? window.scrollY : 0);
	}, [title, description]);
}

export function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="bk">
			<a className="skip-link" href="#main">Skip to content</a>
			<Header />
			<main id="main">{children}</main>
			<Footer />
		</div>
	);
}

function Header() {
	const [open, setOpen] = useState(false);
	const [path] = useLocation();

	useEffect(() => setOpen(false), [path]);

	const isActive = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));

	return (
		<header className="site-header">
			<div className="container nav">
				<a className="brand" href="/" aria-label={`${BRAND} home`}>
					<img src="/bk-logo-transparent.png" alt="" width={40} height={40} />
					<span>{BRAND}</span>
				</a>
				<nav className="nav-links" aria-label="Main navigation">
					{NAV_LINKS.map((l) => (
						<a key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined}>{l.label}</a>
					))}
				</nav>
				<div className="nav-actions">
					<a className="phone-link" href={PHONE_HREF}>{PHONE}</a>
					<a className="btn btn-primary" href={BOOK_CALL_PATH}>Book a Call</a>
				</div>
				<button
					className="menu-btn"
					type="button"
					aria-expanded={open}
					aria-controls="mobile-menu"
					onClick={() => setOpen((v) => !v)}
				>
					{open ? "Close" : "Menu"}
				</button>
			</div>
			<div id="mobile-menu" className={`mobile-menu${open ? " open" : ""}`}>
				<div className="container">
					{NAV_LINKS.map((l) => (
						<a key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined}>{l.label}</a>
					))}
					<a href="/feedback">Leave Feedback</a>
					<a className="btn btn-primary" href={BOOK_CALL_PATH}>Book a Call</a>
				</div>
			</div>
		</header>
	);
}

function Footer() {
	return (
		<footer className="site-footer">
			<div className="container footer-grid">
				<div>
					<a className="brand" href="/">
						<img src="/bk-logo-transparent.png" alt="" width={40} height={40} />
						<span>{BRAND}</span>
					</a>
					<p className="footer-note">AI receptionists, GHL automation and ready-made GrowthHub365 templates for service businesses.</p>
				</div>
				<div>
					<h4>Explore</h4>
					<a href="/">Home</a>
					<a href="/templates">Templates</a>
					<a href="/about">About</a>
					<a href="/blog">Blog</a>
				</div>
				<div>
					<h4>Get in touch</h4>
					<a href="/contact#book-a-call">Book a Call</a>
					<a href={PHONE_HREF}>{PHONE}</a>
					<a href="/feedback">Leave Feedback</a>
				</div>
			</div>
			<div className="container footer-bottom">&copy; 2026 {BRAND}. All rights reserved.</div>
		</footer>
	);
}

export function SectionHead({ kicker, title, children, center }: { kicker: string; title: string; children?: ReactNode; center?: boolean }) {
	return (
		<div className={`section-head${center ? " center" : ""}`}>
			<div className="kicker">{kicker}</div>
			<h2>{title}</h2>
			{children ? <p>{children}</p> : null}
		</div>
	);
}

export function CtaBand({ kicker, title, text, primary, secondary }: {
	kicker: string;
	title: string;
	text: string;
	primary: { href: string; label: string };
	secondary?: { href: string; label: string };
}) {
	return (
		<section className="section">
			<div className="container">
				<div className="cta-band panel-bracket">
					<div>
						<div className="kicker">{kicker}</div>
						<h2>{title}</h2>
						<p>{text}</p>
					</div>
					<div className="cta-actions">
						<a className="btn btn-primary" href={primary.href}>{primary.label}</a>
						{secondary ? <a className="btn btn-ghost" href={secondary.href}>{secondary.label}</a> : null}
					</div>
				</div>
			</div>
		</section>
	);
}
