---
title: "grep middle of file (unix)"
pubDate: 2016-05-09
heroImage: /images/thomas-griesbeck-9WWQWYmHBCk-unsplash.jpg
tags: [bash, grep]
category: guide
---

How to grep tails and head

```bash
# gives first lines 1-1000 lines
head -1000 file.txt

# gives the last 1000 lines
tail -1000 file.txt

# gives all lines from 1001 -> last line
tail +1000 file.txt

# gives lines 1001-2000
head -2000 file.txt | tail -1000

# gives lines 1001-2000
tail +1000 file.txt | head -1000
```
