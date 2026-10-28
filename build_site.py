#!/usr/bin/env python3
"""
VRPF website builder.

Content lives in site/pages/*.html (and site/guides/*.html) as HTML fragments with a
small JSON header. This script wraps each one in site/template.html, writes it to its
public URL, and regenerates sitemap.xml and robots.txt.

    python3 build_site.py

Edit the CONTENT files, never the generated HTML — a rebuild overwrites the output.
"""

import json
import os
import re
import sys
from datetime import date

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = "https://vrpersonalfinance.in"
CALENDLY = "https://calendly.com/vrpersonalfinance/book-a-call-with-our-consultant"
TODAY = date.today().isoformat()

NAV = [
    ("Financial planning", "/financial-planning/"),
    ("Who we help", "/for-salaried-professionals/"),
    ("How it works", "/how-it-works/"),
    ("Fees", "/fees/"),
    ("Guides", "/guides/"),
    ("About", "/about/"),
]

ORG = {
    "@type": ["FinancialService", "ProfessionalService"],
    "@id": SITE + "/#org",
    "name": "VR Personal Finance",
    "alternateName": "VRPF",
    "url": SITE + "/",
    "logo": SITE + "/Assets/vrpf logo.jpg",
    "image": SITE + "/Assets/vrpf logo.jpg",
    "description": ("Financial planning and money coaching for salaried professionals, NRIs and "
                    "business owners. Paid only by the client — no commissions from any product."),
    "telephone": "+91-90560-05257",
    "email": "vrpersonalfinance@gmail.com",
    "priceRange": "₹₹",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "#92, 1st Floor, Sector 5, Eco City 1",
        "addressLocality": "New Chandigarh",
        "addressRegion": "Punjab",
        "postalCode": "140901",
        "addressCountry": "IN",
    },
    "areaServed": [
        {"@type": "Country", "name": "India"},
        {"@type": "City", "name": "Chandigarh"},
        {"@type": "City", "name": "Mohali"},
        {"@type": "City", "name": "Panchkula"},
    ],
    "serviceType": ["Financial planning", "Retirement planning", "Cash flow planning",
                    "Insurance needs analysis", "NRI financial planning"],
    "knowsLanguage": ["en", "hi", "pa"],
}

WEBSITE = {"@type": "WebSite", "@id": SITE + "/#website", "url": SITE + "/",
           "name": "VRPF — VR Personal Finance", "publisher": {"@id": SITE + "/#org"},
           "inLanguage": "en-IN"}


def read_fragment(path):
    """Split a content file into (meta dict, html body)."""
    raw = open(path, encoding="utf-8").read()
    m = re.match(r"\s*<!--meta\s*(\{.*?\})\s*-->\s*", raw, re.S)
    if not m:
        sys.exit(f"{path}: missing <!--meta {{...}}--> header")
    try:
        meta = json.loads(m.group(1))
    except json.JSONDecodeError as e:
        sys.exit(f"{path}: bad JSON header — {e}")
    return meta, raw[m.end():].strip()


def breadcrumbs(meta):
    trail = meta.get("breadcrumb")
    if not trail:
        return ""
    items = [{"@type": "ListItem", "position": 1, "name": "Home", "item": SITE + "/"}]
    for i, (name, url) in enumerate(trail, start=2):
        entry = {"@type": "ListItem", "position": i, "name": name}
        if url:
            entry["item"] = SITE + url
        items.append(entry)
    return {"@type": "BreadcrumbList", "itemListElement": items}


def build_schema(meta, canonical):
    graph = []
    kind = meta.get("schema", "page")
    if kind == "home":
        graph += [ORG, WEBSITE]
    else:
        graph.append({"@type": "WebPage", "@id": canonical + "#page", "url": canonical,
                      "name": meta["title"], "description": meta["description"],
                      "isPartOf": {"@id": SITE + "/#website"},
                      "about": {"@id": SITE + "/#org"}, "inLanguage": "en-IN"})
    if kind == "service":
        graph.append({"@type": "Service", "name": meta.get("service_name", meta["title"]),
                      "serviceType": meta.get("service_type", "Financial planning"),
                      "provider": {"@id": SITE + "/#org"},
                      "areaServed": {"@type": "Country", "name": "India"},
                      "description": meta["description"],
                      "url": canonical})
    if kind == "article":
        graph.append({"@type": "Article", "headline": meta.get("headline", meta["title"]),
                      "description": meta["description"], "url": canonical,
                      "datePublished": meta.get("published", TODAY),
                      "dateModified": meta.get("updated", TODAY),
                      "author": {"@id": SITE + "/#org"},
                      "publisher": {"@id": SITE + "/#org"},
                      "inLanguage": "en-IN",
                      "mainEntityOfPage": canonical})
    crumbs = breadcrumbs(meta)
    if crumbs:
        graph.append(crumbs)
    return json.dumps({"@context": "https://schema.org", "@graph": graph},
                      ensure_ascii=False, separators=(",", ":"))


