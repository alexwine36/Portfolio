---
title: MarkSystems GraphQL v1
date: 2019-04-29
published: true
hero: jan-antonin-kolar-lrox0shwjuq-unsplash.jpg
tags:
  - Python
  - Jupyter
  - Kubernetes
---
# The Problem
The ERP system used at Abrazo Homes is called MarkSystems. This system effectively supports scheduling, accounting and, sales. However, the relational database used by MarkSystems, Basis, was not well supported. Due to this, writing a GraphQL endpoint was unnecessarily difficult. With experience using [Prisma](https://www.prisma.io/) there was hope to develop something similar. 

# The Solution

Unfortunately, Prisma was not an option. After multiple failed attempts I finally found a semi-automated method to create this. A JDBC connection was the only reliable method that I could connect to the database outside of the system and, as it was an older version JDBC newer tools didn't yield results. So I decided on a more custom approach.

I was able to export a data dictionary from MarkSystems and, from there I was sure I could use Python to process the file into something more helpful.

What I ended writing was a Jupyter notebook that could process the csv into tables and their respective fields. After I had this information I needed to create different flags for types. Basis doesn't use the standard types I was accustomed to in SQL. Next up was the writing process. 

I used pandas to hold the information for all <!-- TODO: Insert table count --> tables. With this information present I used a little Python know how to parse into a format that GraphQL SPQR would like. I then wrote these files to the system in a javax.servlet-api that I could deploy to Kubernetes using procfiles and GitLab's CI. 

Incredibly enough the application worked! It served as the first API into the system that was able to provide reliable access to the database and be accessed using a type-safe GraphQL client.


Unfortunately, the project worked too well. Basis, has a licensing agreement that is per-user. When one user started running multiple queries simultaneously across different IP addresses. Some questions were raised and I needed to move to [version 2](/projects/marksystems-graphql-v2/).

<!-- The ERP the company used utilizes a database that is not well-supported. -->
