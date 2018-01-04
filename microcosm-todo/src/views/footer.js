import React from 'react'
import FilterLink from '../presenters/filterLink'

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="All" />
    {", "}
    <FilterLink filter="Active" />
    {", "}
    <FilterLink filter="Completed" />
  </p>
)

export default Footer
