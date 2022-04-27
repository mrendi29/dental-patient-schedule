## Getting Started
### Installation and Setup

1. Install [Node.js](https://nodejs.org/)  and [Poetry](https://python-poetry.org/docs/#installation)  if you haven't already.

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
1. Open up a shell for the server.

        > cd dental-patient-schedule/api
        > poetry shell
        > flask run

2. Open up a second shell for the webapp.

        > cd dental-patient-schedule/ui
        > npm start

3. The locally hosted web application should be automatically opened up in your browser.
