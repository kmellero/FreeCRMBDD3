Feature: Free CRM Login Feature
 
#without Examples keyword
#Scenario: Free CRM Login Test Scenario
#Given user is already on Login Page
#When title of login page is Free CRM
#Then user enters "ktm000" and user enters "qazwsx"
##Then user enters username and user enters password
#Then user clicks on login button
#Then user is on home page
#Then close the browser

#with Examples keyword
Scenario Outline: Free CRM Login Test Scenario
Given user is already on Login Page
When title of login page is Free CRM
Then user enters "<username>" and user enters "<password>"
Then user clicks on login button
Then user is on home page
Then close the browser

Examples:
 | username | password |
 | ktm000 | qazwsx |

#Or in a separate contact.feature file
#Scenario: user can create new contact
#Given user is already on Home Page
#When user hover over contacts link
#Then user clicks on New Contact link
#Then user enters First and Last Names
#Then user clicks on Save Btn
#Then verify new contact created
#Then tear down

Scenario Outline: user can create new contact

Given user "<username>" "<password>" is already on Home Page
When user hover over contacts link
Then user clicks on New Contact link
Then user enters "<title>", "<fname>" and "<lname>" Names
Then user clicks on Save Btn
Then verify new contact "<fname>" and "<lname>" created
Then tear down


Examples:
 | username | password | title | fname | lname |
 | ktm000 | qazwsx | Mrs. | aa1 | bb2 |
 | ktm000 | qazwsx | Dr. | cc1 | dd2 |