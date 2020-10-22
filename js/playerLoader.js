let police = {};
let thug = {};

function createNewPlayers() {
let playerOneNameInput = $('.player__name-input--one');
let playerTwoNameInput = $('.player__name-input--two');
let policeInitPositionRow = parseInt($('.player__policeAvatar')[0].dataset.row);
let policeInitPositionCol = parseInt($('.player__policeAvatar')[0].dataset.col);
let thugInitPositionRow = parseInt($('.player__thugAvatar')[0].dataset.row);
let thugInitPositionCol = parseInt($('.player__thugAvatar')[0].dataset.col);

police = new Player(playerOneNameInput.val(), 'police', 'player__thugAvatar', 'thug', false, policeInitPositionRow, policeInitPositionCol, 'player__policeAvatar');
thug = new Player(playerTwoNameInput.val(), 'thug', 'player__policeAvatar', 'police', true, thugInitPositionRow, thugInitPositionCol, 'player__thugAvatar');
}