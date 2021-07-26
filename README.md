# BEST Summer Project - HBCU Tech Journeys

## API Enpoints 
Base URL - `https://techjourneys.terrencecrossdale.com`

<h4>Enpoints URLs</h4>

Users List - `/wp-json/wp/v2/users`

Stories List - `/wp-json/wp/v2/story`

Communities List - `/wp-json/wp/v2/community`

<pre>
  <code>
  var baseUrl = "https://techjourneys.terrencecrossdale.com";
  var usersEP = "/wp-json/wp/v2/user";
  var storiesEP = "/wp-json/wp/v2/story";
  var commEP = "/wp-json/wp/v2/community";


  $.ajax({
    url: baseUrl + usersEP,
    success: function(data){

    }
  });
  </code>
</pre>