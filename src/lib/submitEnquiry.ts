/**
 * Enquiry delivery. INTENTIONALLY NOT CONNECTED in this phase.
 *
 * Nothing is transmitted, stored or logged. Delivery (recipient, route, privacy
 * notice and retention) is still TBC; see docs/ROADMAP_AND_OPEN_DECISIONS.md.
 * When approved, implement the server-side route here and return { ok: true }
 * only after genuine delivery.
 */
export type SubmitResult = { ok: true } | { ok: false; reason: "not-configured" };

export async function submitEnquiry(): Promise<SubmitResult> {
  return { ok: false, reason: "not-configured" };
}
