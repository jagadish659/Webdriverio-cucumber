Feature: validation

  Scenario Outline: Get request

    Given I am a valid endpoint "<endpointUri>"
    When I submit "GET" request to the endpoint
    Then I should get the details successfully

    Examples:
      | endpointUri        |
      | /posts             |
      | /posts/1           |
      | /posts/1/comments  |
      | /comments?postId=1 |
      | /posts?userId=1    |

  Scenario Outline: Delete request

    Given I am a valid endpoint "<endpointUri>"
    When I submit "DELETE" request to the endpoint
    Then I should delete successfully

    Examples:
      | endpointUri |
      | /posts/1    |

  Scenario Outline: POST request

    Given I am a valid endpoint "<endpointUri>"
    When I submit "POST" request to create resource
    Then resource should be created successfully

    Examples:
      | endpointUri |
      | /posts      |
