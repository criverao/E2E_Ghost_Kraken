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

    And I get text value in Slug
    And I set value "cesariverit" into input Slug
    And I wait for 1 seconds to take a screenshot

    And I get text value in Email
    And I set value "cesariverit@gmail.com" into input Email
    And I wait for 1 seconds to take a screenshot

    And I get text value in Location
    And I set value "Bogotá" into input Location
    And I wait for 1 seconds to take a screenshot

    And I click on Save button
    And I wait for 1 seconds to take a screenshot
    # Comment -> When finished editing user's profile
    # Comment -> Then I check the fields were updated
    Then I check text "Cesar Alexander Rivera" in Full name
    And I check text "cesariverit" in Slug
    And I check text "cesariverit@gmail.com" in Email
    And I check text "Bogotá" in Location
    # Comment -> And I restore theirs initial values
    And I restore default value into input Full name
    And I restore default value into input Slug
    And I restore default value into input Email
    And I restore default value into input Location
    And I click on Save button