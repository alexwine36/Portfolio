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
---


## The Problem
Construction is a long process and making sure a customer is happy throughout a build is challenging and the highest priority.

---

## The Solution

- Infrastructure
  - [Pulumi](/skills) to create the backend
  - GitLab as the CI/CD environment
  - NodeJS as the backend
- Frontend
  - React for the Dashboard
  - Yarn and Turborepo for managing the Monorepo
  - Mjml for creating email templates

---

## The Process

This has been the longest running project. It was initially started in June 2019. Originally created with Serverless and using Razzle and React for a backend. 

When COVID hit, the project was paused and we needed to focus on other aspects of the business.


### Restart

With some time away from the project I realized there were many opportunities for improvement.

<!-- First - the survey was included with the application which wasn't a necessary feature.
 -->
Initially the project had surveys built in because we wanted custom functionality in the surveys. Later I found out that Typeform has methods for embedding data into forms that would take care of our use case and ease the programming load.

Basic app structure

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

Using a monorepo for this project was ideal to share types between projects. The Pulumi package uses Step Functions and a simple Rest API to expose endpoints to the dashboard.


#### State Machine


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





