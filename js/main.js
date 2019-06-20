(function ($) {
    $(document).ready(function () {
        // this js will be ready on document load
        $('.game__cell').click(function (e) {
            const $this = $(this);
            if (!$this.hasClass('game__cell--chosen')) {
                handleInteraction($this);
            }
        });

    });

    function handleInteraction($cell) {
        const deferred = $.Deferred(),
            $currentPlayer = $('#current-player');

        deferred
            .then(addMarker($currentPlayer, $cell))
            .then(checkForWin($currentPlayer, $cell))
            .then(switchPlayer($currentPlayer));
    }

    function addMarker($currentPlayer, $cell) {
        console.log('Adding Marker');

        $cell.addClass('game__cell--chosen');
        if ($currentPlayer.hasClass('current-player--blue')) {
            $cell.addClass('game__cell--blue');
        }
        if ($currentPlayer.hasClass('current-player--red')) {
            $cell.addClass('game__cell--red');
        }
    }

    function checkForWin($currentPlayer, $cell) {
        console.log('Checking For Win');

        // get position of current $cell
        // check all positions adjacent and diagonal to current $cell
        // foreach position
        //     if adjacent cell is owned by current player
        //         cellCount++
        //         if cellCount == winCondition
        //             current player wins game
        //             end game()
        //         else
        //             check adjacent cell in the same direction
        //             run same check we did the first time
        //         endif
        //     else
        //         there is no winner yet
        //         continue to check next position
        //     endif
        // endforeach
    }

    function switchPlayer($currentPlayer) {
        console.log('Switching Player');

        if ($currentPlayer.hasClass('current-player--blue')) {
            $currentPlayer.removeClass('current-player--blue');
            $currentPlayer.addClass('current-player--red');
            $currentPlayer.text('Red');
        } else {
            $currentPlayer.removeClass('current-player--red');
            $currentPlayer.addClass('current-player--blue');
            $currentPlayer.text('Blue');
        }
    }

})(jQuery);