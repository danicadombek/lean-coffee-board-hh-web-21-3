import {render, screen} from '@testing-library/react'
  import CreateCard from './CreateCard'
    
  describe('CreateCard', () => {
      it('renders', () => {
          render(<CreateCard />)
          expect(screen.getByText('CreateCard')).toBeInTheDocument()
      })
  })
        