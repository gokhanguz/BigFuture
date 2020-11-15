@add
Feature: Add user and edit information

  Background:
    Given the user is on the login page
    When user login as a "librarian"
    When user click users button

  Scenario: Add users with all valid info
    And user click Add User button
    And user fill in the blank
    And user click Save Changes button
    Then user see new User Id

  Scenario: Librarian able to close button
    And user click Add User button
    And user click close button
    Then user see Users Page

  Scenario: Librarians able to edit user info
    When user click "2393" user id Edit User button
    Then user see edit page


