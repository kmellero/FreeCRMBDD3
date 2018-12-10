$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("deals.feature");
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
    },
    {
      "line": 19,
      "value": "#@tag"
    }
  ],
  "line": 20,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 23,
  "name": "Free CRM Create new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "user on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "title is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enters user and password",
  "rows": [
    {
      "cells": [
        "ktm000",
        "qazwsx"
      ],
      "line": 28
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "login button click",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user home page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "bogus deal",
        "3000",
        "40",
        "5"
      ],
      "line": 33
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "browser down",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepDefinition.user_on_login_page()"
});
formatter.result({
  "duration": 8419038809,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.title_is_Free_CRM()"
});
formatter.result({
  "duration": 16908219,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_enters_user_and_password(DataTable)"
});
formatter.result({
  "duration": 206645077,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.login_button_click()"
});
formatter.result({
  "duration": 3719922542,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_home_page()"
});
formatter.result({
  "duration": 7101498,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_moves_to_new_deal_page()"
});
formatter.result({
  "duration": 3526976179,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_enters_deal_details(DataTable)"
});
formatter.result({
  "duration": 2737274868,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.browser_down()"
});
formatter.result({
  "duration": 672629444,
  "status": "passed"
});
formatter.uri("dealsmap.feature");
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
  "line": 19,
  "name": "New Deal data",
  "description": "",
  "id": "new-deal-data",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 21,
  "name": "Free CRM Create new deal scenario",
  "description": "",
  "id": "new-deal-data;free-crm-create-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "login page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "title -Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "entering credentials",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 25
    },
    {
      "cells": [
        "ktm000",
        "qazwsx"
      ],
      "line": 26
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "login button submit",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "home page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user and deal details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 31
    },
    {
      "cells": [
        "deal1",
        "1500",
        "30",
        "15"
      ],
      "line": 32
    },
    {
      "cells": [
        "deal2",
        "2500",
        "60",
        "35"
      ],
      "line": 33
    },
    {
      "cells": [
        "deal3",
        "3500",
        "70",
        "25"
      ],
      "line": 34
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "browser quit",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepWithMapDefinition.login_page()"
});
formatter.result({
  "duration": 7186307164,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.title_Free_CRM()"
});
formatter.result({
  "duration": 14913941,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.entering_credentials(DataTable)"
});
formatter.result({
  "duration": 196942852,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.login_button_submit()"
});
formatter.result({
  "duration": 4274589108,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.home_page()"
});
formatter.result({
  "duration": 6201624,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.moves_to_new_deal_page()"
});
formatter.result({
  "duration": 3523169089,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_and_deal_details(DataTable)"
});
formatter.result({
  "duration": 9888261138,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.browser_quit()"
});
formatter.result({
  "duration": 664705976,
  "status": "passed"
});
formatter.uri("login.feature");
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
  "duration": 7238774193,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 10526527,
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
  "duration": 193558876,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 3302686282,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 5641827,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 644991771,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 26,
      "value": "#Or in a separate contact.feature file"
    },
    {
      "line": 27,
      "value": "#Scenario: user can create new contact"
    },
    {
      "line": 28,
      "value": "#Given user is already on Home Page"
    },
    {
      "line": 29,
      "value": "#When user hover over contacts link"
    },
    {
      "line": 30,
      "value": "#Then user clicks on New Contact link"
    },
    {
      "line": 31,
      "value": "#Then user enters First and Last Names"
    },
    {
      "line": 32,
      "value": "#Then user clicks on Save Btn"
    },
    {
      "line": 33,
      "value": "#Then verify new contact created"
    },
    {
      "line": 34,
      "value": "#Then tear down"
    }
  ],
  "line": 36,
  "name": "user can create new contact",
  "description": "",
  "id": "free-crm-login-feature;user-can-create-new-contact",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "user \"\u003cusername\u003e\" \"\u003cpassword\u003e\" is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "user hover over contacts link",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user clicks on New Contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "user enters \"\u003ctitle\u003e\", \"\u003cfname\u003e\" and \"\u003clname\u003e\" Names",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "user clicks on Save Btn",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "verify new contact \"\u003cfname\u003e\" and \"\u003clname\u003e\" created",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "tear down",
  "keyword": "Then "
});
formatter.examples({
  "line": 47,
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
      "line": 48,
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
      "line": 49,
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
      "line": 50,
      "id": "free-crm-login-feature;user-can-create-new-contact;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 49,
  "name": "user can create new contact",
  "description": "",
  "id": "free-crm-login-feature;user-can-create-new-contact;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "user \"ktm000\" \"qazwsx\" is already on Home Page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "user hover over contacts link",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user clicks on New Contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "user enters \"Mrs.\", \"aa1\" and \"bb2\" Names",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "user clicks on Save Btn",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "verify new contact \"aa1\" and \"bb2\" created",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 44,
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
  "duration": 15779676736,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDefintion.user_hover_over_contacts_link()"
});
formatter.result({
  "duration": 262971442,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDefintion.user_clicks_on_New_Contact_link()"
});
formatter.result({
  "duration": 4532557827,
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
  "duration": 408429246,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDefintion.user_clicks_on_Save_Btn()"
});
formatter.result({
  "duration": 2377265315,
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
  "duration": 1225166913,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDefintion.tear_down()"
});
formatter.result({
  "duration": 670425708,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "user can create new contact",
  "description": "",
  "id": "free-crm-login-feature;user-can-create-new-contact;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "user \"ktm000\" \"qazwsx\" is already on Home Page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "user hover over contacts link",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user clicks on New Contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "user enters \"Dr.\", \"cc1\" and \"dd2\" Names",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "user clicks on Save Btn",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "verify new contact \"cc1\" and \"dd2\" created",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 44,
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
  "duration": 12185023362,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDefintion.user_hover_over_contacts_link()"
});
formatter.result({
  "duration": 241093154,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDefintion.user_clicks_on_New_Contact_link()"
});
formatter.result({
  "duration": 3285306900,
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
  "duration": 372104913,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDefintion.user_clicks_on_Save_Btn()"
});
formatter.result({
  "duration": 2638132385,
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
  "duration": 1160700624,
  "status": "passed"
});
formatter.match({
  "location": "NewContactStepDefintion.tear_down()"
});
formatter.result({
  "duration": 680504863,
  "status": "passed"
});
});