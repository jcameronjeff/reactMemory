import React from "react";
import {GridList, GridTile} from 'material-ui/GridList';
import PropTypes from 'prop-types';

const SearchResults = props => (
    <GridList cols={3}>

        {props
            .trucks
            .map(truck => (
                <GridTile key={truck.id}>
                    <img
                        alt={truck.id}
                        onClick={props.handleClickPic}
                        src={truck.largeImageURL}
                        height='300px'/>
                </GridTile>
            ))}

    </GridList>
);

SearchResults.propTypes = {
    trucks: PropTypes.array.isRequired
}
export default SearchResults;
