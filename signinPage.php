<!DOCTYPE html>
<html>

<head>
    <title> Sign In </title>
    <link rel="icon" href="media/login-icon.png">
    <link rel="stylesheet" href="sign.css">
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
    
    <!-- news app js -->
    <script src="newsapi.js"></script>
    ';
    ?>
</body>

</html>