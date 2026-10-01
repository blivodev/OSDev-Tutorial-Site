# Go Path

Welcome to the **Go language track** of the OSDev Tutorial Site. This path teaches you
the Go programming language *from the ground up*, then shows you how people have tried
to use Go to build operating-system kernels — what works, what doesn't, and why.

Go is an unusual choice for OS development. It has a garbage-collected runtime, a
software-managed scheduler, and a rich standard library — all of which assume an
operating system already exists underneath. That makes bare-metal Go genuinely hard.
That difficulty is exactly why this path is interesting: by learning Go *and* learning
how its runtime leans on the OS, you understand both the language and the kernel better
than by studying either one alone.

Here is the order I recommend you follow:

## Steps

1. **[Beginner Go tutorial](beginner.md)** — Starts from zero: packages, slices,
   structs, goroutines, and channels, framed through what a kernel writer cares about.
   Includes honest notes on why Go's garbage collector and runtime make hand-rolled
   bare-metal code difficult.

2. **[Go Hello-World kernel chapter](../../synthesized_tutorials/04-go/README.md)** —
   Taking a Go program all the way to a bootable kernel. This is where the theory from
   the beginner tutorial meets reality: the compiler, the stubs, and the runtime that
   actually get you to a `kernel.bin`.

3. **[Core OS concepts](../../synthesized_tutorials/00-introduction/01-how-a-computer-boots.md)** —
   The low-level knowledge every kernel writer needs, no matter the language. Read these
   alongside or after the Go material so the constraints the Go runtime imposes actually
   make sense:
   - [How a computer boots](../../synthesized_tutorials/00-introduction/01-how-a-computer-boots.md)
   - [Your toolchain](../../synthesized_tutorials/00-introduction/02-your-toolchain.md)
   - [Bootloaders and Multiboot](../../synthesized_tutorials/concepts/01-bootloaders-and-multiboot.md)
   - [Memory management](../../synthesized_tutorials/concepts/02-memory-management.md)
   - [Interrupts and the IDT](../../synthesized_tutorials/concepts/03-interrupts-and-the-idt.md)
   - [VGA text mode](../../synthesized_tutorials/concepts/04-vga-text-mode.md)
   - [The Hello-World of OSes](../../synthesized_tutorials/concepts/05-the-hello-world-of-oses.md)

4. **[Reference](../../path_go_os/README.md)** — The deep-dive reference material for
   building Go kernels, including the classic
   [Go Bare Bones](../../path_go_os/Go_Bare_Bones.md) tutorial that walks through a real
   (if minimal) working example.

5. **Build & run** — Once you have read the reference and followed the bare-bones guide,
   you should be able to assemble, link, and boot your own Go kernel in an emulator like
   QEMU. Revisit the [toolchain](../../synthesized_tutorials/00-introduction/02-your-toolchain.md)
   page if any build steps feel unfamiliar.

## Learning Go on video

Reading is one thing; seeing the runtime work is another. These are excellent,
genuinely excellent talks (all verified as real and playable on YouTube):

- [GopherCon 2018: The Scheduler Saga — Kavya Joshi](https://www.youtube.com/watch?v=YHRO5WQGh0k)
  — Builds Go's M:N scheduler from scratch and shows how goroutines get multiplexed onto OS threads.
  Essential background for understanding what you *lose* when you take the runtime away on bare metal.

- [GopherCon 2017: Understanding Channels — Kavya Joshi](https://www.youtube.com/watch?v=KBZlN0izeiY)
  — Opens up Go channels and shows the mutex, buffer, and scheduler calls under the hood.

- [Escape Analysis in Go: Understanding and Optimizing Memory Allocation — Go Conference 2023](https://www.youtube.com/watch?v=Jo9yDRexAP0)
  — How Go decides whether a value lives on the stack or the heap; vital when every byte matters in a kernel.

- [Understanding Allocations: the Stack and the Heap — Jacob Walker, GopherCon SG 2019](https://www.youtube.com/watch?v=ZMZpH4yT7M0)
  — A clear picture of stack vs. heap allocation and why Go's `io.Reader` is shaped the way it is.

- [GopherCon 2025: Understanding Escape Analysis to Speed Up Your Code — Bill Kennedy](https://www.youtube.com/watch?v=FUm0pfgWehI)
  — A practical, entertaining tour of reading escape-analysis reports to cut allocations.

## What comes next

Finish the steps in order, then try extending the bare-bones kernel: print to the VGA
display, handle a keyboard interrupt, or set up a simple memory allocator. The OS
concepts pages (step 3) will carry you from there.

<div align="center">

[Begin](beginner.md) · [Go kernel chapter](../../synthesized_tutorials/04-go/README.md) · [Reference](../../path_go_os/README.md)

</div>


---

## 🎬 Watch Go in action

These are real, verified talks from Gopher conferences. Click each to expand and watch inline:

<details class="video-embed"><summary>▶ Watch: GopherCon 2018: The Scheduler Saga (how goroutines map to threads)</summary>
<iframe src="https://www.youtube-nocookie.com/embed/YHRO5WQGh0k" width="100%" height="400" style="border:0;border-radius:8px;" allowfullscreen></iframe>
</details>
<details class="video-embed"><summary>▶ Watch: GopherCon 2017: Understanding Channels</summary>
<iframe src="https://www.youtube-nocookie.com/embed/KBZlN0izeiY" width="100%" height="400" style="border:0;border-radius:8px;" allowfullscreen></iframe>
</details>
<details class="video-embed"><summary>▶ Watch: Understanding Allocations: the Stack and the Heap</summary>
<iframe src="https://www.youtube-nocookie.com/embed/ZMZpH4yT7M0" width="100%" height="400" style="border:0;border-radius:8px;" allowfullscreen></iframe>
</details>

---

## 🔗 Further resources (Go)

- [The Go Tour](https://go.dev/tour/) — the official interactive introduction to Go, from zero.
- [Go Documentation](https://go.dev/doc/) — effective Go, the language spec, and how to install the toolchain.
- [The Go Blog](https://go.dev/blog/) — official deep-dives including the scheduler, memory, and concurrency.
- [OSDev Wiki — Go Bare Bones](https://wiki.osdev.org/Go_Bare_Bones) — the canonical kernel tutorial that this path's reference is based on.
- [The Go Memory Model](https://go.dev/ref/mem) — the language's formal memory model, relevant to what Go's runtime promises.
- [Effective Go](https://go.dev/doc/effective_go) — the standard, idiomatic style guide every Go developer should read.

