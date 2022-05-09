Feature: Ghost Miembros

@user1 @web
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
    And I click on edit menu     
    And I wait for 1 seconds
    And I click on delete button     
    And I wait for 2 seconds
    And I confirm delete
    And I wait for 2 seconds
    Then the post not exists "<POSTTITLE2>"