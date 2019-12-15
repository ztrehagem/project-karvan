import * as consts from '@/consts'
import * as vsm from 'vuex-smart-module'

class State {
  ap = consts.AP_MAX
}

class Mutations extends vsm.Mutations<State> {
  consumeAp(amount: number) {
    if (this.state.ap < amount) throw new Error('not enough AP')
    this.state.ap -= amount
  }
}

export default new vsm.Module({
  state: State,
  mutations: Mutations,
})
