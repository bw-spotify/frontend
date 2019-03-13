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

    componentDidMount() {
        
      }

  matchSongs(state, value) {
    return state.track_name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  }
  
    // getSong() {
    //     let song = {}
    //     this.props.searchedSongs.forEach(s => {
    //         if(s.track_name === this.state.value) {
    //             song = s
    //         }
    //     })
    //     return song
    // }

  handleChange = (e, v) => {
    this.setState({
      value: v
    })
    if(v.length > 3) {
      this.props.searchSongs(v)
    }
  }

  render() {
    return (
        <div>
            <h2 className="searchTitle">Search by Artist or Track Name</h2>
            <div style = {{ marginTop: 50, marginBottom: 50}}>
            <Autocomplete
                value={ this.state.value }
                inputProps={{ id: 'states-autocomplete' }}
                wrapperStyle={{ position: 'relative', display: 'inline-block' }}
                items={this.props.searchedSongs}
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
                    <div
                      className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
                      key={ item.id } >
                      <Link to={`/songs/${item.id}`}>{ item.track_name }</Link>
                    </div>
                )}
                />
                {/* <Song
                    song={this.getSong()}
                /> */}
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