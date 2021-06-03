import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button', () => {
  it('contains a text', () => {
    render(<Button onClick={() => {}}>Create card</Button>)

    const button = screen.getByRole('button', { name: 'Create card' })
    expect(button).toBeInTheDocument()
  })

  it('calls onClick', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Create card</Button>)

    const button = screen.getByRole('button', { name: 'Create card' })
    userEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
