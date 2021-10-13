import React, { useState, useContext } from 'react';
import ItemsContext from '../../../context/items-context';

const Add = () => {
	const itemsCtx = useContext(ItemsContext)
	const [name, setName] = useState('')

	const submit = (e) => {
		e.preventDefault()
		const _id = Math.floor(Math.random() * 10000) + 1
		const item = {_id, name}
		itemsCtx.addItem(item)
	}

	return (
		<div>
			<form onSubmit={submit}>
				<div>
					<input type="text" placeholder="Add name" value={name} onChange={(e) => setName(e.target.value)} />
				</div>
				<div>
					<input type="submit" value="Save"/>
				</div>
			</form>
		</div>
	)
}

export default Add