let weapons = [
  'weapons__multitool-knife',
  'weapons__baton',
  'weapons__gun',
  'weapons__rifle',
];

function cellPositioning(grid) {
  let gridSize = grid * grid;
  let squaresArray = gridContainer.children().toArray();
  let players = [
    'player__policeAvatar',
    'player__thugAvatar'
  ];

  function randomIndexGenerator(side, size, fraction) {
    let randomIndex = (side * (size)) - (Math.floor(Math.random() * (size*fraction)));
    return randomIndex;
  }
  let pickedCell;
  function randomCellPicker(side, size, fraction) {
      for (i = 0; i < size; i++) {
        pickedCell = squaresArray[randomIndexGenerator(side, size, fraction)]
    }
  }

  for (z = 0; z < players.length; z++) {
    randomCellPicker(z+1, gridSize/2, 1);
    if ($(pickedCell).hasClass('filled')) {
      z--;
      randomCellPicker(z+1, gridSize/2, 1);
    } else {
      $(pickedCell).addClass(players[z]).addClass('filled');
      $(pickedCell).removeClass('free');
    }
  }

  let barriersCount = 7;
  for (y = 0; y < barriersCount; y++) {
    randomCellPicker(1, gridSize, 1);
    if ($(pickedCell).hasClass('filled')) {
      y--;
      randomCellPicker(1, gridSize, 1)
    } else {
      $(pickedCell).addClass('barrier filled');
      $(pickedCell).removeClass('free');
    }
  }

  for (a = 0; a < weapons.length; a++) {
    randomCellPicker(1, gridSize, 1);
    if ($(pickedCell).hasClass('filled')) {
      a--;
      randomCellPicker(1, gridSize, 1);
    } else {
      $(pickedCell).addClass('filled').addClass(weapons[a]).addClass('artifact');
      $(pickedCell).removeClass('free');
    }
  }
}