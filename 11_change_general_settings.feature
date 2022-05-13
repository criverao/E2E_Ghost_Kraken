Feature: General Settings

  @user1 @web
  Scenario: Edit general configurations for publication info
    Given I navigate to page "<RUTA>"
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
    And I click on Expand button from Title & Description
    And I wait for 1 seconds to take a screenshot
    And I get text value in Title
    And I set value "The Software Design Company (edited)" into input Title
    And I wait for 1 seconds to take a screenshot
    And I get text value in Description
    And I set value "Thoughts, stories and ideas. (edited)" into input Description
    And I wait for 1 seconds to take a screenshot
    And I click on Expand button from Site timezone
    And I wait for 1 seconds to take a screenshot
    And I click on select Timezone
    And I select the Timezone option "America/Mexico_City"
    And I wait for 1 seconds to take a screenshot
    And I click on Expand button from Publication Language
    And I wait for 1 seconds to take a screenshot
    And I get text value in Publication Language
    And I set value "es" into input Publication Language
    And I wait for 1 seconds to take a screenshot
    And I click on Save button
    And I wait for 1 seconds to take a screenshot
    # Comment -> When finished editing general configurations for publication info
    Then I check text "The Software Design Company (edited)" in Title
    And I check text "Thoughts, stories and ideas. (edited)" in Description
    And I check text "es" in Publication Language
    # Comment -> Then I check the fields were updated, and I restore theirs initial values
    And I restore default value into input Title
    And I restore default value into input Description
    And I select the Timezone option "America/Bogota"
    And I restore default value into input Publication Language
    And I click on Save button