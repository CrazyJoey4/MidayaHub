<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.css"
        integrity="sha512-Z0kTB03S7BU+JFU0nw9mjSBcRnZm2Bvm0tzOX9/OuOuz01XQfOpa0w/N9u6Jf2f1OAdegdIPWZ9nIZZ+keEvBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="web.css">

    <title> Movie </title>
    <link rel = "icon" href = "media/movie-icon.png">

</head>

<body>
    <?php
    echo '<div class="wrap">';

    include "./navBar.php";
    
    echo'
        <!-- Search Container -->
        <div class="search-container">
            <div class="search-element">
                <h3>Search Movie:</h3>
                <input type="text" class="form-control" placeholder="Search Movie Title here..." id="movie-search-box"
                    onkeyup="findMovies()">

                <!-- List here -->
                <div class="search-list" id="search-list">
                    <!-- List here -->
                    <!-- <div class="search-list-item"></div> -->

                </div>
            </div>
        </div>

        <!-- Resut Container -->
        <div class="container">
            <div class="result-container">
                <div class="result-grid" id="result-grid">
                    <!-- Movie information here -->
                    <!-- <div class="movie-poster"></div> -->
                </div>
            </div>
        </div>
    </div>
    
    <!-- movie app js -->
    <script src="movieAPI.js">

    </script>
    ';
    ?>
</body>

</html>