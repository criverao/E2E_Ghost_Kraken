Feature: Ghost Update Miembros

@user3 @web
Scenario: Actualizar correo miembro
    Given I navigate to page "<ADMIN_URL>"
    When I wait for 2 seconds to take a screenshot
    When I enter email "<USER>"
    And I wait for 2 seconds to take a screenshot
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds to take a screenshot
    And I click Sign In
    And I wait for 2 seconds to take a screenshot
    And I click Tags
    And I wait for 1 seconds to take a screenshot
    And I click on tag   
    And I wait for 1 seconds to take a screenshot
    And I enter description new tag random
    And I wait for 1 seconds to take a screenshot
    And I click save tag button
    And I wait for 2 seconds to take a screenshot
    Then I not expect a Retry button tag
