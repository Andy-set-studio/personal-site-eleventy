---
title: 'Links to all my places'
layout: 'layouts/page.njk'
---
Places you can find me on the world wide web.


## Websites

- [Set Studio](https://set.studio) (my cool agency)
- [Piccalilli](https://piccalil.li/) (my cool publication)
- [Build Excellent Websites](https://buildexcellentwebsit.es/)
- [Every Layout – Re-learn CSS layout](https://every-layout.dev/)
- [Array – A wholesome, well-moderated, premium Discord community of freelancers](https://array.chat/)


## Social

{% for item in socialNetworks %}
- [{{ item.text | safe }}]({{ item.url }})
{% endfor %}
- [Last.FM](https://www.last.fm/user/belldotbz)
- [Spotify](https://open.spotify.com/user/aehujdnt5gch69922g32hluzx?si=5d77143c291c434c)
- [LinkedIn](https://www.linkedin.com/in/andy-bell-347971255/)
- Discord: `andy.bell.bz#6969`
