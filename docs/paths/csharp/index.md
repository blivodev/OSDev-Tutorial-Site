# C# Path

Welcome to the **C# track**. This is the *managed* angle on operating-system
development: instead of writing raw pointers to a framebuffer like C or
Rust, you write everyday C# — and learn, honestly, **why C# cannot go bare
metal without a framework**.

If you're brand new to programming, start here and learn C# *and* OS
development together, step by step. If you already know C#, you can jump
straight to Step 2 where the real lesson lives.

---

## 🗺️ The C# Path, step by step

| Step | What you'll do | Go to |
|------|----------------|-------|
| 1 | **Learn C# from scratch** — classes, types, collections, async. | [Beginner C# tutorial](beginner.md) |
| 2 | **The edge case** — why C# needs a framework (managed IL, GC, a runtime). | [C# kernel: why it's an edge case](../../synthesized_tutorials/05-csharp/README.md) |
| 3 | **Core OS concepts** — how computers boot, memory, interrupts. | Core concepts (below) |
| 4 | **Reference** — the Cosmos OS kit, your framework. | [Path C# reference](../../path_csharp_os/README.md) |
| 5 | **Build & run** — a real C# OS with Cosmos. | [Example OS project (C#)](../../Example_OS_Project/csharp-README.md) |

---

## 1. Beginner C# tutorial

New to the language? Work through the
[beginner C# tutorial](beginner.md) — original content that teaches C#
syntax and then connects it to what an OS actually needs. You'll learn:

- **Classes, objects, and the type system** — C#'s bread and butter.
- **Collections, strings, and control flow** — practical day-to-day C#.
- **`async`/`await`** — the modern asynchrony model.
- **The key insight** — why C# compiles to *managed IL* and needs a
  runtime, and what that means when you want to write an OS.

> 💡 **New to programming?** Read [Step 3's core concepts](../../synthesized_tutorials/00-introduction/01-how-a-computer-boots.md) alongside
> this tutorial whenever you hit a hardware term.

---

## 2. Why C# needs a framework (the edge case)

Every other path (C, C++, Rust, Go) compiles to native machine code and lets
you poke the raw `0xB8000` framebuffer. **C# is different.** C# compiles to
[managed IL](../../GLOSSARY/managed-il.md) that needs a runtime — a garbage
collector, a JIT, a huge base class library. Bootstrapping that runtime on
bare metal is an enormous project.

That makes C# the **edge case** of this site. The honest beginner path is to
*use a framework* — the [Cosmos OS kit](https://www.gocosmos.org/) — which
brings the runtime with you and compiles your C# down to a real bootable OS.

➡️ **Read the full explanation:** [Building "Hello World!" in C# (and why
it's an edge case)](../../synthesized_tutorials/05-csharp/README.md)

---

## 3. Core OS concepts

These explain *how computers and OSes actually work* — the theory behind
every language path. Read them as you need them:

- [How a computer boots](../../synthesized_tutorials/00-introduction/01-how-a-computer-boots.md)
- [Your toolchain](../../synthesized_tutorials/00-introduction/02-your-toolchain.md)
- [Bootloaders & the Multiboot protocol](../../synthesized_tutorials/concepts/01-bootloaders-and-multiboot.md)
- [Memory management](../../synthesized_tutorials/concepts/02-memory-management.md)
- [Interrupts & the IDT](../../synthesized_tutorials/concepts/03-interrupts-and-the-idt.md)
- [VGA text mode](../../synthesized_tutorials/concepts/04-vga-text-mode.md)
- [The "Hello World of OSes" recipe](../../synthesized_tutorials/concepts/05-the-hello-world-of-oses.md)

---

## 4. Reference (Cosmos)

Your framework and reference for the whole track:

- [**Path C# — C# → OS Development**](../../path_csharp_os/README.md) — the
  Cosmos OS kit, its license, what it is, and what you'll build.
- [Cosmos OS](https://www.gocosmos.org/) — the project site.
- [Cosmos on GitHub](https://github.com/CosmosOS/Cosmos) — the source.

---

## 5. Build & run

Build and boot your own C# operating system with Cosmos:

- [**Example OS project (C#)**](../../Example_OS_Project/csharp-README.md) —
  a complete `Kernel.cs` + build instructions, verified against the real
  Cosmos API.
- [**Setup**](../../Example_OS_Project/docs/setup.md) — the toolchain you
  need (Visual Studio 2022 + Cosmos DevKit).

---

## 🎬 Watch and learn

Verified videos to learn C# and .NET fundamentals:

- [C# Tutorial — Full Course for Beginners (freeCodeCamp)](https://www.youtube.com/watch?v=GhQdlIFylQ8) — a complete, free C# course covering classes, types, collections and more — everything in Step 1.
- [Garbage Collector in .NET Explained | GC Generations](https://www.youtube.com/watch?v=QvO5Htgb5-Y) — how the .NET GC's generations work, the managed-memory model at the heart of the C# edge case.
- [Exploring .NET's Memory Management — A Trip Down Memory Lane (JetBrains)](https://www.youtube.com/watch?v=9FEfy9y0fFQ) — how the .NET GC, CLR and intermediate language manage memory — the runtime reality behind managed IL.
- [.NET GC — part 1 (Maoni Stephens)](https://www.youtube.com/watch?v=vqMky3uw4uI) — the .NET Garbage Collector's lead engineer explains marking, generations and compaction.
- [C# Async/Await/Task Explained (Deep Dive)](https://www.youtube.com/watch?v=il9gl8MH17s) — a deep dive into the async model you meet in Step 1.
- [The Operating System Construction Kit: Cosmos! (Cosmos Quest #1)](https://www.youtube.com/watch?v=Khff1xxyEHI) — a hands-on demo of writing C# with the Cosmos kit and booting it as a real OS — the exact Step 2–5 workflow.
- [Make a simple OS using C# and COSMOS](https://www.youtube.com/watch?v=WSsZh3dVtaI) — another practical walkthrough of building and booting a Cosmos OS.

---

## Next steps

Done with the C# path? The coverage here is deliberately smaller than the
other tracks — because the language itself handed the hardest parts to a
framework. That's the lesson. If you want the *raw hardware* OS experience,
explore the other tracks:

- [**Choose your path**](../index.md) — C, C++ and Rust give you full
  pointer-level control of bare metal.
- [**Glossary**](../../GLOSSARY/README.md) — hover-tooltips for every OS
  term you've met along the way.


---

## 🎬 Watch C# in action

These are real, verified videos covering C# and the Cosmos OS kit. Click each to expand and watch inline:

<details class="video-embed"><summary>▶ Watch: C# Tutorial — Full Course for Beginners (freeCodeCamp)</summary>
<iframe src="https://www.youtube-nocookie.com/embed/GhQdlIFylQ8" width="100%" height="400" style="border:0;border-radius:8px;" allowfullscreen></iframe>
</details>
<details class="video-embed"><summary>▶ Watch: Garbage Collector in .NET Explained (the managed memory model)</summary>
<iframe src="https://www.youtube-nocookie.com/embed/QvO5Htgb5-Y" width="100%" height="400" style="border:0;border-radius:8px;" allowfullscreen></iframe>
</details>
<details class="video-embed"><summary>▶ Watch: The Operating System Construction Kit: Cosmos! (Cosmos Quest #1)</summary>
<iframe src="https://www.youtube-nocookie.com/embed/Khff1xxyEHI" width="100%" height="400" style="border:0;border-radius:8px;" allowfullscreen></iframe>
</details>
<details class="video-embed"><summary>▶ Watch: Make a Simple OS using C# and COSMOS</summary>
<iframe src="https://www.youtube-nocookie.com/embed/WSsZh3dVtaI" width="100%" height="400" style="border:0;border-radius:8px;" allowfullscreen></iframe>
</details>

---

## 🔗 Further resources (C#)

- [Microsoft Learn — C# documentation](https://learn.microsoft.com/en-us/dotnet/csharp/) — the official reference, tutorials, and language spec.
- [Tour of C#](https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/) — a quick guided overview for new C# programmers.
- [Cosmos OS](https://www.gocosmos.org/) — the C# open-source operating system construction kit this path recommends.
- [Cosmos on GitHub](https://github.com/CosmosOS/Cosmos) — the source code behind the Cosmos framework.
- [OSDev Wiki — C Sharp Bare Bones](https://wiki.osdev.org/C_Sharp_Bare_Bones) — the OSDev community tutorial for C# kernels.
- [The Managed Common Intermediate Language (CIL) spec — ECMA-335](https://www.ecma-international.org/publications-and-standards/standards/ecma-335/) — the standard behind managed IL, the core of the C# edge case.

