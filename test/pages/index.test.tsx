import React from 'react'
import { render, fireEvent } from '../testUtils'
import { Home } from '../../pages/index'
import database from '../__mocks__/database'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home databaseRows={database.getDatabase()} />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('clicking button triggers alert', () => {
    const { getByText } = render(<Home databaseRows={database.getDatabase()}  />, {})
    window.alert = jest.fn()
    fireEvent.click(getByText('Test Button'))
    expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
  })
})
