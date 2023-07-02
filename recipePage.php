<!DOCTYPE html>
<html lang="en">

<head>
    <title> Recipe </title>
    <link rel="icon" href="media/books-icon.png">

    <?php
    include "./navBar.php";
    ?>
</head>

<body>
    <?php
    echo '<div class="wrap">';
    echo '
    <div class="wrap">
        <div class="search-container">
            <form id="search-form">
                <div class="search-element">
                    <h4>Search Recipe:</h4>
                    <input type="text" class="form-control" placeholder="Search dish name here..." id="recipe-search-box" />
                </div>
            </form>
        </div>

        <br />

        <!-- Result Container -->
        <div class="container">
            <div class="result-container" id="result-container">
            </div>
        </div>

        <div class="main-recipe" id="main-recipe"></div>
    </div>
    '; ?>

    <!-- Script -->
    <script src="recipe.js"></script>
</body>

</html>