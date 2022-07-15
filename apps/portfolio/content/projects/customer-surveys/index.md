---
title: Customer Surveys
date: 2022-06-22
hero: lukas-blazek-mcsdtbwxuzu-unsplash.jpg
tags:
  - Pulumi
  - AWS
  - Step Functions
  - React
  - Node JS
  - GitLab CI
---


# The Problem
Constructing a dream home is a long process. Ensuring a customer is happy throughout their build is the highest priority.

---


<!-- TODO: Add team leader/manager information ie. talking to multiple departements -->
<!-- TODO: Add same info to description in work experience -->
# The Solution
Developed an algorithm and dashboard to monitor the progression and customer satisfaction of the clients' homes. The algorithm sends surveys to clients and the dashboard updates survey statuses. 
- Infrastructure
  - [Pulumi](/tags/pulumi) to create the backend
  - [GitLab](/tags/git-lab-ci) as the CI/CD environment
  - [NodeJS](/tags/node-js) as the backend
- Frontend
  - [React](/tags/react) for the dashboard
  - Yarn and Turborepo for managing the Monorepo
  - Mjml for creating email templates

---

# The Process

Started in June 2019, this has been the longest running project for Abrazo Homes. Originally developed with Serverless, using Razzle and React for the backend. 
<!-- TODO: Alex look at this -->
Once the pandemic began, high priority issues came to light pausing the project until January 2022. 


## Restart

Having taken a step back, obvious opportunities for improvement were realized.

<!-- First - the survey was included with the application which wasn't a necessary feature.
 -->
Initially the project had built-in surveys to provide custom functionality. Later discovering that Typeform contains methods for embedding data into forms that would manage the use case and ease the programming load.

The rewrite of this project required data access between both the dashboard [GitLab Pages](/tags/git-lab-ci) package and *Pulumi*

Basic app structure:

```mermaid
%%{init: {'theme': 'dark'} }%%
graph LR
  App --> packages
  App --> client
  App --> serverless
  client --> |Dashboard|survey-dashboard
  serverless --> |Pulumi Package|send-surveys
  packages --> |Formats Emails|email
```

Using a monorepo for this project efficiently allowed type sharing between projects. The Pulumi package uses Step Functions and a Rest API to expose endpoints to the dashboard.


### State Machine
The state machine links processes 

```mermaid
%%{init: {'theme': 'dark'} }%%
stateDiagram-v2
[*] --> SurveyBase
SurveyBase --> QueryBase
QueryBase --> RemapSurveys: $.surveys
QueryBase --> Base
state QueryBase {
[*] --> Base
Base --> HouseSchedule: $.table schedhousedetail
Base --> HousemasterSchedule: $.table housemaster
HousemasterSchedule --> ValidateAll
HouseSchedule --> ValidateAll
ValidateAll --> [*]
ValidateAll --> Contacts
state ValidateAll {
[*] --> Contacts
Contacts --> [*]
}
}
RemapSurveys --> InsertSurveys
InsertSurveys --> [*]: $.surveys
InsertSurveys --> InsertSurvey
state InsertSurveys {
[*] --> InsertSurvey
InsertSurvey --> [*]
}

```





