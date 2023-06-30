<!DOCTYPE html>
<html>

<head>
    <title> Movie </title>
    <link rel="icon" href="media/movie-icon.png">

    <?php
    include "./navBar.php";
    ?>
</head>

<body>
    <?php
    echo '<div class="wrap">';
    echo '
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
    <script src="movieAPI.js"></script>
    ';
    ?>
</body>

</html>