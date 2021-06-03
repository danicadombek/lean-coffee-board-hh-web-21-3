import Button from './Button'
export default {
  title: 'Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Create card',
}

export const isDisabled = Template.bind({})
isDisabled.args = {
  children: 'Create card',
  disabled: true,
}
