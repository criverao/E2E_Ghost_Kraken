Feature: Posts

  @user1 @web
  Scenario: Asignar una tag a un post
    Given I navigate to administration page
    When I enter email "c.riverao@uniandes.edu.co"
    And I enter password "gSZ59nGHKkXQ^ZKQM!H@6yZB"
    And I click Sign In
    And I wait for 1 seconds
    And I click on "posts" menu
    And I wait for 1 seconds
    And I select a Post
    And I wait for 1 seconds
    And I click on Post settings button
    And I wait for 1 seconds
    And I click on select Tags
    And I wait for 1 seconds
    And I select a tag
    And I wait for 1 seconds
    And I click on Publish dropdown menu
    And I wait for 1 seconds
    And I click on Publish button
    And I wait for 1 seconds
    And I click on confirmation alert Publish button
    And I wait for 3 seconds
    And I click on "posts" menu
    And I wait for 3 seconds
    And I click on Profile button
    And I wait for 1 seconds
    Then I click on Sign out item menu



