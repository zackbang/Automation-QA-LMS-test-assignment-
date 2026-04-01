Feature: Math SAT Test

 Scenario: User answers math questions one by one
    Given the user is on the login page
    When the user login with email "student@gmail.com" and password "1223434"
    And the user click SAT 
    And the user open the math test
   Then the user answers all math questions modul 1
    And the user finishes the test modul 1
    And the user answers all math questions modul 2
    And the user finishes the test modul 2
