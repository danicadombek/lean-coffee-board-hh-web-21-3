import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButtonWrapper = styled.button`
  padding: 0.35em 1.2em;
  border-radius: 0.12em;
  text-align: center;
  background-color: ${props => (props.isDisabled ? '#ccc' : 'white')};
  color: ${props => (props.isDisabled ? 'white' : 'black')};
  border: ${props =>
    props.isDisabled ? '0.1em solid white' : '0.1em solid black'};
`

Button.propTypes = {
  isDisabled: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
}

function Button(props) {
  return <ButtonWrapper {...props} />
}

export default Button
