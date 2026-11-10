import { useEffect } from "react";
import { Layout, usePageMeta } from "../components/layout";
import { BOOKING_URL, PHONE, PHONE_HREF } from "../lib/site";

const FORM_ID = "ELpsu0UWhFAK29q6gdvf";
const FORM_EMBED_SCRIPT = "https://app.chrisbhustling.com/js/form_embed.js";

export default function ContactPage() {
	usePageMeta("Contact & Book a Call | BK AI Systems", "Book a free AI lead-flow audit with BK AI Systems, or call 1-724-201-3759.");

	useEffect(() => {
		if (document.querySelector(`script[src="${FORM_EMBED_SCRIPT}"]`)) return;
		const script = document.createElement("script");
		script.src = FORM_EMBED_SCRIPT;
		script.async = true;
		document.body.appendChild(script);
	}, []);

	return (
		<Layout>
			<section className="page-hero">
				<div className="container">
					<div className="kicker">Contact us</div>
					<h1>Start <span className="grad">automating today.</span></h1>
					<p className="lead">Tell us how leads reach you today. We'll show where AI and GHL automation can turn more of them into booked appointments.</p>
				</div>
			</section>

			<section className="section" id="book-a-call">
				<div className="container contact-grid">
					<div style={{ display: "grid", gap: 22 }}>
						<div className="kicker">Book a call</div>
						<h2>Choose a time and tell us about your business.</h2>
						<p className="lead">The form connects directly to BK AI Systems in GHL so your request is captured and ready for follow-up.</p>
						<ul className="ticks">
							<li>24/7 automated customer communication</li>
							<li>Instant response times</li>
							<li>Higher lead capture rates</li>
							<li>Scalable AI systems</li>
						</ul>
						<div className="contact-actions">
							<a className="btn btn-primary" href={PHONE_HREF}>Call {PHONE}</a>
						</div>
					</div>
					<div>
						<div className="form-frame panel-bracket" style={{ height: 1197 }}>
							<iframe
								src={BOOKING_URL}
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
				</div>
			</section>
		</Layout>
	);
}
