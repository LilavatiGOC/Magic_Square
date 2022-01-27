var row1 = "DLDrULUxDRDlURU";
var row2 = "DLDuDRDxULUdURU";
var row3 = "DRDlURUxDLDrULU";
var row4 = "DRDuDLDxURUdULU";
var row5 = "DUUlDUUxDUUrDUU";
var row6 = "DUUrDUUxDUUlDUU";
var row7 = "URUlDRDxULUrDLD";
var row8 = "URUdULUxDRDuDLD";
var row9 = "ULUrDLDxURUlDRD";
var row10 = "ULUdURUxDLDuDRD";
var row11 = "UDDlUDDxUDDrUDD";
var row12 = "UDDrUDDxUDDlUDD";
var row13 = "LDLrLULxRDRlRUR";
var row14 = "LDLuRDRxLULdRUR";
var row15 = "LULrLDLxRURlRDR";
var row16 = "LULdRURxLDLuRDR";
var row17 = "LRRdLRRxLRRuLRR";
var row18 = "LRRuLRRxLRRdLRR";
var row19 = "RDRlRURxLDLrLUL";
var row20 = "RDRuLDLxRURdLUL";
var row21 = "RURrRDRxLULlLDL";
var row22 = "RURdLDLxRURuLDL";
var row23 = "RLLdRLLxRLLuRLL";
var row24 = "RLLuRLLxRLLdRLL";


var matchPattern  = "DLRUxdlru";
var x00 = "122321003";
var y00 = "231220310";
var x01 = "122321003";
var y01 = "302331021";
var x02 = "122321003"
var y02 = "013002132";
var x03 = "122321003";
var y03 = "120113203";
var x10 = "233032110";
var y10 = "231220310";
var x11 = "233032110";
var y11 = "302331021";
var x12 = "233032110";
var y12 = "013002132";
var x13 = "233032110";
var y13 = "120113203";
var x20 = "300103221";
var y20 = "231220310";
var x21 = "300103221";
var y21 = "302331021";
var x22 = "300103221";
var y22 = "013002132";
var x23 = "300103221";
var y23 = "120113203";
var x30 = "011210332";
var y30 = "231220310";
var x31 = "011210332";
var y31 = "302331021";
var x32 = "011210332";
var y32 = "013002132";
var x33 = "011210332";
var y33 = "120113203";

function removeDuplicates(pattern) {
  var ans = pattern
    .split('')
    .filter(function(item, pos, self) {
      return self.indexOf(item) == pos;
    })
    .join('');

  return ans;
};

