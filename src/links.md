---
title: 'Links to all my places'
layout: 'layouts/page.njk'
---
Places you can find me on the world wide web.

## Social

{% for item in socialNetworks %}
- [{{ item.text | safe }}]({{ item.url }})
{% endfor %}
- [Last.FM](https://www.last.fm/user/andyvirus)
- [Apple Music](https://music.apple.com/profile/hankchizljaw)
- [LinkedIn](https://www.linkedin.com/in/andy-bell-347971255/)

## Websites

- [Set Studio](https://set.studio) (my cool agency)
- [Build Excellent Websites](https://buildexcellentwebsit.es/)
- [Every Layout – Re-learn CSS layout](https://every-layout.dev/)
- [Array – A wholesome, well-moderated, premium Discord community of freelancers](https://array.chat/)