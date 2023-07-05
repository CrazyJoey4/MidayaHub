<!DOCTYPE html>
<html>

<head>
    <title> News </title>
    <link rel="icon" href="media/megaphone-icon.png">

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
            <form id="search-form">
                <div class="search-element">
                    <h4>Search News:</h4>
                    <input type="text" class="form-control" placeholder="Search news keyword here..." id="news-search-box">
                </div>
            </form>
        </div>

        <br/>

        <main></main>
    </div>
    '; ?>

    <!-- news app js -->
    <script src="jsfiles/newsapi.js"></script>
    <script type="module" src="jsfiles/newsBookmark.js"></script>
    <script src="jsfiles/auth.js">
         window.addEventListener('DOMContentLoaded', function () {
            checkLoggedIn();
        });
    </script>
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            loadNews("all");
        });
    </script>
</body>

</html>