function getNextDirections(curDirections) {
  console.log(curDirections);
  var ans = "";
  var row1MatchCount = 0;
  var row2MatchCount = 0;
  var row3MatchCount = 0;
  var row4MatchCount = 0;
  var row5MatchCount = 0;
  var row6MatchCount = 0;
  var row7MatchCount = 0;
  var row8MatchCount = 0;
  var row9MatchCount = 0;
  var row10MatchCount = 0;
  var row11MatchCount = 0;
  var row12MatchCount = 0;
  var row13MatchCount = 0;
  var row14MatchCount = 0;
  var row15MatchCount = 0;
  var row16MatchCount = 0;
  var row17MatchCount = 0;
  var row18MatchCount = 0;
  var row19MatchCount = 0;
  var row20MatchCount = 0;
  var row21MatchCount = 0;
  var row22MatchCount = 0;
  var row23MatchCount = 0;
  var row24MatchCount = 0;
  
  for(var i = 0; i < curDirections.length; i++) {
    if (row1[i] == curDirections[i]) {
      row1MatchCount++;
      if (row1MatchCount == curDirections.length) {
	ans += row1[i+1];
      }
    }
    if (row2[i] == curDirections[i]) {
      row2MatchCount++;
      if (row2MatchCount == curDirections.length) {
	ans += row2[i+1];
      }
    }
    if (row3[i] == curDirections[i]) {
      row3MatchCount++;
      if (row3MatchCount == curDirections.length) {
	ans += row3[i+1];
      }
    }
    if (row4[i] == curDirections[i]) {
      row4MatchCount++;
      if (row4MatchCount == curDirections.length) {
	ans += row4[i+1];
      }
    }
    if (row5[i] == curDirections[i]) {
      row5MatchCount++;
      if (row5MatchCount == curDirections.length) {
	ans += row5[i+1];
      }
    }
    if (row6[i] == curDirections[i]) {
      row6MatchCount++;
      if (row6MatchCount == curDirections.length) {
	ans += row6[i+1];
      }
    }
    if (row7[i] == curDirections[i]) {
      row7MatchCount++;
      if (row7MatchCount == curDirections.length) {
	ans += row7[i+1];
      }
    }
    if (row8[i] == curDirections[i]) {
      row8MatchCount++;
      if (row8MatchCount == curDirections.length) {
	ans += row8[i+1];
      }
    }
    if (row9[i] == curDirections[i]) {
      row9MatchCount++;
      if (row9MatchCount == curDirections.length) {
	ans += row9[i+1];
      }
    }
    if (row10[i] == curDirections[i]) {
      row10MatchCount++;
      if (row10MatchCount == curDirections.length) {
	ans += row10[i+1];
      }
    }
    if (row11[i] == curDirections[i]) {
      row11MatchCount++;
      if (row11MatchCount == curDirections.length) {
	ans += row11[i+1];
      }
    }
    if (row12[i] == curDirections[i]) {
      row12MatchCount++;
      if (row12MatchCount == curDirections.length) {
	ans += row12[i+1];
      }
    }
    if (row13[i] == curDirections[i]) {
      row13MatchCount++;
      if (row13MatchCount == curDirections.length) {
	ans += row13[i+1];
      }
    }
    if (row14[i] == curDirections[i]) {
      row14MatchCount++;
      if (row14MatchCount == curDirections.length) {
	ans += row14[i+1];
      }
    }
    if (row15[i] == curDirections[i]) {
      row15MatchCount++;
      if (row15MatchCount == curDirections.length) {
	ans += row15[i+1];
      }
    }
    if (row16[i] == curDirections[i]) {
      row16MatchCount++;
      if (row16MatchCount == curDirections.length) {
	ans += row16[i+1];
      }
    }
    if (row17[i] == curDirections[i]) {
      row17MatchCount++;
      if (row17MatchCount == curDirections.length) {
	ans += row17[i+1];
      }
    }
    if (row18[i] == curDirections[i]) {
      row18MatchCount++;
      if (row18MatchCount == curDirections.length) {
	ans += row18[i+1];
      }
    }
    if (row19[i] == curDirections[i]) {
      row19MatchCount++;
      if (row19MatchCount == curDirections.length) {
	ans += row19[i+1];
      }
    }
    if (row20[i] == curDirections[i]) {
      row20MatchCount++;
      if (row20MatchCount == curDirections.length) {
	ans += row20[i+1];
      }
    }
    if (row21[i] == curDirections[i]) {
      row21MatchCount++;
      if (row21MatchCount == curDirections.length) {
	ans += row21[i+1];
      }
    }
    if (row22[i] == curDirections[i]) {
      row22MatchCount++;
      if (row22MatchCount == curDirections.length) {
	ans += row22[i+1];
      }
    }
    if (row23[i] == curDirections[i]) {
      row23MatchCount++;
      if (row23MatchCount == curDirections.length) {
	ans += row23[i+1];
      }
    }
    if (row24[i] == curDirections[i]) {
      row24MatchCount++;
      if (row24MatchCount == curDirections.length) {
	ans += row24[i+1];
      }
    }
  }
  
  if (ans.length > 0) {
    return ((ans == "undefined") ? '-' :  removeDuplicates(ans));
  }

  return '';
};

function highlightCell(curX, curY) {
  if (curX == 0 && curY == 0) {
    $("input#text1").addClass("right");
  } else if (curX == 0 && curY == 1) {
    $("input#text2").addClass("right");
  } else if (curX == 0 && curY == 2) {
    $("input#text3").addClass("right");
  } else if (curX == 0 && curY == 3) {
    $("input#text4").addClass("right");
  } else if (curX == 1 && curY == 0) {
    $("input#text5").addClass("right");
  } else if (curX == 1 && curY == 1) {
    $("input#text6").addClass("right");
  } else if (curX == 1 && curY == 2) {
    $("input#text7").addClass("right");
  } else if (curX == 1 && curY == 3) {
    $("input#text8").addClass("right");
  } else if (curX == 2 && curY == 0) {
    $("input#text9").addClass("right");
  } else if (curX == 2 && curY == 1) {
    $("input#text10").addClass("right");
  } else if (curX == 2 && curY == 2) {
    $("input#text11").addClass("right");
  } else if (curX == 2 && curY == 3) {
    $("input#text12").addClass("right");
  } else if (curX == 3 && curY == 0) {
    $("input#text13").addClass("right");
  } else if (curX == 3 && curY == 1) {
    $("input#text14").addClass("right");
  } else if (curX == 3 && curY == 2) {
    $("input#text15").addClass("right");
  } else if (curX == 3 && curY == 3) {
    $("input#text16").addClass("right");
  }
};

