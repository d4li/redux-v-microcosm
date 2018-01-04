import React from 'react'
import Presenter from 'microcosm/addons/presenter'
import ActionButton from 'microcosm/addons/action-button'
import { setFilter } from '../actions'

class FilterLink extends Presenter {
  getModel () {
    return {
      currentFilter: data => data.currentFilter
    }
  }

  render () {
    let { currentFilter } = this.model
    let { filter } = this.props

    if (currentFilter === filter) {
      return <span>{filter}</span>
    } else {
      return (
        <ActionButton action={setFilter} value={filter} tag='a' href='#'>
          {filter}
        </ActionButton>
      )
    }
  }
}

export default FilterLink
