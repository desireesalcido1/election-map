var candidate = function(name, partyColor) {
var politician = {};

politician.name = name;

politician.electionResults = null;

politician.totalVotes = 0;

politician.partyColor= partyColor;

politician.tallyUpTotalVotes = function(){

    this.totalVotes = 0;

    for (var i = 0; i < this.electionResults.length; i++){
        this.totalVotes = this.totalVotes + this.electionResults[i];
    }

};

  return politician;

};

var jesse = candidate("Jesse Thomas", [132, 17, 11]);
var jordan = candidate("Jordan Hardant", [245, 141, 136]);

jesse.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

jordan.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];


jesse.electionResults[9] = 1;
jordan.electionResults[9] = 28;

jesse.electionResults[4] = 17;
jordan.electionResults[4] = 38;

jesse.electionResults[43] = 11;
jordan.electionResults[43] = 27;

//state results and colors
var setStateResults = function(state) {
  theStates[state].winner = null;

  if (jesse.electionResults[state] > jordan.electionResults[state]) {
    theStates[state].winner = jesse;
  }

  else if (jordan.electionResults[state] > jesse.electionResults[state]) {
    theStates[state].winner = jordan;
  };

  var stateWinner = theStates[state].winner;

if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
} else {
    theStates[state].rgbColor = [11,32,57];
};

var stateInfoTable = document.getElementById('stateResults');
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];

stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

candidate1Name.innerText = jesse.name;
candidate2Name.innerText = jordan.name;

candidate1Results.innerText = jesse.electionResults[state];
candidate2Results.innerText = jordan.electionResults[state];

if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
} else {
    winnersName.innerText = theStates[state].winner.name;
}
};
//end


//Call tally up votes and print totals
jesse.tallyUpTotalVotes();
jordan.tallyUpTotalVotes();

console.log(jesse.totalVotes);
console.log(jordan.totalVotes);


//print winner
var winner = "?";

if (jesse.totalVotes > jordan.totalVotes) {
  winner = jesse.name;
}

else if (jordan.totalVotes > jesse.totalVotes) {
  winner = jordan.name;
}

else {
  winner = "It's a Tie!"
}

console.log("And the WINNER is " + winner + "!");

//top of page table information
var countryInfoTable = document.getElementById('countryResults');

var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = jesse.name;
row.children[1].innerText = jordan.totalVotes;
row.children[2].innerText = jesse.name;
row.children[3].innerText = jordan.totalVotes;
row.children[5].innerText = winner;
       
