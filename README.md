# Lu Lin's Homepage

Personal academic website of [Lu Lin](https://louise-lulin.github.io), built with [Jekyll](https://jekyllrb.com/)
and the [Colorlib "Aside"](https://colorlib.com/wp/template/aside/) template (CC BY 3.0), following the layout of
[fenglong-ma.github.io](https://fenglong-ma.github.io/).

## Where to edit content

| What | Where |
| --- | --- |
| Bio, research interests, openings, research-area boxes | `_pages/about.md` |
| News (one file per item, newest shown first) | `_news/*.md` (`date:` in front matter, text in body) |
| Publications | `_bibliography/papers.bib` (`category={preprint}` or `category={conference}`, `abbr`, `html`, `code`, `selected`) |
| Supervised students (underlined in publications) | `_data/coauthors.yml` |
| Group members | `_pages/group.md` |
| Courses | `courses:` list in `_pages/teaching.md` |
| Open positions | `_pages/position.md` |
| Contact | `_pages/contact.md` and the social handles in `_config.yml` |
| Name, title, affiliation, photo, CV | `_config.yml` (`assets/img/prof_pic.jpg`, `assets/pdf/Lu_cv.pdf`) |
| Look and feel | `css/custom.css` (site overrides), `css/style.css` (template) |

Every page listed in the sidebar has `nav: true` and a `nav_order` in its front matter.

## Build locally

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the site and publishes `_site` to the
`gh-pages` branch served by GitHub Pages.
