Feature: General Settings

  @user1 @web
  Scenario: Crear una página
    Given I navigate to administration page
    When I enter email "c.riverao@uniandes.edu.co"
    And I enter password "gSZ59nGHKkXQ^ZKQM!H@6yZB"
    And I click on Sing in button
    And I wait for 1 seconds
    And I click on "posts" menu
    And I wait for 1 seconds
    And I see list of post
    And I wait for 1 seconds
    #And I click on Post settings button
    #And I wait for 2 seconds
    #And I click on "posts" menu

    #And I wait for 1 seconds
    #And I click on Profile button
    #And I wait for 1 seconds
    #And I click on Sign out item menu
    #And I wait for 1 seconds


