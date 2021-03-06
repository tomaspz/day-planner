# Work Day Scheduler

This is a simple calendar application that allows the user to save events for each hour of the day. 
This app will run in the browser 
The app uses jQuery (https://jquery.com/) and Moment.js (https://momentjs.com/) to dynamically update the HTML and CSS.
The library Moment.js helps to work with date and time. 

This app is perfect for an employee with a busy schedule that wants to add important events to a daily planner and manage the time effectively.

## How it works (Application functionality)

* User can use the daily planner to create a schedule
* When the user opens the planner, the current day is displayed at the top of the calendar 
* When the user scrolls down is presented with timeblocks for standard business hours
* Each timeblock for a day is color coded to indicate whether it is in the past, present, or future
* Color grey means the event is in the past.
* Color red means the event is in the present.
* Color green means the event is in the future.
* When the user clicks into a timeblock, the user can enter an event.
* When the user clicks the save button for that timeblock, the text for that event is saved in local storage
* When the user refreshes the page, the saved events persist.

## Screenshot

https://github.com/tomaspz/day-planner/blob/master/assets/images/screenshot-work-days-planner.png

## URL of the deployed application.

https://tomaspz.github.io/day-planner/

## URL of the GitHub repository.

https://github.com/tomaspz/day-planner
