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

function setUID() {
    localStorage.setItem("uID", (Math.random() * 1000000));
}


//Creates the random SVG dots onto the canvas
function randomSVG() {
    //pick which attribute is going to be tested
    //location
    //hue
    //saturation
    var allGreen = getRandomGreen();
    var oneGreen = getRandomGreen();
    var cx = Math.random() * document.getElementById('container').clientWidth;
    var cy = Math.random() * document.getElementById('container').clientHeight;
    var isOutlier = getRandomBool();
    localStorage.setItem("isOutlier", isOutlier);
    localStorage.setItem("backgroundGreen", allGreen);
    localStorage.setItem("popoutGreen", oneGreen);
    localStorage.setItem("randomX", cx);
    localStorage.setItem("randomY", cy);
    var oneTestData = { "isOutlier": isOutlier, "backgroundGreen": allGreen, "popoutGreen": oneGreen, "randomX": cx, "randomY": cy }

    console.log(isOutlier);
    console.log(allGreen);
    console.log(oneGreen);
    console.log(cx);
    console.log(cy);
    // console.log(userID);


    var canvas = d3.select('svg');

    //random data generator {D3 Method: https://bl.ocks.org/jamesleesaunders/260cf482c8a56d49dfa6}
    var sampleData = d3.range(100).map(function(d) {
        var _d = {};
        var clientHeight = document.getElementById('container').clientHeight;
        var clientWidth = document.getElementById('container').clientWidth;
        _d.id = `Sample Node ${d}`;
        _d.x = Math.random() * clientWidth;
        _d.y = Math.random() * clientHeight;
        _d.color = allGreen;
        return _d
    });



    //https://bost.ocks.org/mike/join/
    var points = canvas.selectAll("circle")
        .data(sampleData)
        .enter().append("circle")
        .attr("r", 10)
        .attr("cx", function(d) {
            //console.log(d)
            return d.x;
        })
        .attr("cy", function(d) {
            return d.y;
        })
        .attr('fill', function(d) {
            return d3.hsl(d.color, 1, .5);
        });

    canvas.append("circle")
        .attr("cx", cx)
        .attr("cy", cy)
        .attr("r", 10)
        .attr('fill', d3.hsl(oneGreen, 1, .5));

}

function getRandomGreen() {
    //choose green;
    return (Math.round((Math.random() * 59) + 121));

}

function formatData(name, data) {
    //add the greens to the data collection

}

function logKey(e) {
    console.log(e.key)
    let localcheck = localStorage.getItem("isOutlier")
    console.log("local storage: is outlier", localcheck)
    if (e.key == "q") {
        console.log('q was pressed!!!')
        document.getElementById('Outlier').checked = true;
        choice = document.getElementById('Outlier').checked;
        choiceHandler(true);
    } else if (e.key == "p") {
        console.log('p was pressed!!')
        document.getElementById('No Outlier').checked = true;
        choice = document.getElementById('No Outlier').checked;
        choiceHandler(false);
    }
    //!!! INSERT wait a bit to show the user their selection before its submitted

}

function choiceHandler(choice) {
    logData(choice, function() {
        window.location = 'svgScatter.html';
    });

}
// Initialize Cloud Firestore through Firebase

// very sketchy to have keys in the open like this, 
//but apparently all the security is done in rules on the firebase console. 
var firebaseConfig = {
    apiKey: "AIzaSyBDnEaLL7b6HWQFCZWczrnogpAkp9azrWg",
    authDomain: "x2-926f2.firebaseapp.com",
    databaseURL: "https://x2-926f2.firebaseio.com",
    projectId: "x2-926f2",
    storageBucket: "x2-926f2.appspot.com",
    messagingSenderId: "256517265277",
    appId: "1:256517265277:web:6d36c8233db2bbdf629e14",
    measurementId: "G-ENBNPM79CY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
//remember to change this to the current DB
const docRef = db.doc("testing/testData");
//function to log data and move on
const collRef = db.collection('LIVE_DB');

function logData(choice, callback) {
    var now = new Date();
    // document.getElementById("GoAgain").click();
    collRef.add({
        user: localStorage.getItem("userID"),
        time: now,
        selection: choice,
        isOutlier: localStorage.getItem('isOutlier'),
        backgroundColor: localStorage.getItem("backgroundGreen"),
        popoutColor: localStorage.getItem("popoutGreen"),
        randX: localStorage.getItem("randomX"),
        randY: localStorage.getItem("randomY"),
    }).then(function() {
        console.log('Successfully saved!')
        var status = 'Successfully saved!'
        callback();
    }).catch(function(error) {
        console.log("received the following error when posting:", error)
        var status = "received the following error when posting:"
        callback();
    });

}

//https://www.youtube.com/watch?v=2Vf1D-rUMwE

// function databaseTest() {
//     collRef.add({
//         user: 1,
//         selection: "True",
//         testNumber: 1,
//         actualValue: 33
//     }).then(function() {
//         console.log('Successfully saved!')
//     }).catch(function(error) {
//         console.log("received the following error when posting:", error)
//     });

//     db.doc('testing/testData').get().then(function(doc) {
//         if (doc && doc.exists) {
//             const myData = doc.data();
//             console.log(myData)
//         } else {
//             console.log('requested does not exist:', doc)
//         }
//     }).catch(function(error) {
//         console.log("received the following error when getting:", error)
//     });

//     //https://www.youtube.com/watch?v=kmTECF0JZyQ
//     //prints all the data to the console
// }

function snapshotTest() {
    db.collection('testing').get().then((snapshot) => {
        console.log(snapshot.docs)
        snapshot.docs.forEach(doc => {
            console.log(doc.data())
        })
    })
}
// https://firebase.google.com/docs/database/web/read-and-write
function getMaxUser() {
    collRef.add({
        user: 1
    }).then(function(docRef) {
        console.log('document written with ID', docRef.id);
        localStorage.setItem('userID', docRef.id)
    }).catch(function(error) {
        console.log("error logging to firestore: ", error);
    })
}

function getRandomBool() {
    var x = Math.random() * 10;
    if (x < 5) {
        return (false);
    } else {
        return (true);
    }
}