function highlightRootCell(curX, curY) {
  if (curX == 0 && curY == 0) {
    $("input#text1").addClass("wrong");
  } else if (curX == 0 && curY == 1) {
    $("input#text2").addClass("wrong");
  } else if (curX == 0 && curY == 2) {
    $("input#text3").addClass("wrong");
  } else if (curX == 0 && curY == 3) {
    $("input#text4").addClass("wrong");
  } else if (curX == 1 && curY == 0) {
    $("input#text5").addClass("wrong");
  } else if (curX == 1 && curY == 1) {
    $("input#text6").addClass("wrong");
  } else if (curX == 1 && curY == 2) {
    $("input#text7").addClass("wrong");
  } else if (curX == 1 && curY == 3) {
    $("input#text8").addClass("wrong");
  } else if (curX == 2 && curY == 0) {
    $("input#text9").addClass("wrong");
  } else if (curX == 2 && curY == 1) {
    $("input#text10").addClass("wrong");
  } else if (curX == 2 && curY == 2) {
    $("input#text11").addClass("wrong");
  } else if (curX == 2 && curY == 3) {
    $("input#text12").addClass("wrong");
  } else if (curX == 3 && curY == 0) {
    $("input#text13").addClass("wrong");
  } else if (curX == 3 && curY == 1) {
    $("input#text14").addClass("wrong");
  } else if (curX == 3 && curY == 2) {
    $("input#text15").addClass("wrong");
  } else if (curX == 3 && curY == 3) {
    $("input#text16").addClass("wrong");
  }
};

function markDown(curX, curY) {
  curX = curX + 1;
  curY = curY + 2;

  if (curX < 0) {
    curX = curX + 4;
  } else {
    curX = curX % 4;
  }

  if (curY < 0) {
    curY = curY + 4;
  } else { 
    curY = curY % 4;
  }
  console.log("markDown:", curX, curY);
  highlightCell(curX, curY); 
};

function markLeft(curX, curY) {
  curX = curX + 2;
  curY = curY - 1;

  if (curX < 0) {
    curX = curX + 4;
  } else {
    curX = curX % 4;
  }

  if (curY < 0) {
    curY = curY + 4;
  } else { 
    curY = curY % 4;
  }
  console.log("markLeft:", curX, curY);
  highlightCell(curX, curY); 
};

function markRight(curX, curY) {
  curX = curX + 2;
  curY = curY + 1;

  if (curX < 0) {
    curX = curX + 4;
  } else {
    curX = curX % 4;
  }

  if (curY < 0) {
    curY = curY + 4;
  } else { 
    curY = curY % 4;
  }
  console.log("markRight:", curX, curY);
  highlightCell(curX, curY); 
};

function markUp(curX, curY) {
  curX = curX - 1;
  curY = curY + 2;

  if (curX < 0) {
    curX = curX + 4;
  } else {
    curX = curX % 4;
  }

  if (curY < 0) {
    curY = curY + 4;
  } else { 
    curY = curY % 4;
  }
  console.log("markUp:", curX, curY);
  highlightCell(curX, curY); 
};

function markDiagonal(curX, curY) {
  curX = curX + 2;
  curY = curY + 2;
  
  curX = curX % 4;
  curY = curY % 4;
  console.log("markDiagonal:", curX, curY);
  highlightCell(curX, curY); 
};

function markAdjLeft(curX, curY) {
  curY = curY - 1;
  if (curX < 0) {
    curX = curX + 4;
  } else {
    curX = curX % 4;
  }

  if (curY < 0) {
    curY = curY + 4;
  } else { 
    curY = curY % 4;
  }
  console.log("markAdjLeft:", curX, curY);
  highlightCell(curX, curY); 
};

