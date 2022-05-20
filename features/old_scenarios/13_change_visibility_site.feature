Feature: General Settings

  @user1 @web
  Scenario: Change website visibility
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
    And I click on Make this site private
    And I wait for 1 seconds to take a screenshot
    And I check a site password was generated
    And I click on Save button
    And I wait for 2 seconds to take a screenshot
    And I click on Profile button
    And I wait for 2 seconds to take a screenshot
    And I click on Sign out item menu
    And I wait for 2 seconds to take a screenshot
    # Comment -> When finished changing site visibility
    # Comment -> Then I check the site is private
    Then I navigate to page "<PUBLIC_URL>"
    And I wait for 1 seconds to take a screenshot
    And I check the site is private
    # Comment -> And I restore site to its initial status
    And I navigate to page "<ADMIN_URL>"
    And I wait for 1 seconds to take a screenshot
    And I enter email "<USER>"
    And I wait for 1 seconds to take a screenshot
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds to take a screenshot
    And I click Sign In
    And I wait for 1 seconds to take a screenshot
    And I click on Settings button
    And I wait for 1 seconds to take a screenshot
    And I click on General Setting button
    And I wait for 1 seconds to take a screenshot
    And I click on Make this site private
    And I wait for 1 seconds to take a screenshot
    Then I click on Save button
    And I wait for 2 seconds to take a screenshot