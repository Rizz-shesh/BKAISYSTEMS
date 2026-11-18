import { useEffect } from "react";
import { createPortal } from "react-dom";
import { WAITLIST_FORM_URL, WAITLIST_PARAM } from "../lib/site";

const EMBED_SRC = "https://link.msgsndr.com/js/form_embed.js";

export function WaitlistModal({ template, onClose }: { template: string; onClose: () => void }) {
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
		document.addEventListener("keydown", onKey);
		document.body.classList.add("wl-lock");

		if (!document.querySelector(`script[src="${EMBED_SRC}"]`)) {
			const s = document.createElement("script");
			s.src = EMBED_SRC;
			s.async = true;
			document.body.appendChild(s);
		}

		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.classList.remove("wl-lock");
		};
	}, [onClose]);

	const src = `${WAITLIST_FORM_URL}?${WAITLIST_PARAM}=${encodeURIComponent(template)}`;

	return createPortal(
		<div className="wl-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
			<div className="wl-box" role="dialog" aria-modal="true" aria-labelledby="wl-title">
				<div className="wl-head">
					<div>
						<h3 id="wl-title">Join the Waitlist</h3>
						<small>Template: {template}</small>
					</div>
					<button className="wl-close" type="button" aria-label="Close" onClick={onClose}>&times;</button>
				</div>
				<iframe src={src} title="Template waitlist form" />
			</div>
		</div>,
		document.body,
	);
}
