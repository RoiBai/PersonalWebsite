# Fatality-audit expansion illustration queue

Last updated: 2026-07-13

Status: complete — all 86 event-specific illustrations have been generated, converted to transparent 1024×1024 PNGs, and connected to their records. No event in the research library remains in `needs-generation` state.

This queue covers the 86 records in `data/fatalExpansionEvents.ts`. Each final asset must be exported to `public/animals/{event-slug}.png` at 1024×1024 with transparent background.

Global style prompt, included verbatim for every animal:

> clumsy, scribbly, and utterly pathetic way possible. Use same color, and make it look like it was drawn in MS Paint with a mouse. It should be vaguely similar but also not really, kind of matching but also off in a confusing, awkward way, with that low-quality pixel-by-pixel feel that really emphasizes how ridiculously bad it is.

Shared restrictions: transparent background; no text; no typography; no watermark; no frame; no gore; no blood; no wounds; no death scene; full body or clearly readable half body; calm three-quarter view; jagged mouse-drawn outline; uneven fill; awkward but species-identifiable anatomy; the same limited archive palette and outline thickness as the existing timeline.

Identity and body-shape references come only from each record's named institutional or research source. Original source photographs remain research-only unless their licence explicitly permits publication.

The source of truth for filenames, species, names, and identifying labels is the seed list in `data/fatalExpansionEvents.ts`.

Only five representative police-dog records remain in this expansion. Their prompts intentionally use different verified breed, coat, ear, age, and pose notes; a generated portrait must not be reused across two dogs. Nine former K9 slots were replaced with great auk, emu, ocean quahog, hippopotamus, bumblebee, American bison, eagles, goat, and migratory-songbird records to prevent one animal type from dominating the sequence.
