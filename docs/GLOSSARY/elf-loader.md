<!-- GLOSSARY PAGE — elf-loader.md -->

# ELF loader

> **[Back to glossary index](README.md)** · Category: User processes

**ELF loader** — Kernel code that maps an ELF executable into memory and starts it.

## The short version
When a program runs, the kernel reads its ELF headers, maps each PT_LOAD segment at the right virtual address with the right permissions, sets up the stack/argv/env, and jumps to the entry point (e_entry). It also handles dynamic linking by loading the interpreter (ld.so) first.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
