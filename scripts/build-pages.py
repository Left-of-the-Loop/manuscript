"""Generate the real HTML pages, the sitemap and robots.txt.

Everything on this site used to be served through 404.html, which meant
every URL except / answered with HTTP 404. Browsers did not care, but
search engines treat a 404 as "this does not exist": the pages the book
prints on paper could not be found, and link unfurls showed nothing.

This writes a small shell per URL so those pages answer 200. The shell is
the same reader that 404.html loads, so there is still no per-chapter
markup and no build of the prose itself - the markdown is still fetched
and rendered in the browser. 404.html stays as the fallback, which is
what keeps every alias in the manifest working without a file each.

Two kinds of page, and the difference is one meta tag:

  living pages   indexable. The book points readers at /template and
                 /further-reading, so they have to be findable.
  chapters       noindex. Crawled and read, never listed - which is the
                 state "read it, don't show it" actually names.

Do not add a Disallow for /chapters/ to robots.txt. A page that cannot be
crawled cannot have its noindex read either, so blocking them would leave
them eligible to appear as bare URLs - the opposite of the intent.

Run after changing the manifest in chapters/reader.js:
    python scripts/build-pages.py
"""
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = "https://leftoftheloop.dev"

SHELL = """<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="only light">
{robots}<title>{title}</title>
<meta name="description" content="{description}">
<link rel="canonical" href="{canonical}">
<meta property="og:type" content="article">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{description}">
<meta property="og:url" content="{canonical}">
<meta property="og:site_name" content="Left of the Loop">
<meta property="og:image" content="{site}/og-the-loop.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="{site}/og-the-loop.png">
<link rel="stylesheet" href="/chapters/reader.css">
<script src="/chapters/vendor/markdown-it.min.js" defer></script>
<script src="/chapters/vendor/markdown-it-footnote.min.js" defer></script>
<script src="/chapters/reader.js" defer></script>
</head>
<body>

<nav class="top"><a href="/">&larr; Left of the Loop</a></nav>

<main id="content">
  <noscript>
    <p>Reading online requires JavaScript. You can instead
    <a href="/left-of-the-loop-draft.pdf">download the full draft as PDF</a>.</p>
  </noscript>
</main>

<footer>
  <p>&copy; Simon Schrottner. Licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</a>.
  Working draft &mdash; <a href="https://github.com/Left-of-the-Loop/manuscript/issues">feedback welcome</a>.</p>
</footer>

<script data-goatcounter="https://left-of-the-loop.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>

</body>
</html>
"""

NOINDEX = '<meta name="robots" content="noindex">\n'


def esc(s):
    return s.replace("&", "&amp;").replace('"', "&quot;").replace("<", "&lt;").replace(">", "&gt;")


def manifest():
    js = open(os.path.join(ROOT, "chapters", "reader.js"), encoding="utf-8").read()
    body = re.search(r"var CHAPTERS = \[([\s\S]*?)\n  \];", js).group(1)
    out = []
    for e in re.findall(r"\{\s*slug:.*?\}(?=,?\s*(?:\n|$))", body, re.S):
        out.append((re.search(r'slug:\s*"([^"]+)"', e).group(1),
                    re.search(r'title:\s*"([^"]+)"', e).group(1)))
    return out


def write(path, text):
    full = os.path.join(ROOT, path)
    os.makedirs(os.path.dirname(full) or ".", exist_ok=True)
    with open(full, "w", encoding="utf-8", newline="") as fh:
        fh.write(text)


LIVING = [
    ("template", "The Spec Session, a working template",
     "The Spec Session run sheet, the spec file to take away, and the async "
     "adaptation. The living version of Appendix B of Left of the Loop."),
    ("further-reading", "Further reading",
     "Tools, papers and adjacent framings for spec-first work with AI agents. "
     "The running version of Appendix E of Left of the Loop."),
    ("changelog", "Changelog",
     "What changed in each update of the Left of the Loop working draft."),
]

indexable = ["/"]

for slug, title, desc in LIVING:
    url = "%s/%s" % (SITE, slug)
    write("%s.html" % slug, SHELL.format(
        robots="", title=esc(title + " \u2014 Left of the Loop"),
        description=esc(desc), canonical=url, site=SITE))
    indexable.append("/" + slug)

chapters = manifest()
for slug, title in chapters:
    url = "%s/chapters/%s" % (SITE, slug)
    write("chapters/%s.html" % slug, SHELL.format(
        robots=NOINDEX, title=esc(title + " \u2014 Left of the Loop"),
        description=esc("%s, a chapter from Left of the Loop by Simon Schrottner." % title),
        canonical=url, site=SITE))

urls = "\n".join(
    "  <url><loc>%s%s</loc></url>" % (SITE, "" if p == "/" else p) for p in indexable)
