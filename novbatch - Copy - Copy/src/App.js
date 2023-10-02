import React from 'react'
// import Color from './Redux2/Color'
import { useSelector } from 'react-redux'
import Counterrrrrrr from './ReduxThunk/Counterrrrrrr'
import Thunkbuttons from './ReduxThunk/Thunkbuttons'

export default function App() {
  // const backgroundColor = useSelector((state)=>state.backgroundColor)
  return (
    <div>
      <Counterrrrrrr/>
      <Thunkbuttons/>
      {/* <Color color="red"/>
      <Color color="blue"/>
      <Color color="yellow"/>
      <Color color="green"/>
      <Color color="pink"/>
      <Color color="black"/>
      <Color color="orange"/>
      <Color color="aqua"/>
      <Color color="khaki"/> */}
    </div>
  )
}
