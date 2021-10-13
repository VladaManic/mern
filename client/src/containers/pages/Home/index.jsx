import React, {useContext} from 'react';
import ItemsContext from '../../../context/items-context';
import Delete from '../../../shared/components/Delete';

const Home = () => {
	const itemsCtx = useContext(ItemsContext)

	return (
		<div>
			{itemsCtx.items.map((item) => (
				<div key={item._id}>
					<p>{item.name}</p>
					<Delete id={item._id} />
				</div>
			))}
		</div>
	)
}

export default Home