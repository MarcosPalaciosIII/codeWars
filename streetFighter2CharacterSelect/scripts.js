function streetFighterSelection(fighters, position, moves){
  result = [];
  moves.forEach(oneMove => {
    switch(oneMove) {
      case "up":
      position[0]--;
      if(position[0] < 0) {
        position[0] = 0;
      }
      break;
      case "down":
      position[0]++;
      if(position[0] > fighters.length - 1) {
        position[0] = fighters.length - 1;
      }
      break;
      case "left":
      position[1]--;
      if(position[1] < 0) {
        position[1] = fighters[1].length - 1;
      }
      break;
      case "right":
      position[1]++;
      if(position[1] > 5) {
        position[1] = 0;
      }
      break;
    }
    result.push(fighters[position[0]][position[1]]);
  });
  return result;
}
