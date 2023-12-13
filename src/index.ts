import {actions} from './actions'
import {Npc} from './npc'
import {State} from './state'


const state: State = {
  hidden: false,
  masked: false,
  hasTarget: false,
  isWeak: false,
  fighting: false,
  enemyAttacking: true,
  closeToEnemy: false,
  holdingWeapon: false,
  enemyCaptured: false,
}

const goal: State = {
  masked: false,
  enemyAttacking: false,
}

const superHero = new Npc(state, actions)
superHero.goal = goal

console.log(superHero.state)

while (superHero.plan.length > 0) {
  superHero.execute()
}

console.log(superHero.state)
