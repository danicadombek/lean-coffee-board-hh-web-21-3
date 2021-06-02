import CreateCard from './CreateCard'
  export default {
      title: 'CreateCard',
      component: CreateCard
  }
    
  const Template = args => <CreateCard {...args} />
    
  export const Default = Template.bind({})
  Default.args = {}
        