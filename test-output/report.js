$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Hp/eclipse-workspace/FreeCRMBDD3/src/main/java/Feature/tagging.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Free CRM application testing",
  "description": "",
  "id": "free-crm-application-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "line": 23,
  "name": "Login with correct username and password scenario",
  "description": "",
  "id": "free-crm-application-testing;login-with-correct-username-and-password-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@SmokeTest"
    },
    {
      "line": 22,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "This is a valid login test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_valid_login_test()"
});
formatter.result({
  "duration": 117794472,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Login with incorrect username and password scenario",
  "description": "",
  "id": "free-crm-application-testing;login-with-incorrect-username-and-password-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "This is a invalid login test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_invalid_login_test()"
});
formatter.result({
  "duration": 40119,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Create a contact scenario",
  "description": "",
  "id": "free-crm-application-testing;create-a-contact-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@SmokeTest"
    },
    {
      "line": 30,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "This is a contact test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_contact_test()"
});
formatter.result({
  "duration": 40118,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Create a deal scenario",
  "description": "",
  "id": "free-crm-application-testing;create-a-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "This is a deal test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_deal_test()"
});
formatter.result({
  "duration": 35921,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Create a task scenario",
  "description": "",
  "id": "free-crm-application-testing;create-a-task-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "This is a task test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_task_test()"
});
formatter.result({
  "duration": 52714,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Create a case scenario",
  "description": "",
  "id": "free-crm-application-testing;create-a-case-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "This is a case test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_case_test()"
});
formatter.result({
  "duration": 44784,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Verify left panel links scenario",
  "description": "",
  "id": "free-crm-application-testing;verify-left-panel-links-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 46,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "Clicking on left panel links",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.clicking_on_left_panel_links()"
});
formatter.result({
  "duration": 58779,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Search a deal scenario",
  "description": "",
  "id": "free-crm-application-testing;search-a-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 50,
      "name": "@SmokeTest"
    },
    {
      "line": 50,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "This is a search deal test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_deal_test()"
});
formatter.result({
  "duration": 56446,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Search a contact scenario",
  "description": "",
  "id": "free-crm-application-testing;search-a-contact-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 54,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "This is a search contact test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_contact_test()"
});
formatter.result({
  "duration": 58779,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Search a call scenario",
  "description": "",
  "id": "free-crm-application-testing;search-a-call-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 66,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "This is a search call test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_call_test()"
});
formatter.result({
  "duration": 54580,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "Search a docs scenario",
  "description": "",
  "id": "free-crm-application-testing;search-a-docs-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 74,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "This is a search docs test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_docs_test()"
});
formatter.result({
  "duration": 55980,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "Search a form scenario",
  "description": "",
  "id": "free-crm-application-testing;search-a-form-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 78,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 80,
  "name": "This is a search form test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_form_test()"
});
formatter.result({
  "duration": 56446,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "Validate report scenario",
  "description": "",
  "id": "free-crm-application-testing;validate-report-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 82,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "This is a report test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_report_test()"
});
formatter.result({
  "duration": 60644,
  "status": "passed"
});
});