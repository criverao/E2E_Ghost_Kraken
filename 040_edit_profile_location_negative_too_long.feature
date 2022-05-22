Feature: Edición de perfil de Staff

  @user1 @web
  Scenario: Edit user's profile
    Given I navigate to page "<ADMIN_URL>"
    And I wait for 1 seconds to take a screenshot
    And I enter email "<USER>"
    And I wait for 1 seconds to take a screenshot
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds to take a screenshot
    And I click Sign In
    And I wait for 1 seconds to take a screenshot
    # Comment -> Given login
    When I click on Profile button
    And I wait for 1 seconds to take a screenshot
    And I click on Your profile item menu
    And I wait for 1 seconds to take a screenshot

    And I get text value in "Location"
    And I set value from data pool into input "Location"
    And I wait for 1 seconds to take a screenshot

    And I click on Save button
    And I wait for 1 seconds to take a screenshot
    # Comment -> When finished editing user's profile
    # Comment -> Then I check the fields were updated

    Then I expect a "Retry" button
    And I expect error message "Location is too long"

    # Comment -> And I restore theirs initial values
    And I restore initial value into input "Location"
    And I click on Save button
    And I wait for 2 seconds to take a screenshot