function markAdjRight(curX, curY) {
  curY = curY + 1;
  if (curX < 0) {
    curX = curX + 4;
  } else {
    curX = curX % 4;
  }

  if (curY < 0) {
    curY = curY + 4;
  } else { 
    curY = curY % 4;
  }
  console.log("markAdjRight:", curX, curY);
  highlightCell(curX, curY); 
};

function markAdjUp(curX, curY) {
  curX = curX - 1;
  if (curX < 0) {
    curX = curX + 4;
  } else {
    curX = curX % 4;
  }

  if (curY < 0) {
    curY = curY + 4;
  } else { 
    curY = curY % 4;
  }
  console.log("markAdjUp:", curX, curY);
  highlightCell(curX, curY); 
};

function markAdjDown(curX, curY) {
  curX = curX + 1;
  if (curX < 0) {
    curX = curX + 4;
  } else {
    curX = curX % 4;
  }

  if (curY < 0) {
    curY = curY + 4;
  } else { 
    curY = curY % 4;
  }
  console.log("markAdjDown:", curX, curY);
  highlightCell(curX, curY); 
};

function highlightSelectDirections(curX, curY, directions) {
  console.log("Highlighting from cell:", curX, curY);
  console.log("Directions: ", directions);
  if (directions == "-") {
    return;
  }
  highlightRootCell(curX, curY);
  for (var i = 0; i < directions.length; i++) {
    if (directions[i] == 'D') {
      markDown(curX, curY);  
    } else if (directions[i] == 'L') {
      markLeft(curX, curY);
    } else if (directions[i] == 'R') {
	    markRight(curX, curY);
    } else if (directions[i] == 'U') {
	    markUp(curX, curY);
    } else if (directions[i] == 'x') {
	    markDiagonal(curX, curY);
    } else if (directions[i] == 'l') {
	    markAdjLeft(curX, curY);
    } else if (directions[i] == 'r') {
	    markAdjRight(curX, curY);
    } else if (directions[i] == 'u') {
	    markAdjUp(curX, curY);
    } else if(directions[i] == 'd') {
	    markAdjDown(curX, curY);
    }
  }
};

function move(xMoves, yMoves, x, y) {
  for (var i = 0; i < xMoves.length; i++) {
    if ((xMoves[i] == x) && (yMoves[i] == y)) {
      return matchPattern[i];
    }
  }
    return '';
};
function computeDirection(prevX, prevY, curX, curY) {
  if (prevX == 0 && prevY == 0) {
    return move(x00,y00, curX, curY);
  }
  if (prevX == 0 && prevY == 1) {
    return move(x01,y01, curX, curY);
  }
  if (prevX == 0 && prevY == 2) {
    return move(x02,y02, curX, curY);
  }
  if (prevX == 0 && prevY == 3) {
    return move(x03,y03, curX, curY);
  }
  if (prevX == 1 && prevY == 0) {
    return move(x10,y10, curX, curY);
  }
  if (prevX == 1 && prevY == 1) {
    return move(x11,y11, curX, curY);
  }
  if (prevX == 1 && prevY == 2) {
    return move(x12,y12, curX, curY);
  }
  if (prevX == 1 && prevY == 3) {
    return move(x13,y13, curX, curY);
  }
  if (prevX == 2 && prevY == 0) {
    return move(x20,y20, curX, curY);
  }
  if (prevX == 2 && prevY == 1) {
    return move(x21,y21, curX, curY);
  }
  if (prevX == 2 && prevY == 2) {
    return move(x22,y22, curX, curY);
  }
  if (prevX == 2 && prevY == 3) {
    return move(x23,y23, curX, curY);
  }
  if (prevX == 3 && prevY == 0) {
    return move(x30,y30, curX, curY);
  }
  if (prevX == 3 && prevY == 1) {
    return move(x31,y31, curX, curY);
  }
  if (prevX == 3 && prevY == 2) {
    return move(x32,y32, curX, curY);
  }
  if (prevX == 3 && prevY == 3) {
    return move(x33,y33, curX, curY);
  }
};

function isOne(val) {
  if (val == 1) {
    return true;
  } else {
    return false
  };
};

