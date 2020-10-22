let continueFinishMove = true;
function movementController(role) {
    function finishMove(role) {
      eval(role).updateRound();
      eval(role).refreshStats();
    }
    $(document).keydown(function (ev) {
      
      if (ev.which === 38) {
        let cellsUp = parseInt(prompt('How many cells would you like to move up?', 1));
        if(cellsUp > 3) {
          alert('Forbidden number of cells!!');
          cellsUp = prompt('Chose another number of cells to go up!', 1);
        } else if (cellsUp > 0){
          for(let i = 1; i <= cellsUp; i++) {
            let oldCell = $(`.cell__${eval(role).positionRow}-${eval(role).positionCol}`);
            let nextCell = $(`.cell__${eval(role).positionRow+(-1)}-${eval(role).positionCol}`);
            let nextCellRow = parseInt(nextCell.attr('data-row'));
            let nextCellCol = parseInt(nextCell.attr('data-col'));
            let topCell = $(`.cell__${nextCellRow+(-1)}-${nextCellCol}`);
            let rightCell = $(`.cell__${nextCellRow}-${nextCellCol+(1)}`);
            let bottomCell = $(`.cell__${nextCellRow+(1)}-${nextCellCol}`);
            let leftCell = $(`.cell__${nextCellRow}-${nextCellCol+(-1)}`);
            if(nextCell.hasClass('free') ==  true) {
              if (eval(role).oldWeapon !== 'none') {
                eval(role).weaponToSwap = eval(role).oldWeapon;
                eval(role).oldWeapon = 'none'
              }
              eval(role).moveDirection(-1, 0);
              if(eval(role).weaponToSwap !== 'none') {
                oldCell.removeClass('free').addClass(`${eval(role).weaponToSwap} artifact filled`);
                eval(role).weaponToSwap = 'none';
              }
              if (topCell.hasClass(eval(role).enemyAvatar)) {
                eval(role).fight();
                continueFinishMove = false;
              } else if (rightCell.hasClass(eval(role).enemyAvatar)) {
                eval(role).fight();
                continueFinishMove = false;
              } else if (bottomCell.hasClass(eval(role).enemyAvatar)) {
                eval(role).fight();
                continueFinishMove = false;
              } else if (leftCell.hasClass(eval(role).enemyAvatar)) {
                eval(role).fight();
                continueFinishMove = false;
              }
            } else if (nextCell.hasClass('artifact') == true) {
              eval(role).artifactCheck(nextCell);
              eval(role).moveDirection(-1, 0);
            } else if (nextCell.hasClass(eval(role).enemyAvatar) == true) {
              eval(role).fight();
              continueFinishMove = false;
            }
          }
          if(continueFinishMove === true) {
            finishMove(role);
          }
          ev.preventDefault();
        }
      } else if (ev.which === 39) {
        let cellsRight = parseInt(prompt('How many cells would you like to move right?', 1));
        if(cellsRight > 3) {
          alert('Forbidden number of cells!!');
          cellsRight = prompt('Chose another number of cells to go right!', 1);
        } else if (cellsRight > 0){
          for(let i = 1; i <= cellsRight; i++) {
            let oldCell = $(`.cell__${eval(role).positionRow}-${eval(role).positionCol}`);
            let nextCell = $(`.cell__${eval(role).positionRow}-${eval(role).positionCol+(1)}`);
            let nextCellRow = parseInt(nextCell.attr('data-row'));
            let nextCellCol = parseInt(nextCell.attr('data-col'));
            let topCell = $(`.cell__${nextCellRow+(-1)}-${nextCellCol}`);
            let rightCell = $(`.cell__${nextCellRow}-${nextCellCol+(1)}`);
            let bottomCell = $(`.cell__${nextCellRow+(1)}-${nextCellCol}`);
            let leftCell = $(`.cell__${nextCellRow}-${nextCellCol+(-1)}`);
            if(nextCell.hasClass('free') ==  true) {
              if (eval(role).oldWeapon !== 'none') {
                eval(role).weaponToSwap = eval(role).oldWeapon;
                eval(role).oldWeapon = 'none'
              }
              eval(role).moveDirection(0, 1);
              if(eval(role).weaponToSwap !== 'none') {
                oldCell.removeClass('free').addClass(`${eval(role).weaponToSwap} artifact filled`);
                eval(role).weaponToSwap = 'none';
              }
              if (topCell.hasClass(eval(role).enemyAvatar)) {
                eval(role).fight();
                continueFinishMove = false;
              } else if (rightCell.hasClass(eval(role).enemyAvatar)) {
                eval(role).fight();
                continueFinishMove = false;
              } else if (bottomCell.hasClass(eval(role).enemyAvatar)) {
                eval(role).fight();
                continueFinishMove = false;
              } else if (leftCell.hasClass(eval(role).enemyAvatar)) {
                eval(role).fight();
                continueFinishMove = false;
              }
            } else if (nextCell.hasClass('artifact') == true) {
              eval(role).artifactCheck(nextCell);
              eval(role).moveDirection(0, 1);
            } else if (nextCell.hasClass(eval(role).enemyAvatar) == true) {
              eval(role).fight();
              continueFinishMove = false;
            }
          }
          if(continueFinishMove === true) {
            finishMove(role);
          }
          ev.preventDefault();
        }
      } else if (ev.which === 40) {
        let cellsDown = parseInt(prompt('How many cells would you like to move down?', 1));
        if(cellsDown > 3) {
          alert('Forbidden number of cells!!');
          cellsDown = prompt('Chose another number of cells to go down!', 1);
        } else if (cellsDown > 0) {
          for(let i = 1; i <= cellsDown; i++) {
            let oldCell = $(`.cell__${eval(role).positionRow}-${eval(role).positionCol}`);
            let nextCell = $(`.cell__${eval(role).positionRow+(1)}-${eval(role).positionCol}`);
            let nextCellRow = parseInt(nextCell.attr('data-row'));
            let nextCellCol = parseInt(nextCell.attr('data-col'));
            let topCell = $(`.cell__${nextCellRow+(-1)}-${nextCellCol}`);
            let rightCell = $(`.cell__${nextCellRow}-${nextCellCol+(1)}`);
            let bottomCell = $(`.cell__${nextCellRow+(1)}-${nextCellCol}`);
            let leftCell = $(`.cell__${nextCellRow}-${nextCellCol+(-1)}`);
            if(nextCell.hasClass('free') ==  true) {
              if (eval(role).oldWeapon !== 'none') {
                eval(role).weaponToSwap = eval(role).oldWeapon;
                eval(role).oldWeapon = 'none'
              }
              eval(role).moveDirection(1, 0);
              if(eval(role).weaponToSwap !== 'none') {
                oldCell.removeClass('free').addClass(`${eval(role).weaponToSwap} artifact filled`);
                eval(role).weaponToSwap = 'none';
              }
              if (topCell.hasClass(eval(role).enemyAvatar)) {
                eval(role).fight();
                continueFinishMove = false;
              } else if (rightCell.hasClass(eval(role).enemyAvatar)) {
                eval(role).fight();
                continueFinishMove = false;
              } else if (bottomCell.hasClass(eval(role).enemyAvatar)) {
                eval(role).fight();
                continueFinishMove = false;
              } else if (leftCell.hasClass(eval(role).enemyAvatar)) {
                eval(role).fight();
                continueFinishMove = false;
              }
            } else if (nextCell.hasClass('artifact') == true) {
              eval(role).artifactCheck(nextCell);
              eval(role).moveDirection(1, 0);
            } else if (nextCell.hasClass(eval(role).enemyAvatar) == true) {
              eval(role).fight();
              continueFinishMove = false;
            }
          }
          if(continueFinishMove === true) {
            finishMove(role);
          }
          ev.preventDefault();
        }
      } else if (ev.which === 37) {
        let cellsLeft = parseInt(prompt('How many cells would you like to move left?', 1));
        if (cellsLeft > 3) {
          alert('Forbidden number of cells!!');
          cellsLeft = prompt('Chose another number of cells to go left!', 1);
        } else if (cellsLeft > 0){
          for(let i = 1; i <= cellsLeft; i++) {
            let oldCell = $(`.cell__${eval(role).positionRow}-${eval(role).positionCol}`);
            let nextCell = $(`.cell__${eval(role).positionRow}-${eval(role).positionCol+(-1)}`);
            let nextCellRow = parseInt(nextCell.attr('data-row'));
            let nextCellCol = parseInt(nextCell.attr('data-col'));
            let topCell = $(`.cell__${nextCellRow+(-1)}-${nextCellCol}`);
            let rightCell = $(`.cell__${nextCellRow}-${nextCellCol+(1)}`);
            let bottomCell = $(`.cell__${nextCellRow+(1)}-${nextCellCol}`);
            let leftCell = $(`.cell__${nextCellRow}-${nextCellCol+(-1)}`);
            if(nextCell.hasClass('free') ==  true) {
              if (eval(role).oldWeapon !== 'none') {
                eval(role).weaponToSwap = eval(role).oldWeapon;
                eval(role).oldWeapon = 'none'
              }
              eval(role).moveDirection(0, -1);
              if(eval(role).weaponToSwap !== 'none') {
                oldCell.removeClass('free').addClass(`${eval(role).weaponToSwap} artifact filled`);
                eval(role).weaponToSwap = 'none';
              }
              if (topCell.hasClass(eval(role).enemyAvatar)) {
                eval(role).fight();
                continueFinishMove = false;
              } else if (rightCell.hasClass(eval(role).enemyAvatar)) {
                eval(role).fight();
                continueFinishMove = false;
              } else if (bottomCell.hasClass(eval(role).enemyAvatar)) {
                eval(role).fight();
                continueFinishMove = false;
              } else if (leftCell.hasClass(eval(role).enemyAvatar)) {
                eval(role).fight();
                continueFinishMove = false;
              }
            } else if (nextCell.hasClass('artifact') == true) {
              eval(role).artifactCheck(nextCell);
              eval(role).moveDirection(0, -1);
            } else if (nextCell.hasClass(eval(role).enemyAvatar) == true) {
              eval(role).fight();
              continueFinishMove = false;
            }
          }
          if(continueFinishMove === true) {
            finishMove(role);
          }
          ev.preventDefault();
        }
      } else {
        console.log('NOT a configured control key');
      }
    })
  }