<div class="s9-hero">
  <div class="s9-badge-row"><span class="s9-chip">🔤 Glossary</span><span class="s9-chip green">● 85 terms</span><span class="s9-chip amber">● hover = tooltip</span></div>
  <h1>Every term, defined</h1>
  <p><b>Inline tooltips + deep-dive pages</b> for every technical term used in this hub. Throughout the docs you'll see terms as <b>linked, underlined-blue text</b> — hover for a quick summary, click for the full page with diagrams and further reading.</p>
</div>

<div class="s9-sec"><span class="n">01</span> · Boot &amp; firmware</div>
<div class="s9-cta" style="margin-top:.4rem">
  <a class="ghost" href="bios/">BIOS</a><a class="ghost" href="uefi/">UEFI</a><a class="ghost" href="firmware/">Firmware</a><a class="ghost" href="bootloader/">Bootloader</a><a class="ghost" href="multiboot/">Multiboot</a><a class="ghost" href="entry-point/">Entry Point</a><a class="ghost" href="real-mode/">Real Mode</a><a class="ghost" href="protected-mode/">Protected Mode</a><a class="ghost" href="long-mode/">Long Mode</a><a class="ghost" href="grub/">GRUB</a><a class="ghost" href="limine/">Limine</a>
</div>

<div class="s9-sec"><span class="n">02</span> · The kernel</div>
<div class="s9-cta" style="margin-top:.4rem">
  <a class="ghost" href="kernel/">Kernel</a><a class="ghost" href="freestanding/">Freestanding</a><a class="ghost" href="hosted/">Hosted</a><a class="ghost" href="no_std/">no_std</a><a class="ghost" href="no_main/">no_main</a><a class="ghost" href="panic-handler/">Panic Handler</a><a class="ghost" href="memory-management/">Memory Management</a><a class="ghost" href="paging/">Paging</a><a class="ghost" href="heap-allocation/">Heap Allocation</a><a class="ghost" href="frame-allocator/">Frame Allocator</a><a class="ghost" href="physical-virtual-memory/">Physical vs Virtual</a>
</div>

<div class="s9-sec"><span class="n">03</span> · CPU &amp; interrupts</div>
<div class="s9-cta" style="margin-top:.4rem">
  <a class="ghost" href="interrupt/">Interrupt</a><a class="ghost" href="idt/">IDT</a><a class="ghost" href="isr/">ISR</a><a class="ghost" href="pic-apic/">PIC / APIC</a><a class="ghost" href="gdt/">GDT</a><a class="ghost" href="hlt-instruction/">hlt</a><a class="ghost" href="extern-c/">extern "C"</a>
</div>

<div class="s9-sec"><span class="n">04</span> · Display</div>
<div class="s9-cta" style="margin-top:.4rem">
  <a class="ghost" href="vga-text-mode/">VGA Text Mode</a><a class="ghost" href="vga-framebuffer/">Framebuffer</a><a class="ghost" href="text-mode-cursor/">Cursor</a><a class="ghost" href="memory-mapped-io/">MMIO</a>
</div>

<div class="s9-sec"><span class="n">05</span> · Toolchain &amp; build</div>
<div class="s9-cta" style="margin-top:.4rem">
  <a class="ghost" href="cross-compiler/">Cross-Compiler</a><a class="ghost" href="assembler/">Assembler</a><a class="ghost" href="linker/">Linker</a><a class="ghost" href="elf/">ELF</a><a class="ghost" href="qemu/">QEMU</a><a class="ghost" href="make/">Make</a><a class="ghost" href="bootloader-crate/">bootloader crate</a><a class="ghost" href="bootimage/">bootimage</a><a class="ghost" href="cargo/">cargo</a><a class="ghost" href="rustup/">rustup</a><a class="ghost" href="gccgo/">gccgo</a><a class="ghost" href="cosmos/">Cosmos</a><a class="ghost" href="nativeaot/">NativeAOT</a><a class="ghost" href="il2cpu/">IL2CPU</a><a class="ghost" href="managed-il/">Managed IL</a>
</div>

<div class="s9-sec"><span class="n">06</span> · Concepts &amp; hardware</div>
<div class="s9-cta" style="margin-top:.4rem">
  <a class="ghost" href="garbage-collection/">GC</a><a class="ghost" href="syscall/">Syscall</a><a class="ghost" href="x86/">x86 / x86_64</a>
</div>

<div class="s9-note">📖 A good place to start is the <a href="../synthesized_tutorials/">Synthesized Beginner Guide</a>, which links every concept to its glossary page as you read.</div>

<div class="s9-sec"><span class="n">07</span> · How the tooltips work</div>
<p style="color:#8b95a7;font-size:.9rem">Every term is written as a link with a <code>title</code> attribute, which renders as a native tooltip on hover:</p>
<pre style="background:#07090d;border:1px solid #242c39;border-radius:10px;padding:1rem;color:#d8e0ec;font-size:.85rem"><code>Write to the [VGA framebuffer](vga-text-mode/ "The 80x25 text buffer at 0xB8000 that a kernel writes to directly") at 0xB8000.</code></pre>
