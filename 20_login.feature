Feature: Login

  @user1 @web
  Scenario: Inicio y cierre de sesión
    Given I navigate to page "<RUTA>"
    When I enter email "<USER>"
    And I enter password "<PASSWORD>"
    And I click Sign In
    And I wait for 2 seconds
    And I click on Profile button
    And I wait for 2 seconds
    Then I click on Sign out item menu
