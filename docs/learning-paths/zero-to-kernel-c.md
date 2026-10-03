# Zero to Kernel in C

> **Level:** 🟢 Beginner → 🔴 Hard · **Est. time:** ~12 weeks (5-8 hrs/week) · **Progress:** tick each step as you finish it

**What you'll learn:** How a computer boots, what an operating system actually does, and how to write a real kernel in C that boots in QEMU and prints, handles interrupts, and runs multiple tasks.

**Who it's for:** Programmers comfortable with basic C who want to go from "how do computers work?" to "I built an OS." No assembly or OS knowledge required — but you will learn both along the way.

---

## How this path works

Follow the steps **in order** — each one builds directly on the last. When you finish a step, tick its checkbox (your progress saves in this browser). Steps are marked 📚 book, 📝 tutorial, or 🎬 video.

Each step tells you **what you'll learn** and **why it matters** before the resource, so you always know where you are on the ladder.

**Legend:** 🟢 Beginner · 🟠 Intermediate · 🔴 Hard · ⚫ Advanced

---

## 🟢 Stage 1 — Foundations (weeks 1-3)

*Goal: understand what a computer does when it turns on, and get fluent in the C you'll need.*

- [ ] **1. How a computer boots** · 🟢 · 📝 [How a Computer Boots](https://osdev.sektor9.dev/synthesized_tutorials/00-introduction/01-how-a-computer-boots/) · **Learn:** the power-on chain — firmware (BIOS/UEFI) → bootloader → kernel, and the 1 MiB handoff. **Why it matters:** every OS concept hangs off this relay race; get the map before the territory.
- [ ] **2. Your toolchain** · 🟢 · 📝 [Your Toolchain](https://osdev.sektor9.dev/synthesized_tutorials/00-introduction/02-your-toolchain/) · **Learn:** compiler vs assembler vs linker vs emulator, and what QEMU does for you. **Why:** you'll use these five tools constantly; knowing which does what prevents hours of confusion.
- [ ] **3. Ben Eater's 8-bit computer** · 🟢 · 🎬 [Ben Eater — Building an 8-bit computer](https://www.youtube.com/playlist?list=PLowKtXNTBypGqImE405J2565dvjafglHU) · **Learn:** registers, ALU, clock, memory — a CPU built on a breadboard from first principles. **Why:** once you've *seen* a CPU assembled from logic gates, "the processor reads from 0xB8000" stops being magic.
- [ ] **4. C pointers & memory** · 🟢 · 📚 [C Programming: A Modern Approach](https://www.knking.com/books/c2/) (chapters 11-17) · **Learn:** pointers, arrays, structs, and the memory model. **Why:** a kernel is 90% pointer arithmetic and struct layout; this is the C that matters.
- [ ] **5. Reading assembly (NASM)** · 🟠 · 📝 [x86 assembly intro](https://www.tutorialspoint.com/assembly_programming/index.htm) · **Learn:** registers, the stack, `mov`/`call`/`jmp`. **Why:** your first kernel is 5 lines of assembly before C; you need to read what the compiler emits.
- [ ] **6. What is an operating system?** · 🟢 · 📝 [OSTEP — intro chapter](https://pages.cs.wisc.edu/~remzi/OSTEP/intro.pdf) · **Learn:** virtualization, concurrency, persistence — the three pillars every OS exists to provide. **Why:** this is the map of the whole journey.

## 🟠 Stage 2 — The bare metal (weeks 4-7)

*Goal: boot your first real kernel and get text on screen.*

- [ ] **7. OSDev Wiki Bare Bones** · 🟠 · 📝 [OSDev Wiki — Bare Bones](https://wiki.osdev.org/Bare_Bones) · **Learn:** the canonical minimal 32-bit C kernel booted by GRUB + Multiboot. **Why:** this is your "Hello World" of OS dev — it proves the whole toolchain works end to end.
- [ ] **8. Operating Systems: From 0 to 1 (os01)** · 🟠 · 📚 [os01 — the C journey to a working OS](https://tuhdo.github.io/os01/) · **Learn:** the deep, hand-holding C path — boot sector, assembly, memory, and a real OS incrementally. **Why:** the best single free resource for the C path; work through it alongside your own kernel.
- [ ] **9. The Little OS Book** · 🟠 · 📚 [The Little OS Book](https://littleosbook.github.io/) · **Learn:** a second, concise pass at a minimal x86 OS in C. **Why:** seeing the same ideas a second way cements them.
- [ ] **10. VGA text mode** · 🟠 · 📝 [VGA Text Mode & Display](https://osdev.sektor9.dev/synthesized_tutorials/concepts/) · **Learn:** writing to the 0xB8000 buffer and building a `print` function. **Why:** text output is your kernel's first sense — everything else (logs, debug) builds on it.
- [ ] **11. GDT & protected mode** · 🟠 · 📝 [OSDev Wiki — GDT](https://wiki.osdev.org/Global_Descriptor_Table) · **Learn:** segments, the GDT, and switching from 16-bit real mode to 32-bit protected mode. **Why:** the CPU doesn't run your kernel "for free"; you must set up its mental model.
- [ ] **12. Build a simple print + panic** · 🟠 · 📝 [OSDev Wiki — Printing To Screen](https://wiki.osdev.org/Printing_To_Screen) · **Learn:** combine VGA + a panic handler that prints and halts. **Why:** a kernel that can't say "I died here" is un-debuggable.

## 🔴 Stage 3 — A real kernel (weeks 8-12)

*Goal: memory management, interrupts, and multitasking — the core of an OS.*

- [ ] **13. Memory management** · 🔴 · 📚 [OSTEP — Virtualization](https://pages.cs.wisc.edu/~remzi/OSTEP/) · **Learn:** paging, virtual memory, the MMU. **Why:** every modern OS feature (isolation, demand paging, copy-on-write) is memory management under the hood.
- [ ] **14. Paging in your kernel** · 🔴 · 📝 [OSDev Wiki — Setting Up Paging](https://wiki.osdev.org/Setting_Up_Paging) · **Learn:** set up page tables and enable paging (CR3/CR0). **Why:** this is the line between "bare metal toy" and "real OS."
- [ ] **15. Interrupts & the IDT** · 🔴 · 📝 [Interrupts & the IDT](https://osdev.sektor9.dev/synthesized_tutorials/concepts/) · **Learn:** exceptions (0-31) and IRQs, the IDT, and the PIC/APIC. **Why:** without interrupts your kernel can't receive input, timers, or errors.
- [ ] **16. James Molloy's Kernel Tutorials** · 🔴 · 📝 [James Molloy's Kernel Development Tutorials (archived)](https://github.com/Exclavia/Kernel-Dev) · **Learn:** a full UNIX-clone kernel in C — scheduling, filesystems, user mode. **Why:** this is the "graduate course" that turns your toy into a real OS.
- [ ] **17. Build a scheduler** · 🔴 · 📝 [The Scheduler (round-robin)](https://osdev.sektor9.dev/synthesized_tutorials/concepts/) · **Learn:** timer-driven preemptive multitasking — save/restore task contexts on a PIT tick. **Why:** multitasking is the OS's defining feature; watch two tasks time-share one CPU.
- [ ] **18. User mode & syscalls** · 🔴 · 📝 [OSDev Wiki — User Mode](https://wiki.osdev.org/User_Mode) · **Learn:** privilege levels, `iret` to user mode, and a syscall interface. **Why:** separating kernel from user programs is what makes an OS secure and stable.

---

## 🎯 Milestone project — "Your own mini-OS"

**Goal:** extend the C kernel to a complete mini-OS. Estimated 2-3 weeks. **Prereq:** stages 1-3.

1. **Boot** a Multiboot C kernel in QEMU (from Bare Bones).
2. **Print** "Hello World" via a VGA buffer, then build `printf`.
3. **Handle** the timer IRQ and print a running tick count.
4. **Implement** paging with a simple page allocator.
5. **Run two tasks** round-robin that each print different characters.
6. **Add** a keyboard handler that prints typed keys.
7. **Write** a `docs/design.md` explaining each subsystem in your own words.

**Checklist**

- [ ] boots in QEMU with GRUB
- [ ] VGA print + panic work
- [ ] timer interrupt increments a counter
- [ ] paging enabled with page allocator
- [ ] two tasks run round-robin
- [ ] keyboard input prints to screen
- [ ] `docs/design.md` written

## 📌 Related resources

- **More C OS-dev series:** [Nanobyte's Building-an-OS](https://www.youtube.com/playlist?list=PLFjM7v6KGMpiH2G-kT781ByCNC_0pKpPN) (video), [dr Jonas Birch's OS in C](https://www.youtube.com/playlist?list=PLdNUbYq5poiUYyFuqBLKu3Nc7BPv6PSvv)
- **Reference:** [OSDev Wiki](https://wiki.osdev.org/) — the always-open manual
- **Deeper systems:** [CS:APP](https://csapp.cs.cmu.edu/) — the best programming-to-hardware bridge
- **Community:** [OSDev Forum](https://forum.osdev.org/) — read threads at your level
