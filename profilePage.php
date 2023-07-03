<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>

    <title> Profile </title>

    <link rel="icon" href="media/profile-icon.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.css" integrity="sha512-Z0kTB03S7BU+JFU0nw9mjSBcRnZm2Bvm0tzOX9/OuOuz01XQfOpa0w/N9u6Jf2f1OAdegdIPWZ9nIZZ+keEvBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="cssfiles/profile.css">

    <?php
    include "./navBar.php";
    ?>
</head>

<body>
    <div class="logout">
        <input type="submit" name="Sign" id="signOut" value="Sign Out" class="signout">
    </div>
    <div class="profile-block">
        <form class="profile-form" id="profile-form" onsubmit="update(event)">
            <div class="container">
                <h2 style="text-transform: uppercase;">Profile</h2>
            </div>

            <div class="profile-wrap">
                <div class="InputText">
                    <label>User ID:</label>
                    <span id="userId"></span>
                </div>

                <div class="InputText">
                    <label>Username</label><br />
                    <input type="text" name="username" id="username">
                </div>

                <div class="InputText">
                    <label>Email</label><br />
                    <input type="text" name="email" id="email" disabled>
                </div>

                <div class="update-btn">
                    <input type="submit" name="Update" id="Update" value="Update Profile" class="update" onclick="update(event)">
                </div>
            </div>
        </form>
    </div>
</body>

<script type="module" src="jsfiles/profile.js"></script>
<script type="module" src="jsfiles/auth.js"></script>

<script>
    window.addEventListener('DOMContentLoaded', function() {
        displayProfile();
    });
</script>
<script>
    document.getElementById('profile-form').addEventListener('submit', function (event) {
        event.preventDefault();
        var username = document.getElementById('username');
        var formData = new FormData(username);
        update(formData);
    });
</script>

</html>