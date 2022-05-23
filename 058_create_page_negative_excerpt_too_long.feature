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

    And I click on Post settings button
    And I wait for 1 seconds to take a screenshot

    And I set random "too long" "string" value on runtime into input "Excerpt"
    And I wait for 1 seconds to take a screenshot

    And I click on Publish dropdown menu
    And I wait for 1 seconds to take a screenshot
    And I click on Publish button
    And I wait for 1 seconds to take a screenshot

    Then I expect a "Retry" button
    And I expect error message "Excerpt cannot be longer than 300 characters."
    And I wait for 1 seconds to take a screenshot