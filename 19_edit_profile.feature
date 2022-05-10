Feature: Edición de perfil de Staff

  @user1 @web
  Scenario: Editar el perfil de usuario
    Given I navigate to administration page
    When I enter email "c.riverao@uniandes.edu.co"
    And I enter password "gSZ59nGHKkXQ^ZKQM!H@6yZB"
    And I click Sign In
    And I wait for 1 seconds
    And I click on Profile button
    And I wait for 1 seconds
    And I click on Your profile item menu
    And I wait for 1 seconds
    And I click on input Full name
    And I enter text "third surname"
    And I wait for 1 seconds
    And I click on Staff Save button
    And I wait for 1 seconds
    And I click on Profile button
    And I wait for 1 seconds
    Then I click on Sign out item menu


