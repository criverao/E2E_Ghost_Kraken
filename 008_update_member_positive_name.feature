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
    And I click on a member
    And I wait for 1 seconds to take a screenshot
    And I enter name new member "Member Name"
    And I wait for 1 seconds to take a screenshot
    And I click on Save button
    And I wait for 2 seconds to take a screenshot
    Then I not expect a Retry button