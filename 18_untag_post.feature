Feature: Post

  @user1 @web
  Scenario: Eliminar tag de Post
    Given I navigate to page "<ADMIN_URL>"
    And I wait for 1 seconds to take a screenshot
    And I enter email "<USER>"
    And I wait for 1 seconds to take a screenshot
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds to take a screenshot
    And I click Sign In
    When I wait for 1 seconds to take a screenshot
    And I click on "posts" menu
    And I wait for 1 seconds to take a screenshot
    #And I click on tag filter
    #And I wait for 1 seconds to take a screenshot
    And I select a Post
    And I wait for 1 seconds to take a screenshot
    And I click on Post settings button
    And I wait for 1 seconds to take a screenshot

    #And I filter post by All tags
    #And I wait for 1 seconds to take a screenshot
    And I click on tags input
    And I wait for 1 seconds to take a screenshot
    And I deselect a selected tag
    And I wait for 1 seconds to take a screenshot

    And I click on Publish dropdown menu
    And I wait for 1 seconds to take a screenshot
    And I click on Publish button
    And I wait for 1 seconds to take a screenshot
    # BORRAR And I click on confirmation alert Publish button
    #And I wait for 3 seconds to take a screenshot
    And I click on "posts" menu
    And I wait for 6 seconds to take a screenshot
    And I click on Profile button
    And I wait for 1 seconds to take a screenshot
    Then I click on Sign out item menu