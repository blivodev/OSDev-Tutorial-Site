<!-- GLOSSARY PAGE — mmio.md -->

# MMIO (Memory-Mapped I/O)

> **[Back to glossary index](README.md)** · Category: I/O

**MMIO (Memory-Mapped I/O)** — Accessing hardware registers through normal memory addresses rather than port I/O.

## The short version
Many devices expose their control registers in a memory window (described by BARs or ACPI). The kernel writes/reads those addresses to talk to the device, using volatile/barrier so the CPU doesn't cache or reorder them. x86 also has the separate port I/O space (in/out).

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
