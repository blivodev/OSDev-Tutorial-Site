<!-- GLOSSARY PAGE — cache-coherence.md -->

# Cache coherence

> **[Back to glossary index](README.md)** · Category: Multi-core

**Cache coherence** — The protocol that keeps multiple CPUs' caches consistent for shared memory.

## The short version
When cores share memory, their caches must agree on the current value. Hardware cache-coherence protocols (like MESI) track cache-line states and invalidate stale copies. Kernels need memory barriers so writes aren't stuck in one core's cache when another reads them.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
