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
                    <h3>Search News:</h3>
                    <input type="text" class="form-control" placeholder="Search News Keyword here..." id="news-search-box">
                </div>
            </form>
        </div>

        <main></main>
    </div>
    
    <!-- news app js -->
    <script src="newsapi.js"></script>
    ';
    ?>
</body>

</html>