import { Layout, usePageMeta } from "../components/layout";

const FEEDBACK_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe4XbyIi1fH14g8KF44dqA-fQu7hj36cOsJaCEGej5HQfX0zg/viewform?embedded=true";
const FEEDBACK_FORM_LINK = "https://forms.gle/epP4ENVGCr7UCTJT9";

export default function FeedbackPage() {
	usePageMeta("Leave Feedback | BK AI Systems", "Share your experience with BK AI Systems. The survey takes about two minutes.");

	return (
		<Layout>
			<section className="page-hero">
				<div className="container">
					<div className="kicker">Client feedback</div>
					<h1>Help us <span className="grad">serve you better.</span></h1>
					<p className="lead">Your experience matters. This short survey takes about two minutes and helps us improve across BK AI Systems and our partner websites.</p>
				</div>
			</section>
			<section className="section">
				<div className="container" style={{ maxWidth: 840 }}>
					<div className="form-frame panel-bracket" style={{ height: 1280 }}>
						<iframe src={FEEDBACK_FORM_URL} title="Client Service Feedback Survey" loading="lazy">Loading feedback form…</iframe>
					</div>
					<p className="fallback">Trouble viewing the form? <a href={FEEDBACK_FORM_LINK} target="_blank" rel="noopener noreferrer">Open the survey in a new tab</a>.</p>
				</div>
			</section>
		</Layout>
	);
}
