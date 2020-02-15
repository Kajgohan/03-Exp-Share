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
        .attr('fill', function(d) {
            return d.color;
        });

    canvas.append("circle")
        .attr("cx", Math.random() * document.getElementById('container').clientWidth)
        .attr("cy", Math.random() * document.getElementById('container').clientHeight)
        .attr("r", 30)
        .attr('fill', oneGreen);

}

function getRandomGreen() {
    //choose green;
    return ("#00FF00");

}

function logGreens(allGreen, oneGreen) {
    //add the greens to the data collection
}

function logKey(e) {
    console.log(e.key)
    if (e.key == "q") {
        console.log('q was pressed!!!')
        document.getElementById('Outlier').checked = true;
        choice = true
        logData(choice)
        logData(choice, 11, 22, 'dotlocation')
    } else if (e.key == "p") {
        console.log('p was pressed!!')
        document.getElementById('No Outlier').checked = true;
        choice = false
        logData(choice, 11, 22, 'dotlocation')
    }
    //!!! INSERT wait a bit to show the user their selection before its submitted

}

function goAgain(e) {

}

// Initialize Cloud Firestore through Firebase

// very sketchy to have keys in the open like this, 
//but apparently all the security is done in rules on the firebase console. 

firebase.initializeApp({
    apiKey: "AIzaSyDzvcbGX0Nsre6GGzkZV6Zij4_pqlCafQk",
    authDomain: "cs480xproject.firebaseapp.com",
    projectId: "cs480xproject"
});

var db = firebase.firestore();
const docRef = db.doc("testing/testData");
//function to log data and move on

function logData(choice, backgroundColor, popoutColor, dotLocation) {
    console.log(choice);
    var now = new Date();
    // document.getElementById("GoAgain").click();
    db.collection('testing2').add({
        user: 1,
        selection: choice,
        backgroundColor: backgroundColor,
        popoutColor: popoutColor,
        time: now,
        dotLocation: 'array'
    }).then(function() {
        console.log('Successfully saved!')
    }).catch(function(error) {
        console.log("received the following error when posting:", error)
    });
}

//https://www.youtube.com/watch?v=2Vf1D-rUMwE

function databaseTest() {
    db.collection('testing').add({
        user: 1,
        selection: "True",
        testNumber: 1,
        actualValue: 33
    }).then(function() {
        console.log('Successfully saved!')
    }).catch(function(error) {
        console.log("received the following error when posting:", error)
    });

    db.doc('testing/testData').get().then(function(doc) {
        if (doc && doc.exists) {
            const myData = doc.data();
            console.log(myData)
        } else {
            console.log('requested does not exist:', doc)
        }
    }).catch(function(error) {
        console.log("received the following error when getting:", error)
    });

    //https://www.youtube.com/watch?v=kmTECF0JZyQ
    //prints all the data to the console
    db.collection('testing').get().then((snapshot) => {
        console.log(snapshot.docs)
        snapshot.docs.forEach(doc => {
            console.log(doc.data())
        })
    })
}