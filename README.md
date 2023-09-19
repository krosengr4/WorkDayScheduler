# Description of application
In the work day schedule application, a user can view their workday (hours 9-5). The hours are color coded so that the user can easily view the current hour (Red), the future hours (Green), and the hours that have past (White). The user can then also type in tasks that they would like to do throughout the day, specific to each hour. When the user clicks the save button, whatever they typed in will save and stay there until it is erased.


Problems: The save button:
    - The user must click the black icon within the blue area to save what they have typed.
    - Clicking the blue area, outside of the black icon, will not save.

# User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

# Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours of 9am to 5pm
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

