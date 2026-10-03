<!-- GLOSSARY PAGE — acpi.md -->

# ACPI (Advanced Configuration and Power Interface)

> **[Back to glossary index](README.md)** · Category: Hardware

**ACPI (Advanced Configuration and Power Interface)** — A firmware/OS standard for describing hardware and managing power.

## The short version
ACPI replaces the old APM for power management. The OS reads ACPI tables (RSDP/R SDT, FADT, MADT, DSDT) provided by firmware to learn about devices, power states (C-states, S-states), and the multi-core layout (MADT/APIC tables). It is the modern way a kernel discovers the machine.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
