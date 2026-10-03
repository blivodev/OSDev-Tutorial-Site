<!-- GLOSSARY PAGE — spinlock.md -->

# Spinlock

> **[Back to glossary index](README.md)** · Category: Concurrency

**Spinlock** — A lock that busy-waits (spins) until it is acquired; used for very short critical sections.

## The short version
A spinlock loops on an atomic test-and-set until the lock becomes free. Because it burns CPU while waiting, it is only used for short sections or on multi-core where the lock holder may run on another core. Kernels pair spinlocks with disabling interrupts to avoid deadlock on a single core.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
