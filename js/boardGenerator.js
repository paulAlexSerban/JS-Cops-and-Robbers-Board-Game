const gridContainer = $('.grid__container');

function boardGenerator(gridSize) {
  gridContainer.empty();
  gridContainer.css('grid-template-columns', 'repeat(' + gridSize + ', 1fr)');
  gridContainer.css('grid-template-rows', 'repeat(' + gridSize + ', 1fr)');

  function gridSquare(row, col) {
    let square = $('<div />', {
      class: `grid__square grid__square--${i} cell__${row}-${col} free`
    });
    square.attr('data-row', `${row}`);
    square.attr('data-col', `${col}`);
    return square;
  }

  let i = 0;
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      gridContainer.append(gridSquare(row, col))
      i++;
    }
  }
}