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

## Project decisions
- Keep the portfolio as one intentionally scrolling index route because the requested experience is a single-page showcase with anchored navigation.
- Store project data in `src/data/projects.ts` (generated from the user's `src/data/projects.json`) because it is static editorial content and requires no backend; regenerate the .ts after any JSON update.
- Media paths in the projects data resolve from `public/` (e.g. `/media/<project>/01.jpg`); missing files fall back to a monogram placeholder rather than a broken image.
- Keep Netlify form submission as native HTML POST while validating interactively in the browser.
