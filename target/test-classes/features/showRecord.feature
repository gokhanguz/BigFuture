@smoke
  Feature: Show records
    Background:
      Given the user is on the login page
      When user login as a "librarian"
      When user click users button

    Scenario: User should be see records word and 10 records
      Then user see "records" button
      Then user see default "10" records

    Scenario: User see all count
      When user click record dropdowm menu
      Then user see all number
      |5|
      |10|
      |15|
      |50|
      |100|
      |200|
      |500|






