---
title: Public service activities
---

## Upcoming

{% assign future_posts = collections.post | post_is_future | sort: 'date' %}
{% for post in future_posts %}
- **{{ post.data.title }}** - {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}

## Past

{% assign past_posts = collections.post | post_is_past | sort: 'date' | reverse %}
{% for post in past_posts %}

### [{{ post.data.title }}]({{ post.url }}) - {{ post.date | date: "%Y-%m-%d" }}

{{ post.data.page.excerpt | markdown }}
{% endfor %}
