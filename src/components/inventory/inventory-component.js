import { useDispatch, useSelector } from 'react-redux';
import { sellInventory } from '../../coinSlice';
import InventoryItem from '../inventory/inventory-item/inventory-item-component';

const Inventory = () => {

    const inventoryContent = useSelector(state => state.amounts.inventoryContent);
    const dispatch = useDispatch();

    if (inventoryContent.length === 15) {
        dispatch(sellInventory());
    }


    return <div className="inventory-container container-slice">
        <div className="top-title">
            <h1>Inventory</h1>
        </div>
        <div className='fish-container'>
            <InventoryItem/>
        </div>
        <div className='bottom-container'>
            <button className='button sell-button'
            onClick={() => dispatch(sellInventory())}>
                <span>Sell</span>
            </button>
        </div>
    </div>;
};

export default Inventory;