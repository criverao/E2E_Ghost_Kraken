Feature: login

@user1 @web
Scenario: Login
    Given I navigate to page "<RUTA>"
    When I wait for 2 seconds
    When I enter email "<USER>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click Sign In
    And I wait for 2 seconds
    And I click on profile
    Then I am in Ghost