write("sitemap.xml",
      '<?xml version="1.0" encoding="UTF-8"?>\n'
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
      '%s\n</urlset>\n' % urls)

# No Disallow: /chapters/. They carry noindex, and a crawler has to fetch a
# page to see that; blocking it would strand them as bare URLs instead.
write("robots.txt", "User-agent: *\nAllow: /\n\nSitemap: %s/sitemap.xml\n" % SITE)

print("living pages: %d" % len(LIVING))
print("chapter pages: %d (noindex)" % len(chapters))
print("sitemap entries: %d" % len(indexable))

# ---------------------------------------------------------------------------
# The landing page's three generated blocks.
#
# All three quote the book, and all three have gone stale silently at least
# once: the map kept a guiding question the Agora had rewritten, and the
# excerpt kept a paragraph the introduction had replaced. Nothing failed, the
# page simply said something the book no longer said. Regenerating them from
# chapters/md on every run is the only way that stops being a thing to
# remember.

import textwrap


def curl(text):
    """Pair straight quotes into entities; the page has no typographer pass."""
    out, opening = [], True
    for ch in text:
        if ch == '"':
            out.append("&ldquo;" if opening else "&rdquo;")
            opening = not opening
        else:
            out.append(ch)
    return "".join(out)


def to_html(text):
    text = text.replace("\u201c", '"').replace("\u201d", '"')
    text = curl(text)
    return (text.replace("\u2019", "'").replace("\u2018", "'")
                .replace("\u2014", "&mdash;"))


def paragraphs(basename):
    raw = open(os.path.join(ROOT, "chapters", "md", basename + ".md"),
               encoding="utf-8").read().replace("\r\n", "\n")
    return [b.strip() for b in raw.split("\n\n")
            if b.strip() and not b.strip().startswith("#")]


def landing():
    page = open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()

    # 1. The excerpt: verbatim introduction, from its opening line to the
    #    shared-picture paragraph, which is where index.html cuts.
    intro = paragraphs("200-introduction")
    start = next(i for i, b in enumerate(intro)
                 if b.startswith("This book is not what it looks like"))
    end = next(i for i, b in enumerate(intro)
               if "started building the thing" in b)
    excerpt = "\n\n".join(
        "<p>" + "\n".join(textwrap.wrap(to_html(b), 70)) + "</p>"
        for b in intro[start:end + 1])
    page = re.sub(
        r"<p>This book is not what it looks like\.</p>.*?building the thing\.</p>",
        lambda m: excerpt, page, flags=re.S)

    # 2. The map and 3. the carousel, both from the body chapters. The
    #    introduction is skipped: its takeaway is already the page's opening
    #    paragraph, and it has no guiding question.
    titles = dict((f, t) for f, t in
                  [(re.search(r'file:\s*"([^"]+)"', e).group(1),
                    re.search(r'title:\s*"([^"]+)"', e).group(1))
                   for e in re.findall(r"\{\s*slug:.*?\}(?=,?\s*(?:\n|$))",
                                       re.search(r"var CHAPTERS = \[([\s\S]*?)\n  \];",
                                                 open(os.path.join(ROOT, "chapters", "reader.js"),
                                                      encoding="utf-8").read()).group(1), re.S)])

    rows = []
    for name in sorted(os.listdir(os.path.join(ROOT, "chapters", "md"))):
        base = name[:-3]
        if not base.startswith("2") or base == "200-introduction":
            continue
        body = open(os.path.join(ROOT, "chapters", "md", name),
                    encoding="utf-8").read().replace("\r\n", "\n")
        q = re.search(r"^\*(If [^*]+\?)\*$", body, re.M)
        t = re.search(r"^> (.+)$", body, re.M)
        if not (q and t):
            raise SystemExit("no question or takeaway in " + name)
        rows.append((titles[base], q.group(1).strip(), t.group(1).strip()))

    items = "\n".join(
        '      <li><span class="ch">%s</span><span class="q">%s</span></li>'
        % (to_html(t), to_html(q)) for t, q, _ in rows)
    page = re.sub(r"(<section class=\"map\">[\s\S]*?<ol>\n)[\s\S]*?(\n  </ol>)",
                  lambda m: m.group(1) + items + m.group(2), page)

    quotes = "\n".join("  <p>%s</p>" % to_html(k) for _, _, k in rows)
    page = re.sub(r"(<div class=\"takeaways\" id=\"takeaways\">\n)[\s\S]*?(\n</div>)",
                  lambda m: m.group(1) + quotes + m.group(2), page)

    with open(os.path.join(ROOT, "index.html"), "w",
              encoding="utf-8", newline="") as fh:
        fh.write(page)
    return len(intro[start:end + 1]), len(rows)


paras, mapped = landing()
print("landing page: %d excerpt paragraphs, %d chapters mapped, %d takeaways"
      % (paras, mapped, mapped))
