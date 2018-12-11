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

Feature: Free CRM app test
#using Hooks for repetitive before/after actions for several scenarios

  Scenario: free crm create deal scenario
    Given user on Deal Page
    When user fills the deal form
    Then deal is created

  Scenario: free crm create contact scenario
    Given user on Contact Page
    When user fills the contact form
    Then contact is created
    
    
  Scenario Outline: free CRM create mail test
    Given user on Mail Page
    When user fills the mail form
    Then mail is created
    Examples:
    | mail1 |
    | mail2 |
    | mail3 |