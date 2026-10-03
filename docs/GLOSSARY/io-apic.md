<!-- GLOSSARY PAGE — io-apic.md -->

# I/O APIC

> **[Back to glossary index](README.md)** · Category: CPU & interrupts

**I/O APIC** — The modern interrupt controller that routes device IRQs to specific CPUs.

## The short version
The I/O APIC sits on the bus and delivers device interrupts to chosen local APICs (and thus CPUs). It replaces the two 8259 PICs, giving many more vectors and per-CPU delivery. The kernel programs it via the MADT table to map IRQs to vectors. Critical for SMP.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
