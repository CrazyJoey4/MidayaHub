<!DOCTYPE html>
<html>

<head>
<meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>

    <title> Sign In </title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.css"
        integrity="sha512-Z0kTB03S7BU+JFU0nw9mjSBcRnZm2Bvm0tzOX9/OuOuz01XQfOpa0w/N9u6Jf2f1OAdegdIPWZ9nIZZ+keEvBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="icon" href="media/login-icon.png">
    <link rel="stylesheet" href="sign.css">
</head>

<body>
    <?php
    echo '
    <div class="login-block">
        <form method="post" action="signinCheck.php" class="login-form">
            <div class="container">
                <h1>- Midaya<span>Hub -</span></h1>
                <h2 style="text-transform: uppercase;">Sign In</h2>
            </div>

            <br/>

            <div class="wrap">
                <form>
                    <div class="InputText">
                        <input type="text" name = "User_ID" id = "User_ID" required>
                        <label>ID</label>
                    </div>
                        
                    <br><br><br>
                        
                    <div class="InputText">
                        <input type="password" name="User_pwd" id="User_pwd" required>
                        <label>Password</label>
                    </div>
                    
                    <br><br><br>
                    
                    <div class="login-btn">
                        <input type="submit" name="Sign" id="Sign" value="Sign In" class="login">
                    </div>				
                </form>
            </div>	
        </form>
    </div>
    
    <!-- news app js -->
    <script src="newsapi.js"></script>
    ';
    ?>
</body>

</html>