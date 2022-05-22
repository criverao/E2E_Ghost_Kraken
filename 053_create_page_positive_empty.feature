Feature: Pages

  @user1 @web
  Scenario: Create a new page
    Given I navigate to page "<ADMIN_URL>"
    And I wait for 1 seconds to take a screenshot
    And I enter email "<USER>"
    And I wait for 1 seconds to take a screenshot
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds to take a screenshot
    And I click Sign In
    And I wait for 1 seconds to take a screenshot
    # Comment -> Given login
    When I click on "pages" menu
    And I wait for 1 seconds to take a screenshot
    And I click on New "page" button

    And I click on input "Page title"
    And I enter the text " "
    And I wait for 1 seconds to take a screenshot

    And I click on input "Content page"
    And I enter the text " "
    And I wait for 1 seconds to take a screenshot

    And I get text value in "Page title"
    And I get text value in "Content page"

    And I click on Publish dropdown menu
    And I wait for 1 seconds to take a screenshot
    And I click on Publish button
    And I wait for 1 seconds to take a screenshot

    And I click on "pages" menu
    And I wait for 1 seconds to take a screenshot
