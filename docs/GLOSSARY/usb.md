<!-- GLOSSARY PAGE — usb.md -->

# USB (Universal Serial Bus)

> **[Back to glossary index](README.md)** · Category: Hardware

**USB (Universal Serial Bus)** — A serial bus for peripherals with a host controller and a device tree.

## The short version
USB is a tree of devices under one or more host controllers (EHCI/XHCI on x86). The OS talks to the controller, which manages the root hub and enumerates devices by addresses/endpoints. Drivers send control/bulk/interrupt/isochronous transfers through the host controller.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
