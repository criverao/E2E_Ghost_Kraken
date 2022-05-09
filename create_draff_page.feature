Feature: General Settings

  @user1 @web
  Scenario: Crear una página
    Given I navigate to administration page
    When I enter email "c.riverao@uniandes.edu.co"
    And I enter password "gSZ59nGHKkXQ^ZKQM!H@6yZB"
    And I click on Sing in button
    And I click on "pages" menu
    And I click on New "page" button
    And I wait for 1 seconds
    And I click on input Page title
    And I enter text "Creating a draff page"
    And I click on input Content page
    And I enter text "This is the content for the draff page"
    And I wait for 2 seconds
    And I click on "pages" menu
    And I wait for 1 seconds
    And I click on Profile button
    And I wait for 1 seconds
    And I click on Sign out item menu
    And I wait for 1 seconds


