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

    And I get text value in "Full name"
    And I clear value from input "Full name"
    And I click on input "Full name"
    And I enter the text " "
    And I wait for 1 seconds to take a screenshot

    And I click on Save button
    And I wait for 1 seconds to take a screenshot
    # Comment -> When finished editing user's profile
    # Comment -> Then I check the fields were updated

    Then I expect a "Retry" button
    And I expect error message "Please enter a name."

    # Comment -> And I restore theirs initial values
    And I restore initial value into input "Full name"
    And I click on Save button
    And I wait for 2 seconds to take a screenshot
