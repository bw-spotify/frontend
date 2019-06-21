import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import './Search.css';
import { connect } from 'react-redux'
import { searchSongs } from '../actions'
import { Link } from 'react-router-dom'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedSongs: [],
            value: '' 
          };
    }

  matchSongs(state, value) {
    return state.track_name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  }

  handleChange = (e, v) => {
    e.preventDefault()
    this.setState({
      value: v
    })
    this.props.searchSongs(v)
  }

  render() {
    return (
        <div id="search">
            <h2 className="searchTitle">SpotiFinder is a music recommendation engine designed to discover <br></br> the best music you've never heard.</h2>
            <div className='searchBar' style = {{ marginTop: 50, marginBottom: 50}}>
            <Autocomplete
                value={ this.state.value }
                inputProps={{ id: 'states-autocomplete' }}
                wrapperStyle={{ position: 'relative', display: 'inline-block' }}
                items={this.props.searchedSongs || []}
                getItemValue={ item => item.track_name }
                shouldItemRender={ this.matchSongs }
                onChange={(event, value) => this.handleChange(event, value) }
                // onSelect={ value => this.setState({ value }) }
                renderMenu={ children => (
                    <div className = "menu">
                        { children }
                    </div>
                )}
                renderItem={ (item, isHighlighted) => (
                  <Link to={`/songs/${item.id}`}>
                    <div className={`item ${isHighlighted ? 'item-highlighted' : ''}`} key={ item.id } >
                      { item.track_name }
                    </div>
                  </Link>
                )}
                />
               <p className="searchText">Search by <em>Artist</em> or <em>Track Name</em></p>

            </div>
        </div>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      searchedSongs: state.searchedSongs,
    }
  }

export default connect(mapStateToProps, { searchSongs })(Search);