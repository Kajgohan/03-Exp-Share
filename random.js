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
    var canvas = d3.select('svg')
        //random data generator {D3 Method: https://bl.ocks.org/jamesleesaunders/260cf482c8a56d49dfa6}
    var data = d3.range(1000).map(function() {
        max = 450
        min = 0
        return {
            'x': Math.random() * (max - min) + min,
            'y': Math.random() * (max - min) + min
        }
    });

    console.log(data)
        //https://bost.ocks.org/mike/join/
    var points = canvas.selectAll("circle")
        .data(data)
        .enter().append("circle")
        .attr("r", 3)
        .attr("cx", function(d) {
            console.log(d)
            return d.x;
        })
        .attr('color', 'red')
        // .attr('cx', (d) => {
        //     return d.x
        // })
        .attr("cy", function(d) {
            return d.y;
        });

}