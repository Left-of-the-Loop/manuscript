(function () {
  "use strict";

  // Book order. `slug` is the share URL (/chapters/<slug>), `file` is the
  // upstream basename, which names the markdown source
  // (chapters/md/<file>.md). To add a chapter: add one entry here in
  // reading order. When a chapter is retitled, change the slug and keep
  // the old one in `aliases` so shared links stay alive.
  //
  // Upstream renumbered every file so the first digit is the book section
  // (1xx foreword, 2xx body, 3xx appendices, 4xx back matter; the 0xx band
  // is apparatus that never enters a build, so nothing here maps to it).
  // Because the basename doubles as a URL alias, every pre-renumbering
  // name is kept in `aliases` — links shared before the move still resolve.
  var CHAPTERS = [
    { slug: "how-this-book-was-made", file: "100-a-note-on-how-this-book-was-made", title: "A note on how this book was made", aliases: ["00-a-note-on-how-this-book-was-made"] },
    { slug: "introduction", file: "200-introduction", title: "Introduction", aliases: ["00-introduction"] },
    { slug: "curse-of-sisyphus", file: "201-the-curse-of-sisyphus", title: "The Curse of Sisyphus", aliases: ["01-the-curse-of-sisyphus"] },
    { slug: "end-of-a-craft", file: "202-the-end-of-a-craft", title: "The End of a Craft?", aliases: ["02-the-end-of-a-craft"] },
    { slug: "fool-with-a-tool", file: "203-a-fool-with-a-tool", title: "A Fool with a Tool is Still a Fool", aliases: ["03-a-fool-with-a-tool"] },
    { slug: "po-is-dead", file: "204-the-po-is-dead", title: "The Product Owner is Dead. Long Live Product Thinking.", aliases: ["04-the-po-is-dead"] },
    { slug: "agora", file: "205-the-agora", title: "The Agora", aliases: ["05-the-agora"] },
    { slug: "ever-agreeing-genie", file: "206-the-ever-agreeing-genie", title: "The Ever-Agreeing Genie", aliases: ["06-the-ever-agreeing-genie"] },
    { slug: "alexandria-problem", file: "207-the-alexandria-problem", title: "The Alexandria Problem", aliases: ["07-the-alexandria-problem"] },
    { slug: "oracle", file: "208-the-oracle", title: "The Oracle", aliases: ["08-the-oracle"] },
    { slug: "trireme", file: "209-the-trireme", title: "The Trireme", aliases: ["09-the-trireme"] },
    { slug: "forest-and-the-desert", file: "210-desert-and-forest", title: "The Forest and the Desert", aliases: ["desert-and-forest", "10-desert-and-forest"] },
    { slug: "astrolabe", file: "211-the-astrolabe", title: "The Astrolabe", aliases: ["11-the-astrolabe"] },
    { slug: "phoenix", file: "212-the-phoenix", title: "The Phoenix", aliases: ["12-the-phoenix"] },
    { slug: "what-the-room-costs", file: "300-what-the-room-costs", title: "Appendix A: What the room costs", aliases: ["70-what-the-room-costs"] },
    { slug: "spec-session", file: "301-the-spec-session", title: "Appendix B: The Spec Session, a working template", aliases: ["80-the-spec-session"] },
    { slug: "session-that-failed-the-gate", file: "302-a-session-that-failed-the-gate", title: "Appendix C: A session that failed the gate", aliases: ["81-a-session-that-failed-the-gate"] },
    { slug: "async-spec-planning", file: "303-async-spec-planning", title: "Appendix D: Async Spec Planning", aliases: ["82-async-spec-planning"] },
    { slug: "further-reading", file: "304-further-reading", title: "Appendix E: Further reading" },
    { slug: "acknowledgments", file: "400-acknowledgments", title: "Acknowledgments", aliases: ["90-acknowledgments"] },
    { slug: "glossary", file: "401-glossary", title: "Glossary", aliases: ["91-glossary"] },
    { slug: "about-the-author", file: "402-about-the-author", title: "About the Author", aliases: ["92-about-the-author"] }
  ];

  // Non-chapter markdown pages served through the same 404 route. The
  // two under /resources/ are the living companions to appendices that
  // freeze at printing: the book points readers here for the version
  // that keeps moving, so these pages are edited between drafts and
  // carry their own "What changed here" section.
  var PAGES = {
    changelog: { path: "/CHANGELOG.md", title: "Changelog" },
    template: { path: "/resources/spec-session.md", title: "The Spec Session" },
    "further-reading": { path: "/resources/further-reading.md", title: "Further reading" }
  };

  var content = document.getElementById("content");

  // Accept /chapters/<slug> (with or without trailing slash or .html), a
  // ?chapter=<slug> query, the md/pdf file basename as an alias, and
  // top-level pages like /changelog.
  function requestedSlug() {
    var query = new URLSearchParams(location.search).get("chapter");
    if (query) { return query; }
    var match = location.pathname.match(/^\/chapters\/([^/]+?)(?:\.html)?\/?$/);
    if (match) { return match[1]; }
    // Top-level names share this route, but only the ones in PAGES: left
    // open, /agora would resolve as well as /chapters/agora and every
    // chapter would have two URLs.
    var page = location.pathname.match(/^\/([^/]+?)(?:\.html)?\/?$/);
    return page && PAGES[page[1]] ? page[1] : null;
  }

  function renderMarkdown(text) {
    // Strip pandoc heading attributes like "# Glossary {-}".
    text = text.replace(/^(#{1,6} .*?)\s*\{[^}]*\}\s*$/gm, "$1");
    // Pandoc fenced divs (::: spec ... :::). Upstream reclaimed blockquote
    // for takeaways and moved Appendix C's spec lines here; markdown-it has
    // no notion of the syntax, so without this the fence markers render as
    // literal ":::" text and the lines inside collapse into one paragraph.
    // The blank lines around the body keep the markdown inside it parsed.
    text = text.replace(
      /^:::+[ \t]*([A-Za-z][\w-]*)[ \t]*\r?$([\s\S]*?)^:::+[ \t]*\r?$/gm,
      function (whole, cls, body) {
        return '<div class="' + cls + '">\n\n' + body.trim() + '\n\n</div>\n';
      }
    );
    return window.markdownit({ html: true, typographer: true })
      .use(window.markdownitFootnote)
      .render(text);
  }

  // markdown-it emits no heading ids, so nothing inside a page can be
  // linked to. The living resource pages need it — the book sends
  // readers to the async half of the template, not the top of it — and
  // chapters get section links out of the same few lines.
  function addHeadingIds(root) {
    var used = {};
    root.querySelectorAll("h2, h3").forEach(function (h) {
      var base = h.textContent.toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
      if (!base) { return; }
      used[base] = (used[base] || 0) + 1;
      h.id = used[base] === 1 ? base : base + "-" + used[base];
    });
  }

  // The ids arrive after the browser has already given up on the hash,
  // so the jump has to be redone by hand once the markup is in the page.
  // Two guards, both for things that land after the fetch resolves: the
  // browser's own scroll restoration, which fires against an empty
  // <main> and would otherwise put us back at the top, and layout that
  // hasn't settled yet, which is why the scroll waits for a frame.
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  function jumpToHash() {
    if (!location.hash) { return; }
    var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (!target) { return; }
    requestAnimationFrame(function () { target.scrollIntoView(); });
  }

  function notFound() {
    content.innerHTML = "";
    var p = document.createElement("p");
    p.className = "reader-error";
    p.textContent = "Page not found. ";
    var a = document.createElement("a");
    a.href = "/";
    a.textContent = "Back to Left of the Loop.";
    p.appendChild(a);
    content.appendChild(p);
  }

  var slug = requestedSlug();

  if (slug !== null && PAGES[slug]) {
    var page = PAGES[slug];
    document.title = page.title + " — Left of the Loop";
    fetch(page.path)
      .then(function (response) {
        if (!response.ok) { throw new Error("HTTP " + response.status); }
        return response.text();
      })
      .then(function (text) {
        var body = document.createElement("div");
        body.innerHTML = renderMarkdown(text);
        addHeadingIds(body);
        content.innerHTML = "";
        content.appendChild(body);
        jumpToHash();
      })
      .catch(notFound);
    return;
  }

  var index = slug === null ? -1 : CHAPTERS.findIndex(function (c) {
    return c.slug === slug || c.file === slug ||
      (c.aliases && c.aliases.indexOf(slug) !== -1);
  });
  if (index === -1) {
    notFound();
    return;
  }

  var chapter = CHAPTERS[index];
  document.title = chapter.title + " — Left of the Loop";

  fetch("/chapters/md/" + chapter.file + ".md")
    .then(function (response) {
      if (!response.ok) { throw new Error("HTTP " + response.status); }
      return response.text();
    })
    .then(function (text) {
      // No per-chapter download: the upstream build stopped producing a
      // file per chapter, so linking one would mean shipping a copy that
      // silently drifts from the prose above it. The whole-book downloads
      // are the two artifacts that stay current.
      var meta = document.createElement("p");
      meta.className = "chapter-meta";
      meta.innerHTML =
        "Working draft — download the full draft: " +
        "<a href=\"/left-of-the-loop-draft.pdf\">PDF</a>" +
        " · <a href=\"/left-of-the-loop-draft.epub\">EPUB</a>";

      var body = document.createElement("div");
      body.innerHTML = renderMarkdown(text);
      addHeadingIds(body);

      // The markdown references figures relative to the source repo root;
      // anchor them to /chapters/ regardless of the current URL's shape.
      body.querySelectorAll("img").forEach(function (img) {
        var src = img.getAttribute("src");
        if (src && !/^(https?:)?\//.test(src)) {
          img.src = "/chapters/" + src;
        }
      });

      var nav = document.createElement("div");
      nav.className = "chapter-nav";
      var prev = CHAPTERS[index - 1];
      var next = CHAPTERS[index + 1];
      if (prev) {
        nav.innerHTML += "<a class=\"prev\" href=\"/chapters/" + prev.slug + "\">← " + prev.title + "</a>";
      }
      if (next) {
        nav.innerHTML += "<a class=\"next\" href=\"/chapters/" + next.slug + "\">" + next.title + " →</a>";
      }

      content.innerHTML = "";
      content.appendChild(meta);
      content.appendChild(body);
      content.appendChild(nav);
      jumpToHash();
    })
    .catch(function () {
      content.innerHTML = "";
      var p = document.createElement("p");
      p.className = "reader-error";
      p.textContent = "Couldn’t load this chapter. ";
      var a = document.createElement("a");
      a.href = "/left-of-the-loop-draft.pdf";
      a.textContent = "Download the full draft (PDF) instead.";
      p.appendChild(a);
      content.appendChild(p);
    });
})();
