<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <title>Sign Up</title>
    <link rel="stylesheet" href="sign.css">
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
                    <input type="text" name="username" id="username" required>
                    <label>Username</label>
                </div>
                <div class="InputText">
                    <input type="password" name="password" id="password" required>
                    <label>Password</label>
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