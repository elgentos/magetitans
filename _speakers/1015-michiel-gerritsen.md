---
layout:  speaker
title:  Cron on steroids
name:  Michiel Gerritsen
permalink: /speakers/michiel-gerritsen/
img: mbdgerritsen.jpg
twitter: mbdgerritsen
website: http://www.michiel-gerritsen.com/
---

## {{ page.title }}
Writing cronjobs can be hard. The environment where it is executed is different. You have to make sure you cronjob doesn’t get executed multiple times. The output is hard to control. How handle errors? I’m going to show you a better way using software you already used: Jenkins.

### Talk Description
Cronjobs are a great feature of applications of any size. They allow all kinds of stuff: imports, exports, background processing, etc. But managing cronjobs can be hard. Some common problems developers encounter when trying to manage cronjobs:

* The environment is different. Paths and executables may be different and not available.
* It is possible that cronjobs overlap and bring your server to it’s knees.
* What about output? How to handle that?

Jenkins is most known for it’s Continuous Integration capabilities. But did you know you can also use it to execute other tasks? It’s a great fit to manage your cronjobs. Only need an e-mail when an task fails? It’s just configuration! You want to check the queue size on your clients server? Build a mysql query and execute it.

It gives you a great flexibility over managing your cronjobs.

## {{ page.name }}
Hi, i’m Michiel. I am working in the e-commerce industry for over 10 years as a developer. When i started i worked with small retailers. After working for different agencies i am now working as freelancer for companies with millions and millions of revenue. I loved tested code that looks great and works even better.

- twitter: [{{ page.twitter }}](https://twitter.com/{{ page.twitter }})
- website: [www.michiel-gerritsen.com](http://www.michiel-gerritsen.com/)
