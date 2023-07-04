<!DOCTYPE html>
<html>

<head>
    <title> Movie Bookmark </title>
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
        <!-- List of bookmarked movies will be displayed here -->
        <div class="bookmark container">
            <div class="bookmark-list" id="bookmark-list"></div>
        </div>

        <!-- Movies Details will be displayed here -->
        <button id="back-button" class="back-button hide-back-button"><span class="fa fa-arrow-left"></span> Back</button>
        <div class="movie-details hide-movie-details" id="movie-details"></div>
    </div>
    ' ?>

    <script type="module" src="jsfiles/movieBookmark.js"></script>

    <script type="module" src="jsfiles/auth.js">
        window.addEventListener('DOMContentLoaded', function () {
            checkLoggedIn();
        });
    </script>
</body>

</html>