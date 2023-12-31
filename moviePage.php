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
    echo '
    <div class="wrap">';
    echo '
        <!-- Search Container -->
        <div class="search-container">
            <div class="search-element">
                <h4>Search Movie:</h4>
                <input type="text" class="form-control" placeholder="Search movie title here..." id="movie-search-box"
                    onkeyup="findMovies()">

                <!-- List here -->
                <div class="search-list" id="search-list">
                    <!-- List here -->
                    <!-- <div class="search-list-item"></div> -->

                </div>
            </div>

            <div class="bmpage-btn">
                <a href="moviebookmarkPage.php"><span class="fa fa-star"></span> Bookmarks</a>
            </div>
        </div>

        <br/>
        
        <!-- Result Container -->
        <div class="container">
            <div class="result-container">
                <div class="result-grid" id="result-grid">
                    <!-- Movie information here -->
                </div>
            </div>
        </div>

        <div class="main-content" id="main-content"></div>

        <div class="bookmark-btn hide-bookmark-button" id="bookmark-btn">
            <button><span class="fa fa-star"></span></button>
        </div>
    </div>
    ' ?>

    <!-- movie app js -->
    <script src="jsfiles/movieapi.js"></script>

    <script type="module" src="jsfiles/movieBookmark.js"></script>
    <script type="module" src="jsfiles/auth.js">
        window.addEventListener('DOMContentLoaded', function () {
            checkLoggedIn();
        });
    </script>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            popularMovies();
        });
    </script>
</body>

</html>