function resetUserInterface() {
  $("input#text1").removeClass("right");
  $("input#text2").removeClass("right");
  $("input#text3").removeClass("right");
  $("input#text4").removeClass("right");
  $("input#text5").removeClass("right");
  $("input#text6").removeClass("right");
  $("input#text7").removeClass("right");
  $("input#text8").removeClass("right");
  $("input#text9").removeClass("right");
  $("input#text10").removeClass("right");
  $("input#text11").removeClass("right");
  $("input#text12").removeClass("right");
  $("input#text13").removeClass("right");
  $("input#text14").removeClass("right");
  $("input#text15").removeClass("right");
  $("input#text16").removeClass("right");
  $("input#text1").removeClass("wrong");
  $("input#text2").removeClass("wrong");
  $("input#text3").removeClass("wrong");
  $("input#text4").removeClass("wrong");
  $("input#text5").removeClass("wrong");
  $("input#text6").removeClass("wrong");
  $("input#text7").removeClass("wrong");
  $("input#text8").removeClass("wrong");
  $("input#text9").removeClass("wrong");
  $("input#text10").removeClass("wrong");
  $("input#text11").removeClass("wrong");
  $("input#text12").removeClass("wrong");
  $("input#text13").removeClass("wrong");
  $("input#text14").removeClass("wrong");
  $("input#text15").removeClass("wrong");
  $("input#text16").removeClass("wrong");
};

