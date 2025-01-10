---
title: 'Hello, I’m Andy and this is where you can find me and contact me'
layout: 'layouts/page.njk'
---

## Links

- I’m the founder of a design agency called [Set Studio](https://set.studio)
- I’m also the founder of a front-end and design publication called [Piccalilli](https://piccalil.li/)
- I wrote a CSS course called [Complete CSS](https://complete-css.com)
- I also co-wrotea CSS layout book called [Every Layout]

## Where you can find me online

{% for item in socialNetworks %}
- [{{ item.text | safe }}]({{ item.url }})
{% endfor %}
- [Last.FM](https://www.last.fm/user/belldotbz)
- [LinkedIn](https://www.linkedin.com/in/andy-bell-347971255/)
- Discord: `andy.bell.bz#6969`
