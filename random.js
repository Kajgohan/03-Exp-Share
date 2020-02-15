function main() {
    setActions();

    function setActions() {
        //The start button is on the index page
        var startButton = document.getElementById("startButton");
        startButton.onClick = randomSVG;

        //the goAgain button is on the response page
        var goAgain = document.getElementById("goAgain");
        goAgain.onClick = randomSVG;
    }

}

//Creates the random SVG dots onto the canvas
function randomSVG() {
    //pick which attribute is going to be tested
    //location
    //hue
    //saturation
    var allGreen = "#00FF00";
    var oneGreen = "#000000";
    logGreens(allGreen, oneGreen);


    var canvas = d3.select('svg');

    //random data generator {D3 Method: https://bl.ocks.org/jamesleesaunders/260cf482c8a56d49dfa6}
    var sampleData = d3.range(100).map(function(d) {
        var _d = {};
        var clientHeight = document.getElementById('container').clientHeight;
        var clientWidth = document.getElementById('container').clientWidth;
        console.log(clientHeight);
        _d.id = `Sample Node ${d}`;
        _d.x = Math.random() * clientWidth;
        _d.y = Math.random() * clientHeight;
        _d.color = allGreen;
        return _d
    });

    console.log(sampleData);


        //https://bost.ocks.org/mike/join/
    var points = canvas.selectAll("circle")
        .data(sampleData)
        .enter().append("circle")
        .attr("r", 3)
        .attr("cx", function(d) {
            //console.log(d)
            return d.x;
        })
        .attr("cy", function(d) {
            return d.y;
        })
        .attr('fill', function (d) {
            return d.color;
        });

    canvas.append("circle")
        .attr("cx", Math.random() * document.getElementById('container').clientWidth)
        .attr("cy", Math.random() * document.getElementById('container').clientHeight)
        .attr("r", 30)
        .attr('fill', oneGreen);

}

function getRandomGreen(){
    //choose green;
    return ("#00FF00");

}

function logGreens(allGreen, oneGreen){
    //add the greens to the data collection
}

function logKey(e) {
    console.log(e.key)
    if (e.key == "q") {
        console.log('q was pressed!!!')
        document.getElementById('Outlier').checked = true;
        choice = true
    } else if (e.key == "p") {
        console.log('p was pressed!!')
        document.getElementById('No Outlier').checked = true;
        choice = false
    }
    //!!! INSERT wait a bit to show the user their selection before its submitted
    logData(choice)
}


//function to log data and move on

function logData(choice) {
    console.log(choice);
    document.getElementById("GoAgain").click();
    if (choice == true) {

        //send input to DB here
    } else if (choice == false) {

        //send input to DB here

    }
}