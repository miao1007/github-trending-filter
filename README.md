As I noticed there are full of spamming or Chinese-only repositories in [Github Trending](https://github.com/trending). It waste my time on find a **TRUE** interesting project.

<!--more-->

## What happened

The trending page you opened just shown

* A collection of awesome-xxx with 10k+ star.
* A interview/algorithm summary for getting a job.
* A Chinese-only project for Chinese users.

If your are only interested in coding, it may be frustrated on the no-code projects.



## Why

As Github is a community open for all users and all language, there are many ways to use the repository.

#### Knowledge Sharing

People use the Markdown to summary the knowledge, like a interview summary, which is not aganist the Term of Use, they have freedom to publish and to be stared by the others.

#### Chinese-only/Staring Driven Project
**Chinese-only Project**
The Chinese-only projects are written in Chinese, but as known to all, the code of language is English, so many English users won't get useful information on the project. It's hard but we need to encourage Chinese developers to translate the projects into English and give the community in return.

**Staring/KPI Driven Project**
Many companies are recruiting the employee with **Star Ranked** , the more star you have, the more money you earn. So they promote their project everywhere like Ads, articles, even [buy stars](https://juejin.im/post/5b8c9310f265da4361530560) as 0.2$/star.

#### Freedom of speech

In China, while Github is not self-censorship and is unblocked by Administrator, Chinese also use Github in their life, following repositories used to be on Github trending for a long time

* A summary for buying properties in China: [Link](https://github.com/houshanren/hangzhou_house_knowledge)
* A charge of sex abuse( `#Me too`) in China's university: [Link](https://github.com/sikaozhe1997/Xin-Yue)
* An evidence of political corruption in China: [Link](https://github.com/programthink/zhao)



## Solutions

I create a tampermonkey script removes project by **personal** keywords in github-trending

![trending filter](trending%20filter.png)

# Install 

1. Install Tampermonkey from https://tampermonkey.net
2. [Install](https://github.com/miao1007/github-trending-filter/raw/master/trendingfilter.user.js) the script 
3. Edit the user script and modify the keywords you may concern in `hideByFilter` function.
