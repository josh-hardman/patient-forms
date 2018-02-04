import React, { Component } from 'react'
import { loadFormConfig } from '../config'
import Text from '../components/Text'
import Email from '../components/Email'
import v4 from 'uuid'
import styled from 'styled-components'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchFormData } from '../modules/form'

const Wrapper = styled.div`padding: 8px;`

class Form extends Component {
  state = {}

  componentDidMount () {
    this.props.fetchFormData()
  }

  updateValue = e => {
    const id = e.target.getAttribute('data-index')
    const label = e.target.getAttribute('data-label')
    const value = e.target.value
    this.setState({
      [id]: {
        label,
        value
      }
    })
  }

  submitForm = e => {
    e.preventDefault()
    console.log(this.state)
  }

  getValue = i => (this.state[i] && this.state[i].value) || ''

  render () {
    const { match: { params: { practice, form } } } = this.props
    const config = loadFormConfig(practice, form)
    const id = v4()

    return (
      <Wrapper>
        <form className='form-row' onSubmit={this.submitForm}>
          {config.data.map(({ type, ...rest }, i) => {
            if (type === 'text' || type === 'date') {
              return (
                <Text
                  key={i}
                  index={i}
                  id={id}
                  value={this.getValue(i)}
                  onChange={this.updateValue}
                  valid
                  type={type}
                  {...rest}
                />
              )
            }
            if (type === 'email') {
              return (
                <Email
                  key={i}
                  index={i}
                  id={id}
                  value={this.getValue(i)}
                  onChange={this.updateValue}
                  {...rest}
                />
              )
            }

            return null
          })}
          <button className='btn btn-primary' type='submit'>
            Submit
          </button>
        </form>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchFormData,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(null, mapDispatchToProps)(Form)