$(document).ready(function() {
  var directions = "";
  var prevX, prevY;
  var count = 0;

  $("#form1").submit(function(event) {
    event.preventDefault();
    count = count + 1;
    text1 = parseInt($("input#text1").val());
    resetUserInterface();
    if (count == 1) {
      highlightSelectDirections(0,0, "DLRU");
      prevX = 0;
      prevY = 0;
        $("#well-container").show();
        $("#win-message").text("Pattern: -")
                       .append("<br/> Possible nexthops: DLRU");
    } else if(directions.length <= 15) {
      directions += computeDirection(prevX,prevY,0,0);
      console.log("Directions->", directions);
        $("#well-container").show();
        $("#win-message").text("Pattern: " + directions.toString())
                       .append("<br/> Possible nexthops: " + getNextDirections(directions).toString());
      if ((count != 2) && (count != 6) && (count != 10) && (count != 14)) {
        highlightSelectDirections(0,0,getNextDirections(directions));
        prevX = 0;
        prevY = 0;
      } else {
        highlightSelectDirections(prevX,prevY,getNextDirections(directions));
      };
    };
  });

  $("#form2").submit(function(event) {
    event.preventDefault();
    count = count + 1;
    text2 = parseInt($("input#text2").val());
    resetUserInterface();
    if (count == 1) {
      highlightSelectDirections(0,1, "DLRU");
      prevX = 0;
      prevY = 1;
        $("#well-container").show();
        $("#win-message").text("Pattern: -")
                       .append("<br/> Possible nexthops: DLRU");
    } else if (directions.length <= 15){
      directions += computeDirection(prevX,prevY,0,1);
      console.log("Directions->", directions.toString());
        $("#well-container").show();
        $("#win-message").text("Pattern: " + directions.toString())
                       .append("<br/> Possible nexthops: " + getNextDirections(directions).toString());
      if ((count != 2) && (count != 6) && (count != 10) && (count != 14)) {
        highlightSelectDirections(0,1,getNextDirections(directions));
        prevX = 0;
        prevY = 1;
      } else {
        highlightSelectDirections(prevX,prevY,getNextDirections(directions));
      };
    };
  });

  $("#form3").submit(function(event) {
    event.preventDefault();
    count = count + 1;
    text3 = parseInt($("input#text3").val());
    resetUserInterface();
    if (count == 1) {
      highlightSelectDirections(0,2, "DLRU");
      prevX = 0;
      prevY = 2;
        $("#well-container").show();
        $("#win-message").text("Pattern: -")
                       .append("<br/> Possible nexthops: DLRU");
    } else if (directions.length <= 15){
      directions += computeDirection(prevX,prevY,0,2);
      console.log("Directions->", directions);
        $("#well-container").show();
        $("#win-message").text("Pattern: " + directions.toString())
                       .append("<br/> Possible nexthops: " + getNextDirections(directions).toString());
      if ((count != 2) && (count != 6) && (count != 10) && (count != 14)) {
        highlightSelectDirections(0,2,getNextDirections(directions));
        prevX = 0;
        prevY = 2;
      } else {
        highlightSelectDirections(prevX,prevY,getNextDirections(directions));
      };
    };
  });

  $("#form4").submit(function(event) {
    event.preventDefault();
    count = count + 1;
    text4 = parseInt($("input#text4").val());
    resetUserInterface();
    if (count == 1) {
      highlightSelectDirections(0,3, "DLRU");
      prevX = 0;
      prevY = 3;
        $("#well-container").show();
        $("#win-message").text("Pattern: -")
                       .append("<br/> Possible nexthops: DLRU");
    } else if (directions.length <= 15){
      directions += computeDirection(prevX,prevY,0,3);
      console.log("Directions->", directions);
        $("#well-container").show();
        $("#win-message").text("Pattern: " + directions.toString())
                       .append("<br/> Possible nexthops: " + getNextDirections(directions).toString());
      if ((count != 2) && (count != 6) && (count != 10) && (count != 14)) {
        highlightSelectDirections(0,3,getNextDirections(directions));
        prevX = 0;
        prevY = 3;
      } else {
        highlightSelectDirections(prevX,prevY,getNextDirections(directions));
      };
    };
  });

  $("#form5").submit(function(event) {
    event.preventDefault();
    count = count + 1;
    text5 = parseInt($("input#text5").val());
    resetUserInterface();
    if (count == 1) {
      highlightSelectDirections(1,0, "DLRU");
      prevX = 1;
      prevY = 0;
        $("#well-container").show();
        $("#win-message").text("Pattern: -")
                       .append("<br/> Possible nexthops: DLRU");
    } else if (directions.length <= 15){
      directions += computeDirection(prevX,prevY,1,0);
      console.log("Directions->", directions);
        $("#well-container").show();
        $("#win-message").text("Pattern: " + directions.toString())
                       .append("<br/> Possible nexthops: " + getNextDirections(directions).toString());
      if ((count != 2) && (count != 6) && (count != 10) && (count != 14)) {
        highlightSelectDirections(1,0,getNextDirections(directions));
        prevX = 1;
        prevY = 0;
      } else {
        highlightSelectDirections(prevX,prevY,getNextDirections(directions));
      };
    };
  });

  $("#form6").submit(function(event) {
    event.preventDefault();
    count = count + 1;
    text6 = parseInt($("input#text6").val());
    resetUserInterface();
    if (count == 1) {
      highlightSelectDirections(1,1, "DLRU");
      prevX = 1;
      prevY = 1;
        $("#well-container").show();
        $("#win-message").text("Pattern: -")
                       .append("<br/> Possible nexthops: DLRU");
    } else if (directions.length <= 15){
      directions += computeDirection(prevX,prevY,1,1);
      console.log("Directions->", directions);
        $("#well-container").show();
        $("#win-message").text("Pattern: " + directions.toString())
                       .append("<br/> Possible nexthops: " + getNextDirections(directions).toString());
      if ((count != 2) && (count != 6) && (count != 10) && (count != 14)) {
        highlightSelectDirections(1,1,getNextDirections(directions));
        prevX = 1;
        prevY = 1;
      } else {
        highlightSelectDirections(prevX,prevY,getNextDirections(directions));
      };
    };
  });

  $("#form7").submit(function(event) {
    event.preventDefault();
    count = count + 1;
    text7 = parseInt($("input#text7").val());
    resetUserInterface();
    if (count == 1) {
      highlightSelectDirections(1,2, "DLRU");
      prevX = 1;
      prevY = 2;
        $("#well-container").show();
        $("#win-message").text("Pattern: -")
                       .append("<br/> Possible nexthops: DLRU");
    } else if (directions.length <= 15){
      directions += computeDirection(prevX,prevY,1,2);
      console.log("Directions->", directions);
        $("#well-container").show();
        $("#win-message").text("Pattern: " + directions.toString())
                       .append("<br/> Possible nexthops: " + getNextDirections(directions).toString());
      if ((count != 2) && (count != 6) && (count != 10) && (count != 14)) {
        highlightSelectDirections(1,2,getNextDirections(directions));
        prevX = 1;
        prevY = 2;
      } else {
        highlightSelectDirections(prevX,prevY,getNextDirections(directions));
      };
    };
  });

  $("#form8").submit(function(event) {
    event.preventDefault();
    count = count + 1;
    text8 = parseInt($("input#text8").val());
    resetUserInterface();
    if (count == 1) {
      highlightSelectDirections(1,3, "DLRU");
      prevX = 1;
      prevY = 3;
        $("#well-container").show();
        $("#win-message").text("Pattern: -")
                       .append("<br/> Possible nexthops: DLRU");
    } else if (directions.length <= 15){
      directions += computeDirection(prevX,prevY,1,3);
      console.log("Directions->", directions);
        $("#well-container").show();
        $("#win-message").text("Pattern: " + directions.toString())
                       .append("<br/> Possible nexthops: " + getNextDirections(directions).toString());
      if ((count != 2) && (count != 6) && (count != 10) && (count != 14)) {
        highlightSelectDirections(1,3,getNextDirections(directions));
        prevX = 1;
        prevY = 3;
      } else {
        highlightSelectDirections(prevX,prevY,getNextDirections(directions));
      };
    };
  });

  $("#form9").submit(function(event) {
    event.preventDefault();
    count = count + 1;
    text9 = parseInt($("input#text9").val());
    resetUserInterface();
    if (count == 1) {
      highlightSelectDirections(2,0, "DLRU");
      prevX = 2;
      prevY = 0;
        $("#well-container").show();
        $("#win-message").text("Pattern: -")
                       .append("<br/> Possible nexthops: DLRU");
    } else if (directions.length <= 15){
      directions += computeDirection(prevX,prevY,2,0);
      console.log("Directions->", directions);
        $("#well-container").show();
        $("#win-message").text("Pattern: " + directions.toString())
                       .append("<br/> Possible nexthops: " + getNextDirections(directions).toString());
      if ((count != 2) && (count != 6) && (count != 10) && (count != 14)) {
        highlightSelectDirections(2,0,getNextDirections(directions));
        prevX = 2;
        prevY = 0;
      } else {
        highlightSelectDirections(prevX,prevY,getNextDirections(directions));
      };
    };
  });

  $("#form10").submit(function(event) {
    event.preventDefault();
    count = count + 1;
    text10 = parseInt($("input#text10").val());
    resetUserInterface();
    if (count == 1) {
      highlightSelectDirections(2,1, "DLRU");
      prevX = 2;
      prevY = 1;
        $("#well-container").show();
        $("#win-message").text("Pattern: -")
                       .append("<br/> Possible nexthops: DLRU");
    } else if (directions.length <= 15){
      directions += computeDirection(prevX,prevY,2,1);
      console.log("Directions->", directions);
        $("#well-container").show();
        $("#win-message").text("Pattern: " + directions.toString())
                       .append("<br/> Possible nexthops: " + getNextDirections(directions).toString());
      if ((count != 2) && (count != 6) && (count != 10) && (count != 14)) {
        highlightSelectDirections(2,1,getNextDirections(directions));
        prevX = 2;
        prevY = 1;
      } else {
        highlightSelectDirections(prevX,prevY,getNextDirections(directions));
      };
    };
  });

  $("#form11").submit(function(event) {
    event.preventDefault();
    count = count + 1;
    text11 = parseInt($("input#text11").val());
    resetUserInterface();
    if (count == 1) {
      highlightSelectDirections(2,2, "DLRU");
      prevX = 2;
      prevY = 2;
        $("#well-container").show();
        $("#win-message").text("Pattern: -")
                       .append("<br/> Possible nexthops: DLRU");
    } else if (directions.length <= 15){
      directions += computeDirection(prevX,prevY,2,2);
      console.log("Directions->", directions);
        $("#well-container").show();
        $("#win-message").text("Pattern: " + directions.toString())
                       .append("<br/> Possible nexthops: " + getNextDirections(directions).toString());
      if ((count != 2) && (count != 6) && (count != 10) && (count != 14)) {
        highlightSelectDirections(2,2,getNextDirections(directions));
        prevX = 2;
        prevY = 2;
      } else {
        highlightSelectDirections(prevX,prevY,getNextDirections(directions));
      };
    };
  });

  $("#form12").submit(function(event) {
    event.preventDefault();
    count = count + 1;
    text12 = parseInt($("input#text12").val());
    resetUserInterface();
    if (count == 1) {
      highlightSelectDirections(2,3, "DLRU");
      prevX = 2;
      prevY = 3;
        $("#well-container").show();
        $("#win-message").text("Pattern: -")
                       .append("<br/> Possible nexthops: DLRU");
    } else if (directions.length <= 15){
      directions += computeDirection(prevX,prevY,2,3);
      console.log("Directions->", directions);
        $("#well-container").show();
        $("#win-message").text("Pattern: " + directions.toString())
                       .append("<br/> Possible nexthops: " + getNextDirections(directions).toString());
      if ((count != 2) && (count != 6) && (count != 10) && (count != 14)) {
        highlightSelectDirections(2,3,getNextDirections(directions));
        prevX = 2;
        prevY = 3;
      } else {
        highlightSelectDirections(prevX,prevY,getNextDirections(directions));
      };
    };
  });

  $("#form13").submit(function(event) {
    event.preventDefault();
    count = count + 1;
    text13 = parseInt($("input#text13").val());
    resetUserInterface();
    if (count == 1) {
      highlightSelectDirections(3,0, "DLRU");
      prevX = 3;
      prevY = 0;
        $("#well-container").show();
        $("#win-message").text("Pattern: -")
                       .append("<br/> Possible nexthops: DLRU");
    } else if (directions.length <= 15){
      directions += computeDirection(prevX,prevY,3,0);
      console.log("Directions->", directions);
        $("#well-container").show();
        $("#win-message").text("Pattern: " + directions.toString())
                       .append("<br/> Possible nexthops: " + getNextDirections(directions).toString());
      if ((count != 2) && (count != 6) && (count != 10) && (count != 14)) {
        highlightSelectDirections(3,0,getNextDirections(directions));
        prevX = 3;
        prevY = 0;
      } else {
        highlightSelectDirections(prevX,prevY,getNextDirections(directions));
      };
    };
  });

  $("#form14").submit(function(event) {
    event.preventDefault();
    count = count + 1;
    text14 = parseInt($("input#text14").val());
    resetUserInterface();
    if (count == 1) {
      highlightSelectDirections(3,1, "DLRU");
      prevX = 3;
      prevY = 1;
        $("#well-container").show();
        $("#win-message").text("Pattern: -")
                       .append("<br/> Possible nexthops: DLRU");
    } else if (directions.length <= 15){
      directions += computeDirection(prevX,prevY,3,1);
      console.log("Directions->", directions);
        $("#well-container").show();
        $("#win-message").text("Pattern: " + directions.toString())
                       .append("<br/> Possible nexthops: " + getNextDirections(directions).toString());
      if ((count != 2) && (count != 6) && (count != 10) && (count != 14)) {
        highlightSelectDirections(3,1,getNextDirections(directions));
        prevX = 3;
        prevY = 1;
      } else {
        highlightSelectDirections(prevX,prevY,getNextDirections(directions));
      };
    };
  });

  $("#form15").submit(function(event) {
    event.preventDefault();
    count = count + 1;
    text15 = parseInt($("input#text15").val());
    resetUserInterface();
    if (count == 1) {
      highlightSelectDirections(3,2, "DLRU");
      prevX = 3;
      prevY = 2;
        $("#well-container").show();
        $("#win-message").text("Pattern: -")
                       .append("<br/> Possible nexthops: DLRU");
    } else if (directions.length <= 15){
      directions += computeDirection(prevX,prevY,3,2);
      console.log("Directions->", directions);
        $("#well-container").show();
        $("#win-message").text("Pattern: " + directions.toString())
                       .append("<br/> Possible nexthops: " + getNextDirections(directions).toString());
      if ((count != 2) && (count != 6) && (count != 10) && (count != 14)) {
        highlightSelectDirections(3,2,getNextDirections(directions));
        prevX = 3;
        prevY = 2;
      } else {
        highlightSelectDirections(prevX,prevY,getNextDirections(directions));
      };
    };
  });

  $("#form16").submit(function(event) {
    event.preventDefault();
    count = count + 1;
    text16 = parseInt($("input#text16").val());
    resetUserInterface();
    if (count == 1) {
      highlightSelectDirections(3,3, "DLRU");
      prevX = 3;
      prevY = 3;
        $("#well-container").show();
        $("#win-message").text("Pattern: -")
                       .append("<br/> Possible nexthops: DLRU");
    } else if (directions.length <= 15){
      directions += computeDirection(prevX,prevY,3,3);
      console.log("Directions->", directions);
        $("#well-container").show();
        $("#win-message").text("Pattern: " + directions.toString())
                       .append("<br/> Possible nexthops: " + getNextDirections(directions).toString());
      if ((count != 2) && (count != 6) && (count != 10) && (count != 14)) {
        highlightSelectDirections(3,3,getNextDirections(directions));
        prevX = 3;
        prevY = 3;
      } else {
        highlightSelectDirections(prevX,prevY,getNextDirections(directions));
      };
    };
  });
});
