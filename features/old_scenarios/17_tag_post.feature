Feature: Posts

  @user1 @web
  Scenario: Asignar una tag a un post
    Given I navigate to page "<ADMIN_URL>"
    And I wait for 1 seconds to take a screenshot
    When I enter email "<USER>"
    And I wait for 1 seconds to take a screenshot
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds to take a screenshot
    And I click Sign In
    And I wait for 1 seconds to take a screenshot
    And I click on "posts" menu
    And I wait for 1 seconds to take a screenshot
    And I select a Post
    And I wait for 1 seconds to take a screenshot
    And I click on Post settings button
    And I wait for 1 seconds to take a screenshot
    And I click on select Tags
    And I wait for 1 seconds to take a screenshot
    And I select a tag
    And I wait for 1 seconds to take a screenshot
    And I click on Post settings button
    And I wait for 1 seconds to take a screenshot
    And I click on Publish dropdown menu
    And I wait for 1 seconds to take a screenshot
    And I click on Publish button
    And I wait for 1 seconds to take a screenshot
    And I click on "posts" menu
    And I wait for 6 seconds to take a screenshot
    And I click on Profile button
    And I wait for 1 seconds to take a screenshot
    Then I click on Sign out item menu