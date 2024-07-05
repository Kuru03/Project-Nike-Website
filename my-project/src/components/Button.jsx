import React from 'react'
import PropTypes from 'prop-types'
import ButtonImg from './ButtonImg'

const Button = (props) => {
  return (
    <button className={`  shadow-sm gap-2 leading-none ${props.BackgroundColor ? `${props.BackgroundColor} ${props.TextColor} ${props.BorderColor} ${props.ShadowColor}`:"bg-coral-red text-white border-coral-red shadow-pink-500"} rounded-full   flex justify-center items-center text-xl font-montserrat px-7 py-4 my-2 ${props.fullWidth && "w-full"}`}>
      {props.text}
      <ButtonImg src={props.src}/>
    </button>
  )
}

export default Button
Button.propTypes = {
  text: PropTypes.string.isRequired
};