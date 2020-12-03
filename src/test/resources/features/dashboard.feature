@test
Feature: Dashboard title

  Background:
    Given the user is on the login page

  Scenario: Students should have access to 2 modules
    When user login as a "student"
    Then Student user see all title
    |Books|
    |Borrowing Books|

  Scenario: Students should have access to 2 modules
    When user login as a "librarian"
    Then Librarian user see all title
      |Dashboard|
      |Users|
      |Books|
