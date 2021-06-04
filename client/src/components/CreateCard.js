import { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'
import PropTypes from 'prop-types'

CreateCard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default function CreateCard({ onSubmit }) {
  const [isDisabled, setIsDisabled] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const [textareaValue, setTextareaValue] = useState('')
  useEffect(() => {
    validateForm()
  }, [inputValue, textareaValue])

  return (
    <Wrapper>
      <ButtonBack>&lt; back</ButtonBack>
      <form onSubmit={handleSubmit}>
        <label>
          Text
          <textarea
            name="text"
            value={isDisabled.text}
            onChange={handleTextareaChange}
            rows="4"
            cols="20"
          ></textarea>
        </label>
        <label>
          Author
          <input
            name="author"
            value={isDisabled.author}
            onChange={handleInputChange}
            type="text"
          ></input>
        </label>
        <Button disabled={isDisabled}>Create card</Button>
      </form>
    </Wrapper>
  )

  function validateForm() {
    const disableButton =
      inputValue.trim().length === 0 || textareaValue.trim().length === 0
    setIsDisabled(disableButton)
  }

  function handleInputChange(event) {
    const value = event.target.value
    setInputValue(value)
  }

  function handleTextareaChange(event) {
    const value = event.target.value
    setTextareaValue(value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const textarea = form.elements.text
    const input = form.elements.author
    const text = textarea.value
    const author = input.value
    onSubmit(text, author)
    form.reset()
    setIsDisabled(true)
    textarea.focus()
  }
}

const Wrapper = styled.section`
  display: grid;
  gap: 20px;

  form {
    display: grid;
    gap: 20px;
  }

  label {
    display: grid;
    gap: 5px;
  }
`

const ButtonBack = styled(Button)`
  width: fit-content;
  border: 0;
`
