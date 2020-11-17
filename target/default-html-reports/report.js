$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/books.feature");
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
  "name": "User search books with different categories",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@asd"
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
});