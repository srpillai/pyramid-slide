/*
This is part of LaunchCode Unit-3 class for front-end development.

Toward the end of World 1-1 in Nintendo’s Super Mario Brothers, 
Mario must ascend a "half-pyramid" of blocks before leaping (if 
he wants to maximize his score) toward a flag pole. 

The pyrmaid-slide builds the half-pyramid in JavaScript.
User can select the pyramid height and pyramid building shape.

Created by Radhakrishnan Pillai for LaunchCode Unit-3.

*/// start test of  Pyrmaid slider


      var slider = document.getElementById("myRange");
      var output = document.getElementById("demo");
      output.innerHTML = slider.value;
      
      // slider value selection

      slider.oninput = function() {
        output.innerHTML = this.value;
        drawPyramid(this.value);
        
      }

    //symbol selection

    var sel = document.getElementById('mySel');
    var lbl = document.getElementById('myLbl');
    var symbol = "#";
   
    sel.onchange = function(){
      lbl.innerHTML = this.options[this.selectedIndex].value;
      symbol = lbl.innerHTML;
      drawPyramid(output.innerHTML)
      
    };
    
// end test

/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += symbol;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
