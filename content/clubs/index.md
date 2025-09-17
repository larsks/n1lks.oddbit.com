---
title: Radio clubs and associations
shortTitle: Clubs & associations
tags: page
weight: 2
---

This is not an exhaustive list of organizations; these are just ones that I have had some sort of personal contact with.

<!-- this assign statement was necessary to work around a sorting bug -->
{% assign sorted_clubs = collections.club | sort: 'data.title' %}
{% for club in sorted_clubs %}
## [{{ club.data.title }}]({{ club.url }})

<table>
<tr>
  <td><strong>Home page</strong></td>
  <td><a href="{{ club.data.externalUrl }}">{{ club.data.externalUrl }}</a></td>
</tr>
{% if club.data.callsign %}
<tr>
  <td><strong>Callsign</strong></td>
  <td>{{ club.data.callsign }}</td>
</tr>
{% endif %}
</table>

{{ club.data.page.excerpt | markdown }}
{% endfor %}

