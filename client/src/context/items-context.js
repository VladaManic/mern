import { createContext, useState } from 'react';
import axios from 'axios';

const ItemsContext = createContext({
	items: [],
	getItems: () => {},
	addItem: (item) => {},
	deleteItem: (id) => {},
});

export function ItemsContextProvider(props){
	const [currentItems, setCurrentItems] = useState([])

	const getItemsHandler = () => {
		axios.get('/api/items').then((res) => {
			setCurrentItems(res.data)
		})
	}

	const addItemHandler = (item) => {
		axios.post('/api/items', item).then((res) => {
			setCurrentItems((prevCurrentItems) => {
				return prevCurrentItems.concat(res.data)
			})
		})
	}

	const deleteItemHandler = (id) => {
		axios.delete(`/api/items/${id}`).then((res) => {
			setCurrentItems((prevCurrentItems) => {
				return prevCurrentItems.filter(item => item._id !== res.data._id)
			})
		})
	}

	const context = {
		items: currentItems,
		getItems: getItemsHandler,
		addItem: addItemHandler,
		deleteItem: deleteItemHandler,
	} 

	return (
		<ItemsContext.Provider value={context}>
			{props.children}
		</ItemsContext.Provider>
	);
}

export default ItemsContext;