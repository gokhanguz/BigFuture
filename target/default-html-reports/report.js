$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/addUser.feature");
formatter.feature({
  "name": "Add user and edit information",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login as a \"librarian\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.LoginStepDefs.user_login_as_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click users button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.UsersStepDefs.user_click_users_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add users with all valid info",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user click Add User button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.UsersStepDefs.user_click_Add_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill in the blank",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.UsersStepDefs.user_fill_in_the_blank()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Save Changes button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.UsersStepDefs.user_click_Save_Changes_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see new User Id",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.UsersStepDefs.user_see_new_User_Id()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login as a \"librarian\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.LoginStepDefs.user_login_as_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click users button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.UsersStepDefs.user_click_users_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Librarian able to close button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user click Add User button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.UsersStepDefs.user_click_Add_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click close button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.UsersStepDefs.user_click_close_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see Users Page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.UsersStepDefs.user_see_Users_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login as a \"librarian\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.LoginStepDefs.user_login_as_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click users button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.UsersStepDefs.user_click_users_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Librarians able to edit user info",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user click \"2393\" user id Edit User button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.UsersStepDefs.user_click_user_id_Edit_User_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see edit page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.UsersStepDefs.user_see_edit_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/books.feature");
formatter.feature({
  "name": "Books page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login as a \"student\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.LoginStepDefs.user_login_as_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User see column name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "table should have following columns name",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.studentBooksDefs.table_should_have_following_columns_name(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login as a \"student\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.LoginStepDefs.user_login_as_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User search books with different categories",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user select differenet categories",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.studentBooksDefs.user_select_differenet_categories()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/dashboard.feature");
formatter.feature({
  "name": "Dashboard title",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Students should have access to 2 modules",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user login as a \"student\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.LoginStepDefs.user_login_as_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student user see all title",
  "rows": [
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.DashboardStepDefs.user_see_all_title(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Students should have access to 2 modules",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user login as a \"librarian\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.LoginStepDefs.user_login_as_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Librarian user see all title",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.DashboardStepDefs.librarian_user_see_all_title(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify both Students and librarians login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user login as a \"\u003crole\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user on \"\u003cpage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "role",
        "page"
      ]
    },
    {
      "cells": [
        "student",
        "Books"
      ]
    },
    {
      "cells": [
        "librarian",
        "Dashboard"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify both Students and librarians login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user login as a \"student\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.LoginStepDefs.user_login_as_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user on \"Books\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.LoginStepDefs.user_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify both Students and librarians login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user login as a \"librarian\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.LoginStepDefs.user_login_as_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user on \"Dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.LoginStepDefs.user_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/showRecord.feature");
formatter.feature({
  "name": "Show records",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login as a \"librarian\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.LoginStepDefs.user_login_as_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click users button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.UsersStepDefs.user_click_users_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be see records word and 10 records",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user see \"records\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.UsersSortDefs.user_see_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see default \"10\" records",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.UsersSortDefs.user_see_default_records(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login as a \"librarian\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.LoginStepDefs.user_login_as_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click users button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.UsersStepDefs.user_click_users_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User see all count",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user click record dropdowm menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.UsersSortDefs.user_click_record_dropdowm_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see all number",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.UsersSortDefs.user_see_all_number(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});