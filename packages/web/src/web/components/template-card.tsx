import { isExternal, type Template } from "../lib/site";

const ICONS: Record<Template["category"], string> = {
	Snapshot: "M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5",
	Workflow: "M5 5h5v5H5zM14 14h5v5h-5zM10 7.5h4a3 3 0 0 1 3 3V14",
	Funnel: "M3 5h18l-7 8v6l-4-2v-4L3 5Z",
	"AI Agent": "M12 3v3M8 21h8M5 9h14v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9ZM9.5 13v1M14.5 13v1",
};

export function TemplateCard({ template: t }: { template: Template }) {
	const external = isExternal(t.checkoutUrl);
	return (
		<article className="tpl-card">
			<div className={`tpl-thumb ${t.category === "AI Agent" ? "AI" : t.category}`} aria-hidden="true">
				<svg viewBox="0 0 24 24"><path d={ICONS[t.category]} /></svg>
			</div>
			<div className="tpl-top">
				<span className="tag" style={{ background: "rgba(5,12,26,.8)" }}>{t.category}</span>
				{t.badge ? <span className="badge">{t.badge}</span> : null}
			</div>
			<h3>{t.name}</h3>
			<p>{t.tagline}</p>
			<ul className="ticks">
				{t.features.map((f) => <li key={f}>{f}</li>)}
			</ul>
			<div className="tpl-foot">
				{t.price ? <span className="price">{t.price}</span> : <span className="tag">{t.comingSoon ? "Coming soon" : "GHL template"}</span>}
				<a
					className="btn btn-primary btn-sm"
					href={t.checkoutUrl}
					{...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
					aria-label={`Get ${t.name}`}
				>
					{t.comingSoon ? "Join waitlist" : "Get template"}
				</a>
			</div>
		</article>
	);
}
