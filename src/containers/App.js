import React from 'react';
import { connect } from 'react-redux';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';

import { setSearchField, setRequestKitties } from '../actions';

import './App.css'



const mapStateToProps = (state) => {
  return {
    searchField: state.searchKitties.searchField,
    kitties: state.requestKitties.kitties,
    isPending: state.requestKitties.isPending,
    error: state.requestKitties.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestKitties: () => dispatch(setRequestKitties())
  }
}
  
class App extends React.Component {

  componentDidMount() {
    this.props.onRequestKitties();
  }

  render() {
    const { searchField, onSearchChange, kitties, isPending } = this.props;
    const filteredKitties = kitties.filter(kitty => {
      return kitty.name.toLowerCase().includes(searchField.toLowerCase());
    })
    
    return isPending ?
      <h1 className='tc'>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Kittyfriends</h1>
          <SearchBox searchChange = { onSearchChange }/>
          <br />
          <Scroll>
            <ErrorBoundry>
              <CardList kitties = { filteredKitties } /> 
            </ErrorBoundry>
          </Scroll>
        </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);