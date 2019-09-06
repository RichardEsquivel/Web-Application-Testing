import React from 'react';

//Display will have props passed in to Display balls/strikes etc and will just be a presentational component and none of the logic will take place here for balls, strikes, etc.
const Display = (props) => {
	return (
		<div>
			<div>Strikes: {props.balls}</div>
			<div>Balls: {props.strikes}</div>
		</div>
	);

}

export default Display;