Feature: Pages

  @user1 @web
  Scenario: Crear una página
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
    And I click on input Page title
    And I wait for 1 seconds to take a screenshot
    And I enter text "Creating a new page"
    And I wait for 1 seconds to take a screenshot
    And I click on input Content page
    And I wait for 1 seconds to take a screenshot
    And I enter text "This is the content for this new page"
    And I wait for 2 seconds to take a screenshot
    And I click on Publish dropdown menu
    And I wait for 1 seconds to take a screenshot
    And I click on Publish button
    And I wait for 1 seconds to take a screenshot
    And I wait for 4 seconds
    And I wait for 1 seconds to take a screenshot
    And I click on "pages" menu
    And I wait for 1 seconds to take a screenshot
    And I click on Profile button
    And I wait for 1 seconds to take a screenshot
    Then I click on Sign out item menu