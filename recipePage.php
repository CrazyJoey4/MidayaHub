<!DOCTYPE html>
<html lang="en">
    
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Recipe App</title>
        <!-- Google Fonts -->
        <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        rel="stylesheet"
        />
        <!-- Stylesheet -->
        <link rel="stylesheet" href="recipe.css" />
        <link rel="stylesheet" href="web.css" />
        <?php
            include "./navBar.php";
        ?>
    </head>

    <body>
        <div class="wrap">
            <div class="search-container">
                <form id="search-form">
                    <div class="search-element">
                        <h4>Search Recipe:</h4>
                        <input type="text" class="form-control" placeholder="Type A Dish Name Here.." id="user-inp"/>
                    </div>
                </form>
            </div>

            <br/>
     
            <!-- Result Container -->
            <div class="container">
                <div class="result-container">
                    <div id="result">
                        
                    </div>
                </div>
            </div> 
        </div>

        <!-- Script -->
        <script src="recipe.js"></script>
    </body>
</html>