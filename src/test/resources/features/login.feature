@login
Feature: Login
  Background:
    Given the user is on the login page

  Scenario Outline: Verify both Students and librarians login
    When  user login as a "<role>"
    Then user on "<page>"

    Examples:
      | role       | page     |
      | student    | Books    |
      | librarian  | Dashboard|

