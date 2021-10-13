import React, {useContext} from 'react'
import ItemsContext from '../../../context/items-context';

const Delete = (props) => {
	const itemsCtx = useContext(ItemsContext);

	const Delete = () => {
		itemsCtx.deleteItem(props.id);
	}

	return (
		<div>
			<button onClick={Delete}>Delete</button>
		</div>
	)
}

export default Delete
