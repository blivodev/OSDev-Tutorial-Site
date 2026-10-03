# Go OS Dev

> **Level:** 🟢 Beginner → 🟠 Intermediate · **Est. time:** ~8 weeks · **Progress:** track your checkboxes below

**What you'll learn:** Using Go for systems and OS-adjacent programming — from the language to unikernels and bare-metal Go.

**Who it's for:** Go developers curious about what's below the runtime, and how Go's goroutine model relates to OS scheduling.

---

## How this path works

Follow the steps **in order**. Tick a checkbox when you finish a step.

**Legend:** 🟢 Beginner · 🟠 Intermediate · 🔴 Hard · ⚫ Advanced

---

## 🟢 Stage 1 — Go foundations (weeks 1-2)

- [ ] **1. The Go Tour** · 🟢 · 📝 [A Tour of Go](https://go.dev/tour/) — the language in an interactive browser tour.
- [ ] **2. The Go Programming Language** · 🟢 · 📚 [The Go Programming Language (book)](https://www.gopl.io/) — the canonical Go text.

## 🟠 Stage 2 — Go and systems (weeks 3-5)

- [ ] **3. Goroutines to OS scheduling** · 🟠 · 📝 [Go's scheduler](https://go.dev/src/runtime/proc.go) — goroutines are user-space threads; understand how Go's M/P/G model maps to OS threads.
- [ ] **4. Go systems programming** · 🟠 · 📝 [Go for systems programming](https://go.dev/wiki/Systems) — what Go gives you for building tools, servers, and daemons.
- [ ] **5. Concurrency patterns** · 🟠 · 📚 [Concurrency in Go (free)](https://www.oreilly.com/library/view/concurrency-in-go/9781491941294/) — channels, goroutines, and the sync package.

## 🟠 Stage 3 — Go toward the metal (weeks 6-8)

- [ ] **6. Go bare-metal / OSDev** · 🟠 · 📝 [Go OSDev Bare Bones](https://wiki.osdev.org/Bare_Bones) — what Go needs to boot (gccgo, `-ffreestanding`-style). Go's runtime makes bare-metal hard; learn the tradeoffs.
- [ ] **7. Unikernels in Go** · 🟠 · 📝 [A Unikernel in Go](https://www.oreilly.com/ideas/a-unikernel-in-go) — running Go directly on the hypervisor, no OS.
- [ ] **8. gVisor / user-space kernels** · 🔴 · 📚 [gVisor](https://gvisor.dev/docs/) — a user-space "kernel" written in Go that intercepts syscalls. Study its architecture.

---

## 🎯 Milestone project

Put it together: write a **Go tool that compiles a minimal program, or a unikernel-style Go binary** that runs under QEMU with a tiny boot stub — demonstrating Go's systems reach and its limits.

## 📌 Related resources

- [Go internals](https://go.dev/src/runtime/) — the runtime source
- [TinyGo](https://tinygo.org/) — Go on microcontrollers
