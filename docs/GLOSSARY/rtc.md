<!-- GLOSSARY PAGE — rtc.md -->

# RTC (Real-Time Clock)

> **[Back to glossary index](README.md)** · Category: Hardware & timing

**RTC (Real-Time Clock)** — A battery-backed clock that keeps wall-clock time and can raise an alarm interrupt.

## The short version
The RTC keeps time even when the PC is off. The kernel reads it via CMOS (port 0x70/0x71) or an ACPI RTC to get the current date/time, and can use it as a low-frequency interrupt source. It complements the PIT/APIC tick.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
