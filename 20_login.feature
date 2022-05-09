Feature: General Settings

  @user1 @web
  Scenario: Modificar la configuración general de publicación
    Given I navigate to administration page
    When I enter email "<USER>"
    And I enter password "<PASSWORD>"
    And I click on Sing in button
    And I wait for 2 seconds
    And I click on Profile button
    And I wait for 2 seconds
    And I click on Sign out item menu
    And I wait for 2 seconds
