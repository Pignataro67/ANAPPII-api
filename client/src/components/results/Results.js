import React, { Component} from 'react';
import Result from './Result';
import Button from '../Button';
import Loader from 'react-loaders';

class Results extends Component {

  componentDidMount() {
    if(this.props.resultsReducer.isFetchingUberEstimate) {
        return <Loader type="line-scale" active />
    }
  }

  render() {

    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Result header={"Uber"} estimates={this.props.resultsReducer.uberEstimates} buttonTitle={"Take me to Uber"}/> 
        <Result header={"Lyft"} estimates={this.props.resultsReducer.lyftEstimates} buttonTitle={"Take me to Lyft"}/>
        <Link to='/'>
          <Button buttonTitle="Let's Start Over."/>
        </Link>
      </div>
    );
  }
}

export default Results;