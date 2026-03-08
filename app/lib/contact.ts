/**
 * Single source of truth for contact info. Update PHONE_DIGITS here to change
 * the phone number everywhere on the site.
 */
const PHONE_DIGITS = "3855809252";

/** For tel: links (e.g. href="tel:3854842230") */
export const PHONE_TEL = `tel:${PHONE_DIGITS}`;

/** For display in UI, e.g. "(385) 484-2230" */
export const PHONE_DISPLAY = `(${PHONE_DIGITS.slice(0, 3)}) ${PHONE_DIGITS.slice(3, 6)}-${PHONE_DIGITS.slice(6)}`;

/** For schema/metadata, e.g. "+1-385-484-2230" */
export const PHONE_E164 = `+1-${PHONE_DIGITS.slice(0, 3)}-${PHONE_DIGITS.slice(3, 6)}-${PHONE_DIGITS.slice(6)}`;

/** For compact display (e.g. social images), e.g. "385-484-2230" */
export const PHONE_HYPHENATED = `${PHONE_DIGITS.slice(0, 3)}-${PHONE_DIGITS.slice(3, 6)}-${PHONE_DIGITS.slice(6)}`;
