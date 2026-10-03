<!-- GLOSSARY PAGE — heap-kernel.md -->

# Kernel heap

> **[Back to glossary index](README.md)** · Category: Memory

**Kernel heap** — The dynamic memory region inside the kernel used by kmalloc/new.

## The short version
The kernel heap serves small dynamic allocations during runtime. In the Rust kernel this is the allocator wired to the global allocator (heap_start), with a bump or linked-list allocator. It is distinct from the physical page allocator, which hands out whole frames.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
