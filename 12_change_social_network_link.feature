Feature: General Settings

  @user1 @web
  Scenario: Modificar los enlaces a las redes sociales
    Given I navigate to administration page
    When I enter email "c.riverao@uniandes.edu.co"
    And I enter password "gSZ59nGHKkXQ^ZKQM!H@6yZB"
    And I click on Sing in button
    And I click on Settings button
    And I click on General Setting button
    And I wait for 1 seconds
    And I click on Expand button from Social accounts
    And I wait for 1 seconds
    And I click on input Facebook link
    And I wait for 1 seconds
    And I enter text "sss"
    And I wait for 1 seconds
    And I click on input Twitter link
    And I wait for 1 seconds
    And I enter text "sss"
    And I wait for 1 seconds
    And I click on Save button
    And I wait for 2 seconds
    And I click on Profile button
    And I wait for 2 seconds
    Then I click on Sign out item menu



