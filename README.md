# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
- [Goal](#goal)
- [Outcome](#outcome)
- [Process](#process)
- [Built with](#built-with)
<!-- - [Feedback](#feedback) -->
- [Lessons](#lessons)
- [Reflections](#reflections)
- [Development](#development)
- [Resources](#resources)

## Overview

This is one of the last Newbie level JS challenges. It's an article component with author details and some dynamic content that toggles visibility with JS.

## Goal

My goal here is to complete it, hoping to move to Junior challenges exclusively next. I will begin using SCSS, but if the component isn't too tricky, I'll refactor to Tailwind to practice.

## Outcome

![](/design/mobile-screenshot.png)
![](/design/mobile-active-screenshot.png)
![](/design/desktop-screenshot.png)
![](/design/desktop-active-screenshot.png)

:jigsaw: [Live Site URL](https://i000o.github.io/article-preview/)  
:pencil2: [Solution URL](https://www.frontendmentor.io/solutions/article-preview-component-js-6v2Jmngb7U)

## Built with

Semantic HTML5 markup  
SCSS
Mobile-first workflow  
JavaScript

<!-- ## Feedback -->

## Lessons

1. Couldn't get `<header>` `background-image: url();` to work. Used `<img>` in HTML instead.
2. Layout was tricky. It seems simple at first glance, but there are some parts that are finnicky.
3. `background` shorthand used for the first time.
4. `object-fit` for `img` was used - really useful.
5. I thought achieving the arrow shape would be more difficult, but it was pretty straightforward. See [W3 Schools: How to - CSS Shapes](https://www.w3schools.com/howto/howto_css_shapes.asp) in [Resources](#resources).
6. Sometimes I need a callback with `DOMContentLoaded` and sometimes I don't. Not sure of the rules here. Later learnt about `defer` attribute in `<script>`. Will use this going forward - maybe I won't need `DOMContentLoaded` then...
7. `style.display === 'block'` or `style.display === 'none'` are for inline styles. I had an `if` statement with these in my JS before. But `.toggle()` handles this same behaviour more directly. Better to use that.
8. Initially, I thought I would use `innerHTML` but then learnt that this changes the content of HTML, rather than toggling visibility of elements on/off which is a different task.
9. With `onclick="toggle()"`, the JS function to correspond must be a `global` one. This is a less modern technique.
10. `addEventListener` with `'click'` instead allows more than one thing to happen if you have alternate layouts, like in this case.
11. I regret making two different share buttons. Will change this in a future refactor.
12. Big difference between referencing a function reference in an event listener and running the function immedietely - `()` are key. `shareButton.addEventListener("click", togglePanel/togglePanel());`
13. `visibility: hidden;` makes the element invisible, but it's still there in the stack, but its space replaces it. Different from `display: none;` which totally removes the element from the stack.

## Reflections

This took me way too long. The layout was tricky. I needed a refresh on `<div>`'s like the author details section. I'd like to build a reusable component for these in future.  
The JavaScript really wasn't too bad, once I learnt about `toggle`. I was able to, with some AI help, write a few lines that I could understand and worked well enough with the desktop/mobile designs.  
I made a key error in the semantic structuring where I interpreted the mobile/desktop share buttons being separate when I think they are actually the same button, with an appearance change. So I mistakenly created two in the HTML, which led to something being broken in the mobile version where the share button disappears once clicked, so you really can't toggle this panel on/off, like you can in the desktop version. This was an oversight on my part, and I didn't think about changing components. In future, I may refactor to merge the buttons and clean up the JS/SCSS to reflect. This SCSS document isn't my favourite to look at. It's not the most readable with all the state changes and defaults included.  
This layout was tricky. The combination of manoeuvring the hero image and positioning these dynamic panels on mobile/desktop tested me, especially since I haven't been drilling layouts in my workload that much the past few months, focusing more on JS fundamentals study. I know now how detrimental it can be to stop building. It's just a lot of work to get your flow back again after forgetting things that remain in your memory when you're always pushing commits.  
For my next challenge, I'm going to keep using SCSS until I feel more refreshed on layouts, and then I will pivot to Tailwind. Since I have learnt it now, I'd enjoy a new workflow with it. I think it'd suit a lot of these more basic components on FM.  
I did get to make great use of `position: relative;`/`position: absolute;` with the share panel on desktop relative to the `.card`. This was a good shout on my part where the viewport changes don't compromise the position of the panel when it's visible. That was a refresher to my mind, as well.

## Resources

1. [W3 Schools: How to - CSS Shapes](https://www.w3schools.com/howto/howto_css_shapes.asp)
