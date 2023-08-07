import { Container, SimpleGrid  } from "@mantine/core";
import Card from "./components/Card";
import { useState } from "react";
import { List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';

const storeItems = [
  {
    name: "Ütü",
    price: 20,
  },
  {
    name: "Basket Topu",
    price: 25,
  },
  {
    name: "Çikolata",
    price: 30,
  },
];

function App() {

  const [basketItems,setBasketItems] = useState([])
   

  return (
    <div className="App">
      <Container>
        <SimpleGrid cols={3} className="store">
          {storeItems.map(({ name }) => {
            return (
              <Card
                key={name}
                name={name}
                onAdd={() => setBasketItems([...basketItems,{name}])}
              />
            );
          })}
        </SimpleGrid>

        <List className="list"
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IconCircleCheck size="1rem" />
        </ThemeIcon>
      }
    >
      <List.Item>Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item>To start development server run npm start command</List.Item>
      <List.Item>Run tests to make sure your changes do not break the build</List.Item>
      
      
      {
        basketItems.map(({price}) => (
          <List.Item> {price} </List.Item>
        ))
      }


    </List>


      </Container>
    </div>
  );
}

export default App;
