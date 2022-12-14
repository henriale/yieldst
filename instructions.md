# Challenge Instructions

## Deliverable
A multi-step survey script which can be added to any website. The survey should work by including a JS file in the header of any HTML page. The script should load a pop-up containing a survey.
You are required to use the React framework to develop your application. You are encouraged to use any library or tool of your choice to build components and manage the application state.

## Requirements
- The survey pop-up should load 2 seconds a er the page has loaded.
- The survey should contain 4 steps and have 'Next' and 'Previous' buttons on steps which need
them.
- The survey should have a 'Submit' button on the last step, which on click should set the survey
as submitted and close the popup.
- If the browser tab was closed before the survey was submitted and subsequently re-opened,
the script should re-open the survey and continue from where the user le  off.
- The survey should not re-open if it was already submitted.
- Unit tests are required
- The survey steps should contain the following:

| Step # | Description | Fields |
|--------|-------------|--------|
1 | Identity  | Name (input), Email (input)
2 | Details   | Age (select), Gender (radio input)
3 | Favorites | Favorite Book (input), Favorite Colors (multi-input checkbox)
4 | Summary   | Table with all of the data collected in the survey
The fields on the first step are optional. All other fields are required.

## Evaluation considerations
Your solution will be evaluated on several points. Is this a complete solution that works? Does it build? Does it run? Does it work as intended? How clean is the code? How well is it architected and documented?

If you move on to the next step of the interview process, some of the questions in the next rounds will be based on your solution - expect to talk about how to scale your solution, potential performance pitfalls, architecture choices, etc.
