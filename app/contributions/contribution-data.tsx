export interface Contribution {
  title: string;
  repo: string;
  repoUrl: string;
  prNumber: number;
  prUrl: string;
  status: "open" | "merged" | "closed";
  summary: string;
  details: string;
  techStack: string[];
}

export const contributions: Contribution[] = [
  // --- OWASP/wrongsecrets ---
  {
    title: "feat(challenges): add challenges 70 and 71 with AI agent skills",
    repo: "OWASP/wrongsecrets",
    repoUrl: "https://github.com/OWASP/wrongsecrets",
    prNumber: 2647,
    prUrl: "https://github.com/OWASP/wrongsecrets/pull/2647",
    status: "open",
    summary:
      "Added two new challenges to the WrongSecrets CTF that teach players how secrets can leak through AI agent skill files.",
    details:
      "Introduced challenge 70 and 71 as part of OWASP WrongSecrets, a deliberately vulnerable app used to teach developers how secrets get mishandled. The challenges bundle an exported Claude skill so players can see, hands-on, how an AI agent's skill definition can end up carrying a secret it shouldn't. Iterated with a maintainer through review — renumbering the challenges to avoid clashing with ones already queued, and swapping in a properly exported skill ZIP with source links once a maintainer generated one.",
    techStack: ["Java", "Spring Boot", "AI Agent Skills"],
  },
  {
    title: "feat(challenges): add AI coding-agent transcript challenge",
    repo: "OWASP/wrongsecrets",
    repoUrl: "https://github.com/OWASP/wrongsecrets",
    prNumber: 2660,
    prUrl: "https://github.com/OWASP/wrongsecrets/pull/2660",
    status: "merged",
    summary:
      "Built a challenge around a leaked AI coding-agent session transcript that quietly contains a secret.",
    details:
      "As AI coding agents became part of more developers' workflows, their saved session transcripts turned into a new place secrets could hide in plain sight. This challenge plants a secret inside a realistic agent transcript and asks the player to spot it — directly tied to the 'Agent transcript holding a secret' issue filed against the project.",
    techStack: ["Java", "Spring Boot"],
  },
  {
    title: "Add Challenge 73: Expose Secret in Agent Instruction Files",
    repo: "OWASP/wrongsecrets",
    repoUrl: "https://github.com/OWASP/wrongsecrets",
    prNumber: 2687,
    prUrl: "https://github.com/OWASP/wrongsecrets/pull/2687",
    status: "open",
    summary:
      "Added a challenge around secrets accidentally committed into AI agent instruction files (like CLAUDE.md-style configs).",
    details:
      "Agent instruction files are increasingly checked into repos to steer coding agents, and they're exactly the kind of file that gets a secret pasted into it 'just for now.' Challenge 73 walks players through finding one that slipped through.",
    techStack: ["Java", "Spring Boot"],
  },

  // --- OrchestratorInc/agent-orchestrator ---
  {
    title: "Feat/multi reviewer support",
    repo: "OrchestratorInc/agent-orchestrator",
    repoUrl: "https://github.com/OrchestratorInc/agent-orchestrator",
    prNumber: 5571,
    prUrl: "https://github.com/OrchestratorInc/agent-orchestrator/pull/5571",
    status: "merged",
    summary: "Added support for assigning multiple reviewers to a single agent session.",
    details:
      "Extended the review flow so more than one reviewer can be attached to an agent's work in parallel, instead of the orchestrator assuming a single reviewer per session.",
    techStack: ["TypeScript", "React"],
  },
  {
    title: "fix(chat): prevent horizontal scrollbar in answered agent input questions",
    repo: "OrchestratorInc/agent-orchestrator",
    repoUrl: "https://github.com/OrchestratorInc/agent-orchestrator",
    prNumber: 5599,
    prUrl: "https://github.com/OrchestratorInc/agent-orchestrator/pull/5599",
    status: "merged",
    summary: "Fixed a layout bug where answered agent questions in chat overflowed and showed an unwanted scrollbar.",
    details:
      "A UI polish fix: once a question an agent asked in chat had been answered, its rendered state was overflowing horizontally. Tightened the layout so it stays inside the chat bubble.",
    techStack: ["TypeScript", "React", "CSS"],
  },
  {
    title: "fix(updates): hide raw updater errors in Settings",
    repo: "OrchestratorInc/agent-orchestrator",
    repoUrl: "https://github.com/OrchestratorInc/agent-orchestrator",
    prNumber: 5756,
    prUrl: "https://github.com/OrchestratorInc/agent-orchestrator/pull/5756",
    status: "merged",
    summary: "Stopped raw auto-updater error output from leaking into the Settings screen.",
    details:
      "The desktop app's auto-update checks could fail for mundane reasons (network blips, no release available) but were surfacing raw error text to users in Settings. Replaced that with a clean, user-facing state.",
    techStack: ["TypeScript", "Electron"],
  },
  {
    title: "feat(desktop): add browser login for Cursor provider credentials",
    repo: "OrchestratorInc/agent-orchestrator",
    repoUrl: "https://github.com/OrchestratorInc/agent-orchestrator",
    prNumber: 5879,
    prUrl: "https://github.com/OrchestratorInc/agent-orchestrator/pull/5879",
    status: "merged",
    summary: "Added a browser-based login flow so the desktop app can pick up Cursor provider credentials.",
    details:
      "Let users authenticate the Cursor model provider through a normal browser sign-in instead of manually copying tokens in, matching the flow other providers already had.",
    techStack: ["TypeScript", "Electron", "OAuth"],
  },
  {
    title:
      "bug(cloud): session branch `ao/<id>` never reaches GitHub — committed work lives only in the sandbox volume and is lost when the session is deleted",
    repo: "OrchestratorInc/agent-orchestrator",
    repoUrl: "https://github.com/OrchestratorInc/agent-orchestrator",
    prNumber: 5974,
    prUrl: "https://github.com/OrchestratorInc/agent-orchestrator/pull/5974",
    status: "merged",
    summary:
      "Fixed a data-loss bug where a cloud session's commits never actually got pushed to GitHub.",
    details:
      "Cloud agent sessions create a local branch (ao/<id>) inside an ephemeral sandbox volume. Found and fixed the gap where that branch was never pushed upstream — meaning a user's committed work silently vanished the moment the session was cleaned up.",
    techStack: ["TypeScript", "Git", "Cloud Sandboxes"],
  },
  {
    title: "resolved the overlapping fixes",
    repo: "OrchestratorInc/agent-orchestrator",
    repoUrl: "https://github.com/OrchestratorInc/agent-orchestrator",
    prNumber: 6020,
    prUrl: "https://github.com/OrchestratorInc/agent-orchestrator/pull/6020",
    status: "merged",
    summary: "Cleaned up merge conflicts between overlapping in-flight fixes.",
    details:
      "Reconciled two fixes that had drifted out of sync with each other so both sets of changes could land cleanly together.",
    techStack: ["TypeScript"],
  },
  {
    title: "fix(modelcatalog): discover Devin models over ACP instead of a dead `devin models` command",
    repo: "OrchestratorInc/agent-orchestrator",
    repoUrl: "https://github.com/OrchestratorInc/agent-orchestrator",
    prNumber: 6295,
    prUrl: "https://github.com/OrchestratorInc/agent-orchestrator/pull/6295",
    status: "merged",
    summary: "Replaced a broken CLI-based model lookup for Devin with proper ACP-based discovery.",
    details:
      "The orchestrator was shelling out to a `devin models` command that no longer existed to populate the model catalog. Switched it to discover available Devin models over the Agent Client Protocol (ACP) instead, matching how other providers are queried.",
    techStack: ["TypeScript", "ACP"],
  },
  {
    title: "Feat/shortcuts search capabilities",
    repo: "OrchestratorInc/agent-orchestrator",
    repoUrl: "https://github.com/OrchestratorInc/agent-orchestrator",
    prNumber: 6438,
    prUrl: "https://github.com/OrchestratorInc/agent-orchestrator/pull/6438",
    status: "merged",
    summary: "Made the Shortcuts settings searchable by ID, default key, key alias, and multi-word queries.",
    details:
      "Previously the shortcuts list in Settings could only be scanned by eye. Added real search so users can find a shortcut by its action ID, its default keybinding, known aliases, or a multi-word description.",
    techStack: ["TypeScript", "React"],
  },
  {
    title: "fix(chat): refresh the conversation cache after workspace updates",
    repo: "OrchestratorInc/agent-orchestrator",
    repoUrl: "https://github.com/OrchestratorInc/agent-orchestrator",
    prNumber: 6554,
    prUrl: "https://github.com/OrchestratorInc/agent-orchestrator/pull/6554",
    status: "merged",
    summary: "Fixed a stale-cache bug so chat reflects the conversation state after a workspace update.",
    details:
      "After a workspace was updated, the chat UI kept showing a stale cached conversation until a manual refresh. Invalidated the cache correctly on update so the view stays in sync.",
    techStack: ["TypeScript", "React"],
  },
  {
    title: "fix: stop leaking raw Claude errors to users",
    repo: "OrchestratorInc/agent-orchestrator",
    repoUrl: "https://github.com/OrchestratorInc/agent-orchestrator",
    prNumber: 6572,
    prUrl: "https://github.com/OrchestratorInc/agent-orchestrator/pull/6572",
    status: "merged",
    summary: "Stopped raw provider error messages from the Claude API surfacing directly to end users.",
    details:
      "Raw errors returned by the Claude API were being shown verbatim in the UI. Added a translation layer so users see a clean, actionable message instead of an internal error string.",
    techStack: ["TypeScript"],
  },

  // --- mcp-use/mcp-use ---
  {
    title: "feat(auth): add Convex OAuth provider example and integration",
    repo: "mcp-use/mcp-use",
    repoUrl: "https://github.com/mcp-use/mcp-use",
    prNumber: 2372,
    prUrl: "https://github.com/mcp-use/mcp-use/pull/2372",
    status: "merged",
    summary:
      "Added a Convex OAuth provider so mcp-use servers can authenticate against a Convex OAuth deployment instead of issuing their own tokens.",
    details:
      "Introduced `oauthConvexProvider`, exported as `mcp-use/oauth/convex`, which verifies access-token JWTs against Convex's JWKS endpoint and checks issuer and audience, mapping Convex's `sub` claim to `ctx.auth.user.id` and the client ID claim to `ctx.auth.user.clientId`. Shipped with tests, a runnable example server, provider documentation, and a changeset, then iterated through review — adding a registry entry and removing a hardcoded deployment URL from the example so users configure their own. Closed issue #2299.",
    techStack: ["TypeScript", "OAuth 2.0", "JWT", "Convex"],
  },
];

export const repoMeta: Record<
  string,
  { label: string; url: string; blurb: string }
> = {
  "OWASP/wrongsecrets": {
    label: "OWASP WrongSecrets",
    url: "https://github.com/OWASP/wrongsecrets",
    blurb:
      "A deliberately vulnerable Java/Spring Boot app used to teach developers, in a CTF format, how secrets end up leaking.",
  },
  "OrchestratorInc/agent-orchestrator": {
    label: "Agent Orchestrator",
    url: "https://github.com/OrchestratorInc/agent-orchestrator",
    blurb:
      "A desktop + cloud orchestrator for running multiple coding agents (Claude, Devin, Cursor, and more) against real repos.",
  },
  "mcp-use/mcp-use": {
    label: "mcp-use",
    url: "https://github.com/mcp-use/mcp-use",
    blurb:
      "An open-source TypeScript/Python framework for building MCP (Model Context Protocol) clients and servers.",
  },
};
