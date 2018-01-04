import Microcosm from 'microcosm'
import Todos from './domains/todos'
import Filter from './domains/filter'

class Repo extends Microcosm {
  setup () {
    this.addDomain('todos', Todos)
    this.addDomain('currentFilter', Filter)
  }
}

export default Repo
