function main(){
    setActions();







    function setActions(){
        //The start button is on the index page
        var startButton = document.getElementById("startButton");
        startButton.onClick = randomSVG;

        //the goAgain button is on the response page
        var goAgain = document.getElementById("goAgain");
        goAgain.onClick = randomSVG;
    }


    //Creates the random SVG dots onto the canvas
    function randomSVG(){
        //pick which attribute is going to be tested
            //location
            //hue
            //saturation

    }



}