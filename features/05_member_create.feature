Feature: Ghost Miembros

@user5 @web
Scenario: Crear miembro
    Given I navigate to page "<RUTA>"
    When I wait for 2 seconds
    When I enter email "<USER>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click Sign In
    And I wait for 2 seconds
    And I click Members
    And I wait for 1 seconds
    And I click New Member    
    And I wait for 1 seconds
    And I enter name new profile "<NAME>"
    And I enter email new profile "<EMAIL>"    
    And I click save button     
    And I wait for 2 seconds
    And I click Members
    Then the new profile exists "<EMAIL>"