def nav_html(current):
    desktop, mobile = [], []
    for label, url in NAV:
        mark = ' aria-current="page"' if current.startswith(url) and url != "/" else ""
        desktop.append(f'      <a href="{SITE}{url}"{mark}>{label}</a>\n')
        mobile.append(f'      <a href="{SITE}{url}"{mark}>{label}</a>\n')
    mobile.append(f'      <a href="{SITE}/contact/">Contact</a>\n')
    return "".join(desktop), "".join(mobile)


def build():
    template = open(os.path.join(HERE, "site", "template.html"), encoding="utf-8").read()
    sources = []
    for folder in ("pages", "guides"):
        d = os.path.join(HERE, "site", folder)
        if os.path.isdir(d):
            sources += [os.path.join(d, f) for f in sorted(os.listdir(d)) if f.endswith(".html")]

    urls = []
    for path in sources:
        meta, body = read_fragment(path)
        url = meta["url"]                       # e.g. "/" or "/about/"
        canonical = SITE + url
        if url == "/":
            out_file = os.path.join(HERE, "index.html")
        elif url.endswith(".html"):                      # keep legacy flat URLs working
            out_file = os.path.join(HERE, url.strip("/"))
            os.makedirs(os.path.dirname(out_file), exist_ok=True)
        else:
            out_dir = os.path.join(HERE, url.strip("/"))
            os.makedirs(out_dir, exist_ok=True)
            out_file = os.path.join(out_dir, "index.html")

        desktop, mobile = nav_html(url)
        html = (template
                .replace("{{title}}", meta["title"])
                .replace("{{description}}", meta["description"])
                .replace("{{canonical}}", canonical)
                .replace("{{og_title}}", meta.get("og_title", meta["title"]))
                .replace("{{og_type}}", "article" if meta.get("schema") == "article" else "website")
                .replace("{{robots}}", '<meta name="robots" content="noindex, follow" />\n'
                         if meta.get("noindex") else "")
                .replace("{{schema}}", build_schema(meta, canonical))
                .replace("{{navlinks}}", desktop)
                .replace("{{mobilelinks}}", mobile)
                .replace("{{body}}", body)
                .replace("{{calendly}}", CALENDLY)   # after body, so page copy can use it too
                .replace("{{site}}", SITE))

        with open(out_file, "w", encoding="utf-8") as f:
            f.write(html)
        if not meta.get("noindex"):
            urls.append((canonical, meta.get("priority", "0.7"), meta.get("updated", TODAY)))
        print(f"  {url:42s} <- site/{os.path.relpath(path, os.path.join(HERE, 'site'))}")

    with open(os.path.join(HERE, "sitemap.xml"), "w", encoding="utf-8") as f:
        f.write('<?xml version="1.0" encoding="UTF-8"?>\n'
                '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')
        for loc, prio, mod in urls:
            f.write(f"  <url><loc>{loc}</loc><lastmod>{mod}</lastmod>"
                    f"<priority>{prio}</priority></url>\n")
        f.write("</urlset>\n")

    with open(os.path.join(HERE, "robots.txt"), "w", encoding="utf-8") as f:
        f.write("User-agent: *\n"
                "Allow: /\n"
                "Disallow: /dashboard/\n\n"
                "# AI answer engines are welcome to read and cite these pages.\n"
                "User-agent: GPTBot\nAllow: /\n\n"
                "User-agent: PerplexityBot\nAllow: /\n\n"
                "User-agent: ClaudeBot\nAllow: /\n\n"
                f"Sitemap: {SITE}/sitemap.xml\n")

    print(f"\n{len(sources)} pages built, {len(urls)} in sitemap.xml, robots.txt written.")


if __name__ == "__main__":
    build()
