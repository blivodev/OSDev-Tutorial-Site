# C Path

C is the classic language of operating systems — the language Linux, Windows, and most kernels are written in. This path takes you from absolute beginner C to a bootable "Hello World" kernel of your own, teaching the language *through* the lens of OS development.

## The track

Work through these steps in order. Each one builds on the last.

1. **[Beginner C tutorial](beginner.md)** — Learn C from scratch, with every concept mapped straight to OS development (pointers → memory addresses, structs → hardware device descriptors). No prior programming assumed.
2. **[The C "Hello World" kernel chapter](../../synthesized_tutorials/01-c/README.md)** — Build a real 5 KB kernel that boots in QEMU and writes "Hello World!" to the VGA screen. This is the payoff: all the C you just learned, doing real bare-metal work.
3. **[Core OS concepts to read](beginner.md)** — Read these alongside your kernel work to understand *why* it works:
   - [How a computer boots](../../synthesized_tutorials/00-introduction/01-how-a-computer-boots.md)
   - [Your toolchain (cross-compiler, linker, emulator)](../../synthesized_tutorials/00-introduction/02-your-toolchain.md)
   - [Bootloaders & the Multiboot protocol](../../synthesized_tutorials/concepts/01-bootloaders-and-multiboot.md)
   - [Memory management](../../synthesized_tutorials/concepts/02-memory-management.md)
   - [Interrupts & the IDT](../../synthesized_tutorials/concepts/03-interrupts-and-the-idt.md)
   - [VGA text mode](../../synthesized_tutorials/concepts/04-vga-text-mode.md)
   - [The "Hello World of OSes" recipe](../../synthesized_tutorials/concepts/05-the-hello-world-of-oses.md)
4. **[Reference / Bare Bones](../../path_c_os/Bare_Bones_C.md)** — The classic OSDev "Bare Bones" C tutorial, distilled as a reference. See also the [path overview](../../path_c_os/README.md).
5. **[Build & run](beginner.md)** — Compile your kernel, boot it in QEMU, and watch your very own OS print text. The steps for that live at the end of the [Hello World kernel chapter](../../synthesized_tutorials/01-c/README.md).

## Learn C with videos

These are real, reliable C resources that complement the written tutorial:

| Video | What it covers |
|-------|----------------|
| [CS50x 2024 — Lecture 4: Memory](https://www.youtube.com/watch?v=F9-yqoS7b8w) — Harvard, David Malan | Pointers, addresses, the stack & heap, `malloc`. **The single best intro to the memory model every OS dev depends on.** |
| [Pointers — CS50 Shorts](https://www.youtube.com/watch?v=XISnO2YhnsY) | A short, visual explanation of pointer basics — watch this before the full lecture if pointers feel abstract. |
| [CS50 2019 — Lecture 4: Pointers](https://www.youtube.com/watch?v=qPI9a2N9s74) | A classic deep-dive into pointers and memory addresses. |
| [Pointers in C/C++ (Full Course) — freeCodeCamp](https://www.youtube.com/watch?v=zuegQmMdy8M) | A full course devoted to pointers — go deep here. |
| [C Programming Full Course — Bro Code](https://www.youtube.com/watch?v=87SH2Cn0s9A) | A general, beginner-friendly tour of all C syntax. |
| [C Programming Tutorial for Beginners — freeCodeCamp](https://www.youtube.com/watch?v=xND0t1pr3KY) | The classic all-rounder; covers the whole language from zero. |

> 🧭 **New to programming?** Start with the [beginner tutorial](beginner.md) — it assumes you've never written a line of code.
