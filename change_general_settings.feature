Feature: General Settings

  @user1 @web
  Scenario: Modificar la configuración general de publicación
    Given I navigate to administration page
    When I enter email "c.riverao@uniandes.edu.co"
    And I enter password "gSZ59nGHKkXQ^ZKQM!H@6yZB"
    And I click on Sing in button
    And I click on Settings button
    And I click on General Setting button
    And I click on Expand button from Title & Description
    And I click on input Title
    And I enter text " 2"
    And I click on input Description
    And I enter text " Id est enim, de quo quaerimus."
    And I click on Expand button from Site timezone
    And I click on select Timezone
    And I wait for 2 seconds
    And I select the Timezone option America-Tijuana
    And I wait for 2 seconds
    And I click on Save button
    And I wait for 2 seconds
    And I click on Profile button
    And I wait for 2 seconds
    And I click on Sign out item menu
    And I wait for 2 seconds
    #And I navigate to page "http://localhost:2368/about/"
    #Then I expect title site "The Software Design Company 2"
    #And I wait for 2 seconds
    #Then I send a signal to user 2 containing "update settings complete"
    #And I wait for a signal containing "title verification complete" for 10 seconds

  #@user2 @web
  #Scenario: Verificar el título del sitio
  #  Given I navigate to page "http://localhost:2368/"
  #  When I wait for a signal containing "update settings complete" for 15 seconds
  #  And I navigate to page "http://localhost:2368/"
  #  Then I expect title site "The Software Design Company 2"
  #  And I send a signal to user 1 containing "title verification complete"