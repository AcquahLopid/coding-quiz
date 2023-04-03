function printScore(){
    // getting highscores from the local storage or making an array
    var highScore = JSON.parse(window.localStorage.getItem("highscore")) || [];

    //  sorts highscores by descending order
    highScore.sort(function(a, b) {
        return b.score - a.score;
    }
}