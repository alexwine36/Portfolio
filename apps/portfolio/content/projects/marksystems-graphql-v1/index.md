---
title: MarkSystems GraphQL v1
date: 2019-04-29
published: false
hero: jan-antonin-kolar-lrox0shwjuq-unsplash.jpg
tags:
  - Python
  - Jupyter
  - Kubernetes
---
# The Problem
At Abrazo the ERP system being used is called MarkSystems. It is an incredibly helpful software that helps with scheduling, accounting and sales. The issue we ran into was that the database that is used, Basis, is not well supported. As a result this meant the first crack at writing a GraphQL endpoint was not an easy task. I had experience using [Prisma](https://www.prisma.io/) and was hoping there was something similar I could do for this project. 

# The Solution

Unfortunately, Prisma was not an option. After many failed attempts I finally found a semi-automated method to create this. A JDBC connection was the only reliable method that I could connect to the database outside of the system and, as it was an older version JDBC newer tools didn't yield results. So I decided on a more custom approach.

I was able to export a data dictionary from MarkSystems and, from there I was sure I could use Python to process the file into something more helpful.

What I ended writing was a Jupyter notebook that could process the csv into tables and their respective fields. After I had this information I needed to create different flags for types. Basis doesn't use the standard types I was accustomed to in SQL. Next up was the writing process. 

I used pandas to hold the information for all <!-- TODO: Insert table count --> tables. With this information present I used a little Python know how to parse into a format that GraphQL SPQR would like. I then wrote these files to the system in a javax.servlet-api that I could deploy to Kubernetes using procfiles and GitLab's CI. 

Incredibly enough the application worked! It served as the first API into the system that was able to provide reliable access to the database and be accessed using a type-safe graphql client.


Unfortunately, the project worked too well. Basis, has a licensing agreement that is per-user. When one user started running multiple queries simultaneously accross different IP addresses. Some questions were raised and, I needed to move to [version 2](/projects/marksystems-graphql-v2/).

<!-- The ERP the company used utilizes a database that is not well-supported. -->
