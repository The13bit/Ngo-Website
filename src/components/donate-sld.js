import React from 'react'

import PropTypes from 'prop-types'

import './Styles/donate-sld.css'

const DonateSLD = (props) => {
  return (
    <div className={`donate-sld-container ${props.rootClassName} `}>
      <div className="donate-sld-container1">
        <span className="donate-sld-text">{props.text2}</span>
        <div className="donate-sld-container2">
          <button type="button" className="donate-sld-button button">
            {props.button}
          </button>
          <button type="button" className="donate-sld-button1 button">
            {props.button2}
          </button>
          <button type="button" className="donate-sld-button2 button">
            {props.button3}
          </button>
        </div>
        <div className="donate-sld-container3">
          <input
            type="number"
            min="250"
            placeholder="Amount"
            className="input"
          />
          <span className="">{props.text}</span>
          <button type="button" className="donate-sld-button3 button">
            {props.button1}
          </button>
          <span className="donate-sld-text2">{props.text1}</span>
        </div>
      </div>
    </div>
  )
}

DonateSLD.defaultProps = {
  button1: 'Next',
  button3: 'Rs.1000',
  rootClassName: '',
  text1:
    'All Donations to HelpAge India are 50% Tax Exempt under section 80G of IT Act, 1961',
  text: 'Minimum Amount should be Rs. 250/-',
  button2: 'Rs.500',
  text2: 'Donate',
  button: 'Rs.250',
}

DonateSLD.propTypes = {
  button1: PropTypes.string,
  button3: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  button2: PropTypes.string,
  text2: PropTypes.string,
  button: PropTypes.string,
}

export default DonateSLD