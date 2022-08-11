import FishArea from './components/fishArea/fishArea-component';
import Inventory from './components/inventory/inventory-component';
import ItemStore from './components/itemStore/itemStore-component';

import './App.css';
import './components/fishArea/fishArea-component.css';
import './components/inventory/inventory-component.css';
import './components/itemStore/itemStore-component.css';


const App = () => {
  return (
    <div className="App">
      <FishArea/>
      <Inventory/>
      <ItemStore/>
    </div>
  );
}

export default App;
