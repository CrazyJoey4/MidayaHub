<!DOCTYPE html>
<html>
<head>
    <title>Music</title>
    <style>
         body {
            background-image: url('background.jpg');
            background-size: cover;
            font-family: Arial, sans-serif;
        }
        .track {
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid #ccc;
        }
    </style>
</head>
<body>
    <h1>Music Search</h1>

    <form method="GET" action="">
        <input type="text" name="query" placeholder="Enter a song or artist">
        <input type="submit" value="Search">
    </form>

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
        if (!empty($tracks)) {
            echo '<h2>Search Results:</h2>';
            foreach ($tracks as $track) {
                $trackName = $track['name'];
                $artistName = $track['artists'][0]['name'];
                $previewUrl = $track['preview_url'];

                echo '<div class="track">';
                echo '<strong>Track:</strong> ' . $trackName . '<br>';
                echo '<strong>Artist:</strong> ' . $artistName . '<br>';
                if ($previewUrl) {
                    echo '<audio controls><source src="' . $previewUrl . '" type="audio/mpeg"></audio>';
                } else {
                    echo 'No preview available.';
                }
                echo '</div>';
            }
        } else {
            echo '<p>No tracks found.</p>';
        }
    }
    ?>
</body>
</html>
