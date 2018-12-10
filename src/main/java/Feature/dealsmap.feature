#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
Feature: New Deal data

  Scenario: Free CRM Create new deal scenario
    Given login page
    When title -Free CRM
    Then entering credentials
      | username   | password |
      | ktm000 | qazwsx   |
    Then login button submit
    Then home page
    Then moves to new deal page
    Then user and deal details
      | title | amount | probability | commission |
      | deal1 |   1500 |          30 |         15 |
      | deal2 |   2500 |          60 |         35 |
      | deal3 |   3500 |          70 |         25 |
    Then browser quit

