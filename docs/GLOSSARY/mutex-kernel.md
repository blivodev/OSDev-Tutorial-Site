<!-- GLOSSARY PAGE — mutex-kernel.md -->

# Mutex (kernel)

> **[Back to glossary index](README.md)** · Category: Concurrency

**Mutex (kernel)** — A sleeping lock that blocks the task instead of spinning when the lock is held.

## The short version
A mutex (mutual exclusion) lets a task sleep if the lock is contended, so it does not waste CPU. It is used for longer critical sections. Kernels implement mutexes on top of the scheduler (the waiter is moved to a blocked queue and woken when released).

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
