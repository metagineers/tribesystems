# TribeSystems social share image

## Goal

Replace the payment-card-led social preview image with a memorable visual that establishes TribeSystems as a fan-engagement brand.

## Approved direction

A photorealistic, cinematic stadium crowd at the high point of a sporting event. Fans are celebrating under dramatic floodlights and controlled orange atmospheric light, with navy/charcoal shadows. The composition should feel premium, energetic, and human, while remaining readable at thumbnail size.

The image will use a 1.91:1 social-card composition (1200 × 630 pixels). It should contain no cards, payment devices, financial-brand marks, generated text, or watermark.

## Brand treatment

The existing Tribe logo (`public/logo.png`) will be composited onto the final image after generation. This preserves its precise mark and wordmark instead of relying on unreliable generated lettering. The logo sits in the upper-left with adequate clear space and a subtle shadow only if needed for contrast.

The final visible line is: "FANS ARE THE CHANNEL." It will be rendered as real typography in the lower-left, leaving the right and central frame for the fan celebration. The platform-provided title and description remain unchanged.

## Implementation

1. Generate a photorealistic 1.91:1 stadium-crowd visual with no text or logos.
2. Review the result for energy, legibility, natural faces, and absence of payment-card imagery.
3. Composite the real Tribe logo and headline, saving a new versioned public asset rather than overwriting the existing `card.jpg`.
4. Update global Open Graph and Twitter metadata to reference the new asset.
5. Validate the rendered dimensions and production build before deployment.

## Acceptance criteria

- The card reads as a fan-engagement sports brand at a glance.
- The Tribe logo is faithful, sharp, and fully visible.
- No Visa card or payment-card visual remains in the social metadata image.
- Open Graph and Twitter use the same 1200 × 630 asset.
