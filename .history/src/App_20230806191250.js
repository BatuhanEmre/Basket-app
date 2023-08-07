import { Container, Input, SimpleGrid  } from "@mantine/core";
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
  let [searchValue,setSearchValue] = useState("")
   
  let filteredItems = basketItems.filter((item) => item.name.indexOf(searchValue) >=0 );

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

        <Input.Wrapper label="Input label">
       <Input onChange={(e) => setSearchValue(e.target.value)} />
      </Input.Wrapper>

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
      
      {
        filteredItems.map(({name,index}) => (
          <List.Item key={index}> {name} </List.Item>
        ))
      }


    </List>


      </Container>
    </div>
  );
}

export default App;
