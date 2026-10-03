<!-- GLOSSARY PAGE — fork-exec.md -->

# fork & exec

> **[Back to glossary index](README.md)** · Category: User processes

**fork & exec** — The POSIX way to create processes: fork duplicates, exec replaces the image.

## The short version
fork() copies the current process (page tables, memory) to create a child; exec() replaces a process's memory with a new program. Together they launch programs. Copy-on-write makes fork cheap by sharing pages until one side writes. The kernel's 'fork to exec' is a key milestone in this hub.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
