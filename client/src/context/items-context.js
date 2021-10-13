import { createContext, useState } from 'react';
//import axios from 'axios';

const ItemsContext = createContext({
	items: [],
	getItems: () => {},
	addItem: (item) => {},
	deleteItem: (id) => {},
});

export function ItemsContextProvider(props){
	const [currentItems, setCurrentItems] = useState([{'_id': 1, 'name': 'Milk'},{'_id': 2, 'name': 'Water'}])

	const getItemsHandler = () => {

	}

	const addItemHandler = (currentItem) => {
		setCurrentItems((prevCurrentItems) => {
			return prevCurrentItems.concat(currentItem);
		});
	}

	const deleteItemHandler = (id) => {
		setCurrentItems((prevCurrentItems) => {
			return prevCurrentItems.filter(item => item._id !== id);
		});
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