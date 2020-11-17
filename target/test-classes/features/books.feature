@smoke
  Feature: Books page

    Background:
      Given the user is on the login page
      When user login as a "student"

    Scenario: User see column name
      Then table should have following columns name
      |Actions|
      |ISBN   |
      |Name   |
      |Author |
      |Category|
      |Year    |
      |Borrowed By|
@asd
    Scenario:User search books with different categories
      Then user select differenet categories