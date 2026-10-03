<!-- GLOSSARY PAGE — memory-barrier.md -->

# Memory barrier

> **[Back to glossary index](README.md)** · Category: Concurrency

**Memory barrier** — An instruction that orders memory accesses so the CPU/compiler don't reorder them across it.

## The short version
CPUs and compilers reorder memory operations for performance, which can break shared-memory synchronization. A memory barrier (fence/mfence/dmb) forces ordering. Kernels use them around lock release/acquire so that writes before the lock are visible to the next holder.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
