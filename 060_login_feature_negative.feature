Feature: Pages

  @user1 @web
  Scenario: Create a new page
    Given I navigate to page "<ADMIN_URL>"
    And I wait for 1 seconds to take a screenshot
    When I set random "too long" "string" value on runtime into input "Email"
    And I wait for 1 seconds to take a screenshot
    And I set random "too long" "string" value on runtime into input "Password"
    And I wait for 1 seconds to take a screenshot
    And I click Sign In
    And I wait for 1 seconds to take a screenshot
    Then I expect a "Retry" button

