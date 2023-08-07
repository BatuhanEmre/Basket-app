import { Container, Drawer, Group, Indicator, Input, SimpleGrid  } from "@mantine/core";
import Card from "./components/Card";
import { useState } from "react";
import { List,Badge } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { TbBasketFilled } from "react-icons/tb";




const storeItems = [
  {
    id:100,
    name: "Çanta",
    src:"/assets/images/bag.jpg",
    price: 20,
  },
  {
    id:101,
    name: "Oyuncak Araba",
    src:"/assets/images/car.jpg",
    price: 20,
  },
  {
    id:102,
    name: "Spor Ayakkabı",
    src:"/assets/images/shoe.jpg",
    price: 20,
  },
  {
    id:103,
    name: "Klavye",
    src:"/assets/images/keyboard.jpg",
    price: 20,
  },

  {
    id:104,
    name: "Müzik Sistemi",
    src:"/assets/images/speaker.jpg",
    price: 20,
  },
  {
    id:105,
    name: "Kulaklık",
    src:"/assets/images/headphones.jpg",
    price: 20,
  },

];

function App() {

  const [basketItems,setBasketItems] = useState([])
  const [searchValue,setSearchValue] = useState("")
  const [opened,setOpened] = useState(false)

  const filteredItems = storeItems.filter((item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >=0 );


  const addToBasket = ({id,name}) => {
    const basketIndex = basketItems.findIndex(item => item.id === id)
    if(basketIndex>=0){
      let _basketItems=[...basketItems];
       _basketItems[basketIndex].count+=1;
      setBasketItems(_basketItems)
    }else{
      setBasketItems([...basketItems,{id,name,count:1}])
    }

  }
  



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
          {filteredItems.map(({ id,name,src }) => {
            return (
              <Card
                key={name}
                name={name}
                src={src}
                onAdd={() => addToBasket({id,name})}
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
        <Badge color="teal" size={24} radius="xl">
          <IconCircleCheck size="1rem" />
        </Badge>
      }
    >
      
      {
        basketItems.map(({name,index,count}) => (
          <List.Item key={index}>

            <Group>  
             {name}   
            <Badge color="dark" variant="filled">{count}</Badge>  
             </Group>
              </List.Item>
        ))
      }


    </List>
    </Drawer>


      </Container>
    </div>
  );
}

export default App;
