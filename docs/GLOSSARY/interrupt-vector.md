<!-- GLOSSARY PAGE — interrupt-vector.md -->

# Interrupt vector

> **[Back to glossary index](README.md)** · Category: CPU & interrupts

**Interrupt vector** — The IDT entry index (0–255) that maps an interrupt/exception to a handler.

## The short version
Each interrupt or exception has a vector that indexes into the IDT (Interrupt Descriptor Table). Vectors 0–31 are CPU exceptions (page fault = 14, GPF = 13), 32–255 are software/hardware IRQs. The kernel installs handlers for each vector it wants to service.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
