<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Books</title>
        <link rel="icon" href="media/books-icon.png">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/
        css/materialize.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Righteous" rel="stylesheet">
        <?php
            include "./navbar.php";
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
                            <h3>Search Books:</h3>
                            <input type="text" class="form-control" placeholder="Search Book Title here..." id="books-search-box">
                        </div>
                    </form>
                </div>

                <main></main>
            </div>
            
            <!-- Book app js -->
            <script src="bookapi.js"></script>
            ';
        ?>
    </body>
</html>