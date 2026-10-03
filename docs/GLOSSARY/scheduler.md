<!-- GLOSSARY PAGE — scheduler.md -->

# Scheduler

> **[Back to glossary index](README.md)** · Category: Kernel & runtime

**Scheduler** — The part of the kernel that decides which process or thread runs next on the CPU.

## The short version
The scheduler picks the next runnable task and performs a context switch. Common policies are round-robin (RR), priority, and multi-level feedback queue (MLFQ). The OSDev kernel in this hub starts with a simple round-robin timer-driven scheduler, then adds priorities. It is triggered by the PIT or APIC timer interrupt.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
