window.onload = function() {
    // Create a Paper.js Path to draw a line into it:

    var canvas = document.getElementById('myCanvas');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);
    
    createGrid();

    paper.view.draw();
}

function createGrid(){
    for (let x = 1; x < 20; x++) {
        for (let y = 1; y < 20; y++) {
            let point = new paper.Point(x * 50,y * 50);
            createCircle(point, randomColor());
       }   
    }
}

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + b + ", " + g + ")";
}


function createCircle(point, color){
    let myCircle = new paper.Path.Circle(point, 10);
    myCircle.fillColor = color;
}