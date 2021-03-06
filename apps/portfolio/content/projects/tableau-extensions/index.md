---
title: Tableau Extensions
date: 2020-12-03
tags:
  - React
  - Typescript
  - Tableau
published: true
hero: stephen-dawson-qwtCeJ5cLYs-unsplash.jpg
---

<!-- - The Problem
  - Tableau doesn't always have the necessary flexibilty to display data -->


# The Problem

Tableau is an incredibly powerful software but, sometimes you need a bit more flexibility than it can provide. 

# The Solution

Tableau Extensions to the rescue! Using Tableau's Extensions API data can be pulled into a dashboard for modification or display.

## Uses

This setup has been used for a number of dashboards. Two of the most beneficial were for vendor load and sales pipeline display.

Increasing business is always important but, scaling intelligently can make or break a business faster. 

As we communicated with vendors it was clear that some understand this better than others. 

As an example we will pretend you own a painting company. 

You have the following tasks:
1. First Paint
   1. Prime walls
   2. Rough paint for walls
   3. Spray trim
2. Exterior Paint
   1. Paint electrical box
   2. Paint accents and fascia
   3. Paint garage door
3. Final Paint
   1. Doors and trim touch-up
   2. Caulk openings and trim
   3. Touch up walls and ceilings
4. Paint punch
   1. Come back to touch up missed items


With tableau providing the data and averages for tasks and time between them, the extension can then play with the data. 

```mermaid
gantt

    dateFormat  YYYY-MM-DD
    section Crew 1
    First Paint           :a1, 2014-01-01, 6d
    Another task     :after a1  , 20d
    section Crew 2
    Task in sec      :2014-01-12  , 12d
    another task      : 24d
            

```

![Sales Sankey](newplot.png)
