# Rust Path

Welcome to the **Rust** track. Rust is a modern systems language with a unique
superpower for OS development: it proves your code is memory-safe *at compile
time*, so many of the classic kernel bugs — use-after-free, dangling pointers,
out-of-bounds writes — are simply impossible to write. No garbage collector,
no runtime, and full control over memory. That combination makes Rust a
first-class language for writing operating systems.

This path weaves a beginner Rust tutorial together with the core OS concepts
you need, step by step. You don't need any prior Rust experience — you'll learn
the language *and* build a kernel together.

> 💡 **New to Rust?** Start at Step 1. The beginner tutorial teaches the
> language through the lens of OS development, so every concept has a clear
> "why" behind it.

---

## 🧭 The Rust path

Follow these steps **in order**. Each one builds on the last.

1. [**Beginner Rust tutorial**](beginner.md) — why Rust for OS dev, ownership
   & borrowing, `no_std`, and a freestanding binary. ~Everything you need to
   read the kernel chapters.
2. [**Rust Hello-World kernel (`no_std`) chapter**](../../synthesized_tutorials/02-rust/README.md)
   — build a real freestanding Rust kernel that prints "Hello World!" to the
   VGA text-mode screen at `0xB8000`.
3. [**Core OS concepts**](#core-os-concepts) — the language-agnostic theory
   every kernel assumes. Read these alongside the kernel chapter as needed.
4. [**Reference: "Writing an OS in Rust"**](../../path_rust_os/README.md) —
   the full reference track: interrupts, paging, memory, and beyond. Come back
   here after your Hello-World kernel works.
5. [**Build & run**](#build--run) — compile, link, and boot your kernel in QEMU.

---

## 🧱 Core OS concepts

Read these at the points each path step tells you to. They explain *how
computers and OSes work* regardless of language:

- [How a computer boots](../../synthesized_tutorials/00-introduction/01-how-a-computer-boots.md)
- [Your toolchain](../../synthesized_tutorials/00-introduction/02-your-toolchain.md)
- [Bootloaders & the Multiboot protocol](../../synthesized_tutorials/concepts/01-bootloaders-and-multiboot.md)
- [Memory management](../../synthesized_tutorials/concepts/02-memory-management.md)
- [Interrupts & the IDT](../../synthesized_tutorials/concepts/03-interrupts-and-the-idt.md)
- [VGA text mode](../../synthesized_tutorials/concepts/04-vga-text-mode.md)
- [The "Hello World of OSes" recipe](../../synthesized_tutorials/concepts/05-the-hello-world-of-oses.md)

---

## 🎬 Learn Rust with video

These verified videos pair well with each step. Watch them alongside the text
tutorial to see the concepts in action.

- [**Writing an OS in Rust — Part 1: A Freestanding Rust Binary**](https://www.youtube.com/watch?v=rH5jnbJ3tL4)
  *(Uncle Scientist)* — a walkthrough of Philipp Oppermann's "Writing an OS in
  Rust", Part 1: creating a freestanding Rust binary that doesn't link the
  standard library. Perfect pairing for Step 2.
- [**A Freestanding Rust Binary**](https://os.phil-opp.com/freestanding-rust-binary/)
  *(blog, written)* — the canonical written version of the same first step.
  Reference for Steps 2 and 4.
- [**Ownership in Rust**](https://www.youtube.com/watch?v=9VBLOwmNE1g)
  *(Francesco Ciulla)* — the single most important concept in Rust: ownership,
  the stack vs. the heap, and the `Move`/`Clone`/`Copy` traits. Watch after Step 1.
- [**References and Borrowing in Rust**](https://www.youtube.com/watch?v=Q_0yoX07Fhs)
  *(Francesco Ciulla)* — borrowing, mutable vs. immutable references, and
  dangling references. The borrow checker lives here.

---

## 🔧 Build & run

You'll be told exactly when to run each command in the chapters. To give you
the shape of it up front, a Rust kernel build looks like:

```
cargo build --target x86_64-unknown-none   # compile a freestanding binary
cargo bootimage                            # wrap it in a bootable image (nightly)
qemu-system-x86_64 -drive format=raw,file=target/x86_64-unknown-none/debug/bootimage-kernel.bin
```

The **Hello-World kernel chapter** at Step 2 walks through the full, working
version line by line.

---

## 🧭 Back to the track hub

- [Choose Your Path](../../index.md)


---

## 🎬 Watch Rust in action

These are real, verified videos that pair with the written tutorial. Click each to expand and watch inline:

<details class="video-embed"><summary>▶ Watch: Writing an OS in Rust — Part 1: A Freestanding Rust Binary</summary>
<iframe src="https://www.youtube-nocookie.com/embed/rH5jnbJ3tL4" width="100%" height="400" style="border:0;border-radius:8px;" allowfullscreen></iframe>
</details>
<details class="video-embed"><summary>▶ Watch: Ownership in Rust (full tutorial)</summary>
<iframe src="https://www.youtube-nocookie.com/embed/9VBLOwmNE1g" width="100%" height="400" style="border:0;border-radius:8px;" allowfullscreen></iframe>
</details>
<details class="video-embed"><summary>▶ Watch: References & Borrowing in Rust</summary>
<iframe src="https://www.youtube-nocookie.com/embed/Q_0yoX07Fhs" width="100%" height="400" style="border:0;border-radius:8px;" allowfullscreen></iframe>
</details>

---

## 🔗 Further resources (Rust)

- [The Rust Book](https://doc.rust-lang.org/book/) — the official free Rust programming language book (Ownership & Borrowing are Chapters 4–5).
- [Philipp Oppermann — "Writing an OS in Rust"](https://os.phil-opp.com/) — the canonical, free, blog-based course this path follows.
- [Learn Rust](https://www.rust-lang.org/learn) — the official hub: book, course, exercises, and more.
- [OSDev Wiki — Rust Bare Bones](https://wiki.osdev.org/Rust_Bare_Bones) — a second, Limine-based Rust kernel tutorial.
- [Rust on bare metal: rustup / cargo docs](https://doc.rust-lang.org/cargo/) — how Cargo and rustup drive your cross-target kernel builds.
- [The `no_std` reference — The Embedded Rust Book](https://docs.rust-embedded.org/book/intro/no-std.html) — details on `no_std` and freestanding binaries.

