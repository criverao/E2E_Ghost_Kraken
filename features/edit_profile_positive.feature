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
    And I set value "$name_1" into input "Full name"
    And I wait for 1 seconds to take a screenshot

    And I get text value in "Slug"
    And I set value "$number_1" into input "Slug"
    And I wait for 1 seconds to take a screenshot

    And I get text value in "Email"
    And I set value "$email_1" into input "Email"
    And I wait for 1 seconds to take a screenshot

    And I get text value in "Location"
    And I set value "$name_2" into input "Location"
    And I wait for 1 seconds to take a screenshot

    And I click on Save button
    And I wait for 1 seconds to take a screenshot
    # Comment -> When finished editing user's profile
    # Comment -> Then I check the fields were updated
    Then I expect a "Saved" button
    And I refresh the current page
    And I wait for 3 seconds to take a screenshot
    And I check text "$$name_1" in "Full name"
    And I check text "$$number_1" in "Slug"
    And I check text "$$email_1" in "Email"
    And I check text "$$name_2" in "Location"
    # Comment -> And I restore theirs initial values
    And I restore initial value into input "Full name"
    And I restore initial value into input "Slug"
    And I restore initial value into input "Email"
    And I restore initial value into input "Location"
    And I click on Save button
    And I wait for 2 seconds to take a screenshot
