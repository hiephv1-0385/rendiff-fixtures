# Architecture notes

The content script stays small and loads the render engine lazily.

```ts
const core = await loadChunk('render-core');
```
