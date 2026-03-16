Feature: Verbal SAT Test
 
  Scenario: User answers verbal questions one by one
    Given the user is on the login page
    When the user login with email "studentqa@gmail.com" and password "satu2tiga"
    And the user click SAT 
    And the user open the verbal test
    Then the user answers all verbal questions modul 1
    And the user finishes the test modul 1
    And the user answers all verbal questions modul 2
    And the user finishes the test modul 2
    

  

 