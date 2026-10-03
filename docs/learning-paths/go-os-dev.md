# Go OS Dev

> **Level:** 🟢 Beginner → 🟠 Intermediate · **Est. time:** ~8 weeks (4-7 hrs/week) · **Progress:** tick each step as you finish it

**What you'll learn:** Using Go for systems and OS-adjacent programming — from the language to its runtime's scheduler, unikernels, and what Go can (and can't) do on bare metal.

**Who it's for:** Go developers curious about what's below the runtime, and how Go's goroutine model relates to OS scheduling.

---

## How this path works

Follow the steps **in order**. Tick a checkbox when you finish a step. Steps are 📚 book, 📝 tutorial, or 🎬 video.

**Legend:** 🟢 Beginner · 🟠 Intermediate · 🔴 Hard · ⚫ Advanced

---

## 🟢 Stage 1 — Go foundations (weeks 1-2)

*Goal: Go fluency — the language, then the mental model.*

- [ ] **1. The Go Tour** · 🟢 · 📝 [A Tour of Go](https://go.dev/tour/) · **Learn:** syntax, goroutines, channels, interfaces — interactively in the browser. **Why:** the fastest way to get the language in your head.
- [ ] **2. The Go Programming Language** · 🟢 · 📚 [The Go Programming Language (book)](https://www.gopl.io/) · **Learn:** the canonical Go text — concurrency, interfaces, packages. **Why:** depth the tour doesn't give; the official companion.
- [ ] **3. Go in Action / effective Go** · 🟢 · 📝 [Effective Go](https://go.dev/doc/effective_go) · **Learn:** idiomatic Go — error handling, package structure, naming. **Why:** systems code in Go reads differently than web code; learn the idioms early.

## 🟠 Stage 2 — Go and systems (weeks 3-5)

*Goal: see how Go's runtime and concurrency model actually work.*

- [ ] **4. Goroutines to OS scheduling** · 🟠 · 📝 [Go's scheduler (runtime/proc.go)](https://go.dev/src/runtime/proc.go) · **Learn:** the M/P/G model — goroutines are user-space threads multiplexed onto OS threads. **Why:** this is exactly what an OS scheduler does; you'll recognize the concepts from OS dev.
- [ ] **5. Go memory model** · 🟠 · 📝 [The Go Memory Model](https://go.dev/ref/mem) · **Learn:** happens-before, channels, and atomicity. **Why:** the same memory-ordering rules you'll study in kernel concurrency, in Go's simpler form.
- [ ] **6. Go systems programming** · 🟠 · 📝 [Go for systems programming](https://go.dev/wiki/Systems) · **Learn:** what Go gives you for tools, servers, daemons — and its tradeoffs (GC, no manual memory). **Why:** know when Go is the right systems tool.
- [ ] **7. Concurrency patterns** · 🟠 · 📚 [Concurrency in Go (O'Reilly, free)](https://www.oreilly.com/library/view/concurrency-in-go/9781491941294/) · **Learn:** channels, pipelines, worker pools, `sync` primitives. **Why:** these patterns are the practical side of the scheduler theory.
- [ ] **8. The Go runtime** · 🔴 · 📝 [Go runtime source](https://go.dev/src/runtime/) · **Learn:** read `runtime/proc.go`, `runtime/mgc.go` (GC), `runtime/asm_amd64.s`. **Why:** Go ships a whole mini-OS (scheduler + GC + memory) — studying it teaches real systems design.

## 🟠 Stage 3 — Go toward the metal (weeks 6-8)

*Goal: Go's reach into OS-adjacent territory and its limits.*

- [ ] **9. Go bare-metal / OSDev** · 🟠 · 📝 [Go OSDev Bare Bones](https://wiki.osdev.org/Bare_Bones) · **Learn:** what Go needs to boot (gccgo, freestanding-style) and why its runtime makes bare-metal hard. **Why:** an honest look at Go's limits as a kernel language.
- [ ] **10. Unikernels in Go** · 🟠 · 📝 [A Unikernel in Go](https://www.oreilly.com/ideas/a-unikernel-in-go) · **Learn:** running Go directly on the hypervisor — no OS between app and hardware. **Why:** the most practical way to run Go "on the metal."
- [ ] **11. gVisor** · 🔴 · 📚 [gVisor](https://gvisor.dev/docs/) · **Learn:** a user-space "kernel" written in Go that intercepts syscalls for sandboxing. **Why:** a production example of Go implementing OS primitives.
- [ ] **12. TinyGo** · 🟠 · 📝 [TinyGo](https://tinygo.org/) · **Learn:** Go compiled for microcontrollers (bare-metal Go on real hardware). **Why:** Go's reach actually extends to MCUs — see what it sacrifices to get there.

---

## 🎯 Milestone project — "Go at the edge of the metal"

**Goal:** demonstrate Go's systems reach. Estimated 2-3 weeks. **Prereq:** all stages.

1. **Write** a Go program that spawns 100 goroutines coordinated by channels, then measure its scheduling behavior.
2. **Build** a small Go daemon that handles signals and cleanly shuts down — a real systems program.
3. **Compile** a Go binary for a bare-metal target (TinyGo or a unikernel) and run it under QEMU with a tiny boot stub.
4. **Study** `gVisor`'s syscall interception and write a 1-page note on how it maps to OS concepts.
5. **Write** `docs/design.md` comparing Go's scheduler (M/P/G) to a kernel round-robin scheduler.

**Checklist**

- [ ] goroutine demo with channels runs correctly
- [ ] signal-handling daemon works
- [ ] Go binary boots under QEMU (bare-metal or unikernel)
- [ ] gVisor note written
- [ ] `docs/design.md` comparing schedulers written

## 📌 Related resources

- **Reference:** [Go internals](https://go.dev/src/runtime/), [The Go Memory Model](https://go.dev/ref/mem)
- **Bare metal:** [TinyGo](https://tinygo.org/), [gVisor](https://gvisor.dev/docs/)
- **Community:** [r/golang](https://www.reddit.com/r/golang/)
