# C# / Cosmos Track

> **Level:** 🟠 Intermediate → 🔴 Hard · **Est. time:** ~8 weeks (4-6 hrs/week) · **Progress:** tick each step as you finish it

**What you'll learn:** Writing an operating system in C# using the Cosmos project — the most approachable way to build a kernel in a managed language, including its IL2CPU compiler.

**Who it's for:** .NET/C# developers who want to build an OS without fighting assembly and raw pointers, and who are curious how a managed runtime can run at ring 0.

---

## How this path works

Follow the steps **in order**. Tick a checkbox when you finish a step. Steps are 📚 book, 📝 tutorial, or 🎬 video.

**Legend:** 🟢 Beginner · 🟠 Intermediate · 🔴 Hard · ⚫ Advanced

---

## 🟠 Stage 1 — C# + Cosmos basics (weeks 1-3)

*Goal: a bootable C# kernel and an understanding of how it's even possible.*

- [ ] **1. Cosmos: build a kernel** · 🟠 · 📝 [Cosmos — Getting Started](https://www.gocosmos.org/) · **Learn:** the Cosmos project's "hello world" kernel in C# — install, build, boot in QEMU. **Why:** your first managed-language kernel; prove the toolchain works.
- [ ] **2. How Cosmos compiles to IL** · 🟠 · 📝 [Cosmos: how it works](https://www.gocosmos.org/docs/) · **Learn:** Cosmos compiles your C# to a kernel via its own compiler (`IL2CPU`) — it translates IL to native code with no OS underneath. **Why:** this is the clever core; understand the pipeline before adding features.
- [ ] **3. Managed IL concepts** · 🟠 · 📝 [OSDev Wiki — Cosmos](https://wiki.osdev.org/Cosmos) · **Learn:** what "managed" means for an OS — no direct memory unless you ask, objects, and a GC you control. **Why:** your mental model of "the runtime" changes when you *are* the runtime.
- [ ] **4. C# fluency** · 🟠 · 📚 [.NET / C# docs](https://learn.microsoft.com/en-us/dotnet/csharp/) · **Learn:** the language features you'll use — classes, structs, delegates, unsafe code. **Why:** the more C# you know, the more of the kernel you can write cleanly.

## 🟠 Stage 2 — Build features (weeks 4-6)

*Goal: a usable kernel — input, a shell, graphics.*

- [ ] **5. Console + keyboard** · 🟠 · 📝 [Cosmos — Console and Keyboard](https://www.gocosmos.org/docs/tutorials/) · **Learn:** your kernel reads the keyboard and prints to the console. **Why:** bidirectional I/O is the first step from "hello world" to "usable."
- [ ] **6. A simple shell** · 🟠 · 📝 [Cosmos tutorials — command line](https://www.gocosmos.org/docs/tutorials/) · **Learn:** build a command interpreter in C# — parse input, dispatch commands. **Why:** the classic first "real" feature; it exercises strings, parsing, and dispatch.
- [ ] **7. Graphics mode** · 🟠 · 📝 [Cosmos — Graphics](https://www.gocosmos.org/docs/tutorials/) · **Learn:** draw pixels, shapes, and text on the VGA/framebuffer. **Why:** graphics is where managed code shines — no pointer juggling.
- [ ] **8. Files & storage** · 🔴 · 📝 [Cosmos — Filesystem](https://www.gocosmos.org/docs/tutorials/) · **Learn:** read/write files on a FAT filesystem. **Why:** persistence turns your toy into something you could actually use.
- [ ] **9. Networking** · 🔴 · 📝 [Cosmos — Networking](https://www.gocosmos.org/docs/tutorials/) · **Learn:** the Ethernet driver and a simple HTTP request. **Why:** a kernel that can talk to the network is a genuine achievement.

## 🔴 Stage 3 — Go deeper (weeks 7-8)

*Goal: understand and extend the runtime itself.*

- [ ] **10. Garbage collection in the kernel** · 🔴 · 📝 [OSDev Wiki — Cosmos GC concepts](https://wiki.osdev.org/Cosmos) · **Learn:** how a managed kernel handles allocation without a host GC. **Why:** you're the runtime now — allocation and GC are your code's responsibility.
- [ ] **11. Read the Cosmos source** · 🔴 · 📚 [Cosmos on GitHub](https://github.com/CosmosOS/Cosmos) · **Learn:** the `IL2CPU` compiler and kernel source — how it really boots. **Why:** the real depth is here; reading it separates "user of Cosmos" from "contributor."
- [ ] **12. Write a device driver** · 🔴 · 📝 [Cosmos — Drivers](https://www.gocosmos.org/docs/tutorials/) · **Learn:** implement a simple device driver (a timer or a PS/2 mouse). **Why:** drivers are the interface between your managed kernel and raw hardware.

---

## 🎯 Milestone project — "A C# OS with a shell"

**Goal:** a Cosmos kernel with real features. Estimated 2-3 weeks. **Prereq:** all stages.

1. **Boot** a Cosmos C# kernel in QEMU.
2. **Build** a working shell with at least 6 commands (help, echo, clear, time, meminfo, about).
3. **Add** a graphics demo that draws a shape that animates.
4. **Implement** one driver (timer or keyboard) beyond the defaults.
5. **Read** enough IL2CPU source to explain in a paragraph how your C# became native code.
6. **Write** `docs/design.md` documenting your kernel.

**Checklist**

- [ ] boots in QEMU via Cosmos
- [ ] shell with 6+ commands works
- [ ] keyboard input functional
- [ ] graphics demo animates
- [ ] one custom driver implemented
- [ ] IL2CPU explained in `docs/design.md`

## 📌 Related resources

- **Docs:** [Cosmos Docs](https://www.gocosmos.org/docs/)
- **Runtime:** [.NET internals](https://learn.microsoft.com/en-us/dotnet/standard/clr) — the CLR Cosmos re-implements for kernel mode
- **Community:** [Cosmos GitHub discussions](https://github.com/CosmosOS/Cosmos/discussions)
