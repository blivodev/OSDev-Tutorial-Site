<!-- GLOSSARY PAGE — interrupt-controller.md -->

# Interrupt controller (PIC/APIC)

> **[Back to glossary index](README.md)** · Category: CPU & interrupts

**Interrupt controller (PIC/APIC)** — Hardware that collects device interrupts and delivers them to the CPU as IRQs.

## The short version
The 8259 PIC maps hardware interrupts to IDT vectors; the modern APIC (I/O APIC + local APIC) delivers them per-core. The kernel programs the controller to assign vectors, mask/unmask IRQs, and route them to the right CPU. It handles the priority and acknowledgment of interrupts.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
