---
title: 'Hello, I’m Andy'
metaTitle: 'Andy Bell - Designer, front-end developer and founder of Set Studio'
metaDesc: 'I’m a designer, front-end developer and the founder of Set Studio.'
layout: 'layouts/page.njk'
pageType: 'home'
postListHeadline: 'Latest from the blog'
---

I’m a designer, front-end developer and the founder of [Set Studio](https://set.studio/).

I focus on making stunning [websites that work for everyone](https://buildexcellentwebsit.es/), regardless of their device or connection speed.

This is my little home on the internet where I [write](/blog/), and [collect music](/music-collection/).

{% set postListItems = collections.blog.slice(0, 5) %}
{% include "partials/post-list.njk" %}