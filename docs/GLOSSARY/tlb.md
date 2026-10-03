<!-- GLOSSARY PAGE — tlb.md -->

# TLB (Translation Lookaside Buffer)

> **[Back to glossary index](README.md)** · Category: Memory

**TLB (Translation Lookaside Buffer)** — The CPU cache of virtual-to-physical page mappings.

## The short version
The TLB caches recent page-table translations so the MMU doesn't walk tables every access. When the kernel changes page tables it must flush (invalidate) the relevant TLB entries — on x86 by writing CR3 or using invlpg. TLB flushes are why page-table changes are relatively expensive.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
