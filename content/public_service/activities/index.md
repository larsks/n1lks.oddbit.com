---
title: Public service activities
---

{% for post in collections.post reversed %}

## [{{ post.data.title }}]({{ post.url }}) - {{ post.date | date: "%Y-%m-%d" }}

{{ post.data.page.excerpt | markdown }}
{% endfor %}
