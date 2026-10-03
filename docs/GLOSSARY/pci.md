<!-- GLOSSARY PAGE — pci.md -->

# PCI / PCIe (Peripheral Component Interconnect)

> **[Back to glossary index](README.md)** · Category: Hardware

**PCI / PCIe (Peripheral Component Interconnect)** — The standard bus for attaching devices (GPUs, NICs, storage) to the CPU.

## The short version
PCI gives each device a config space (256 bytes, or 4096 for PCIe) that the OS scans by bus/device/function. The config space holds vendor/device IDs, BARs (Base Address Registers) that map device memory, and interrupt routing. The kernel enumerates PCI at boot and loads matching drivers.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
