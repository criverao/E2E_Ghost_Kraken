Feature: General Settings

  @user1 @web
  Scenario: Cambiar la visibilidad del sitio web
    Given I navigate to administration page
    When I enter email "c.riverao@uniandes.edu.co"
    And I enter password "gSZ59nGHKkXQ^ZKQM!H@6yZB"
    And I click on Sing in button
    And I click on Settings button
    And I click on General Setting button
    And I wait for 1 seconds
    And I click on Make this site private
    And I wait for 1 seconds
    And I click on Save button
    And I wait for 2 seconds
    And I click on Profile button
    And I wait for 2 seconds
    And I click on Sign out item menu
    And I wait for 2 seconds
    And I navigate to page public page
    And I wait for 2 seconds
    And I navigate to administration page
    And I enter email "c.riverao@uniandes.edu.co"
    And I enter password "gSZ59nGHKkXQ^ZKQM!H@6yZB"
    And I click on Sing in button
    And I click on Settings button
    And I click on General Setting button
    And I wait for 1 seconds
    And I click on Make this site private
    And I wait for 1 seconds
    And I click on Save button
    And I wait for 2 seconds
    And I click on Profile button
    And I wait for 2 seconds
    And I click on Sign out item menu
    And I wait for 2 seconds
    And I navigate to page public page
    And I wait for 2 seconds


