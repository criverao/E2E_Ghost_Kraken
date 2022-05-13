Feature: Ghost Update Miembros

@user6 @web
Scenario: Actualizar correo miembro
    Given I navigate to page "<ADMIN_URL>"
    When I wait for 2 seconds to take a screenshot
    When I enter email "<USER>"
    And I wait for 2 seconds to take a screenshot
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds to take a screenshot
    And I click Sign In
    And I wait for 2 seconds to take a screenshot
    And I click Members
    And I wait for 1 seconds to take a screenshot
    And I click on profile "<NAME>"   
    And I wait for 1 seconds to take a screenshot
    And I enter email new profile "<EMAIL2>"
    And I wait for 1 seconds to take a screenshot
    And I click on Save button
    And I wait for 2 seconds to take a screenshot
    And I click Members
    And I wait for 1 seconds to take a screenshot
    Then the new profile exists "<EMAIL2>"