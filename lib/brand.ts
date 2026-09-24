// Branding for this installation of Pages CMS (Monsignor Edward Pace High School).
// Every customized name and label comes from this file, so a rebrand is one edit.
// Colors live in app/globals.css (app) and components/email/theme.ts (emails).
// See BRANDING.md for the full list of files changed from upstream Pages CMS.

export const brand = {
  name: "Pace Website Editor",
  description: "Edit the Monsignor Edward Pace High School website.",
  signInHeading: "Sign in to edit the Pace website",
  signInHelp: "Need access? Ask the website administrator to invite you.",
  githubSignInLabel: "Administrators: sign in with GitHub",
  // Friendly names for repositories, shown in emails and browser tabs instead of
  // "owner/repo". Keyed by repository name only, so they survive a repo transfer.
  repoLabels: {
    "pace-high-website": "the Pace website",
  } as Record<string, string>,
};

/** A friendly name for a repository, e.g. "the Pace website", or "owner/repo" if none is set. */
export const repoLabel = (owner: string, repo: string) =>
  brand.repoLabels[repo.toLowerCase()] ?? `${owner}/${repo}`;
