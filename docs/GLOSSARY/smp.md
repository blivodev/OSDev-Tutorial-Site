<!-- GLOSSARY PAGE — smp.md -->

# SMP (Symmetric Multi-Processing)

> **[Back to glossary index](README.md)** · Category: Multi-core

**SMP (Symmetric Multi-Processing)** — Running the kernel on multiple CPUs that share one memory system.

## The short version
SMP means several cores run at once, each executing the kernel concurrently. This forces per-CPU data, spinlocks, and careful cache-coherency handling. The kernel must initialize each core (AP boot via SIPI) and manage per-CPU variables so cores don't clobber each other.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
