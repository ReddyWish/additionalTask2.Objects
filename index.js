function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const hero = {
    name: 'Batman',
    health: 100,
    heatEnemy(enemy) {
        return enemy.health -= 10
    }

};
const enemy = {
    name: 'Joker',
    health: 100,
    heatHero(hero) {
        return hero.health -= 10
    }
}


function startGame (heroPlayer, enemyPlayer) {

    while (enemy.health > 0 && hero.health > 0) {
       let whoHeat = getRandomNumberInRange(0, 1)
        if (whoHeat === 0) {
            hero.heatEnemy(enemy)
        } else if (whoHeat === 1) {
            enemy.heatHero(hero)
        }
    }

    if (enemy.health > 0) {
        console.log(`${enemy.name} победил! У него осталось ${enemy.health} здоровья`)
    } else if (hero.health > 0) {
        console.log(`${hero.name} победил! У него осталось ${hero.health} здоровья`)
    }

}

startGame(hero, enemy)








