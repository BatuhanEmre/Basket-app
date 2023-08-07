import { Container, Group, Input, SimpleGrid  } from "@mantine/core";
import Card from "./components/Card";
import { useState } from "react";
import { List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';
import { Button } from '@mantine/core';


const storeItems = [
  {
    name: "Çanta",
    src:"/assets/images/bag.jpg",
    price: 20,
  },
  {
    name: "Oyuncak Araba",
    src:"/assets/images/car.jpg",
    price: 20,
  },
  {
    name: "Spor Ayakkabı",
    src:"/assets/images/shoe.jpg",
    price: 20,
  },
  {
    name: "Klavye",
    src:"/assets/images/keyboard.jpg",
    price: 20,
  },

  {
    name: "Müzik Sistemi",
    src:"/assets/images/speaker.jpg",
    price: 20,
  },
  {
    name: "Kulaklık",
    src:"/assets/images/headphones.jpg",
    price: 20,
  },

];

function App() {

  const [basketItems,setBasketItems] = useState([])
  const [searchValue,setSearchValue] = useState("")
  
  const filteredItems = storeItems.filter((item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >=0 );

  return (
    <div className="App">
      <Container>
        <Group align="end">
      <Input.Wrapper label="Search">
       <Input onChange={(e) => setSearchValue(e.target.value)}  />
      </Input.Wrapper> 
      <Button color="cyan"> Settings</Button>
      <br/>
      </Group>
        <SimpleGrid cols={3} className="store">
          {filteredItems.map(({ name,src }) => {
            return (
              <Card
                key={name}
                name={name}
                src={src}
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
      
      {
        basketItems.map(({name,index}) => (
          <List.Item key={index}> {name} </List.Item>
        ))
      }


    </List>


      </Container>
    </div>
  );
}

export default App;
