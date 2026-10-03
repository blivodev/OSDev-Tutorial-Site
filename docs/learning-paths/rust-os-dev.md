# Rust OS Dev

> **Level:** 🟢 Beginner → ⚫ Advanced · **Est. time:** ~14 weeks (6-9 hrs/week) · **Progress:** tick each step as you finish it

**What you'll learn:** Modern operating-system development in Rust — memory safety without a runtime, from a blinking kernel to a multitasking OS with async/await.

**Who it's for:** Rust programmers who want the language's safety guarantees applied to bare metal, following the famous *Writing an OS in Rust* series by Philipp Oppermann.

---

## How this path works

Follow the steps **in order** — each builds on the last. Tick a checkbox when you finish a step. Steps are 📚 book, 📝 tutorial, or 🎬 video.

Each step notes **what you'll learn** and **why it matters**. This path mirrors the *Writing an OS in Rust* blog post by post, so you can follow along line by line.

**Legend:** 🟢 Beginner · 🟠 Intermediate · 🔴 Hard · ⚫ Advanced

---

## 🟢 Stage 1 — Rust + bare metal (weeks 1-4)

*Goal: Rust fluency and a binary that doesn't touch the standard library.*

- [ ] **1. The Rust Book** · 🟢 · 📚 [The Rust Programming Language](https://doc.rust-lang.org/book/) (chapters 1-15) · **Learn:** ownership, borrowing, traits, generics, error handling. **Why:** Rust's safety guarantees are the whole point of this path — you must be fluent before bare metal.
- [ ] **2. Rust on embedded intro** · 🟢 · 📝 [The Embedded Rust Book](https://docs.rust-embedded.org/book/) · **Learn:** `no_std`, the target spec, and the embedded ecosystem. **Why:** the same techniques (no_std, target triples, linker scripts) apply to OS dev.
- [ ] **3. Freestanding Rust binary** · 🟠 · 📝 [Writing an OS in Rust — Freestanding Rust Binary](https://os.phil-opp.com/freestanding-rust-binary/) · **Learn:** `#![no_std]`, `#![no_main]`, panic handler, and compiling for `x86_64-unknown-none`. **Why:** this is the first line of the whole journey — a Rust binary that links nothing.
- [ ] **4. A minimal kernel** · 🟠 · 📝 [Writing an OS in Rust — A Minimal Kernel](https://os.phil-opp.com/minimal-rust-kernel/) · **Learn:** the `bootimage` tool, VGA output from a `_start` function, and booting in QEMU. **Why:** your first bootable Rust kernel. You're now an OS dev.

## 🟠 Stage 2 — Your first Rust OS (weeks 5-9)

*Goal: the core subsystems — display, interrupts, memory, heap.*

- [ ] **5. VGA text mode in Rust** · 🟠 · 📝 [Writing an OS in Rust — VGA Text Mode](https://os.phil-opp.com/vga-text-mode/) · **Learn:** a safe wrapper around the 0xB8000 buffer using Rust's type system (newtypes, `volatile`, interior mutability). **Why:** see how Rust's safety can be *extended* into hardware — the VGA buffer can't be safely written with plain Rust.
- [ ] **6. Testing the kernel** · 🟠 · 📝 [Writing an OS in Rust — Testing](https://os.phil-opp.com/testing/) · **Learn:** the `cargo test` harness for kernels, serial output, and the `QEMU` test runner. **Why:** a kernel with tests is how you stay sane as complexity grows.
- [ ] **7. CPU exceptions** · 🔴 · 📝 [Writing an OS in Rust — CPU Exceptions](https://os.phil-opp.com/cpu-exceptions/) · **Learn:** the IDT, exception handlers, double faults, and the `x86_64` crate's `interrupts` module. **Why:** exceptions are how the CPU tells your kernel it did something wrong — you must catch them before they triple-fault.
- [ ] **8. Interrupts & the timer** · 🔴 · 📝 [Writing an OS in Rust — Hardware Interrupts](https://os.phil-opp.com/hardware-interrupts/) · **Learn:** the PIC, IRQs, the PIT timer, and the `lazy_static` + `Mutex` patterns. **Why:** a timer interrupt is the heartbeat of multitasking — this is where scheduling starts.
- [ ] **9. Memory management (paging)** · 🔴 · 📝 [Writing an OS in Rust — Paging Introduction](https://os.phil-opp.com/paging-introduction/) · **Learn:** the frame allocator, page tables (P4/P3/P2/P1), and the `bootloader` crate's mapping. **Why:** paging is what isolates processes from each other — the foundation of every modern OS.
- [ ] **10. Heap allocation** · 🔴 · 📝 [Writing an OS in Rust — Heap Allocation](https://os.phil-opp.com/heap-allocation/) · **Learn:** implement `GlobalAlloc`, a bump/linked-list allocator, and use `Box`/`Vec` in the kernel. **Why:** dynamic allocation is how real kernels manage data structures; without it you're stuck with static arrays.

## ⚫ Stage 3 — A multitasking OS (weeks 10-14)

*Goal: tasks, syscalls, and the modern async kernel.*

- [ ] **11. Async/await in the kernel** · ⚫ · 📝 [Writing an OS in Rust — Async/Await](https://os.phil-opp.com/async-await/) · **Learn:** an executor, the `Future` trait, wakers, and running async tasks on bare metal. **Why:** this is the cutting-edge pattern — an OS whose kernel itself uses async.
- [ ] **12. xv6 for comparison** · ⚫ · 📚 [xv6: A Teaching OS](https://pdos.csail.mit.edu/6.S081/2023/xv6/book-riscv-rev3.pdf) · **Learn:** a real, complete teaching kernel (in C) — its processes, file systems, and syscalls. **Why:** comparing a full kernel against blog_os shows you what a "complete" OS actually needs.
- [ ] **13. Read the blog_os source** · ⚫ · 📚 [blog_os GitHub](https://github.com/phil-opp/blog_os) · **Learn:** the complete kernel as a real project — CI, tests, workspace layout. **Why:** reading finished code teaches project structure that tutorials skip.
- [ ] **14. A syscall interface** · ⚫ · 📝 [OSDev Wiki — System Calls](https://wiki.osdev.org/System_Call) · **Learn:** user/kernel transitions, privilege levels, and `syscall`/`sysret`. **Why:** syscalls are the only door between user programs and your kernel — security depends on it.
- [ ] **15. User mode** · ⚫ · 📝 [Writing an OS in Rust — (community posts)](https://os.phil-opp.com/) · **Learn:** running a user process in ring 3, with a TSS and syscall entry. **Why:** a kernel that can't run user programs isn't an OS yet.
- [ ] **16. Build your own extension** · ⚫ · 🎬 [Uncle Scientist — Rust OS video series](https://www.youtube.com/playlist?list=PLib6-zlkjfXkdCjQgrZhmfJOWBk_C2FTY) · **Learn:** watch the blog series as video, then implement one feature the blog doesn't (a keyboard driver, a shell, a simple file system). **Why:** extending beyond the tutorial is where you truly own the knowledge.

---

## 🎯 Milestone project — "Your Rust OS, extended"

**Goal:** build the full *Writing an OS in Rust* kernel, then add a feature the blog doesn't cover. Estimated 3-4 weeks. **Prereq:** all stages.

1. **Complete** the full blog_os: boot, VGA, interrupts, paging, heap, async.
2. **Add** a keyboard driver that echoes typed characters to the screen.
3. **Add** a simple command-line shell that runs in kernel mode.
4. **Implement** one syscall (e.g. `write` to VGA) with a user-mode program.
5. **Write** a `README.md` documenting your kernel's design and how to boot it.
6. **Push** it to your own GitHub repo (private is fine).

**Checklist**

- [ ] boots in QEMU via `cargo run`
- [ ] prints to VGA with color
- [ ] exception + timer handlers work
- [ ] paging enabled, heap allocation via `Box`/`Vec`
- [ ] async executor runs tasks
- [ ] keyboard driver echoes input
- [ ] shell command loop works
- [ ] one syscall implemented with a user program
- [ ] README documents the design

## 📌 Related resources

- **Reference:** [The Rust Reference](https://doc.rust-lang.org/reference/) — for `no_std` and target-spec details
- **Real Rust OSes to study:** [Redox OS](https://www.redox-os.org/), [Theseus](https://github.com/theseus-os/Theseus)
- **Rust on hardware:** [Rust on ESP32](https://docs.esp-rs.org/) — the same bare-metal skills on microcontrollers
- **Community:** [r/rust](https://www.reddit.com/r/rust/), [OSDev Forum](https://forum.osdev.org/)
