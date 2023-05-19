---
title: 'Item'
pagination:
  data: collections.music 
  size: 1
  alias: item
permalink: '/music-collection/{{ item.name | sanitizeNameFilter | slug }}/'
layout: 'layouts/music-collection.njk'
---
{# Data set in item.11tydata.js #}