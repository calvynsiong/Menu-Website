import React from 'react';
import { MenuSection, MenuItem, Photo, ItemHeader } from './Styles/Menu';

const Menu = ({ items }) => {
	return (
		<MenuSection>
			{items.map((menuItem) => {
				const { id, title, img, desc , price} = menuItem;
				return (
					<MenuItem key={id}>
						<Photo src={img} alt={title} />
						<div>
							<ItemHeader>
                                <h4> {title}</h4>
                                <h4>$ {price} </h4>
                            </ItemHeader>
                            <p>{desc}</p>
						</div>
					</MenuItem>
				);
			})}
		</MenuSection>
	);
};

export default Menu;
