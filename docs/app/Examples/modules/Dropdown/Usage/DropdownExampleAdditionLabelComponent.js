import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'English', text: 'English', value: 'English' },
  { key: 'French', text: 'French', value: 'French' },
  { key: 'Spanish', text: 'Spanish', value: 'Spanish' },
  { key: 'German', text: 'German', value: 'German' },
  { key: 'Chinese', text: 'Chinese', value: 'Chinese' },
]

class DropdownExampleAdditionLabelComponent extends Component {
  state = { options }

  handleAddition = (e, { value }) => {
    this.setState({
      options: [{ text: value, value }, ...this.state.options],
    })
  }

  handleChange = (e, { value }) => this.setState({ currentValue: value })

  render() {
    const { currentValue } = this.state

    return (
      <Dropdown
        options={this.state.options}
        placeholder='Choose Language'
        search
        selection
        fluid
        allowAdditions
        additionLabel={<i style={{ color: 'red' }}>Custom Language: </i>}
        value={currentValue}
        onAddItem={this.handleAddition}
        onChange={this.handleChange}
      />
    )
  }
}

export default DropdownExampleAdditionLabelComponent
