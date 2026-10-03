<!-- GLOSSARY PAGE — tcb.md -->

# Task Control Block (TCB) / Process Control Block (PCB)

> **[Back to glossary index](README.md)** · Category: Kernel & runtime

**Task Control Block (TCB) / Process Control Block (PCB)** — The kernel's per-task record holding saved registers, state, and metadata.

## The short version
Each process or thread has a TCB (or PCB for processes) that stores the saved context, state (ready/running/blocked), priority, and bookkeeping like time used. The scheduler walks the list of TCBs to pick the next runner. Also called the process list.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
