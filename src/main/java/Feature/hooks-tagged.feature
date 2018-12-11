Feature: Test for tagged hooks feature

  @First
  Scenario: This is First test
    Given this is first step
    When this is second step
    Then this is third step

  @Second
  Scenario: This is Second test
    Given this is first step
    When this is second step
    Then this is third step

  @Third
  Scenario: This is Third test
    Given this is first step
    When this is second step
    Then this is third step
