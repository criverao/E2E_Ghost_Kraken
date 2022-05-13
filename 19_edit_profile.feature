Feature: Edición de perfil de Staff

  @user1 @web
  Scenario: Edit user's profile
    Given I navigate to page "<RUTA>"
    And I wait for 1 seconds to take a screenshot
    And I enter email "<USER>"
    And I wait for 1 seconds to take a screenshot
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds to take a screenshot
    And I click Sign In
    And I wait for 1 seconds to take a screenshot
    # Given login
    When I click on Profile button
    And I wait for 1 seconds to take a screenshot
    And I click on Your profile item menu
    And I wait for 1 seconds to take a screenshot
    And I click on input Full name
    And I wait for 1 seconds to take a screenshot
    And I enter text "third surname"
    And I wait for 1 seconds to take a screenshot
    And I click on Staff Save button
    And I wait for 1 seconds to take a screenshot
    And I click on Profile button
    And I wait for 1 seconds to take a screenshot
    Then I click on Sign out item menu
    And I wait for 1 seconds to take a screenshot