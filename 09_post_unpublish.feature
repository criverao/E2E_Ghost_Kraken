Feature: Ghost Miembros

@user10 @web
Scenario: Crear miembro
    Given I navigate to page "<RUTA>"
    When I wait for 2 seconds
    When I enter email "<USER>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click Sign In
    And I wait for 2 seconds
    And I click Posts
    And I wait for 1 seconds
    And I click on post "<POSTTITLE2>"
    And I wait for 2 seconds
    And I click on update menu     
    And I wait for 1 seconds
    And I select unpublish     
    And I wait for 1 seconds
    And I click on update button     
    And I wait for 2 seconds
    And I click Post Back
    And I wait for 1 seconds
    And I expand Posts
    And I wait for 1 seconds
    And I click Draft
    And I wait for 2 seconds
    Then the new post exists "<POSTTITLE2>"


    