<!-- GLOSSARY PAGE — slab-allocator.md -->

# Slab allocator

> **[Back to glossary index](README.md)** · Category: Memory

**Slab allocator** — A cache-based allocator for small, same-size kernel objects.

## The short version
The slab allocator keeps a cache of fixed-size objects (like task structs, inodes) to avoid repeated initialization and reduce fragmentation. Linux's slab/slub manages per-object-type caches backed by page frames. It sits on top of the page (buddy) allocator.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
