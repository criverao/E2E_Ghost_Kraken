Feature: General Settings

  @user1 @web
  Scenario: Cambiar la visibilidad del sitio web
    Given I navigate to page "<RUTA>"
    And I wait for 1 seconds to take a screenshot
    When I enter email "<USER>"
    And I wait for 1 seconds to take a screenshot
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds to take a screenshot
    And I click Sign In
    And I wait for 1 seconds to take a screenshot
    And I click on Settings button
    And I wait for 1 seconds to take a screenshot
    And I click on General Setting button
    And I wait for 1 seconds to take a screenshot
    And I click on Make this site private
    And I wait for 1 seconds to take a screenshot
    And I click on Save button
    And I wait for 2 seconds to take a screenshot
    And I click on Profile button
    And I wait for 2 seconds to take a screenshot
    And I click on Sign out item menu
    And I wait for 2 seconds to take a screenshot
    And I navigate to page public page
    And I wait for 2 seconds to take a screenshot
    And I navigate to administration page
    And I wait for 1 seconds to take a screenshot
    And I enter email "<USER>"
    And I wait for 1 seconds to take a screenshot
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds to take a screenshot
    And I click Sign In
    And I wait for 1 seconds to take a screenshot
    And I click on Settings button
    And I wait for 1 seconds to take a screenshot
    And I click on General Setting button
    And I wait for 1 seconds to take a screenshot
    And I click on Make this site private
    And I wait for 1 seconds to take a screenshot
    And I click on Save button
    And I wait for 2 seconds to take a screenshot
    And I click on Profile button
    And I wait for 2 seconds to take a screenshot
    And I click on Sign out item menu
    And I wait for 2 seconds to take a screenshot
    Then I navigate to page public page
    And I wait for 1 seconds to take a screenshot


