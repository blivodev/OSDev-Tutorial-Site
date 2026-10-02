# 🛠️ Live Code Playground

Try low-level code right in your browser — no local install needed. Two ways to experiment:

## 1. The full IDE (code-server)

Your browser-based IDE with the complete OS-dev toolchain (gcc, g++, rust, go, nasm, qemu, make) is at **`ide.sektor9.dev`**. It opens into the `Example_OS_Project` workspace with all five language kernels.

[🔗 Open ide.sektor9.dev](https://ide.sektor9.dev/)

> Requires the same `osdev` login. Your files persist in the workspace.

## 2. Quick experiments — Compiler Explorer

For fast "what does this compile to?" checks (assembly output, ABI, memory layout), embedded Compiler Explorer sessions run right here, inline:

### C — freestanding kernel entry
```c
// A minimal freestanding C entry — compile with: gcc -ffreestanding -nostdlib -c kernel.c
void _start(void) {
    volatile unsigned short* vga = (volatile unsigned short*)0xB8000;
    vga[0] = 0x0F48; // 'H' on black
    for(;;) __asm__("hlt");
}
```

<iframe src="https://godbolt.org/e" style="width:100%;height:520px;border:1px solid var(--md-default-fg-color--lightest,#333);border-radius:12px" title="Compiler Explorer" loading="lazy"></iframe>

> Compiler Explorer (`godbolt.org`) lets you see the exact assembly your C/C++/Rust/Go produces — essential for OS dev. For an even richer setup, open the full IDE above.

## 3. Run a kernel in-browser (QEMU via IDE)

In `ide.sektor9.dev`, open the built-in terminal and run:

```bash
cd /workspace/Example_OS_Project/c   # or cpp, rust, go, csharp
make run                             # builds + boots the kernel in QEMU
```

You'll see the kernel boot and print **Hello World!** to the emulated screen.

---

## Try it yourself

- Edit `kernel.c` in the IDE and add a second line of VGA text
- Switch to the Rust kernel and change the panic message
- Use Compiler Explorer to see what `x & 0xFF` compiles to vs `x % 256` (hint: they differ for signed ints!)

Every kernel in `Example_OS_Project` is ready to build and boot — pick your language path and go.
