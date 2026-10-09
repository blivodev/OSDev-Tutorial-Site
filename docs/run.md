# ▶ Run Your Kernel — Live

This page lets you **edit and run a real OS kernel right here in the browser**.
Change the code, hit **▶ Run**, and the server compiles it and boots it in
[QEMU](../../GLOSSARY/qemu.md "A free emulator you can boot your kernel in for testing") —
you'll see your kernel's output below the editor.

> It works exactly like the [IDE](../../GLOSSARY/ide.md "Integrated Development Environment") but without leaving the docs.
> Behind the scenes the same `gcc -m32` + `qemu-system-i386` toolchain runs in a sandbox.

---

## 1. Hello World

Try changing the message. The kernel prints to the screen **and** to serial,
so you'll see it in the output box.

```c {.run-c}
/* kernel.c — a minimal "Hello World!" kernel.
 * Edit this, then click ▶ Run. */
#define VGA_MEMORY ((unsigned short*)0xB8000)
#define COM1 0x3F8

static inline void outb(unsigned short p, unsigned char v) {
    __asm__ volatile ("outb %0, %1" : : "a"(v), "Nd"(p));
}
static inline unsigned char inb(unsigned short p) {
    unsigned char r; __asm__ volatile ("inb %1, %0" : "=a"(r) : "Nd"(p)); return r;
}
static void serial_init(void) {
    outb(COM1+1,0x00); outb(COM1+3,0x80); outb(COM1+0,0x03);
    outb(COM1+1,0x00); outb(COM1+3,0x03); outb(COM1+2,0xC7); outb(COM1+4,0x0B);
}
static void serial_write(const char* s) {
    while (*s) { while (!(inb(COM1+5) & 0x20)) {} outb(COM1, (unsigned char)*s++); }
}

void kernel_main(void) {
    serial_init();
    serial_write("Hello World!\n");
    serial_write("My kernel is running in the browser!\n");

    /* VGA: write 'H' at the top-left of the text buffer */
    VGA_MEMORY[0] = (unsigned short)((0x0F << 8) | 'H');

    for (;;) { /* halt */ }
}
```

---

## 2. Make it yours

Ideas to try:

- Change the text to your name: `serial_write("Hello, <your name>!\n");`
- Print several lines in a loop.
- Write a tiny `strlen` and print the length.

```c {.run-c}
/* Count from 0 to 9 and print each digit to serial. */
#define COM1 0x3F8
static inline void outb(unsigned short p, unsigned char v) {
    __asm__ volatile ("outb %0, %1" : : "a"(v), "Nd"(p));
}
static inline unsigned char inb(unsigned short p) {
    unsigned char r; __asm__ volatile ("inb %1, %0" : "=a"(r) : "Nd"(p)); return r;
}
static void serial_init(void) {
    outb(COM1+1,0x00); outb(COM1+3,0x80); outb(COM1+0,0x03);
    outb(COM1+1,0x00); outb(COM1+3,0x03); outb(COM1+2,0xC7); outb(COM1+4,0x0B);
}
static void serial_putc(char c) {
    while (!(inb(COM1+5) & 0x20)) {} outb(COM1, (unsigned char)c);
}
static void serial_write(const char* s) { while (*s) serial_putc(*s++); }

void kernel_main(void) {
    serial_init();
    for (int i = 0; i < 10; i++) {
        serial_putc('0' + i);
        serial_putc('\n');
    }
    serial_write("done\n");
    for (;;) {}
}
```

---

## How it works

```
your browser ──POST /run──▶ run.sektor9.dev ──▶ sandbox (Docker)
   (CodeMirror editor)         (Caddy + auth)      │ gcc -m32 + ld
                                                   │ qemu-system-i386
   ◀──── serial output ────────────────────────────┘  (headless)
```

The sandbox runs in an isolated, network-less container with a 20-second
timeout, so it's safe to let anyone try. If the server is busy you'll get a
friendly message — just wait a moment and run again.
