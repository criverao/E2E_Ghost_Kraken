Feature: General Settings

  @user1 @web
  Scenario: Modificar la configuración general de publicación
    Given I navigate to page "<RUTA>"
    And I wait for 1 seconds to take a screenshot
    When I enter email "<USER>"
    And I wait for 1 seconds to take a screenshot
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds to take a screenshot
    Then I click Sign In
    And I wait for 1 seconds to take a screenshot

    When I click on Settings button
    And I wait for 1 seconds to take a screenshot
    And I click on General Setting button
    And I wait for 1 seconds to take a screenshot
    And I click on Expand button from Title & Description
    And I wait for 1 seconds to take a screenshot
    And I click on input Title
    And I wait for 1 seconds to take a screenshot
    And I enter text " 2"
    And I wait for 1 seconds to take a screenshot
    And I click on input Description
    And I wait for 1 seconds to take a screenshot
    And I enter text " Id est enim, de quo quaerimus."
    And I wait for 1 seconds to take a screenshot
    And I click on Expand button from Site timezone
    And I wait for 1 seconds to take a screenshot
    And I click on select Timezone
    And I wait for 2 seconds to take a screenshot
    And I select the Timezone option America-Tijuana
    And I wait for 2 seconds to take a screenshot
    And I click on Save button
    And I wait for 2 seconds to take a screenshot
    And I click on Profile button
    And I wait for 2 seconds to take a screenshot
    Then I click on Sign out item menu
    And I wait for 1 seconds to take a screenshot
