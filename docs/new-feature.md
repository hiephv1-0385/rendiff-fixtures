# New feature: change marks

Rendiff highlights **changed blocks** in the margin. ~~Old behaviour~~ is gone.

## Checklist

- [x] Parse the unified diff
- [x] Map changed lines to blocks
- [ ] Show deleted-near markers

## Table

| Block | Marked | Notes |
|:------|:------:|------:|
| Paragraph | yes | whole paragraph |
| List item | yes | per item |
| Table row | yes | per row |

## Code

```js
function mark(block) {
  return block.changed ? 'changed' : null;
}
```

> [!TIP]
> Toggle Preview / Source per file.

> [!WARNING]
> Large files may render slowly.

Footnote reference[^1] and an autolink: https://github.com.

Relative link to the [guide](./guide.md) and an image: ![logo](../assets/logo.png)

[^1]: Footnotes render at the bottom.
