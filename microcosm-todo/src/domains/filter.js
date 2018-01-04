import { setFilter } from '../actions'

class Filter {
  getInitialState () {
    return "All"
  }

  setFilter (_state, newFilter) {
    return newFilter
  }

  register () {
    return {
      [setFilter] : this.setFilter
    }
  }
}

export default Filter
