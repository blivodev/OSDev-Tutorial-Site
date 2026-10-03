# Rust OS Dev

> **Level:** 🟢 Beginner → ⚫ Advanced · **Est. time:** ~14 weeks · **Progress:** track your checkboxes below

**What you'll learn:** Modern operating-system development in Rust — memory safety without a runtime, from a blinking kernel to a multitasking OS.

**Who it's for:** Rust programmers who want the language's safety guarantees applied to bare metal, following the famous *Writing an OS in Rust* series.

---

## How this path works

Follow the steps **in order**. Tick a checkbox when you finish a step. Steps are books 📚, tutorials 📝, or videos 🎬.

**Legend:** 🟢 Beginner · 🟠 Intermediate · 🔴 Hard · ⚫ Advanced

---

## 🟢 Stage 1 — Rust + bare metal (weeks 1-4)

- [ ] **1. The Rust Book** · 🟢 · 📚 [The Rust Programming Language](https://doc.rust-lang.org/book/) — ownership, traits, and why Rust is safe by default. You need this before bare metal.
- [ ] **2. no_std and no_main** · 🟠 · 📝 [Writing an OS in Rust — Freestanding Rust Binary](https://os.phil-opp.com/freestanding-rust-binary/) — the classic first step: a binary that doesn't link the standard library.
- [ ] **3. Rust on embedded intro** · 🟢 · 📝 [The Embedded Rust Book](https://docs.rust-embedded.org/book/) — the Embedded WG's guide to Rust without an OS.

## 🟠 Stage 2 — Your first Rust OS (weeks 5-9)

- [ ] **4. VGA text mode in Rust** · 🟠 · 📝 [Writing an OS in Rust — VGA Text Mode](https://os.phil-opp.com/vga-text-mode/) — a safe wrapper around the 0xB8000 buffer using Rust's type system.
- [ ] **5. CPU exceptions & interrupts** · 🔴 · 📝 [Writing an OS in Rust — CPU Exceptions](https://os.phil-opp.com/cpu-exceptions/) — the IDT, interrupts, and the `x86_64` crate.
- [ ] **6. Memory management (paging)** · 🔴 · 📝 [Writing an OS in Rust — Paging](https://os.phil-opp.com/paging-introduction/) — the frame allocator, page tables, and virtual memory in Rust.
- [ ] **7. Heap allocation** · 🔴 · 📝 [Writing an OS in Rust — Heap Allocation](https://os.phil-opp.com/heap-allocation/) — implement a kernel allocator and use `Box`/`Vec` in the kernel.

## ⚫ Stage 3 — A multitasking OS (weeks 10-14)

- [ ] **8. Async/await in the kernel** · ⚫ · 📝 [Writing an OS in Rust — Async/Await](https://os.phil-opp.com/async-await/) — an executor and the `Future` trait on bare metal.
- [ ] **9. xv6 vs blog_os** · ⚫ · 📚 [xv6: A Teaching OS](https://pdos.csail.mit.edu/6.S081/2023/xv6/book-riscv-rev3.pdf) — read the MIT xv6 book alongside blog_os to see a real, full kernel.
- [ ] **10. Read the blog_os source** · ⚫ · 📚 [blog_os GitHub](https://github.com/phil-opp/blog_os) — the complete kernel, now a real project with tests and CI.
- [ ] **11. Build a syscall interface** · ⚫ · 📝 [OSDev Wiki — System Calls](https://wiki.osdev.org/System_Call) — add user/kernel transitions to your Rust kernel.
- [ ] **12. Write your own OS in Rust** · ⚫ · 🎬 [Uncle Scientist — Rust OS video series](https://www.youtube.com/playlist?list=PLib6-zlkjfXkdCjQgrZhmfJOWBk_C2FTY) — a video companion to the blog.

---

## 🎯 Milestone project

Put it together: build the full **Writing an OS in Rust** kernel — boot, VGA, interrupts, paging, heap, async tasks — then add one feature of your own (a keyboard driver, a shell, or a syscall). This is a genuinely impressive portfolio OS.

## 📌 Related resources

- More Rust: [The Rust Reference](https://doc.rust-lang.org/reference/) (for `no_std` details)
- [Redox OS](https://www.redox-os.org/) — a real Rust OS to study
- [Rust on ESP32](https://docs.esp-rs.org/) — Rust bare-metal on microcontrollers
