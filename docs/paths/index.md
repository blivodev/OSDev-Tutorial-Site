# Choose Your Path

Start here. Pick **one programming language** and follow its track all the way from
beginner syntax to a bootable "Hello World" operating system. You don't need to read all
five — each path is self-contained and weaves the shared OS concepts in as you need them.

> 💡 **New to programming?** Each path includes a beginner language tutorial first, so you
> learn the language *and* OS development together, step by step.

---

## 🧭 Your language paths

| Track | What you'll do | Start |
|-------|----------------|-------|
| **C** | The classic OS language — pointers, memory, a real kernel, booted by GRUB. | [Begin the C path](c/index.md) |
| **C++** | C++ on bare metal — `extern "C"`, objects without a runtime, a C++ kernel. | [Begin the C++ path](cpp/index.md) |
| **Rust** | Safe systems programming — `no_std`, a panic handler, a Rust kernel with the bootloader crate. | [Begin the Rust path](rust/index.md) |
| **Go** | Go on bare metal — gccgo, terminals, a Multiboot kernel. | [Begin the Go path](go/index.md) |
| **C#** | The managed angle — why C# needs a framework, and Cosmos. | [Begin the C# path](csharp/index.md) |

---

## 🧱 Core OS concepts (language-agnostic)

These explain *how computers and OSes work* — read them alongside any path (each path tells you
when). If you want the theory first:

- [How a computer boots](../synthesized_tutorials/00-introduction/01-how-a-computer-boots.md)
- [Bootloaders & the Multiboot protocol](../synthesized_tutorials/concepts/01-bootloaders-and-multiboot.md)
- [Memory management](../synthesized_tutorials/concepts/02-memory-management.md)
- [Interrupts & the IDT](../synthesized_tutorials/concepts/03-interrupts-and-the-idt.md)
- [VGA text mode](../synthesized_tutorials/concepts/04-vga-text-mode.md)
- [The "Hello World of OSes" recipe](../synthesized_tutorials/concepts/05-the-hello-world-of-oses.md)

---

## 🔍 Tools & reference

- [Glossary (hover-tooltips for every term)](../GLOSSARY/README.md)
- [Example OS project (C, C++, Rust, Go, C#)](../Example_OS_Project/README.md)
- [Resource index & video collection](../resources/INDEX/)
