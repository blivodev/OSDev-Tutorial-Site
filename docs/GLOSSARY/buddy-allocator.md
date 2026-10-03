<!-- GLOSSARY PAGE — buddy-allocator.md -->

# Buddy allocator

> **[Back to glossary index](README.md)** · Category: Memory

**Buddy allocator** — A memory allocator that splits/free chunks in power-of-two sizes.

## The short version
The buddy system manages free blocks as powers of two. When a request comes, it splits a larger block and marks buddies; when freed, it coalesces adjacent buddies. It's simple and fast, at the cost of internal fragmentation. Kernels often use it for page frames, with a slab cache for small objects.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
