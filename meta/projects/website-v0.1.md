---
created: 2022-03-10
due: 2022-03-11
---

# Website v0.1

Launchable and *announceable* website.

Sketch of home page
![website-homepage-v0.1-2022-02-23.excalidraw](../../excalidraw/website-homepage-v0.1-2022-02-23.excalidraw.svg)

Mockup of home page (design): https://excalidraw.com/#room=8bc8a0afb0afc89015dc,W3jd48r8_B2llA2CZ8A33A

## Acceptance

* [ ] Home Page
  * [x] ⏫ Looks reasonable
  * [x] Hero section
  * [x] 🔼 Latest 2-3 videos up somewhere on the front page
  * [x] Guide section
  * [x] Library section
  * [ ] About the project
  * [x] Contribute
* [x] About page **✅ with SCQH**
* [x] Library page
* [x] ⏫ Sign up to get updates / news …
* [ ] Misc
  * [x] ⏫ Analytics
  * [x] Navbar
  * [ ] Footer

Bonus

* [ ] Subscribe to our youtube channel
* [ ] Guide page
* [ ] SCQH page (? worth doing separate from about??)

## Tasks

* [x] Home page - see below
* [x] Library page
* [ ] Guide page
* [ ] Notes section (wiki)

### Home Page

* [ ] Hero
  * [x] Layout
  * [x] Fix "get updates"
    * [x] EITHER: Remove "Get updates" & replace with CTA OR keep Get Updates using netlify form support => Choose what to do **✅ trying out netlify forms https://docs.netlify.com/forms/setup/ docs**
    * [x] Do it **✅2022-03-14 trying it out and seems to be working**
* [ ] Latest releases
  * [x] Working
  * [ ] Replace images either with YouTube video embed or the thumbnail image (?) @eilidh
* [x] Guide section
  * [ ] Needs longer text
* [x] Library section
  * [x] Image needs changing. **✅ DONE [new image link](https://res.cloudinary.com/ds7qslkd0/image/upload/v1646739680/Web3/undraw_bibliophile_re_xarc_ssxnqe.svg )**
* [ ] Why the project
* [ ] Get involved (front page)

### Library Page

Acceptance

* [x] `/library` landing page exists
* [x] brief overview
* [x] links to zotero
* [x] Also explanation of how to contribute incl organizational structure **🏃<U+200D>♂️ Done the first part and need to migrate the rest of the library contribute guide doc @eilidhross1**

Tasks

* [x] Basic text for library page e.g. what, etc **✅ Eilidh written. Can be found [here](https://docs.google.com/document/d/1CtQ5KsdicM_d4oI-Px7DZRls6OwxeBozVO3vgiXw7m8/edit#)**
* [x] Link or embed the full library

### Guide

plan of content https://coggle.it/diagram/YidoEewvuAnxT9LA/t/web3-crypto-guide-toc

* [x] Stub `/guide/` page and could reuse quite a bit of about as introduction

### Contribute `/contribute/`

* [x] Developers => contribute on github
* [x] Non-developers
  * [x] Researchers / academics etc
* [x] General: check out our videos and resources and Share the work with others
* [x] Feedback: share it on the discussions

### Inbox

* [ ] Logo and favicon (could auto-generate)
* [ ] Issue tree image
  * [ ] Export it or embed?
  * [ ] Make it simpler
* [x] can we use symlinks to display content from main part of the repo into the site itself **✅ Yes you can. Rufus has this working**

### Someday

* [ ] (Front page?) Aside: Turning the SCQH into a tree esp the complication (note we have a bunch of this structure in the long version of the SCQH with bullet points). Why? A

## Analysis

### Online location and website

* [x] Do we want a "dedicated" website for this? **✅Yes because running of a github repo? See more analysis below**
* [x] Where is that dedicated website e.g. at labs.lifeitself.us/web3/ or lifeitself.us/web3/? **✅suggest at subdomain because a) can be powered by a repo which others can contribute to b) a little more independent. => https://web3.lifeitself.us ...**
* [x] How do we build a website?
  * [x] What is the "backend"? **✅2022-02-26 will start with markdown in github and see if that cuts it**
    * [x] What are options? **✅ a)markdown on github b) a headless cms like sanity c) wordpress**
    * [x] Which do we choose ✅ choose github + markdown because simple, allows for open contribution (have a reasonably tech-y contributor base)
  * [x] What do we use for the frontend? **✅ NextJS as already using it and solid.**
    * [x] Is raw github sufficient? ✅ No we want something nicer.
    * [x] Do we use a template? **✅ Not much - keep it barebones for now**
* [x] ⏫ What is the home page **✅ See https://excalidraw.com/#room=f31febc4be4500863e2c,j3FmcGnhKLb8xlw53pBe6w** 
* [x] Is there a need for a blog? **✅ No, Maybe in the future**
  * [x] Do we need comments / discussion? **✅ Maybe and if so we can use github discussions?? or giscus ...?**
* [x] Do we need user signup? **✅ No - people are publishing via github**

### Design

* How nice to we make this look **✅ To start with can be very basic ... and we'd like to make it look good**
* What's the vibe? **✅ Friendly, yet authoritative/rigorous. It will be content heavy not many images ...**
* Where can we find inspiration? **🏃‍♂️ Look at https://www.awwwards.com/websites/tailwind/, dribble, https://www.lapa.ninja**
