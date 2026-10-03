<!-- GLOSSARY PAGE — page-fault.md -->

# Page fault

> **[Back to glossary index](README.md)** · Category: Memory & exceptions

**Page fault** — A CPU exception when accessing a page that isn't present, or with bad permissions.

## The short version
When the MMU can't translate an address, the CPU raises a page fault (exception 14). The kernel reads CR2 for the faulting address and either fixes it (demand paging, copy-on-write, lazy allocation) or kills the process for an invalid access. Handling page faults efficiently is core to virtual memory.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
