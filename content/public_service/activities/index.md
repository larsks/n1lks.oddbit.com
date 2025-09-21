---
title: Public service activities
---

{% assign future_posts = collections.post | post_is_future | sort: 'date' %}

{% if future_posts.length > 0 %}
## Upcoming events

{% for post in future_posts %}
{% if runMode == "serve" or runMode == "watch" %}
- [{{ post.data.title }}]({{ post.url }}) - {{ post.date | date: "%Y-%m-%d" }}
{% else %}
- **{{ post.data.title }}** - {{ post.date | date: "%Y-%m-%d" }}
{% endif %}
{% endfor %}
{% endif %}

## Past events

{% assign past_posts = collections.post | post_is_past | sort: 'date' | reverse %}
{% for post in past_posts %}

### [{{ post.data.title }}]({{ post.url }}) - {{ post.date | date: "%Y-%m-%d" }}

{{ post.data.page.excerpt | renderTemplate | markdown }}
{% endfor %}
