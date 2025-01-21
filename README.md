# TrackIt - Your go-to place for tracking all your applications and progress

## Link - https://trackit-412l.onrender.com

## Problem Statement
Although we have Simplify where we can track our applications but I personally never used it for that purpose. Call me old-schooled but I preferred entering all my application details into a Google Sheet.

Why?

So that I could create my own custom columns and row nomenclature. I ended up entering **3434 applications** that I have filled out since the time I started applying to full-time positions. Yes, although daunting, that's the count till now. The market has been really bad. And I'm still not there.

This made me wonder what if there were a platform where the candidates could not only upload their application details but also could get personalized data analytics to track their rate, progress and calls-to-no-calls ratio. And so, I came up with this idea of ```TrackIt``` which could be a go-to platform for all candidates hunting for jobs to make their lives easier.

## Features
Following are the features present in the current MVP :-
• **Add** an application
• **Edit** an application
• **Delete** an application
• **Search** applications based on a **search field** and **search value**
• Fetch applications on a **date range**

## Tech Stack
The entire application is built on ```PERN Stack```and below are the technical details of the application :-

• Environment - Node.js
• Backend Language - TypeScript
• Backend Framework - Express.js
• Database - PostgresQL (Intially started off with local setup using ```PLSQL CLI``` and then migrated to ```Render PostgreSQL``` while deploying)
• Frontend Framework - React.js

## Current MVP
The current application is the MVP which will give you the feel of how the application would look like once you have logged in to your profile. For this purpose, I have imported the CSV file of all my filled out applications on to the database. This also provided the platform to test the application too.

## Future Goals
Following roadmap for future features :-
• Implement **user profiles** to extend and expose the application to a multi-user environment.
• Implement **personalized data analytics** for every user.
• Implement the functionality of applying to jobs.
