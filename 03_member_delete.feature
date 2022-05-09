Feature: Ghost Update Miembros

@user7 @web
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
    And I click on options    
    And I wait for 1 seconds
    And I click on delete member    
    And I wait for 2 seconds
    And I confirm delete
    And I wait for 2 seconds
    Then the delete profile not exists "<EMAIL2>"
