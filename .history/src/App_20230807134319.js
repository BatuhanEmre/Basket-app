import { Container, Input, SimpleGrid  } from "@mantine/core";
import Card from "./components/Card";
import { useState } from "react";
import { List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';

const storeItems = [
  {
    name: "Ütü Temizlik",
    src:"bag.jpg",
    price: 20,
  },
  {
    name: "Ütü Temizlik",
    src:"car.jpg",
    price: 20,
  },
  {
    name: "Ütü Temizlik",
    src:"headphones.jpg",
    price: 20,
  },
  {
    name: "Ütü Temizlik",
    src:"keyboard.jpg",
    price: 20,
  },
  {
    name: "Ütü Temizlik",
    src:"shoe.jpg",
    price: 20,
  },
  {
    name: "Ütü Temizlik",
    src:"speaker.jpg",
    price: 20,
  },

];

function App() {

  const [basketItems,setBasketItems] = useState([])
  const [searchValue,setSearchValue] = useState("")
   
  const filteredItems = basketItems.filter((item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >=0 );

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
          {searchValue}

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
