$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#without Examples keyword"
    },
    {
      "line": 4,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 5,
      "value": "#Given user is already on Login Page"
    },
    {
      "line": 6,
      "value": "#When title of login page is Free CRM"
    },
    {
      "line": 7,
      "value": "#Then user enters \"ktm000\" and user enters \"qazwsx\""
    },
    {
      "line": 8,
      "value": "##Then user enters username and user enters password"
    },
    {
      "line": 9,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 10,
      "value": "#Then user is on home page"
    },
    {
      "line": 11,
      "value": "#Then close the browser"
    },
    {
      "line": 13,
      "value": "#with Examples keyword"
    }
  ],
  "line": 14,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters \"\u003cusername\u003e\" and user enters \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 23,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "ktm000",
        "qazwsx"
      ],
      "line": 24,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters \"ktm000\" and user enters \"qazwsx\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 7569405103,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 10252226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ktm000",
      "offset": 13
    },
    {
      "val": "qazwsx",
      "offset": 38
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_user_enters_password(String,String)"
});
formatter.result({
  "duration": 349898677,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2995021533,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 6403618,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 648339360,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 26,
      "value": "#Scenario: user can create new contact"
    },
    {
      "line": 27,
      "value": "#Given user is already on Home Page"
    },
    {
      "line": 28,
      "value": "#When user hover over contacts link"
    },
    {
      "line": 29,
      "value": "#Then user clicks on New Contact link"
    },
    {
      "line": 30,
      "value": "#Then user enters First and Last Names"
    },
    {
      "line": 31,
      "value": "#Then user clicks on Save Btn"
    },
    {
      "line": 32,
      "value": "#Then verify new contact created"
    },
    {
      "line": 33,
      "value": "#Then tear down"
    }
  ],
  "line": 35,
  "name": "user can create new contact",
  "description": "",
  "id": "free-crm-login-feature;user-can-create-new-contact",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 37,
  "name": "user \"\u003cusername\u003e\" \"\u003cpassword\u003e\" is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "user hover over contacts link",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "user clicks on New Contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user enters \"\u003ctitle\u003e\", \"\u003cfname\u003e\" and \"\u003clname\u003e\" Names",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "user clicks on Save Btn",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "verify new contact \"\u003cfname\u003e\" and \"\u003clname\u003e\" created",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "tear down",
  "keyword": "Then "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;user-can-create-new-contact;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "title",
        "fname",
        "lname"
      ],
      "line": 47,
      "id": "free-crm-login-feature;user-can-create-new-contact;;1"
    },
    {
      "cells": [
        "ktm000",
        "qazwsx",
        "Mrs.",
        "aa1",
        "bb2"
      ],
      "line": 48,
      "id": "free-crm-login-feature;user-can-create-new-contact;;2"
    },
    {
      "cells": [
        "ktm000",
        "qazwsx",
        "Dr.",
        "cc1",
        "dd2"
      ],
      "line": 49,
      "id": "free-crm-login-feature;user-can-create-new-contact;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 48,
  "name": "user can create new contact",
  "description": "",
  "id": "free-crm-login-feature;user-can-create-new-contact;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 37,
  "name": "user \"ktm000\" \"qazwsx\" is already on Home Page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "user hover over contacts link",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "user clicks on New Contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user enters \"Mrs.\", \"aa1\" and \"bb2\" Names",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "user clicks on Save Btn",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "verify new contact \"aa1\" and \"bb2\" created",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "tear down",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ktm000",
      "offset": 6
    },
    {
      "val": "qazwsx",
      "offset": 15
    }
  ],
  "location": "NewContactStepDefintion.user_is_already_on_Home_Page(String,String)"
});
formatter.result({
  "duration": 11128648481,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDefintion.user_hover_over_contacts_link()"
});
formatter.result({
  "duration": 263361435,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDefintion.user_clicks_on_New_Contact_link()"
});
formatter.result({
  "duration": 3265644010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrs.",
      "offset": 13
    },
    {
      "val": "aa1",
      "offset": 21
    },
    {
      "val": "bb2",
      "offset": 31
    }
  ],
  "location": "NewContactStepDefintion.user_enters_First_and_Last_Namesit(String,String,String)"
});
formatter.result({
  "duration": 378427360,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDefintion.user_clicks_on_Save_Btn()"
});
formatter.result({
  "duration": 1771385200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aa1",
      "offset": 20
    },
    {
      "val": "bb2",
      "offset": 30
    }
  ],
  "location": "NewContactStepDefintion.verify_new_contact_created(String,String)"
});
formatter.result({
  "duration": 1155865839,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDefintion.tear_down()"
});
formatter.result({
  "duration": 653013670,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "user can create new contact",
  "description": "",
  "id": "free-crm-login-feature;user-can-create-new-contact;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 37,
  "name": "user \"ktm000\" \"qazwsx\" is already on Home Page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "user hover over contacts link",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "user clicks on New Contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user enters \"Dr.\", \"cc1\" and \"dd2\" Names",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "user clicks on Save Btn",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "verify new contact \"cc1\" and \"dd2\" created",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "tear down",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ktm000",
      "offset": 6
    },
    {
      "val": "qazwsx",
      "offset": 15
    }
  ],
  "location": "NewContactStepDefintion.user_is_already_on_Home_Page(String,String)"
});
formatter.result({
  "duration": 11268310979,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDefintion.user_hover_over_contacts_link()"
});
formatter.result({
  "duration": 262168133,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDefintion.user_clicks_on_New_Contact_link()"
});
formatter.result({
  "duration": 3328285826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dr.",
      "offset": 13
    },
    {
      "val": "cc1",
      "offset": 20
    },
    {
      "val": "dd2",
      "offset": 30
    }
  ],
  "location": "NewContactStepDefintion.user_enters_First_and_Last_Namesit(String,String,String)"
});
formatter.result({
  "duration": 385266221,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDefintion.user_clicks_on_Save_Btn()"
});
formatter.result({
  "duration": 2175611765,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cc1",
      "offset": 20
    },
    {
      "val": "dd2",
      "offset": 30
    }
  ],
  "location": "NewContactStepDefintion.verify_new_contact_created(String,String)"
});
formatter.result({
  "duration": 1120209532,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDefintion.tear_down()"
});
formatter.result({
  "duration": 672716212,
  "status": "passed"
});
});