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
@FunctionalTest
Feature: Free CRM application testing

  @SmokeTest @RegressionTest
  Scenario: Login with correct username and password scenario
    Given This is a valid login test

  @SmokeTest
  Scenario: Login with incorrect username and password scenario
    Given This is a invalid login test

  @SmokeTest @RegressionTest
  Scenario: Create a contact scenario
    Given This is a contact test

  @RegressionTest
  Scenario: Create a deal scenario
    Given This is a deal test

  @SmokeTest
  Scenario: Create a task scenario
    Given This is a task test

  @RegressionTest
  Scenario: Create a case scenario
    Given This is a case test

  @SmokeTest
  Scenario: Verify left panel links scenario
    Given Clicking on left panel links

  @SmokeTest @RegressionTest
  Scenario: Search a deal scenario
    Given This is a search deal test

  @RegressionTest
  Scenario: Search a contact scenario
    Given This is a search contact test

  @End2End
  Scenario: Search a case scenario
    Given This is a search case test

  @End2End @RegressionTest
  Scenario: Search a task scenario
    Given This is a search task test

  @RegressionTest
  Scenario: Search a call scenario
    Given This is a search call test

  @End2End
  Scenario: Search a email scenario
    Given This is a search email test

  @RegressionTest
  Scenario: Search a docs scenario
    Given This is a search docs test

  @RegressionTest
  Scenario: Search a form scenario
    Given This is a search form test

  @RegressionTest
  Scenario: Validate report scenario
    Given This is a report test

  @End2End
  Scenario: Application Logout scenario
    Given This is application logout test
