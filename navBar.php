<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.css" integrity="sha512-Z0kTB03S7BU+JFU0nw9mjSBcRnZm2Bvm0tzOX9/OuOuz01XQfOpa0w/N9u6Jf2f1OAdegdIPWZ9nIZZ+keEvBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="./cssfiles/web.css">
</head>

<body>
    <nav>
        <!-- For Logo -->
        <div class="topwrap">
            <div class="logo">
                <div class="container">
                    <ul>
                        <li><a href="moviePage.php">- Midaya<span>Hub -</span></a></li>
                        <li style="float:right"><a href="profilePage.php"><span class="fa fa-user"></span></a></li>
                    </ul>
                </div>
            </div>

            <!-- For Navigation Bar -->
            <div class="topnav">
                <ul>
                    <li><a href="moviePage.php" <?php if (basename($_SERVER['PHP_SELF']) == 'moviePage.php')
                                                    echo 'class="active"'; ?>><span class="fa fa-television"></span> Movie</a></li>
                    <li><a href="newsPage.php" <?php if (basename($_SERVER['PHP_SELF']) == 'newsPage.php')
                                                    echo 'class="active"'; ?>><span class="fa fa-newspaper"></span> News </a></li>
                    <li><a href="recipePage.php" <?php if (basename($_SERVER['PHP_SELF']) == 'recipePage.php')
                                                        echo 'class="active"'; ?>><span class="fa fa-book"></span> Recipe </a></li>
                    <li><a href="musicPage.php" <?php if (basename($_SERVER['PHP_SELF']) == 'musicPage.php')
                                                    echo 'class="active"'; ?>><span class="fa fa-music"></span> Music </a></li>
                </ul>
            </div>
        </div>
    </nav>
</body>

</html>