Feature: Ghost Update Miembros

@user4 @web
Scenario: Actualizar correo miembro
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
    And I click on tag "<TAGNAME>"   
    And I wait for 1 seconds to take a screenshot
    And I click on delete tag    
    And I wait for 2 seconds to take a screenshot
    And I confirm delete
    And I wait for 2 seconds to take a screenshot
    Then the delete profile not exists "<TAGNAME>"