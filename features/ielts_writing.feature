Feature: Writing test flow

 Scenario: User completes writing test successfully
   Given the user opens the login page
   When the user logs in with email "studentqa@gmail.com" and password "satu2tiga"
   Then the user navigates to the writing practice
   And the user selects multiple subjects
   And the user edits the writing content
   And the user submits the writing test
