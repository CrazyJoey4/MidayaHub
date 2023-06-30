<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.css" integrity="sha512-Z0kTB03S7BU+JFU0nw9mjSBcRnZm2Bvm0tzOX9/OuOuz01XQfOpa0w/N9u6Jf2f1OAdegdIPWZ9nIZZ+keEvBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="web.css">
    <link rel="">

    <title> News </title>
    <link rel="icon" href="media/megaphone-icon.png">

</head>

<body>
    <?php
    echo '
        <!-- For Logo -->
        <div class="logo">
            <div class="container">
                <p>- Midaya<span>Hub -</span></p>
            </div>
        </div>

        <!-- For Navigation Bar -->
        <div class="topnav">
            <ul>
                <li><a href="moviePage.php"><span class="fa fa-television"></span> Movie </a></li>
                <li><a href="newsPage.php"><span class="fa fa-newspaper"></span> News </a></li>
                <li><a href="bookPage.php"><span class="fa fa-book"></span> Book </a></li>
                <li><a href="musicPage.php"><span class="fa fa-music"></span> Music </a></li>

                <li style="float:right"><a href="profile.php" class="profile"><span class="fa fa-user"></span></a></li>
            </ul>
        </div>
    ';
    ?>
</body>

</html>