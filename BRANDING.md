# Pace branding

This fork of [Pages CMS](https://github.com/pages-cms/pages-cms) is branded as the
**Pace Website Editor** for Monsignor Edward Pace High School. The changes are kept
small so updates from upstream (GitHub's **Sync fork**) merge cleanly.

## What changed

| File | Change |
| --- | --- |
| `lib/brand.ts` | **New.** The name, sign-in wording, and friendly repository names. Edit this to change wording. |
| `app/globals.css` | Primary color is Pace Cardinal Red `#D32228` (a lighter red with dark text in dark mode). |
| `components/email/theme.ts` | Email button color, same red. |
| `app/icon.svg`, `public/images/email-logo.png` | The Spartan helmet in white on red (browser tab, sign-in page, emails). |
| `app/layout.tsx`, `components/document-title.tsx` | App name in browser tabs; tabs show "the Pace website" instead of "owner/repo". |
| `components/sign-in.tsx` | Pace heading and helmet; email sign-in first; GitHub sign-in labeled for administrators; a help line replaces the links to pagescms.org's terms (which cover their hosted service, not this installation). |
| `components/email/*.tsx`, `lib/actions/collaborator.ts`, `lib/auth.ts` | Email subjects and wording use the Pace name and "the Pace website". |

## Updating from upstream

1. On GitHub, click **Sync fork**. If GitHub reports a conflict, it will be in one of the files above.
2. Keep upstream's version of that file, then reapply the small change described in the table.
3. Vercel redeploys automatically.

Pages CMS is MIT licensed; the original license and credits are unchanged.
