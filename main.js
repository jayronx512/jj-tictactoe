var count = 0

$(".box").on('click', (function() {
    if (count == 8) {
        alert('draw')
    } else if (count % 2 != 0) {
        $(this).text('o')
    } else {
        $(this).text('x')
    }
    count++;
    winCondition(count)
}))

function winCondition(count) {
    var game = [];
    $(".box").each(function() {
        game.push($(this).html())
    })
    var win = [[0,1,2],[0,4,8],[2,4,6],[3,4,5],[6,7,8]]
    win.forEach(element => {
        if (game[element[0]] == game[element[1]] && game[element[1]] == game[element[2]] && game[element[0]] == "x") {
            alert("player x won")
        } else if (game[element[0]] == game[element[1]] && game[element[1]] == game[element[2]] && game[element[0]] == "o") {
            alert("player o won")
        }
        }
    )

    return game
}