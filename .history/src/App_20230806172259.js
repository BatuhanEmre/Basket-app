import { Container, SimpleGrid  } from "@mantine/core";
import Card from "./components/Card";
import { useState } from "react";
import { List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';

const storeItems = [
  {
    name: "A",
    price: 20,
  },
  {
    name: "B",
    price: 25,
  },
  {
    name: "C",
    price: 30,
  },
];

function App() {

  const [basketItems,setBasketItems] = useState([])
   

  return (
    <div className="App">
      <Container>
        <SimpleGrid cols={3}>
          {storeItems.map(({ name }) => {
            return (
              <Card
                key={name}
                name={name}
                onAdd={() => console.log("ekleme")}
              />
            );
          })}
        </SimpleGrid>

        <List
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
      <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconCircleDashed size="1rem" />
          </ThemeIcon>
        }
      >
        Submit a pull request once you are done
      </List.Item>
    </List>


      </Container>
    </div>
  );
}

export default App;
