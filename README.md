# Dental Patient Schedule
## Overview
Dental Patient & Schedule aims to improve the tedious traditional methods of dental scheduling, communication, and record-keeping by consolidating all these tasks into one seamless web application with mobile responsiveness. With Dental Patient & Schedule, patients will be able to view their records and schedule new appointments on the go, and at the same time allow dentists to manage all their patients and patient records with ease of access.
## Summary
The application consists of a single page in which we render different components. The main page shows a sidebar in which the user can access his dashboard, appointing a calendar, notifications and also, basic account management functionalities such as resetting your password. When the user enters his dashboard they can see information such as their last and next visit, personal information, appointment notes and etc. In the notifications tab they can see what notifications their doctor has sent them. And in the calendar tab they can find a new appointment slot, enter a description for the appointment and choose whether it is a recurring appointment or all day appointment.

## Getting Started
### Installation and Setup

1. Install [Node.js](https://nodejs.org/)  and [Poetry](https://python-poetry.org/docs/#installation) and [Docker](https://docs.docker.com/get-docker/) if you haven't already.

2. Clone this repository and install its dependencies. 

	 `git clone https://github.com/mrendi29/dental-patient-schedule.git`  
 - For the API

		> cd dental-patient-schedule/api 
		> poetry install
	
-  For the UI
 
        > git clone https://github.com/mrendi29/dental-patient-schedule.git 
        > cd dental-patient-schedule/ui
        > npm install

### Run
1.  Open a shell for the database.

		> docker pull postgres:14.2-alpine
		> cd dental-patient-schedule
		> docker-compose up

2. Open up a second shell for the server.

        > cd dental-patient-schedule/api
        > poetry shell
        > flask run

3. Open up a third shell for the webapp.

        > cd dental-patient-schedule/ui
        > npm start

4. The locally hosted web application should be automatically opened up in your browser.

## Contributors
- Endi Caushi 
- Yuan Gao 
