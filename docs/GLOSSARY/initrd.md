<!-- GLOSSARY PAGE — initrd.md -->

# initrd / initramfs

> **[Back to glossary index](README.md)** · Category: Storage & boot

**initrd / initramfs** — A small initial RAM disk the bootloader loads so the kernel can find real storage.

## The short version
The initrd is a filesystem image loaded into RAM at boot, letting the kernel mount a real root filesystem (the drivers to read it live in the initrd). The kernel unpacks it, runs /init, and the system boots. Essential when storage drivers aren't built into the kernel.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
