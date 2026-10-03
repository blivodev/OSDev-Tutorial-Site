# Systems Architecture Deep Dive

> **Level:** 🟠 Intermediate → ⚫ Advanced · **Est. time:** ~12 weeks (5-8 hrs/week) · **Progress:** tick each step as you finish it

**What you'll learn:** The hardware your OS runs on — CPU architecture, memory hierarchy, assembly, and how every piece fits into a complete systems picture.

**Who it's for:** OS-dev learners who've built a kernel and want to truly understand the machine underneath — the CPU, the memory system, and the ISAs that define both.

---

## How this path works

Follow the steps **in order**. Tick a checkbox when you finish a step. Steps are 📚 book, 📝 tutorial, or 🎬 video.

**Legend:** 🟢 Beginner · 🟠 Intermediate · 🔴 Hard · ⚫ Advanced

---

## 🟠 Stage 1 — CPU & assembly (weeks 1-4)

*Goal: speak the machine's language and understand the classic architecture textbook material.*

- [ ] **1. x86 assembly (NASM)** · 🟠 · 📝 [NASM / x86 assembly tutorial](https://www.tutorialspoint.com/assembly_programming/index.htm) · **Learn:** registers, the stack, calling conventions, flags. **Why:** assembly is the machine's own language — everything else is a translation.
- [ ] **2. Computer Organization and Design (RISC-V)** · 🟠 · 📚 [CO&D RISC-V edition (free lectures)](https://riscv.org/learn/) · **Learn:** Hennessy & Patterson's approach — datapath, control, performance. **Why:** the canonical architecture course, free via RISC-V.
- [ ] **3. CS:APP** · 🔴 · 📚 [Computer Systems: A Programmer's Perspective](https://csapp.cs.cmu.edu/) · **Learn:** the best bridge from programming to hardware — data representation, assembly, linking. **Why:** it's the book every systems programmer is assumed to have read.
- [ ] **4. Ben Eater's 8-bit computer** · 🟢 · 🎬 [Ben Eater — 8-bit computer](https://www.youtube.com/playlist?list=PLowKtXNTBypGqImE405J2565dvjafglHU) · **Learn:** a CPU built from logic gates — ALU, registers, clock, microcode. **Why:** the physical intuition that makes "the CPU fetches an instruction" concrete.

## 🔴 Stage 2 — Memory & the machine (weeks 5-8)

*Goal: the memory system — the performance bottleneck of every modern CPU.*

- [ ] **5. Memory hierarchy & caches** · 🔴 · 📝 [Memory hierarchy (LibreTexts)](https://eng.libretexts.org/Bookshelves/Computer_Science/Operating_Systems) · **Learn:** cache levels, locality, cache lines, and associativity. **Why:** memory latency is the real bottleneck; caches are why your code is fast or slow.
- [ ] **6. Virtual memory deep dive** · 🔴 · 📚 [OSTEP — Virtualization](https://pages.cs.wisc.edu/~remzi/OSTEP/) · **Learn:** paging, the TLB, page tables, and address translation. **Why:** virtual memory is the OS feature that makes isolation and multitasking possible.
- [ ] **7. Pipelining & hazards** · 🔴 · 📝 [Microprocessor Design (Wikibooks)](https://en.wikibooks.org/wiki/Microprocessor_Design) · **Learn:** instruction pipelining, data/control hazards, and why CPUs are hard. **Why:** understanding pipelining explains why some code is slow and why branch prediction exists.
- [ ] **8. Memory models & barriers** · 🔴 · 📝 [Memory barriers (free-electronics)](https://www.kernel.org/doc/Documentation/memory-barriers.txt) · **Learn:** the Linux kernel's memory-barrier doc — ordering, fences, and the hardware reasons. **Why:** this is where concurrency meets the CPU's reordering; kernel developers live here.
- [ ] **9. Cache coherence & SMP** · 🔴 · 📝 [FreeBSD SMP / cache (arch-handbook)](https://docs.freebsd.org/en/books/arch-handbook/) · **Learn:** MESI, coherence protocols, and per-CPU data. **Why:** multi-core machines share memory — coherence is what keeps them sane.

## ⚫ Stage 3 — The full systems picture (weeks 9-12)

*Goal: read real specs and real kernels, and see the whole stack.*

- [ ] **10. RISC-V spec** · ⚫ · 📚 [RISC-V Unprivileged Spec](https://riscv.org/technical/specifications/) · **Learn:** a complete, open ISA spec — base integer, extensions, privileged. **Why:** reading a real spec shows what an ISA actually is, without NDA.
- [ ] **11. x86 Intel SDM** · ⚫ · 📚 [Intel SDM](https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html) · **Learn:** the authoritative x86 reference — look up whatever the tutorials glossed over. **Why:** every x86 question has its final answer here.
- [ ] **12. FreeBSD Architecture Handbook** · ⚫ · 📚 [FreeBSD Architecture Handbook](https://docs.freebsd.org/en/books/arch-handbook/) · **Learn:** a real OS's internals — locking, VM, SMP, drivers. **Why:** theory meets practice; see how an OS uses all the hardware you've studied.
- [ ] **13. Linux kernel internals** · ⚫ · 📝 [The Linux Kernel Documentation](https://www.kernel.org/doc/html/latest/) · **Learn:** how the biggest kernel structures its subsystems. **Why:** the most widely-deployed OS is the ultimate case study.
- [ ] **14. Dive into Systems** · 🔴 · 📚 [Dive into Systems](https://diveintosystems.org/) · **Learn:** a free textbook bridging CS1 to systems/architecture, with labs. **Why:** a structured alternative to CS:APP with modern tooling.
- [ ] **15. Nand2Tetris** · 🟠 · 📝 [Nand2Tetris](https://www.nand2tetris.org/) · **Learn:** build a computer from NAND gates up — logic, ALU, machine language, assembler, compiler, OS. **Why:** the best end-to-end mental model of the entire stack.
- [ ] **16. Matt Godbolt's talks** · 🟠 · 🎬 [Matt Godbolt — "What Has My Compiler Done for Me Lately?"](https://www.youtube.com/@MattGodbolt) · **Learn:** see your C++ become assembly and understand what the CPU executes. **Why:** the missing link between source and silicon, made entertaining.

---

## 🎯 Milestone project — "Reading the machine"

**Goal:** demonstrate hands-on understanding of the architecture. Estimated 2-3 weeks. **Prereq:** all stages.

1. **Write** a short x86-64 (or RISC-V in QEMU) assembly program that calls through the stack and reads `CPUID` (or a CSR).
2. **Measure** cache effects: time a loop over arrays of sizes L1/L2/L3 and plot the latency cliff.
3. **Annotate** the assembly — for each instruction, write what the CPU does (fetch, decode, execute, memory access).
4. **Enable** paging in a tiny program and observe TLB behavior via timing.
5. **Write** `docs/architecture-notes.md` connecting what you learned to your kernel.

**Checklist**

- [ ] assembly program runs (stack call + CPUID/CSR)
- [ ] cache-timing experiment plotted
- [ ] every instruction annotated
- [ ] paging enabled, TLB effect observed
- [ ] `docs/architecture-notes.md` written

## 📌 Related resources

- **Videos:** [Computerphile](https://www.youtube.com/@Computerphile), [Core Dumped](https://www.youtube.com/@CoreDumpped)
- **Reference:** [Intel SDM](https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html), [RISC-V specs](https://riscv.org/technical/specifications/)
- **Tools:** [Godbolt (Compiler Explorer)](https://godbolt.org/), [QEMU](https://www.qemu.org/)
