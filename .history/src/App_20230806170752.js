import { Container, Stack } from '@mantine/core';
import Card from './components/Card'


const storeItems = [{
  name:"A",
  price:20
},
{
  name:"B",
  price:25
},
{
  name:"C",
  price:30
},]


function App() {
  return (
    <div className="App">
      
      <Container>

      <Stack>

      {
        storeItems.map((storeItem) => {
          return <Card/>
        })
      }

      </Stack>


      </Container>


    </div>
  );
}

export default App;
