Feature: Login

  @user1 @web
  Scenario: Inicio y cierre de sesión
    Given I navigate to administration page
    When I enter email "<USER>"
    And I enter password "<PASSWORD>"
    And I click on Sing in button
    And I wait for 2 seconds
    And I click on Profile button
    And I wait for 2 seconds
    Then I click on Sign out item menu
