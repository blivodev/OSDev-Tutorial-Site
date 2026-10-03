<!-- GLOSSARY PAGE — syscall-abi.md -->

# Syscall ABI

> **[Back to glossary index](README.md)** · Category: User/kernel boundary

**Syscall ABI** — The register convention by which user programs request kernel services.

## The short version
A system call passes arguments in registers (on x86-64: rax=number, rdi/rsi/rdx=args) and triggers a switch to kernel mode (via syscall/sysenter or int 0x80). The kernel looks up the handler by number, validates arguments, and returns. The ABI defines error handling via errno/return values.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
