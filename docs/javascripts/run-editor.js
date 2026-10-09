/* run-editor.js — Level-3 in-page kernel runner for the OSDev tutorials.
 *
 * Any fenced code block annotated with {.run-c} becomes an editable
 * CodeMirror editor with a "▶ Run" button. Run POSTs the source to the
 * sandbox API (run.sektor9.dev), which compiles + boots it in QEMU and
 * streams the serial output back into the page.
 *
 * Usage in Markdown:
 *   ```c {.run-c}
 *   void kernel_main(void) { ... }
 *   ```
 */
(function () {
  "use strict";

  var RUN_API = "https://run.sektor9.dev/run";   // Caddy -> runvps:8099 (osdev basic-auth)
  var LOADED = false;

  function loadCodeMirror(cb) {
    if (LOADED || window.CodeMirror) { LOADED = true; return cb(); }
    var css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://cdn.jsdelivr.net/npm/codemirror@5.65.16/lib/codemirror.min.css";
    document.head.appendChild(css);
    var theme = document.createElement("link");
    theme.rel = "stylesheet";
    theme.href = "https://cdn.jsdelivr.net/npm/codemirror@5.65.16/theme/material-darker.min.css";
    document.head.appendChild(theme);

    var s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/codemirror@5.65.16/lib/codemirror.min.js";
    s.onload = function () {
      var modes = [
        "https://cdn.jsdelivr.net/npm/codemirror@5.65.16/mode/clike/clike.min.js",
        "https://cdn.jsdelivr.net/npm/codemirror@5.65.16/addon/edit/closebrackets.min.js",
        "https://cdn.jsdelivr.net/npm/codemirror@5.65.16/addon/selection/active-line.min.js"
      ];
      var remaining = modes.length;
      modes.forEach(function (m) {
        var ms = document.createElement("script");
        ms.src = m;
        ms.onload = function () { if (--remaining === 0) { LOADED = true; cb(); } };
        document.head.appendChild(ms);
      });
    };
    document.head.appendChild(s);
  }

  function makeRunner(block, index) {
    var pre = block.querySelector("pre");
    var src = (pre || block).textContent.replace(/\s+$/, "");
    var wrap = document.createElement("div");
    wrap.className = "run-editor";

    var bar = document.createElement("div");
    bar.className = "run-editor__bar";
    var label = document.createElement("span");
    label.className = "run-editor__label";
    label.textContent = "✎ editable kernel (C)";
    var runBtn = document.createElement("button");
    runBtn.className = "run-editor__run";
    runBtn.textContent = "▶ Run";
    var resetBtn = document.createElement("button");
    resetBtn.className = "run-editor__reset";
    resetBtn.textContent = "↺ Reset";
    bar.appendChild(label);
    bar.appendChild(resetBtn);
    bar.appendChild(runBtn);

    var host = document.createElement("div");
    host.className = "run-editor__host";

    var out = document.createElement("pre");
    out.className = "run-editor__out";
    out.style.display = "none";

    wrap.appendChild(bar);
    wrap.appendChild(host);
    wrap.appendChild(out);

    block.parentNode.replaceChild(wrap, block);

    var cm = null;
    function initCM() {
      cm = window.CodeMirror(host, {
        value: src,
        mode: "text/x-csrc",
        theme: "material-darker",
        lineNumbers: true,
        autoCloseBrackets: true,
        styleActiveLine: true,
        indentUnit: 4,
        tabSize: 4
      });
      cm.setSize("100%", Math.min(520, Math.max(200, cm.lineCount() * 18 + 20)));
      cm.refresh();
    }
    loadCodeMirror(initCM);

    resetBtn.addEventListener("click", function () {
      if (cm) cm.setValue(src);
      out.style.display = "none";
    });

    runBtn.addEventListener("click", function () {
      var source = cm ? cm.getValue() : src;
      out.style.display = "block";
      out.textContent = "⏳ compiling + booting in QEMU…";
      out.classList.remove("is-ok", "is-err");
      runBtn.disabled = true;
      runBtn.textContent = "⏳ Running…";

      fetch(RUN_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",           // send basic-auth with the request
        body: JSON.stringify({ source: source, filename: "kernel.c" })
      })
        .then(function (r) {
          if (r.status === 429) throw new Error("Rate limit — wait a moment and try again.");
          if (r.status === 503) throw new Error("Server busy — try again shortly.");
          if (!r.ok) return r.text().then(function (t) { throw new Error("HTTP " + r.status + ": " + t); });
          return r.json();
        })
        .then(function (d) {
          out.textContent = d.output || "(no output)";
          out.classList.add(d.ok ? "is-ok" : "is-err");
          var meta = document.createElement("div");
          meta.className = "run-editor__meta";
          meta.textContent = (d.ok ? "✓ ran" : "✗ failed") + " in " + (d.duration_ms || 0) + " ms";
          out.appendChild(meta);
        })
        .catch(function (e) {
          out.textContent = "✗ " + e.message +
            "\n\n(If this is a network/CORS error, make sure you are logged in with the osdev account.)";
          out.classList.add("is-err");
        })
        .finally(function () {
          runBtn.disabled = false;
          runBtn.textContent = "▶ Run";
        });
    });
  }

  function init() {
    // MkDocs Material renders ```c {.run-c} with the class on div.highlight
    // wrapping a <pre>. Replace the whole .run-c element.
    var blocks = [];
    document.querySelectorAll(".run-c").forEach(function (el) {
      if (!el.dataset.runDone) {
        el.dataset.runDone = "1";
        blocks.push(el);
      }
    });
    blocks.forEach(makeRunner);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
