import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButtonWrapper = styled.button`
  padding: 0.35em 1.2em;
  border: 0.1em solid black;
  border-radius: 0.12em;
  color: black;
  text-align: center;
  background-color: ${props => (props.isDisabled ? '#ccc' : 'white')};
`

Button.propTypes = {
  isDisabled: PropTypes.bool,
  children: PropTypes.node,
}

function Button(props) {
  return <ButtonWrapper {...props} />
}

export default Button
