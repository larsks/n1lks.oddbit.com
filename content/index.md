---
title: Lars Kellogg-Stedman/N1LKS
---

Hi! I'm an amateur radio operator located in the Boston, MA area. This site is my collection of general amateur radio information and information about the local amateur radio scene.

{% assign weighted_posts = collections.page | sort: 'data.weight' %}
{% for post in weighted_posts %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}

## Questions or comments?

You can email me (my address is not hard to find), or you can use [GitHub discussions](https://github.com/larsks/n1lks.oddbit.com/discussions).
