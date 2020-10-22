class Player {
  constructor(name, role, enemyAvatar, enemyRole, round, positionRow, positionCol, playerAvatar) {
    this.name = name;
    this.role = role;
    this.enemyAvatar = enemyAvatar;
    this.enemyRole = enemyRole;
    this.round = round;
    this.turn = 0;
    this.health = 100;
    this.strength = 10;
    this.positionRow = positionRow;
    this.positionCol = positionCol;
    this.avatar = playerAvatar;
    this.collectedWeapon = 'none';
    this.oldWeapon = 'none';
    this.weaponToSwap = 'none';
  }

  play() {
    this.refreshStats();
    eval(this.enemyRole).refreshStats();
    if (this.round === true) {
      movementController(this.role);
    }
  }

  refreshStats() {
    $(`.${this.role}-name`).empty();
    $(`.${this.role}-health`).empty();
    $(`.${this.role}-strength`).empty();
    $(`.${this.role}-name`).append(`${this.name}`);
    if (this.health < 0) {
      $(`.${this.role}-health`).append(0);
    } else {
      $(`.${this.role}-health`).append(Math.floor(`${this.health}`));
    }
    $(`.${this.role}-strength`).append(Math.floor(`${this.strength}`));
    if (this.round === true) {
      $(`.${this.role}-stats`).css('background-color', 'lightgreen');
    } else {
      $(`.${this.role}-stats`).css('background-color', 'white');
    }
  }

  adjacentCheck(nextCell) {
    let nextCellRow = parseInt(nextCell.attr('data-row'));
    let nextCellCol = parseInt(nextCell.attr('data-col'));

    let topCell = $(`.cell__${nextCellRow+(-1)}-${nextCellCol}`);
    let rightCell = $(`.cell__${nextCellRow}-${nextCellCol+(1)}`);
    let bottomCell = $(`.cell__${nextCellRow+(1)}-${nextCellCol}`);
    let leftCell = $(`.cell__${nextCellRow}-${nextCellCol+(-1)}`);

    if (topCell.hasClass(this.enemyAvatar)) {
      this.fight();
    } else if (rightCell.hasClass(this.enemyAvatar)) {
      this.fight();
    } else if (bottomCell.hasClass(this.enemyAvatar)) {
      this.fight();
    } else if (leftCell.hasClass(this.enemyAvatar)) {
      this.fight();
    }
  }

  moveDirection(vertical, horizontal) {
    let oldCell = $(`.cell__${this.positionRow}-${this.positionCol}`);
    let nextCell = $(`.cell__${this.positionRow+(vertical)}-${this.positionCol+(horizontal)}`);
    this.cellChange(oldCell, nextCell);
  }

  cellChange(oldCell, nextCell) {
    oldCell.removeClass(this.avatar).removeClass('filled').addClass('free');
    nextCell.addClass(this.avatar).addClass('filled').removeClass('free');
    this.playerPosition();
  }

  playerPosition() {
    this.positionCol = parseInt($(`.${this.avatar}`)[0].dataset.col);
    this.positionRow = parseInt($(`.${this.avatar}`)[0].dataset.row);
  }

  artifactCheck(nextCell) {
    if (nextCell.hasClass('filled') === true) {
      for (i = 0; i < weapons.length; i++) {
        if (nextCell.hasClass(weapons[i]) === true) {
          if (this.collectedWeapon === 'none') {
            this.strength += (10 * (i + 1));
            this.collectedWeapon = `${weapons[i]}`;
            nextCell.removeClass(`${weapons[i]} filled artifact`).addClass('free');
          } else if (this.collectedWeapon !== 'none') {
            this.oldWeapon = this.collectedWeapon;
            let w = weapons.indexOf(this.oldWeapon);
            this.strength -= (10 * (w + 1));
            this.strength += (10 * (i + 1));
            this.collectedWeapon = `${weapons[i]}`;
            nextCell.removeClass(`${weapons[i]} filled artifact`).addClass('free');
          }
        }
      }
    }
  }

  updateRound() {
    $(document).unbind('keydown');
    this.round = false;
    eval(this.enemyRole).round = true;
    eval(this.enemyRole).play();
  }

  fight() {
    alert(`${this.name} the ${this.role} starts the FIGHT!!!`);
    this.attackStance();
  }

  continueAttack() {
    if (this.health <= 0) {
      let enemy = eval(this.enemyRole);
      const modalContainer = $('.modal__container');
      modalContainer.empty();
      modalContainer.append(
        `<p>Congratulations!!! ${enemy.name} the ${enemy.role} WON the game!!!</p>`
      )
    }
    this.attackStance();
  }

attackStance() {
  const modalBase = $('.modal__base');
  const modalWrapper = $('.modal__wrapper');
  playground.hide();
  modalBase.addClass('modal__base--is-visible');
  let detachScoreBoard = scoreBoard.detach();
  modalWrapper.append(detachScoreBoard);
  $('.article__base').css('border', 'none');
  let buttonStance = $('.modal__button > .button__base');
  buttonStance.empty().append('Continue');
  let role = eval(this.role);

  function setStance() {
    buttonStance.on('click', selectStance);

    function selectStance() {
      let stanceValue = $('.switch__input').is(':checked');
      if (stanceValue === false) {
        eval(role).defensiveStance();
        buttonStance.off('click', selectStance);
        return;
      } else if (stanceValue === true) {
        eval(role).offensiveStance();
        buttonStance.off('click', selectStance);
        return;
      }
    }
  }
  setStance();
}

offensiveStance() {
  let enemy = eval(this.enemyRole);
  enemy.health -= this.strength;
  this.round = false;
  enemy.round = true;
  this.refreshStats();
  enemy.refreshStats();
  enemy.continueAttack();
}

defensiveStance() {
  let enemy = eval(this.enemyRole);
  this.health -= enemy.strength / 2;
  this.round = false;
  enemy.round = true;
  this.refreshStats();
  enemy.refreshStats();
  enemy.continueAttack();
}
}