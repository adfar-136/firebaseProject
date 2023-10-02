import React from 'react'

export default function WrappedComp(WrappedComponents) {
  return function WrappedComp(){
    return <WrappedComponents/>
  }
}
