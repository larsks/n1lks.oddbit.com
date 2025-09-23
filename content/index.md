---
title: Lars Kellogg-Stedman/N1LKS
---

{% assign future_posts = collections.post | post_is_future | sort: 'date' %}
{% if future_posts.length > 0 %}
<div class="next-public-service">
{% assign post = future_posts[0] %}
Next [public service](public_service) event I will be attending: <strong>{{ post.data.title }} ({{ post.date | date: "%Y-%m-%d" }})</strong>
</div>
{% endif %}

Hi! I'm an amateur radio operator located in the Boston, MA area. This site is my collection of general amateur radio information and information about the local amateur radio scene.

{% assign weighted_posts = collections.page | sort: 'data.weight' %}
{% for post in weighted_posts %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}

## Questions or comments?

You can email me (my address is not hard to find), or you can use [GitHub discussions](https://github.com/larsks/n1lks.oddbit.com/discussions).
