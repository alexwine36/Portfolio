---
title: MarkSystems GraphQL v2
date: 2020-01-17
published: false
hero: sunder-muthukumaran-n7eJHQwefeI-unsplash.jpg
tags:
  - MySQL
---


# The Problem
I was **Strongly** advised to find a new method to access the database and, we were already using the API for reports and applications.


# The Solution

The application was initially written using @prisma/photon - 2.0.0-preview019. I had finally gotten access to a replicated MySQL database thanks to the incredibly helpful people at ECI, the company that owns MarkSystems. 

The trouble now was that prisma2 was not terribly reliable yet. Nexus, the plugin to generate a GraphQL schema from a Prisma model, was also not too reliable. The solution I found was to write several scripts to bridge the gaps between the two and, find a new method of hosting. 


I love Kubernetes but, one of the biggest issues I was running into was the memory required to connect to multiple tables on the database. This was my first introduction to the world of serverless. 
