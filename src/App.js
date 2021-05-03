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

  const LightTheme = {
    background: "white",
    text: "black"
  }
  const DarkTheme = {
    background: "black",
    text: "white"
  }

  const themes = {
    light: LightTheme,
    dark: DarkTheme,

  }

  const [theme,setTheme] = useState("light")
  
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
    // Theme Provider passes in props that can be used anywhere in the styled components that it wraps
		<ThemeProvider theme={themes[theme]}>
        <Application theme={themes[theme]}>
          <Section>
            <Title>
              <h2>Calvyn's Malaysian Menu</h2>
              <Underline></Underline>
            </Title>
            <Category filterItems={filterItems} category={category} theme={theme} setTheme={setTheme} ></Category>
                <Menu items={menuItems}></Menu>
                <Footer></Footer>
          </Section>
        </Application>
    </ThemeProvider>
	);
}

export default App;
