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

    And I set random "normal" "sentence" value on runtime into input "Page title"
    And I wait for 1 seconds to take a screenshot

    And I set random "normal" "paragraphs" value on runtime into input "Content page"
    And I wait for 1 seconds to take a screenshot

    Then I click on "pages" menu
    And I wait for 1 seconds to take a screenshot
