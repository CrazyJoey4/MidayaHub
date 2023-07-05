<!DOCTYPE html>
<html>
<head>
    <title>Music</title>
    <style>
        body {
            background-image: url('musicbackground.jpg');
            background-size: cover;
            font-family: Arial, sans-serif;
        }

        h1 {
            color: #fff;
            text-align: center;
        }

        .search-form {
            text-align: center;
            margin: 20px auto;
        }

        .search-form input[type="text"] {
            padding: 10px;
            font-size: 16px;
        }

        .search-form input[type="submit"] {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #4CAF50;
            color: #fff;
            border: none;
            cursor: pointer;
        }

        .search-results {
            margin: 20px auto;
            max-width: 500px;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
        }

        .track {
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid #ccc;
        }

        .track img {
            width: 100px;
            height: 100px;
            float: left;
            margin-right: 10px;
        }

        .track-info {
            overflow: hidden;
            margin-left: 110px;
        }

        .track-info h3 {
            margin-top: 0;
            margin-bottom: 5px;
        }

        .track-info p {
            margin: 0;
        }
    </style>
</head>
<body>
    <h1>Music Search</h1>

    <div class="search-form">
        <form method="GET" action="">
            <input type="text" name="query" placeholder="Enter a song or artist">
            <input type="submit" value="Search">
        </form>
    </div>

    <?php
    if (isset($_GET['query'])) {
        $query = urlencode($_GET['query']);
        $clientId = 'YOUR_CLIENT_ID';
        $clientSecret = 'YOUR_CLIENT_SECRET';

        // Authenticate and obtain access token
        $authorization = base64_encode($clientId . ':' . $clientSecret);
        $tokenEndpoint = 'https://accounts.spotify.com/api/token';
        $tokenOptions = [
            'http' => [
                'method' => 'POST',
                'header' => 'Authorization: Basic ' . $authorization . "\r\n" .
                            'Content-Type: application/x-www-form-urlencoded' . "\r\n",
                'content' => 'grant_type=client_credentials'
            ]
        ];

        $tokenContext = stream_context_create($tokenOptions);
        $tokenResult = file_get_contents($tokenEndpoint, false, $tokenContext);
        $accessToken = json_decode($tokenResult, true)['access_token'];

        // Search for tracks
        $searchEndpoint = 'https://api.spotify.com/v1/search?q=' . $query . '&type=track';
        $searchOptions = [
            'http' => [
                'method' => 'GET',
                'header' => 'Authorization: Bearer ' . $accessToken
            ]
        ];

        $searchContext = stream_context_create($searchOptions);
        $searchResult = file_get_contents($searchEndpoint, false, $searchContext);
        $tracks = json_decode($searchResult, true)['tracks']['items'];

        // Display search results
        if (!empty($tracks
