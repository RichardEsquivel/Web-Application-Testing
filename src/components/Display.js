import React from 'react';

//Display will have props passed in to Display balls/strikes etc and will just be a presentational component and none of the logic will take place here for balls, strikes, etc.
const Display = (props) => {
	return (
		<div>
			<div>Balls: {props.balls}</div>
			<div>Strikes: {props.strikes}</div>
			<div>Fouls: {props.fouls}</div>
			<div>Hits: {props.hits}</div>
		</div>
	);

}

export default Display;