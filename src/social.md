---
title: 'Find me on socials'
layout: 'layouts/page.njk'
---

You can find me on: 
{% for item in socialNetworks %}
- [{{ item.text | safe }}]({{ item.url }})
{% endfor %}

## Skeets and toots 

{% include "partials/skeets-and-toots.njk" %}