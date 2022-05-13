Feature: Ghost Miembros

@user9 @web
Scenario: Crear miembro
    Given I navigate to page "<RUTA>"
    When I wait for 2 seconds to take a screenshot
    When I enter email "<USER>"
    And I wait for 2 seconds to take a screenshot
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds to take a screenshot
    And I click Sign In
    And I wait for 2 seconds to take a screenshot
    And I click Posts
    And I wait for 1 seconds to take a screenshot
    And I click on post "<POSTTITLE>"
    And I wait for 1 seconds to take a screenshot
    And I enter title new post "<POSTTITLE2>"
    And I wait for 2 seconds to take a screenshot
    And I click on update menu     
    And I wait for 1 seconds to take a screenshot
    And I click on update button     
    And I wait for 2 seconds to take a screenshot
    And I click Post Back
    And I wait for 1 seconds to take a screenshot
    Then the new post exists "<POSTTITLE2>"
