<!-- GLOSSARY PAGE — privilege-level.md -->

# Privilege levels / CPU rings

> **[Back to glossary index](README.md)** · Category: CPU

**Privilege levels / CPU rings** — x86 protection rings (0–3) that restrict what code can do; the kernel runs in ring 0.

## The short version
The CPU enforces privilege: ring 0 (kernel) can run privileged instructions (like sti/cli, writing CR3), while rings 1–3 (user) are restricted. User code must use syscalls to cross into the kernel. Long mode uses the similar notion of CPL (current privilege level).

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
