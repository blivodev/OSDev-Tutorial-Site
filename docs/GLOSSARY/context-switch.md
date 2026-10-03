<!-- GLOSSARY PAGE — context-switch.md -->

# Context switch

> **[Back to glossary index](README.md)** · Category: Kernel & runtime

**Context switch** — Saving one task's CPU state and restoring another's so the CPU appears to run many tasks at once.

## The short version
On a context switch the kernel saves the outgoing task's registers and stack pointer (into its TCB/PCB), picks the next task, and restores its registers. This is what makes multitasking visible to user programs. The switch itself is pure assembly in most kernels, then returns into the restored task.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
