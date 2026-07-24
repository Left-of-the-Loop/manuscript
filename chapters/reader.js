(function () {
  "use strict";

  // Book order. Slug = filename of the .html stub, the .md source, and the
  // per-chapter PDF. To add a chapter: copy any stub, name it <slug>.html
  // (adjust its <title>), and add one entry here in reading order.
  var CHAPTERS = [
    { slug: "00-a-note-on-how-this-book-was-made", title: "A note on how this book was made" },
    { slug: "00-introduction", title: "Introduction" },
    { slug: "01-the-curse-of-sisyphus", title: "The Curse of Sisyphus" },
    { slug: "02-the-end-of-a-craft", title: "The End of a Craft?" },
    { slug: "03-a-fool-with-a-tool", title: "A Fool with a Tool is Still a Fool" },
    { slug: "04-the-po-is-dead", title: "The Product Owner is Dead. Long Live Product Thinking." },
    { slug: "05-the-agora", title: "The Agora" },
    { slug: "06-the-ever-agreeing-genie", title: "The Ever-Agreeing Genie" },
    { slug: "07-the-alexandria-problem", title: "The Alexandria Problem" },
    { slug: "08-the-oracle", title: "The Oracle" },
    { slug: "09-the-trireme", title: "The Trireme" },
    { slug: "10-desert-and-forest", title: "Desert and Forest" },
    { slug: "11-the-astrolabe", title: "The Astrolabe" },
    { slug: "12-the-phoenix", title: "The Phoenix" },
    { slug: "80-the-spec-session", title: "The Spec Session: a working template" },
    { slug: "90-acknowledgments", title: "Acknowledgments" },
    { slug: "91-glossary", title: "Glossary" },
    { slug: "92-about-the-author", title: "About the Author" }
  ];

  var slug = location.pathname.split("/").pop().replace(/\.html$/, "");
  var index = CHAPTERS.findIndex(function (c) { return c.slug === slug; });
  var content = document.getElementById("content");

  function fail(message) {
    content.innerHTML = "";
    var p = document.createElement("p");
    p.className = "reader-error";
    p.textContent = message + " ";
    var a = document.createElement("a");
    a.href = "../left-of-the-loop-draft.pdf";
    a.textContent = "Download the full draft (PDF) instead.";
    p.appendChild(a);
    content.appendChild(p);
  }

  if (index === -1) {
    fail("Unknown chapter “" + slug + "”.");
    return;
  }

  var chapter = CHAPTERS[index];
  document.title = chapter.title + " — Left of the Loop";

  fetch("md/" + slug + ".md")
    .then(function (response) {
      if (!response.ok) { throw new Error("HTTP " + response.status); }
      return response.text();
    })
    .then(function (text) {
      // Strip pandoc heading attributes like "# Glossary {-}".
      text = text.replace(/^(#{1,6} .*?)\s*\{[^}]*\}\s*$/gm, "$1");

      var md = window.markdownit({ html: true, typographer: true })
        .use(window.markdownitFootnote);

      var meta = document.createElement("p");
      meta.className = "chapter-meta";
      meta.innerHTML =
        "Working draft — <a href=\"pdf/" + slug + ".pdf\">download this chapter (PDF)</a>" +
        " · <a href=\"../left-of-the-loop-draft.pdf\">full draft</a>";

      var body = document.createElement("div");
      body.innerHTML = md.render(text);

      var nav = document.createElement("div");
      nav.className = "chapter-nav";
      var prev = CHAPTERS[index - 1];
      var next = CHAPTERS[index + 1];
      if (prev) {
        nav.innerHTML += "<a class=\"prev\" href=\"" + prev.slug + ".html\">← " + prev.title + "</a>";
      }
      if (next) {
        nav.innerHTML += "<a class=\"next\" href=\"" + next.slug + ".html\">" + next.title + " →</a>";
      }

      content.innerHTML = "";
      content.appendChild(meta);
      content.appendChild(body);
      content.appendChild(nav);
    })
    .catch(function () {
      fail("Couldn’t load this chapter.");
    });
})();
