Feature: Ghost Update Miembros

@user3 @web
Scenario: Actualizar correo miembro
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
    And I click on tag "<TAGNAME>"   
    And I wait for 1 seconds
    And I enter a tag description "<TAGDESCR>"    
    And I click save tag button     
    And I wait for 2 seconds
    And I click Tags
    Then the tag desc exists "<TAGDESCR>"
