 Feature: IELTS listening test

   Scenario Outline: As a user, I can log into the secure area

     Given I am on the login page
     When I login with email and password
     Then I should see a dashboard page saying <message>
     When I click listening pre test IELTS
     Then I see pre test instructions
     Then I start take listening test IELTS
     And I fill the question from 1 to 10
     Then I Answer question from 11 to 20
     And I Answered question from 21 to 40 
    Then I submit test and see report

    