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


---

## 🎬 Watch C in action

These are real, verified videos. Click each to expand and watch inline:

<details class="video-embed"><summary>▶ Watch: CS50x — Memory (pointers, stack & heap)</summary>
<iframe src="https://www.youtube-nocookie.com/embed/F9-yqoS7b8w" width="100%" height="400" style="border:0;border-radius:8px;" allowfullscreen></iframe>
</details>
<details class="video-embed"><summary>▶ Watch: Pointers — CS50 Shorts</summary>
<iframe src="https://www.youtube-nocookie.com/embed/XISnO2YhnsY" width="100%" height="400" style="border:0;border-radius:8px;" allowfullscreen></iframe>
</details>
<details class="video-embed"><summary>▶ Watch: C Programming for Beginners (freeCodeCamp)</summary>
<iframe src="https://www.youtube-nocookie.com/embed/xND0t1pr3KY" width="100%" height="400" style="border:0;border-radius:8px;" allowfullscreen></iframe>
</details>
<details class="video-embed"><summary>▶ Watch: Pointers in C/C++ Full Course</summary>
<iframe src="https://www.youtube-nocookie.com/embed/zuegQmMdy8M" width="100%" height="400" style="border:0;border-radius:8px;" allowfullscreen></iframe>
</details>

---

## 🔗 Further resources (C)

- [C reference — cppreference.com/w/c](https://en.cppreference.com/w/c) — the authoritative reference for every C standard library function and keyword.
- [The GNU C Programming Tutorial](https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html) — the official GNU manual for C.
- [OSDev Wiki — Bare Bones (C)](https://wiki.osdev.org/Bare_Bones) — the canonical first C kernel tutorial, the same one this path is built around.
- [OSDev Wiki — Meaty Skeleton](https://wiki.osdev.org/Meaty_Skeleton) — the next step after Bare Bones: a proper kernel project structure.
- [C — Learn C with interactive lessons](https://learn-c.org/) — a free, hands-on C tutorial for complete beginners.
- [freeCodeCamp — C Programming course](https://www.youtube.com/watch?v=xND0t1pr3KY) — a full video course taking you through the whole language.
- [CS50x on edX](https://cs50.harvard.edu/x/) — Harvard's free intro course; Lecture 4 covers the memory model every OS dev needs.

