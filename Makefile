MDDOCS = $(shell find . -type f -name '*.md')
HTMLDOCS = $(MDDOCS:.md=.html)

PANDOC = pandoc
PANDOC_ARGS = \
							--standalone --strip-comments --from=gfm+fenced_divs \
							--lua-filter=filters/title-from-h1.lua \
							--css /style.css 

%.html: %.md
	sed 's/__/\&nbsp;/g' $< | $(PANDOC) $(PANDOC_ARGS) $(PANDOC_EXTRA_ARGS) -o $@

all: $(HTMLDOCS)

docs/baystate-marathon/baystate-marathon-volunteer-faq.html: PANDOC_EXTRA_ARGS+=--toc
docs/baystate-marathon/baystate-marathon-volunteer-faq.html: PANDOC__EXTRA_ARGS+=--lua-filter=filters/link-to-toc.lua

clean:
	rm -f $(HTMLDOCS)
