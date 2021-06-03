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

export const ButtonDisabled = Template.bind({})
ButtonDisabled.args = {
  children: 'Create card',
  isDisabled: true,
}
