import { useState } from 'react';
import ItemCard from './Components/ItemCard/index';
import ContainerHouses from './Components/ContainerHouses/ContainerHouses';
import WrapperYellow from './components/WrapperYellow/WrapperYellow';
import Table from './components/Table/Table';
import TableRow from './components/Table/TableRow';
import TableHeader from './components/Table/TableHeader';

function App() {
  return (
    <>
      <div>
        <ContainerHouses />
        <Table
          render={(item) => (
            <TableRow>
              <div>{item.name}</div>
              <div>{item.price}</div>
            </TableRow>
          )}
          columns={["Nombre", "Precio"]}
          columnsRender={(column) => <TableHeader>{column}</TableHeader>}
          data={[
            { name: "Casa 1", price: 100000 },
            { name: "Casa 2", price: 200000 },
          ]}
        />
      </div>
    </>
  );
}

export default App;
