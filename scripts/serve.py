"""Local preview server mimicking GitHub Pages routing.

Two behaviors the stock http.server lacks, both needed to test this site
the way GitHub Pages serves it:
- /foo resolves to foo.html when that file exists (extensionless URLs)
- any path with no matching file serves /404.html with HTTP status 404
  (the SPA fallback the chapter reader relies on)

Usage: python scripts/serve.py [port]
"""
import http.server
import os
import sys


class PagesHandler(http.server.SimpleHTTPRequestHandler):
    def send_head(self):
        clean = self.path.split("?", 1)[0].split("#", 1)[0]
        path = self.translate_path(clean)
        if not os.path.exists(path):
            if os.path.isfile(path + ".html"):
                self.path = clean.rstrip("/") + ".html"
            elif os.path.isfile(self.translate_path("/404.html")):
                self.send_response(404)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                body = open(self.translate_path("/404.html"), "rb").read()
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                import io
                return io.BytesIO(body)
        return super().send_head()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8123
    http.server.ThreadingHTTPServer(("", port), PagesHandler).serve_forever()
