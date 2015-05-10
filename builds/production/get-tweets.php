<?php session_start();
    require_once("/twitteroauth/twitteroauth/twitteroauth.php"); //Path to twitteroauth library

    $twitteruser = "ellen_dykes";
    $notweets = 3;
    $consumerkey = "4voc66ELl4yJj3G20EmzsI20W";
    $consumersecret = "eCQRBRn1q5t3aoni9csDl15yV786j2ORvAOuJdYpIpefEoMfA9";
    $accesstoken = "17862683-GFcVsV41xp95aG9sb6wHiahNCjAYTVRq6Bx5XY6Wb";
    $accesstokensecret = "rzE2Ym6CcgY3wttPDZnTENLCjGcv5nS5rtBQh4QkAsePA";

    function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
      $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
      return $connection;
      }

    $connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);

    $tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets);

    echo json_encode($tweets);
?>





