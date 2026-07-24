(function () {
  "use strict";

  // Book order. `slug` is the share URL (/chapters/<slug>), `file` is the
  // basename of both the markdown source (chapters/md/<file>.md) and the
  // per-chapter PDF (chapters/pdf/<file>.pdf). To add a chapter: add one
  // entry here in reading order.
  var CHAPTERS = [
    { slug: "how-this-book-was-made", file: "00-a-note-on-how-this-book-was-made", title: "A note on how this book was made" },
    { slug: "introduction", file: "00-introduction", title: "Introduction" },
    { slug: "curse-of-sisyphus", file: "01-the-curse-of-sisyphus", title: "The Curse of Sisyphus" },
    { slug: "end-of-a-craft", file: "02-the-end-of-a-craft", title: "The End of a Craft?" },
    { slug: "fool-with-a-tool", file: "03-a-fool-with-a-tool", title: "A Fool with a Tool is Still a Fool" },
    { slug: "po-is-dead", file: "04-the-po-is-dead", title: "The Product Owner is Dead. Long Live Product Thinking." },
    { slug: "agora", file: "05-the-agora", title: "The Agora" },
    { slug: "ever-agreeing-genie", file: "06-the-ever-agreeing-genie", title: "The Ever-Agreeing Genie" },
    { slug: "alexandria-problem", file: "07-the-alexandria-problem", title: "The Alexandria Problem" },
    { slug: "oracle", file: "08-the-oracle", title: "The Oracle" },
    { slug: "trireme", file: "09-the-trireme", title: "The Trireme" },
    { slug: "desert-and-forest", file: "10-desert-and-forest", title: "Desert and Forest" },
    { slug: "astrolabe", file: "11-the-astrolabe", title: "The Astrolabe" },
    { slug: "phoenix", file: "12-the-phoenix", title: "The Phoenix" },
    { slug: "spec-session", file: "80-the-spec-session", title: "The Spec Session: a working template" },
    { slug: "acknowledgments", file: "90-acknowledgments", title: "Acknowledgments" },
    { slug: "glossary", file: "91-glossary", title: "Glossary" },
    { slug: "about-the-author", file: "92-about-the-author", title: "About the Author" }
  ];

  // Non-chapter markdown pages served through the same 404 route.
  var PAGES = {
    changelog: { path: "/CHANGELOG.md", title: "Changelog" }
  };

  var content = document.getElementById("content");

  // Accept /chapters/<slug> (with or without trailing slash or .html), a
  // ?chapter=<slug> query, the md/pdf file basename as an alias, and
  // top-level pages like /changelog.
  function requestedSlug() {
    var query = new URLSearchParams(location.search).get("chapter");
    if (query) { return query; }
    var match = location.pathname.match(/^\/chapters\/([^/]+?)(?:\.html)?\/?$/) ||
      location.pathname.match(/^\/(changelog)\/?$/);
    return match ? match[1] : null;
  }

  function renderMarkdown(text) {
    // Strip pandoc heading attributes like "# Glossary {-}".
    text = text.replace(/^(#{1,6} .*?)\s*\{[^}]*\}\s*$/gm, "$1");
    return window.markdownit({ html: true, typographer: true })
      .use(window.markdownitFootnote)
      .render(text);
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
        content.innerHTML = "";
        content.appendChild(body);
      })
      .catch(notFound);
    return;
  }

  var index = slug === null ? -1 : CHAPTERS.findIndex(function (c) {
    return c.slug === slug || c.file === slug;
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
      var meta = document.createElement("p");
      meta.className = "chapter-meta";
      meta.innerHTML =
        "Working draft — <a href=\"/chapters/pdf/" + chapter.file + ".pdf\">download this chapter (PDF)</a>" +
        " · <a href=\"/left-of-the-loop-draft.pdf\">full draft</a>";

      var body = document.createElement("div");
      body.innerHTML = renderMarkdown(text);

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
