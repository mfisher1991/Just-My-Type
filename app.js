$("document").ready {
    function()

    let upperKeys = $("#keyboard-upper-container");
    let lowerKeys = $("#keyboard-lower-container");

    let sentences = [
        'ten ate neite ate nee enet ite ate inet ent eate',
        'Too ato too nOt enot one totA not anot tOO aNot',
        'oat itain oat tain nate eate tea anne inant nean',
        'itant eate anot eat nato inate eat anot tain eat',
        'nee ene ate ite tent tiet ent ine ene ete ene ate'
    ];

    let sentenceIndex = 0;
    let letterIndex = 0;
    let numberOfMistakes = 0;
    let thisSentence = sentences[sentenceIndex];
    let thisLetter = thisSentence[letterIndex];

    $("#sentences").append(thisSentence);
    $("#target-letter").append(thisLetter);

    upperKeys.hide();

    $(document).on("keydown - keyup", function(e) {
        if (e.keyCode == 16); {
            lowerKeys.toggle();
            upperKeys.toggle();
        }
    });

    $(document).on("keypress", function(e)) {


        Let whichKey = e.key;
        if (whichKey == thisSentence[letterIndex]) {
            $("#feedback").append("!");
            $("#yellow-block").css({ left: "-=17.9px" }, "fast");
        } else {
            $("#feedback").append("X");

            numberOfMistakes++
            letterIndex--;
        }

        letterIndex++;
        thisLetter = thisSentence[letterIndex];

    }
}