import React from 'react';
import { Link } from 'react-router-dom';
import PlayerAPI from '../PlayerAPI';

const FullRoster = () => (
	<div>
		<ul>
			{
				PlayerAPI.all().map((player) => (
					<li key={ player.number }>
						<Link to={`/roster/${player.number}`}>{ player.name }</Link>
					</li>
				))
			}
		</ul>
	</div>
);

export default FullRoster;