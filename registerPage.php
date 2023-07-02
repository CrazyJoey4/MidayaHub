<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>

    <title>Sign Up</title>

    <link rel="icon" href="media/signup-icon.png">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.css" integrity="sha512-Z0kTB03S7BU+JFU0nw9mjSBcRnZm2Bvm0tzOX9/OuOuz01XQfOpa0w/N9u6Jf2f1OAdegdIPWZ9nIZZ+keEvBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="./sign.css">
</head>

<body>
    <div class="signup-block">
        <form method="post" action="register.php" class="signup-form">
            <div class="container">
                <h1>- Midaya<span>Hub -</span></h1>
                <h2 style="text-transform: uppercase;">Sign Up</h2>
            </div>

            <br />

            <div class="wrap">
                <div class="InputText">
                    <input type="text" name="fullname" id="fullname" required>
                    <label>Full Name</label>
                </div>
                <div class="InputText">
                    <input type="text" name="email" id="email" required>
                    <label>Email</label>
                </div>
                <div class="InputText">
                    <input type="text" name="username" id="username" required>
                    <label>Username</label>
                </div>
                <div class="InputText">
                    <input type="password" name="password" id="password" required>
                    <label>Password</label>
                </div>
                <div class="InputText">
                    <input type="confirmpass" name="confirmpass" id="confirmpass" required>
                    <label> Confirm Password</label>
                </div>

                <div class="signup-btn">
                    <input type="submit" name="Sign" id="Sign" value="Sign Up" class="signup" onclick="register()">
                </div>
            </div>
        </form>
    </div>

    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-database.js"></script>

    <script src="register.js"></script>
</body>

</html>