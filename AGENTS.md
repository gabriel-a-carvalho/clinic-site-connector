<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Team portraits use imported Lovable Assets pointers, so uploaded photos stay outside the repository and keep stable delivery URLs.
- Team member data (slugs, names, CRPs, bios) lives in `src/data/team-members.ts` as the single source; both the home team section and the `/equipe/$slug` profile route consume it, so add or edit members only there.
