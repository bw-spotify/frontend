import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import { getSongs, matchSongs } from '../data';
import './Search.css';

class Search extends Component {

  state = {
      value: '' 
    };

  render() {
    return (
      <div style = {{ marginTop: 50, marginBottom: 50 }}>
        <Autocomplete
          value={ this.state.value }
          inputProps={{ id: 'states-autocomplete' }}
          wrapperStyle={{ position: 'relative', display: 'inline-block' }}
          items={ getSongs() }
          getItemValue={ item => item.track_name }
          shouldItemRender={ matchSongs }
          onChange={(event, value) => this.setState({ value }) }
          onSelect={ value => this.setState({ value }) }
          renderMenu={ children => (
            <div className = "menu">
              { children }
            </div>
          )}
          renderItem={ (item, isHighlighted) => (
            <div
              className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
              key={ item.artist_name } >
              { item.track_name }
            </div>
          )}
        />
      </div>
      );
    }
  }

export default Search;