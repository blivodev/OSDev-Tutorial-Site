<!-- GLOSSARY PAGE — acpi-tables.md -->

# ACPI tables / RSDP

> **[Back to glossary index](README.md)** · Category: Firmware

**ACPI tables / RSDP** — Structured memory tables firmware provides that describe hardware to the OS.

## The short version
The kernel finds the RSDP (Root System Description Pointer) via the BIOS memory or EFI, then follows RSDT/XSDT to locate FADT (power/events), MADT (APIC/SMP layout), and DSDT/SSDT (device objects in AML). Reading these lets the kernel enumerate CPUs, interrupt routing, and power capabilities.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
