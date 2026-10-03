# Systems Architecture Deep Dive

> **Level:** 🟠 Intermediate → ⚫ Advanced · **Est. time:** ~12 weeks · **Progress:** track your checkboxes below

**What you'll learn:** The hardware your OS runs on — CPU architecture, memory hierarchy, assembly, and how the pieces fit into a complete systems picture.

**Who it's for:** OS-dev learners who've built a kernel and want to truly understand the machine underneath.

---

## How this path works

Follow the steps **in order**. Tick a checkbox when you finish a step.

**Legend:** 🟢 Beginner · 🟠 Intermediate · 🔴 Hard · ⚫ Advanced

---

## 🟠 Stage 1 — CPU & assembly (weeks 1-4)

- [ ] **1. x86 assembly (NASM)** · 🟠 · 📝 [NASM tutorial / x86 assembly](https://www.tutorialspoint.com/assembly_programming/index.htm) — registers, the stack, calling conventions. The language of the machine.
- [ ] **2. Computer Architecture** · 🟠 · 📚 [Computer Organization and Design RISC-V edition (free lectures)](https://riscv.org/learn/) — Hennessy & Patterson's approach, free via RISC-V.
- [ ] **3. CS:APP** · 🔴 · 📚 [Computer Systems: A Programmer's Perspective](https://csapp.cs.cmu.edu/) — the best bridge from programming to hardware.

## 🔴 Stage 2 — Memory & the machine (weeks 5-8)

- [ ] **4. Memory hierarchy & caches** · 🔴 · 📝 [Memory hierarchy (LibreTexts)](https://eng.libretexts.org/Bookshelves/Computer_Science/Operating_Systems) — caches, locality, and why they matter for performance.
- [ ] **5. Virtual memory deep dive** · 🔴 · 📝 [OSTEP — Virtualization](https://pages.cs.wisc.edu/~remzi/OSTEP/) — paging, TLB, and the full virtual-memory story.
- [ ] **6. Pipelining & hazards** · 🔴 · 📝 [Computer architecture (Wikibooks)](https://en.wikibooks.org/wiki/Microprocessor_Design) — instruction pipelining, hazards, and why CPUs are hard.

## ⚫ Stage 3 — The full systems picture (weeks 9-12)

- [ ] **7. RISC-V spec** · ⚫ · 📚 [RISC-V Unprivileged Spec](https://riscv.org/technical/specifications/) — a complete, open ISA spec. Read it to see what an ISA really is.
- [ ] **8. FreeBSD Architecture Handbook** · ⚫ · 📚 [FreeBSD Architecture Handbook](https://docs.freebsd.org/en/books/arch-handbook/) — a real OS's internals: locking, VM, SMP.
- [ ] **9. Linux kernel internals** · ⚫ · 📝 [The Linux Kernel Documentation](https://www.kernel.org/doc/html/latest/) — read how the biggest kernel structures its subsystems.
- [ ] **10. Dive into Systems** · 🔴 · 📚 [Dive into Systems](https://diveintosystems.org/) — a free textbook bridging CS1 to systems/architecture.
- [ ] **11. Nand2Tetris** · 🟠 · 📝 [Nand2Tetris](https://www.nand2tetris.org/) — build a computer from NAND gates up. The best mental model of the whole stack.
- [ ] **12. Intel/AMD manuals** · ⚫ · 📚 [Intel SDM](https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html) — the authoritative x86 reference. Look up whatever the tutorials glossed over.

---

## 🎯 Milestone project

Put it together: write a **short x86-64 assembly program** (or a RISC-V one in QEMU) that exercises caches, calls through the stack, and reads model-specific registers — then annotate it with what the CPU is actually doing at each step.

## 📌 Related resources

- [Matt Godbolt's talks](https://www.youtube.com/@MattGodbolt) — compilers and assembly demystified
- [Ben Eater](https://www.youtube.com/@BenEater) — the 8-bit computer from first principles
- [Computerphile](https://www.youtube.com/@Computerphile) — accessible hardware explainers
