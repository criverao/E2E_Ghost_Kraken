Feature: Ghost Update Miembros

@user6 @web
Scenario: Actualizar correo miembro
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
    And I click on profile "<NAME>"   
    And I wait for 1 seconds
    And I enter email new profile "<EMAIL2>"    
    And I click on Save button
    And I wait for 2 seconds
    And I click Members
    Then the new profile exists "<EMAIL2>"
