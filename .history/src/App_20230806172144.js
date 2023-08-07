import { Container, SimpleGrid  } from "@mantine/core";
import Card from "./components/Card";
import { useState } from "react";

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
      </Container>
    </div>
  );
}

export default App;
