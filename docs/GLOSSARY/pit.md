<!-- GLOSSARY PAGE — pit.md -->

# PIT (Programmable Interval Timer)

> **[Back to glossary index](README.md)** · Category: Hardware & timing

**PIT (Programmable Interval Timer)** — The classic 8254 timer chip that fires periodic interrupts for timekeeping.

## The short version
The PIT counts down from a programmed divisor and raises IRQ0 on expiry, giving a periodic tick (commonly 100 or 1000 Hz). It drives the scheduler's time slices and system time. The APIC timer is the modern replacement on multi-core systems.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
