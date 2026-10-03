<!-- GLOSSARY PAGE — vga-attribute.md -->

# VGA text attributes

> **[Back to glossary index](README.md)** · Category: Display

**VGA text attributes** — The foreground/background color byte that accompanies each character in text mode.

## The short version
In VGA text mode each 16-bit cell holds a character and an attribute byte (low nibble = foreground, high nibble = background). Writing to the buffer at 0xB8000 with attribute bytes is how a bare-bones kernel prints colored text before a framebuffer is set up.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
