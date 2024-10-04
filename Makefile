MDDOCS = $(shell find . -type f -name '*.md')
HTMLDOCS = $(MDDOCS:.md=.html)

PANDOC = pandoc

%.html: %.md
	sed 's/__/\&nbsp;/g' $< | $(PANDOC) \
		--standalone --strip-comments --from=gfm --lua-filter=filters/title-from-h1.lua --css /style.css -o $@

all: $(HTMLDOCS)

clean:
	rm -f $(HTMLDOCS)
