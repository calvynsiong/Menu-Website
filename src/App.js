import React, { useState } from 'react';
import Menu from './Menu';
import Category from './Category';
import Footer from './Footer';
import items from './data';
import { ThemeProvider } from "styled-components";
import { Application, Section, Title, Underline } from './Styles/App';

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {

  cons


	const [menuItems, setMenuItems] = useState(items);
	const [category, setCategory] = useState(allCategories);
	// filter an array of newItems only if the "category" string passed equals the category of the items in the old array
	const filterItems = (category) => {
		if (category === 'all') {
			setMenuItems(items);
			return;
		}
		const newItems = items.filter((item) => item.category === category);
		setMenuItems(newItems);
	};

	return (
		<ThemeProvider theme={theme}>
        <Application>
          <Section>
            <Title>
              <h2>Calvyn's Malaysian Menu</h2>
              <Underline></Underline>
            </Title>
            <Category filterItems={filterItems} category={category}></Category>
                <Menu items={menuItems}></Menu>
                <Footer></Footer>
          </Section>
        </Application>
    </ThemeProvider>
	);
}

export default App;
