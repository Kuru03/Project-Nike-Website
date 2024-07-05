import React from 'react'
import PropTypes from 'prop-types'

const ButtonImg = (props) => {
    if (props.src) {
        return (
          <div>
            <img src={props.src} className=" ml-2 rounded-full w-5 h-5 bg-white" alt="Your Image"/>
          </div>
        )
      } else {
        return (
          <div>
          </div>
        )
      }
}

export default ButtonImg
