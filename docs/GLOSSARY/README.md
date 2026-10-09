<div class="s9-hero">
  <div class="s9-badge-row"><span class="s9-chip">🔤 Glossary</span><span class="s9-chip green">● 85 terms</span><span class="s9-chip amber">● hover = tooltip</span></div>
  <h1>Every term, defined</h1>
  <p><b>Inline tooltips + deep-dive pages</b> for every technical term used in this hub. Throughout the docs you'll see terms as <b>linked, underlined-blue text</b> — hover for a quick summary, click for the full page with diagrams and further reading.</p>
</div>

<div class="s9-sec"><span class="n">01</span> · Boot &amp; firmware</div>
<div class="s9-cta" style="margin-top:.4rem">
  <a class="ghost" href="bios.md">BIOS</a><a class="ghost" href="uefi.md">UEFI</a><a class="ghost" href="firmware.md">Firmware</a><a class="ghost" href="bootloader.md">Bootloader</a><a class="ghost" href="multiboot.md">Multiboot</a><a class="ghost" href="entry-point.md">Entry Point</a><a class="ghost" href="real-mode.md">Real Mode</a><a class="ghost" href="protected-mode.md">Protected Mode</a><a class="ghost" href="long-mode.md">Long Mode</a><a class="ghost" href="grub.md">GRUB</a><a class="ghost" href="limine.md">Limine</a>
</div>

<div class="s9-sec"><span class="n">02</span> · The kernel</div>
<div class="s9-cta" style="margin-top:.4rem">
  <a class="ghost" href="kernel.md">Kernel</a><a class="ghost" href="freestanding.md">Freestanding</a><a class="ghost" href="hosted.md">Hosted</a><a class="ghost" href="no_std.md">no_std</a><a class="ghost" href="no_main.md">no_main</a><a class="ghost" href="panic-handler.md">Panic Handler</a><a class="ghost" href="memory-management.md">Memory Management</a><a class="ghost" href="paging.md">Paging</a><a class="ghost" href="heap-allocation.md">Heap Allocation</a><a class="ghost" href="frame-allocator.md">Frame Allocator</a><a class="ghost" href="physical-virtual-memory.md">Physical vs Virtual</a>
</div>

<div class="s9-sec"><span class="n">03</span> · CPU &amp; interrupts</div>
<div class="s9-cta" style="margin-top:.4rem">
  <a class="ghost" href="interrupt.md">Interrupt</a><a class="ghost" href="idt.md">IDT</a><a class="ghost" href="isr.md">ISR</a><a class="ghost" href="pic-apic.md">PIC / APIC</a><a class="ghost" href="gdt.md">GDT</a><a class="ghost" href="hlt-instruction.md">hlt</a><a class="ghost" href="extern-c.md">extern "C"</a>
</div>

<div class="s9-sec"><span class="n">04</span> · Display</div>
<div class="s9-cta" style="margin-top:.4rem">
  <a class="ghost" href="vga-text-mode.md">VGA Text Mode</a><a class="ghost" href="vga-framebuffer.md">Framebuffer</a><a class="ghost" href="text-mode-cursor.md">Cursor</a><a class="ghost" href="memory-mapped-io.md">MMIO</a>
</div>

<div class="s9-sec"><span class="n">05</span> · Toolchain &amp; build</div>
<div class="s9-cta" style="margin-top:.4rem">
  <a class="ghost" href="cross-compiler.md">Cross-Compiler</a><a class="ghost" href="assembler.md">Assembler</a><a class="ghost" href="linker.md">Linker</a><a class="ghost" href="elf.md">ELF</a><a class="ghost" href="qemu.md">QEMU</a><a class="ghost" href="make.md">Make</a><a class="ghost" href="bootloader-crate.md">bootloader crate</a><a class="ghost" href="bootimage.md">bootimage</a><a class="ghost" href="cargo.md">cargo</a><a class="ghost" href="rustup.md">rustup</a><a class="ghost" href="gccgo.md">gccgo</a><a class="ghost" href="cosmos.md">Cosmos</a><a class="ghost" href="nativeaot.md">NativeAOT</a><a class="ghost" href="il2cpu.md">IL2CPU</a><a class="ghost" href="managed-il.md">Managed IL</a>
</div>

<div class="s9-sec"><span class="n">06</span> · Concepts &amp; hardware</div>
<div class="s9-cta" style="margin-top:.4rem">
  <a class="ghost" href="garbage-collection.md">GC</a><a class="ghost" href="syscall.md">Syscall</a><a class="ghost" href="x86.md">x86 / x86_64</a>
</div>

<div class="s9-note">📖 A good place to start is the <a href="../synthesized_tutorials/README.md">Synthesized Beginner Guide</a>, which links every concept to its glossary page as you read.</div>

<div class="s9-sec"><span class="n">07</span> · How the tooltips work</div>
<p style="color:#8b95a7;font-size:.9rem">Every term is written as a link with a <code>title</code> attribute, which renders as a native tooltip on hover:</p>
<pre style="background:#07090d;border:1px solid #242c39;border-radius:10px;padding:1rem;color:#d8e0ec;font-size:.85rem"><code>Write to the [VGA framebuffer](vga-text-mode.md "The 80x25 text buffer at 0xB8000 that a kernel writes to directly") at 0xB8000.</code></pre>
