<!-- GLOSSARY PAGE — ps2-keyboard.md -->

# PS/2 keyboard

> **[Back to glossary index](README.md)** · Category: Hardware & input

**PS/2 keyboard** — The classic keyboard controller (8042) on port 0x60 that delivers scancodes.

## The short version
A PS/2 keyboard sends scancodes through the 8042 controller, which raises IRQ1. The kernel reads port 0x60 to get the scancode and translates it to keycodes. Modern UEFI machines still emulate PS/2 for legacy compatibility; USB keyboards go through the USB HID stack.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
