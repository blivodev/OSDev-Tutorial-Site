# Zero to Kernel in C

> **Level:** 🟢 Beginner → 🔴 Hard · **Est. time:** ~12 weeks · **Progress:** track your checkboxes below

**What you'll learn:** How a computer boots, what an operating system does, and how to write a real kernel in C that runs in QEMU.

**Who it's for:** Programmers comfortable with basic C who want to go from "how do computers work?" to "I built a kernel."

---

## How this path works

Follow the steps **in order** — each builds on the last. Tick a checkbox when you finish a step (your progress saves in this browser). Steps are books 📚, tutorials 📝, or videos 🎬 from the hub's library.

**Legend:** 🟢 Beginner · 🟠 Intermediate · 🔴 Hard · ⚫ Advanced

---

## 🟢 Stage 1 — Foundations (weeks 1-3)

- [ ] **1. How a computer boots** · 🟢 · 📝 [How a Computer Boots](https://osdev.sektor9.dev/synthesized_tutorials/00-introduction/01-how-a-computer-boots/) — the power-on chain: firmware → bootloader → kernel. Read this first; everything else assumes it.
- [ ] **2. Your toolchain** · 🟢 · 📝 [Your Toolchain](https://osdev.sektor9.dev/synthesized_tutorials/00-introduction/02-your-toolchain/) — compiler, linker, assembler, QEMU: what each does.
- [ ] **3. Ben Eater's 8-bit computer** · 🟢 · 🎬 [Ben Eater — Building an 8-bit computer](https://www.youtube.com/playlist?list=PLowKtXNTBypGqImE405J2565dvjafglHU) — watch how a CPU works from first principles (registers, ALU, clock).
- [ ] **4. Write your first C program** · 🟢 · 📚 [The C Programming Language (free chapters)](https://www.knking.com/books/c2/) — pointers, structs, and memory layout: the C you'll actually use in a kernel.

## 🟠 Stage 2 — The bare metal (weeks 4-7)

- [ ] **5. OSDev Wiki Bare Bones** · 🟠 · 📝 [OSDev Wiki — Bare Bones](https://wiki.osdev.org/Bare_Bones) — the canonical minimal 32-bit C kernel that boots with GRUB. Your first bootable kernel.
- [ ] **6. Operating Systems: From 0 to 1 (os01)** · 🟠 · 📚 [os01 — the C journey to a working OS](https://tuhdo.github.io/os01/) — the deep, hand-holding C path from boot to a real OS.
- [ ] **7. The Little OS Book** · 🟠 · 📚 [The Little OS Book](https://littleosbook.github.io/) — a concise second pass at a minimal x86 OS in C.
- [ ] **8. Writing to VGA text mode** · 🟠 · 📝 [VGA Text Mode & Display](https://osdev.sektor9.dev/synthesized_tutorials/concepts/) — printing "Hello World" to 0xB8000, then building a simple print function.

## 🔴 Stage 3 — A real kernel (weeks 8-12)

- [ ] **9. Memory management** · 🔴 · 📚 [OSTEP — Virtualization](https://pages.cs.wisc.edu/~remzi/OSTEP/) — paging, virtual memory, and how the MMU works. The concepts your kernel must implement.
- [ ] **10. Interrupts & the IDT** · 🔴 · 📝 [Interrupts & the IDT](https://osdev.sektor9.dev/synthesized_tutorials/concepts/) — exceptions, IRQs, and handling them in your kernel.
- [ ] **11. James Molloy's Kernel Tutorials** · 🔴 · 📝 [James Molloy's Kernel Development Tutorials (archived)](https://github.com/Exclavia/Kernel-Dev) — a full UNIX-clone kernel in C: scheduling, filesystems, user mode.
- [ ] **12. Build a scheduler** · 🔴 · 📝 [The Scheduler (round-robin)](https://osdev.sektor9.dev/synthesized_tutorials/concepts/) — implement timer-driven preemptive multitasking in your kernel.

---

## 🎯 Milestone project

Put it together: extend the C kernel to **print text, handle a timer interrupt, and run two tasks round-robin**. Boot it in QEMU and watch your own scheduler switch between tasks. This is the "I built an OS" moment.

## 📌 Related resources

- More C OS-dev series: [Nanobyte's Building-an-OS](https://www.youtube.com/playlist?list=PLFjM7v6KGMpiH2G-kT781ByCNC_0pKpPN)
- [OSDev Wiki](https://wiki.osdev.org/) — the always-open reference
- [Computer Systems: A Programmer's Perspective (CS:APP)](https://csapp.cs.cmu.edu/) — deeper systems background
