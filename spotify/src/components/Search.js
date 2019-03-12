import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import Song from './Song';
import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '' 
          };
    }

    matchSongs(state, value) {
        return state.track_name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  }

  render() {
    console.log(this.props.songs)
    return (
        <div>
            <h2 className="searchTitle">Search by Artist or Track Name</h2>
            <div style = {{ marginTop: 50, marginBottom: 50}}>
            <Autocomplete
                value={ this.state.value }
                inputProps={{ id: 'states-autocomplete' }}
                wrapperStyle={{ position: 'relative', display: 'inline-block' }}
                items={this.props.songs}
                getItemValue={ item => item.track_name }
                shouldItemRender={ this.matchSongs }
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
                    key={ item.track_name } >
                    { item.track_name }
                    </div>
                )}
                />
                <Song
                    trackInfo={this.state.value}
                    songsArray={this.props.songs}
                />
            </div>
        </div>
      );
    }
  }

export default Search;