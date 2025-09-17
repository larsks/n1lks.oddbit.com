---
title: Amateur radio public service
shortTitle: Public service
make_toc: true
tags: page
weight: 1
---

## My volunteer activities

I'm keeping a log of my public service activities [here](activities/).

## Public service opportunities

{% assign events = collections.event | sort: 'data.month' %}
{% for event in events %}
### [{{ event.data.title }}]({{ event.url }})

<table>
<tr>
  <td><strong>When</strong></td>
{% if event.data.monthNameOverride %}
  <td>{{ event.data.monthNameOverride }}</td>
{% else %}
  <td>{{ event.data.month | monthName }}</td>
{% endif %}
</tr>
<tr>
  <td><strong>Event link</strong></td>
  <td><a href="{{ event.data.externalUrl }}">{{ event.data.externalUrl }}</a></td>
</tr>
</table>

{{ event.data.page.excerpt | markdown }}
{% endfor %}

## More information on opportunities

- The [Boston Amateur Radio Club public service page](https://www.barc.org/public-service/)
- The [Worcester Emergency Response Team events calendar](https://wect.org/e107_plugins/wrapper/wrapper.php?1)
- The [ARRL volunteer opportunities](http://www.arrl.org/volunteer-opportunities) page
- The [Eastern Massachusetts ARRL](https://ema.arrl.org/) website sometimes has information about upcoming volunteer opportunities

## Articles and documentation about amateur radio public service

- [Ham Radio Boston](https://www.hamradioboston.org/) organizes amateur radio volunteers for the Boston Marathon. See in particular the [Docs & Videos](https://www.hamradioboston.org/docs-videos) section.
- [Public service packing checklist](https://ag6qr.net/index.php/public-service-packing-checklist/) from AG6QR
- [Public service operating guidelines](https://ag6qr.net/index.php/public-service-operating-guidelines/) from AG6QR
- [HAM Radio Communications Can Support Public Events](https://k6mpn.org/training/resources/2019OctPublic%20Events%20Support_2.pdf) from K6MPN
- [Amateur Radio Operator's Public Service Guide](https://laarc.weebly.com/uploads/7/3/2/9/73292865/guidlines_for_community_events.pdf) by NM5CR at the [Los Alamos Amateur Radio Club](https://laarc.weebly.com)
- [How to be a ham radio operator during public service events and nets](https://youtu.be/HHxNOMGSwAI?si=hQ7T_-v_ZJ-z-1Cy) by the [Marin Amateur Radio Society](https://www.w6sg.net/)
