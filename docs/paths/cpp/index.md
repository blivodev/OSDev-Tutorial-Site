# C++ Path

Welcome! This path takes you from zero C++ knowledge to building your own kernel in the C++ language. C++ is a favorite of OS developers because it gives you low-level control over memory and hardware while letting you organize code with classes, objects, and templates — all without paying the runtime costs that higher-level languages impose.

Work through the steps in order. Each one links to real lessons in this site.

## The path

1. **[Beginner C++ tutorial](./beginner.md)** — Learn C++ fundamentals the OS-dev way: objects, references vs pointers, stack vs heap, name mangling, and why `extern "C"` matters when your kernel touches assembly and hardware.

2. **[C++ Hello-World kernel](../../synthesized_tutorials/03-cpp/README.md)** — Write a tiny real kernel in C++ that boots and prints to the screen. This nails down how a compiled C++ program becomes a bootable image.

3. **[Core OS concepts](../../synthesized_tutorials/concepts/01-bootloaders-and-multiboot.md)** — The ideas every OS is built on:
   - [Bootloaders and multiboot](../../synthesized_tutorials/concepts/01-bootloaders-and-multiboot.md)
   - [Memory management](../../synthesized_tutorials/concepts/02-memory-management.md)
   - [Interrupts and the IDT](../../synthesized_tutorials/concepts/03-interrupts-and-the-idt.md)
   - [VGA text mode](../../synthesized_tutorials/concepts/04-vga-text-mode.md)
   - [The "Hello World" of OSes](../../synthesized_tutorials/concepts/05-the-hello-world-of-oses.md)

   And two introductory chapters that everyone should read first:
   - [How a computer boots](../../synthesized_tutorials/00-introduction/01-how-a-computer-boots.md)
   - [Your toolchain](../../synthesized_tutorials/00-introduction/02-your-toolchain.md)

4. **[Reference: Bare Bones C++](../../path_cpp_os/Bare_Bones_Cpp.md)** — A quick reference for the exact compiler flags and linker steps that make C++ work in a kernel (see also the overview in `../../path_cpp_os/README.md`).

5. **Build & run** — Revisit the Hello-World kernel ([step 2](#2-c-hello-world-kernel)) and rebuild it yourself. Then branch out: poke at memory management, then interrupts, using the core concepts from [step 3](#3-core-os-concepts).

## Example learning videos (watch while you code)

These are verified, beginner-friendly videos from The Cherno's well-known C++ series:

- [The Cherno — Complete C++ playlist](https://www.youtube.com/playlist?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb) — the whole series, in order.
- [How C++ Works](https://www.youtube.com/watch?v=SfGuIVzE_Os) — what a compiler and linker actually do (directly relevant to `-fno-exceptions -fno-rtti`).
- [POINTERS in C++](https://www.youtube.com/watch?v=DTxHyVn0ODg) — the single most important skill for OS work.
- [Stack vs Heap Memory in C++](https://www.youtube.com/watch?v=wJ1L2nSIV1s) — where your variables live and why it matters.
- [REFERENCES in C++](https://www.youtube.com/watch?v=IzoFn3dfsPA) — references vs pointers, a distinction your kernel code leans on.
- [CLASSES in C++](https://www.youtube.com/watch?v=2BP8NhxjrO0) — objects, the bread and butter of C++ kernel design.
