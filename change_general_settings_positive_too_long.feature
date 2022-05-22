Feature: General Settings

  @user1 @web
  Scenario: Edit general configurations for publication info
    Given I navigate to page "<ADMIN_URL>"
    And I wait for 1 seconds to take a screenshot
    And I enter email "<USER>"
    And I wait for 1 seconds to take a screenshot
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds to take a screenshot
    And I click Sign In
    And I wait for 1 seconds to take a screenshot
    # Comment -> Given login
    When I click on Settings button
    And I wait for 1 seconds to take a screenshot
    And I click on General Setting button
    And I wait for 1 seconds to take a screenshot

    And I click on Expand button from "Title and Description"
    And I wait for 1 seconds to take a screenshot

    And I get text value in "Title"
    And I set "upper" "string" value on runtime into input "Title"
    And I wait for 1 seconds to take a screenshot

    And I get text value in "Description"
    And I set "upper" "string" value on runtime into input "Description"
    And I wait for 1 seconds to take a screenshot

    And I click on Expand button from "Publication Language"
    And I wait for 1 seconds to take a screenshot
    And I get text value in "Publication Language"
    And I set "upper" "string" value on runtime into input "Publication Language"
    And I wait for 1 seconds to take a screenshot

    And I click on Save button
    And I wait for 1 seconds to take a screenshot
    # Comment -> When finished editing general configurations for publication info
    # Comment -> Then I check the fields were updated
    Then I expect a "Saved" button

    And I check fake text updated in "Title"
    And I check fake text updated in "Description"
    And I check fake text updated in "Publication Language"
    # Comment -> And I restore theirs initial values
    And I restore initial value into input "Title"
    And I restore initial value into input "Description"
    And I restore initial value into input "Publication Language"
    And I click on Save button
    And I wait for 2 seconds to take a screenshot