Feature: General Settings

  @user1 @web
  Scenario: Modificar los enlaces a las redes sociales
    Given I navigate to page "<ADMIN_URL>"
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
    And I click on Expand button from Social accounts
    And I wait for 1 seconds to take a screenshot
    And I click on input Facebook link
    And I wait for 1 seconds to take a screenshot
    And I enter text "2"
    And I wait for 1 seconds to take a screenshot
    And I click on input Twitter link
    And I wait for 1 seconds to take a screenshot
    And I enter text "2"
    And I wait for 1 seconds to take a screenshot
    And I click on Save button
    And I wait for 2 seconds to take a screenshot
    And I click on Profile button
    And I wait for 2 seconds to take a screenshot
    Then I click on Sign out item menu
    And I wait for 1 seconds to take a screenshot



