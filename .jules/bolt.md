# Bolt Learnings

## UI & Performance

- **Grid Container Centering**: When using full-width horizontal lines via absolute pseudo-elements (e.g., `w-[200vw]`), ensure they are centered using `left-1/2` and `-translate-x-1/2` to maintain balance across the entire layout, especially when elements are within a constrained grid. This prevents the lines from extending only to one side.
