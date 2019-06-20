<?php ?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tic tac Toe</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
<header>
    <section id="title" class="title">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="text-center my-4">Tic Tac Toe</h1>
                </div>
            </div>
        </div>
    </section>
</header>
<main>
    <section id="game-messages" class="game-messages">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="current-turn text-center mb-5">It is <span id="current-player" class="current-player--blue">Blue</span> player's turn.</div>
                </div>
            </div>
        </div>
    </section>
<section id="game" class="game">
    <div class="container">
        <div class="row justify-content-center align-items-center">
            <div class="col-4 border-right border-bottom border-dark game__cell"></div>
            <div class="col-4 border-right border-bottom border-dark game__cell"></div>
            <div class="col-4 border-bottom border-dark game__cell"></div>
        </div>
        <div class="row justify-content-center align-items-center">
            <div class="col-4 border-right border-bottom border-dark game__cell"></div>
            <div class="col-4 border-right border-bottom border-dark game__cell"></div>
            <div class="col-4 border-bottom border-dark game__cell"></div>
        </div>
        <div class="row justify-content-center align-items-center">
            <div class="col-4 border-right border-dark game__cell"></div>
            <div class="col-4 border-right border-dark game__cell"></div>
            <div class="col-4 game__cell"></div>
        </div>
    </div>
</section>
</main>
<footer></footer>
<script rel="text/javascript" src="js/jquery-3.4.1.js"></script>
<script rel="text/javascript" src="js/bootstrap.bundle.min.js"></script>
<script rel="text/javascript" src="js/main.js"></script>
</body>
</html>
