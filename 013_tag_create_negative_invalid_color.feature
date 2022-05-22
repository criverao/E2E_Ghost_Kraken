Feature: Ghost Miembros

@user2 @web
Scenario: Crear miembro
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
    And I click New Tag    
    And I wait for 1 seconds to take a screenshot
    And I enter name new tag "Name"
    And I wait for 1 seconds to take a screenshot
    And I enter slug new tag "Slug"
    And I wait for 1 seconds to take a screenshot
    And I enter a tag description "Description"
    And I wait for 1 seconds to take a screenshot
    And I enter color new tag "Color"
    And I wait for 1 seconds to take a screenshot
    And I click save tag button
    And I wait for 2 seconds to take a screenshot
    Then I expect a Retry button tag

