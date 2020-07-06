import React, { Component } from 'react'
import ConfirmRouteContainer from '../containers/ConfirmRouteContainer'
import ResultsContainer from '../containers/ResultsContainer'
import SearchContainer from '../containers/SearchContainer'
import  { Switch, Route } from 'react-router'

const Card = (props) => {
  return <div  style={{padding: 100, backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>{props.children}</div>
}

export default Card;