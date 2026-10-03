# C++ Kernel Track

> **Level:** 🟠 Intermediate → 🔴 Hard · **Est. time:** ~10 weeks · **Progress:** track your checkboxes below

**What you'll learn:** C++ OS development — RAII, `extern "C"`, global constructors, and a kernel written in modern C++.

**Who it's for:** C++ developers who know the language and want to use it at ring 0.

---

## How this path works

Follow the steps **in order**. Tick a checkbox when you finish a step.

**Legend:** 🟢 Beginner · 🟠 Intermediate · 🔴 Hard · ⚫ Advanced

---

## 🟠 Stage 1 — C++ for the kernel (weeks 1-3)

- [ ] **1. The C++ Bare Bones** · 🟠 · 📝 [OSDev Wiki — C++ Bare Bones](https://wiki.osdev.org/Bare_Bones) — the canonical C++ kernel: boot.s + a freestanding C++ main.
- [ ] **2. Freestanding C++** · 🟠 · 📝 [Writing a freestanding C++ kernel](https://wiki.osdev.org/C%2B%2B) — `-ffreestanding`, `-fno-rtti`, `-fno-exceptions`, and what the runtime normally does.
- [ ] **3. Global constructors** · 🔴 · 📝 [OSDev Wiki — C++ global constructors](https://wiki.osdev.org/Calling_Global_Constructors) — the `.init_array` / `_init` mechanism your kernel must call.
- [ ] **4. Learn Modern C++** · 🟠 · 📚 [LearnCpp.com](https://www.learncpp.com/) — RAII, move semantics, templates: the modern C++ you'll write in the kernel.

## 🔴 Stage 2 — The kernel (weeks 4-7)

- [ ] **5. CodePulse OS-Dev series (C++)** · 🔴 · 🎬 [Write your own 64-bit OS kernel (CodePulse)](https://www.youtube.com/playlist?list=PLZQftyCk7_SeZRitx5MjBKzTtvk0pHMtp) — build a 64-bit kernel in C++ from an empty boot sector.
- [ ] **6. Port the C kernel** · 🔴 · 📝 [Zero to Kernel in C](zero-to-kernel-c.md) — take the C kernel path's memory/interrupt work and redo it in C++ with classes and RAII.
- [ ] **7. New/delete in the kernel** · 🔴 · 📝 [OSDev Wiki — Memory Allocation](https://wiki.osdev.org/Memory_Allocation) — implement `operator new`/`delete` on your heap allocator.

## 🔴 Stage 3 — Polish (weeks 8-10)

- [ ] **8. A C++ shell** · 🔴 · 📝 [James Molloy Kernel Tutorials](https://github.com/Exclavia/Kernel-Dev) — add user input and a command loop to your C++ kernel.
- [ ] **9. Static analysis & testing** · 🔴 · 📝 [CppCon — low-level talks](https://www.youtube.com/@CppCon) — learn the tooling pros use on systems code.
- [ ] **10. Study a real C++ OS** · 🔴 · 📚 [SerenityOS](https://github.com/SerenityOS/serenity) — a complete, real OS written in modern C++. Read the kernel directory.

---

## 🎯 Milestone project

Put it together: a C++ kernel with **a class-based VGA driver, RAII-wrapped spinlocks, `new`/`delete`, and a tiny shell** — booted in QEMU.

## 📌 Related resources

- [OSDev Wiki C++ forum](https://forum.osdev.org/)
- [Itanium C++ ABI](https://itanium-cxx-abi.github.io/cxx-abi/) — what `extern "C"` and mangling actually mean
