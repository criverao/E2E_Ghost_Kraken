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
    And I get text value in Full name
    And I set value "Cesar Alexander Rivera" into input Full name
    And I wait for 1 seconds to take a screenshot
    And I click on Staff Save button
    And I wait for 1 seconds to take a screenshot
    # Comment -> When finished editing user's profile
    # Comment -> Then I check the fields were updated
    Then I check text "Cesar Alexander Rivera" in Full name
    # Comment -> And I restore theirs initial values
    And I restore default value into input Full name
    And I click on Save button