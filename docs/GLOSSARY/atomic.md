<!-- GLOSSARY PAGE — atomic.md -->

# Atomic operations

> **[Back to glossary index](README.md)** · Category: Concurrency

**Atomic operations** — Read-modify-write CPU operations (like xchg, cmpxchg, lock inc) that cannot be interrupted.

## The short version
Atomics guarantee that an operation on shared memory completes without another CPU observing a partial result. They are the building blocks for spinlocks, refcounts, and lock-free data structures. On x86, the LOCK prefix makes an instruction atomic; on ARM/RISC-V it is done with LL/SC.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
