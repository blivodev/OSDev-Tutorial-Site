# C# / Cosmos Track

> **Level:** 🟠 Intermediate → 🟠 Intermediate · **Est. time:** ~8 weeks · **Progress:** track your checkboxes below

**What you'll learn:** Writing an operating system in C# using the Cosmos project — the most approachable way to build a kernel in a managed language.

**Who it's for:** .NET/C# developers who want to build an OS without fighting assembly and raw pointers.

---

## How this path works

Follow the steps **in order**. Tick a checkbox when you finish a step.

**Legend:** 🟢 Beginner · 🟠 Intermediate · 🔴 Hard · ⚫ Advanced

---

## 🟠 Stage 1 — C# + Cosmos basics (weeks 1-3)

- [ ] **1. Cosmos: Build a kernel** · 🟠 · 📝 [Cosmos — Getting Started](https://www.gocosmos.org/) — the Cosmos project's "hello world" kernel in C#.
- [ ] **2. How Cosmos compiles to IL** · 🟠 · 📝 [Cosmos: how it works](https://www.gocosmos.org/docs/) — Cosmos compiles your C# to a kernel via its own compiler (`IL2CPU`); understand the pipeline.
- [ ] **3. Managed IL concepts** · 🟠 · 📝 [OSDev Wiki — Cosmos](https://wiki.osdev.org/Cosmos) — what "managed" means for an OS: no direct memory unless you ask.

## 🟠 Stage 2 — Build features (weeks 4-6)

- [ ] **4. Console + input** · 🟠 · 📝 [Cosmos — Console and Keyboard](https://www.gocosmos.org/docs/tutorials/) — your kernel reads the keyboard and prints to the console.
- [ ] **5. A simple shell** · 🟠 · 📝 [Cosmos tutorials — command line](https://www.gocosmos.org/docs/tutorials/) — build a command interpreter in C#.
- [ ] **6. Graphics mode** · 🟠 · 📝 [Cosmos — Graphics](https://www.gocosmos.org/docs/tutorials/) — draw pixels and shapes on the VGA/framebuffer.

## 🔴 Stage 3 — Go deeper (weeks 7-8)

- [ ] **7. Garbage collection in the kernel** · 🔴 · 📝 [OSDev Wiki — Cosmos GC concepts](https://wiki.osdev.org/Cosmos) — how a managed kernel handles allocation without a host GC.
- [ ] **8. Read the Cosmos source** · 🔴 · 📚 [Cosmos on GitHub](https://github.com/CosmosOS/Cosmos) — the `IL2CPU` and kernel source. The real depth is here.

---

## 🎯 Milestone project

Put it together: a **Cosmos kernel with a working shell, a command to list/manage memory, and a graphics demo** — the classic managed-OS project.

## 📌 Related resources

- [Cosmos Docs](https://www.gocosmos.org/docs/)
- [.NET internals](https://learn.microsoft.com/en-us/dotnet/standard/clr) — the CLR that Cosmos re-implements for kernel mode
