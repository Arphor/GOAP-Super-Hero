import {State} from './state'

export interface Action {
  name: string
  precond: State
  effects: State
  cost: number
}

const hide: Action = {
  name: 'hide',
  precond: {
    hidden: false,
    fighting: false,
  },
  effects: {
    hidden: true,
  },
  cost: 1,
}

const suitUp: Action = {
  name: 'suit up',
  precond: {
    hidden: true,
    masked: false,
    enemyAttacking: true,
  },
  effects: {
    masked: true,
  },
  cost: 1,
}

const wander: Action = {
  name: 'wander',
  precond: {
    hasTarget: false,
    enemyAttacking: true,
  },
  effects: {
    hasTarget: true,
    hide: false,
  },
  cost: 1,
}

const approach: Action = {
  name: 'approach',
  precond: {
    enemyAttacking: true,
    isWeak: false,
    hasTarget: true,
    closeToEnemy: false,
  },
  effects: {
    closeToEnemy: true,
    hide: false,
  },
  cost: 1,
}

const drawWeapon: Action = {
  name: 'draw Weapon',
  precond: {
    masked: true,
    isWeak: false,
    holdingWeapon: false,
  },
  effects: {
    holdingWeapon: true,
  },
  cost: 1,
}

const figth: Action = {
  name: 'figth',
  precond: {
    hasTarget: true,
    closeToEnemy: true,
    isWeak: false,
    holdingWeapon: true,
    enemyCaptured: false,
  },
  effects: {
    enemyCaptured: true,
    enemyAttacking: false,
  },
  cost: 1,
}

const removeMask: Action = {
  name: 'remove mask',
  precond: {
    hidden: true,
    masked: true,
  },
  effects: {
    masked: false,
    holdingWeapon: false,
  },
  cost: 1,
}

const recover: Action = {
  name: 'recover',
  precond: {
    isWeak: true,
    hidden: true,
  },
  effects: {
    isWeak: false,
  },
  cost: 1,
}

export const actions = [
  hide,
  suitUp,
  recover,
  drawWeapon,
  wander,
  approach,
  figth,
  removeMask,
]
