import { Container, Drawer, Group, Indicator, Input, SimpleGrid  } from "@mantine/core";
import Card from "./components/Card";
import { useState } from "react";
import { List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { TbBasketFilled } from "react-icons/tb";




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
  const [opened,setOpened] = useState(false)
/*   const [opened, { open, close }] = useDisclosure(false); */

  
  const filteredItems = storeItems.filter((item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >=0 );

  return (
    <div className="App">
      <Container>
        <Group align="end">
      <Input.Wrapper label="Search">
       <Input value={searchValue} onChange={(e) => setSearchValue(e.target.value)}  />
      </Input.Wrapper> 
      <Button color="cyan" onClick={() => setSearchValue("") } > Clear</Button>

      <Indicator label={basketItems.length} color="red" size={15}>
        <Button color="cyan" onClick={() => setOpened(true)}>
        <TbBasketFilled  style={{ fontSize: '24px' }}/> 
        </Button>
  

      </Indicator>

      </Group> <br/>
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

      <Drawer position="right" padding="md" size="xs" opened={opened} onClose={() => setOpened(false)} title="Sepetiniz">


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
    </Drawer>


      </Container>
    </div>
  );
}

export default App;
