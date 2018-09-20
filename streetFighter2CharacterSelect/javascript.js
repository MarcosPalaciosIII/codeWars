var playerPosition = [0, 0];
var characters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
  ];


function characterSelect(move) {

  move.forEach(oneMove => {

    switch(oneMove) {
      case "up":
      playerPosition[0]--;
      if(playerPosition[0] < 0) {
        playerPosition[0] = characters.length - 1;
      }
      break;
      case "down":
      playerPosition[0]++;
      if(playerPosition[0] > 1) {
        playerPosition[0] = 0;
      }
      break;
      case "left":
      playerPosition[1]--;
      if(playerPosition[1] < 0) {
        playerPosition[1] = characters[1].length - 1;
      }
      break;
      case "right":
      playerPosition[1]++;
      if(playerPosition[1] > 5) {
        playerPosition[1] = 0;
      }
      break;
    }
  });
  console.log(characters[playerPosition[0]][playerPosition[1]]);
}

moves = ["left", "left", "down"];
characterSelect(moves);
console.log(characters[0].length);
