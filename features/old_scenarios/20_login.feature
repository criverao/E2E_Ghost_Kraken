Feature: Login

  @user1 @web
  Scenario: Inicio y cierre de sesión
    Given I navigate to page "<ADMIN_URL>"
    When I wait for 1 seconds to take a screenshot
    And I enter email "<USER>"
    And I wait for 1 seconds to take a screenshot
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds to take a screenshot
    And I click Sign In
    And I wait for 1 seconds to take a screenshot
    And I click on Profile button
    And I wait for 1 seconds to take a screenshot
    And I click on Sign out item menu
    Then I wait for 1 seconds to take a screenshot
