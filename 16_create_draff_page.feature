Feature: Pages

  @user1 @web
  Scenario: Crear una página en borrador
    Given I navigate to page "<ADMIN_URL>"
    And I wait for 1 seconds to take a screenshot
    When I enter email "<USER>"
    And I wait for 1 seconds to take a screenshot
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds to take a screenshot
    And I click Sign In
    And I wait for 1 seconds to take a screenshot
    And I click on "pages" menu
    And I wait for 1 seconds to take a screenshot
    And I click on New "page" button
    And I wait for 1 seconds to take a screenshot
    And I click on input Page title
    And I wait for 1 seconds to take a screenshot
    And I enter text "Creating a draff page"
    And I wait for 1 seconds to take a screenshot
    And I click on input Content page
    And I wait for 1 seconds to take a screenshot
    And I enter text "This is the content for the draff page"
    And I wait for 2 seconds to take a screenshot
    And I click on "pages" menu
    And I wait for 1 seconds to take a screenshot
    And I click on Profile button
    And I wait for 1 seconds to take a screenshot
    Then I click on Sign out item menu
    And I wait for 1 seconds to take a screenshot