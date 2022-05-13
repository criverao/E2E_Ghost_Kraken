Feature: Ghost Miembros

@user5 @web
Scenario: Crear miembro
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
    And I click New Member    
    And I wait for 1 seconds to take a screenshot
    And I enter name new profile "<NAME>"
    And I wait for 1 seconds to take a screenshot
    And I enter email new profile "<EMAIL>"
    And I wait for 1 seconds to take a screenshot
    And I click on Save button
    And I wait for 2 seconds to take a screenshot
    And I click Members
    And I wait for 1 seconds to take a screenshot
    Then the new profile exists "<EMAIL>"