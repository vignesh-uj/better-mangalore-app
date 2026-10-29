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

- Conversation data preserves document paragraph order through rich-text strings, ordered list blocks, and optional section numbers; this supports articles without inventing speaker labels or numbering.
- Conversation photos are source-controlled files in src/assets so exported source retains the original imagery.
- Optional conversation section images are anchored to section headings and rendered after their content; this preserves text order and keeps placement stable when sections change.
