<!-- GLOSSARY PAGE — dma.md -->

# DMA (Direct Memory Access)

> **[Back to glossary index](README.md)** · Category: I/O

**DMA (Direct Memory Access)** — Hardware that transfers data between devices and memory without the CPU copying it.

## The short version
DMA lets a device read/write system memory directly, freeing the CPU for other work. The kernel sets up a DMA buffer (often with an IOMMU translation), gives the device its address, and receives an interrupt when the transfer completes. Cache-coherent DMA requires careful memory barriers and sometimes cache flushing.

## Related terms
- [Scheduler](scheduler.md)
- [Kernel](kernel.md)

---
*Grounded in the OSDev_Learning_Hub tutorials and standard OS-dev references.*
