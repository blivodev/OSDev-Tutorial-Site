# C++ Kernel Track

> **Level:** 🟠 Intermediate → 🔴 Hard · **Est. time:** ~10 weeks (5-8 hrs/week) · **Progress:** tick each step as you finish it

**What you'll learn:** C++ OS development — RAII, `extern "C"`, global constructors, and a kernel written in modern C++ that boots and runs.

**Who it's for:** C++ developers who know the language and want to use it at ring 0, building on the concepts from the C path.

---

## How this path works

Follow the steps **in order** — each builds on the last. Tick a checkbox when you finish a step. Steps are 📚 book, 📝 tutorial, or 🎬 video.

**Legend:** 🟢 Beginner · 🟠 Intermediate · 🔴 Hard · ⚫ Advanced

---

## 🟠 Stage 1 — C++ for the kernel (weeks 1-3)

*Goal: understand what C++ needs from a runtime, and how to live without it.*

- [ ] **1. The C++ Bare Bones** · 🟠 · 📝 [OSDev Wiki — C++ Bare Bones](https://wiki.osdev.org/Bare_Bones) · **Learn:** the canonical C++ kernel: `boot.s` + a freestanding C++ `main`. **Why:** your first bootable C++ kernel — the reference all later work builds on.
- [ ] **2. Freestanding C++** · 🟠 · 📝 [OSDev Wiki — C++](https://wiki.osdev.org/C%2B%2B) · **Learn:** `-ffreestanding`, `-fno-rtti`, `-fno-exceptions`, and what the C++ runtime normally does for you. **Why:** exceptions and RTTI need runtime support you don't have at ring 0; you must know what you're giving up.
- [ ] **3. Calling global constructors** · 🔴 · 📝 [OSDev Wiki — Calling Global Constructors](https://wiki.osdev.org/Calling_Global_Constructors) · **Learn:** the `.init_array` / `_init` mechanism your kernel must call before `main`. **Why:** globals with constructors silently do nothing if you skip this — a classic kernel bug.
- [ ] **4. Modern C++ fluency** · 🟠 · 📚 [LearnCpp.com](https://www.learncpp.com/) (chapters 13-21) · **Learn:** RAII, move semantics, templates, smart pointers. **Why:** these idioms make kernel code safer — RAII spinlocks are strictly better than manual lock/unlock.
- [ ] **5. Linker scripts & symbols** · 🔴 · 📝 [OSDev Wiki — Linker Scripts](https://wiki.osdev.org/Linker_Scripts) · **Learn:** `_start`, the load address, and how to expose `.init_array` via the linker. **Why:** you can't call the constructors if you can't find them.

## 🔴 Stage 2 — The kernel (weeks 4-7)

*Goal: a working 64-bit C++ kernel with memory + interrupts.*

- [ ] **6. CodePulse OS-Dev series** · 🔴 · 🎬 [Write your own 64-bit OS kernel (CodePulse)](https://www.youtube.com/playlist?list=PLZQftyCk7_SeZRitx5MjBKzTtvk0pHMtp) · **Learn:** build a 64-bit kernel in C++ from an empty boot sector — GDT, paging, interrupts. **Why:** a video walkthrough shows you the exact sequence in C++.
- [ ] **7. Port the C kernel** · 🔴 · 📝 [Zero to Kernel in C](zero-to-kernel-c.md) · **Learn:** take the C path's VGA, GDT, IDT, and paging work and redo it in C++ with classes and RAII. **Why:** porting is the fastest way to internalize both languages' idioms.
- [ ] **8. New/delete in the kernel** · 🔴 · 📝 [OSDev Wiki — Memory Allocation](https://wiki.osdev.org/Memory_Allocation) · **Learn:** implement `operator new`/`operator delete` on your heap allocator. **Why:** `new` is useless until you define it; this is where your kernel gets dynamic memory.
- [ ] **9. RAII locks** · 🔴 · 📝 [OSDev Wiki — Synchronization](https://wiki.osdev.org/Synchronization_Primitives) · **Learn:** a spinlock class whose constructor locks and destructor unlocks. **Why:** RAII makes lock discipline automatic — the #1 C++ kernel win over C.
- [ ] **10. A class-based VGA driver** · 🔴 · 📝 [OSDev Wiki — VGA](https://wiki.osdev.org/Text_UI) · **Learn:** wrap the framebuffer in a `VGADriver` class with `print`, `setColor`, `clear`. **Why:** object-oriented driver design is how real OSes organize hardware.

## 🔴 Stage 3 — Polish (weeks 8-10)

*Goal: user interaction and production habits.*

- [ ] **11. A C++ shell** · 🔴 · 📝 [James Molloy Kernel Tutorials](https://github.com/Exclavia/Kernel-Dev) · **Learn:** keyboard input and a command loop in your kernel. **Why:** a shell is the "I can actually use this" moment.
- [ ] **12. Static analysis & testing** · 🔴 · 📝 [CppCon — low-level talks](https://www.youtube.com/@CppCon) · **Learn:** the tooling pros use — sanitizers, static analysis, unit tests for kernel code. **Why:** catching UB in kernel code saves days of debugging.
- [ ] **13. Study SerenityOS** · 🔴 · 📚 [SerenityOS](https://github.com/SerenityOS/serenity) · **Learn:** a complete, real OS written in modern C++ (its own STL, window system, browser). **Why:** the best example of "modern C++ OS" done at scale.
- [ ] **14. Your own extension** · 🔴 · 📝 [OSDev Wiki — Getting Started](https://wiki.osdev.org/Getting_Started) · **Learn:** add one feature the paths didn't cover — a keyboard layout, a timer-based scheduler, or a simple allocator. **Why:** extending beyond tutorials is where you become a real kernel developer.

---

## 🎯 Milestone project — "A C++ mini-OS"

**Goal:** a C++ kernel demonstrating the language's strengths at ring 0. Estimated 2-3 weeks. **Prereq:** all stages.

1. **Boot** a freestanding C++ kernel in QEMU (from Bare Bones).
2. **Call** global constructors correctly (`.init_array`).
3. **Implement** `new`/`delete` on a heap allocator.
4. **Build** a class-based VGA driver and an RAII spinlock.
5. **Add** a timer interrupt and a simple round-robin scheduler.
6. **Add** a keyboard-driven shell.
7. **Write** `docs/design.md` explaining your RAII and constructor decisions.

**Checklist**

- [ ] boots in QEMU
- [ ] global constructors run
- [ ] `new`/`delete` work
- [ ] VGA driver class works
- [ ] RAII spinlock used for shared state
- [ ] timer interrupt + scheduler run tasks
- [ ] shell accepts commands
- [ ] `docs/design.md` written

## 📌 Related resources

- **Reference:** [OSDev Wiki C++ forum](https://forum.osdev.org/), [Itanium C++ ABI](https://itanium-cxx-abi.github.io/cxx-abi/) (what `extern "C"` and mangling mean)
- **Real OS:** [SerenityOS](https://github.com/SerenityOS/serenity)
- **Compilers:** [Matt Godbolt — Compiler Explorer](https://godbolt.org/) — see your C++ compile to asm
