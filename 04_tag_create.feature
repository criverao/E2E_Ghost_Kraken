Feature: Ghost Miembros

@user2 @web
Scenario: Crear miembro
    Given I navigate to page "<RUTA>"
    When I wait for 2 seconds
    When I enter email "<USER>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click Sign In
    And I wait for 2 seconds
    And I click Tags
    And I wait for 1 seconds
    And I click New Tag    
    And I wait for 1 seconds
    And I enter name new tag "<TAGNAME>"
    And I click save tag button     
    And I wait for 2 seconds
    And I click Tags
    Then the new tag exists "<TAGNAME>"

