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
        // get list of checks
        // loop over checks
        //     switch check
        //         case row
        //             loop over row
        //             break
        //         case column
        //             loop over column
        //             break
        //         case backdiag
        //             loop over back slash diagonal
        //             break
        //         case fordiag
        //             loop over forward slash diagonal
        //             break
        //         default
        //         do default stuff
        //     hctiws
        // pool
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