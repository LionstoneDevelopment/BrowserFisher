import { useSelector, useDispatch } from 'react-redux';
import { increaseInventorySize, increaseInventorySize2, buyFishVacuum } from '../../coinSlice';

const ItemStore = () => {

    const upgrades = useSelector(state => state.amounts.upgrades);
    const coinAmount = useSelector(state => state.amounts.coinAmount);
    const vacuumAmount = useSelector(state => state.amounts.upgrades[2].arrayAmount);
    const dispatch = useDispatch();
   

    const renderSwitch = (vacuumAmount) => {
        switch(vacuumAmount.length) {
            case 0:
                console.log('Vacuumamount' + vacuumAmount.length);
                return <div onClick={() => dispatch(buyFishVacuum()) }><span>Buy Fish Vacuum! {vacuumAmount.length}/3</span></div>;
            case 1:
                console.log('Vacuumamount' + vacuumAmount.length);
                return <div onClick={() => dispatch(buyFishVacuum()) }><span>Buy Fish Vacuum! {vacuumAmount.length}/3</span></div>;
            case 2:
                console.log('Vacuumamount' + vacuumAmount.length);
                return <div onClick={() => dispatch(buyFishVacuum()) }><span>Buy Fish Vacuum! {vacuumAmount.length}/3</span></div>;
            case 3:
                console.log('Vacuumamount' + vacuumAmount.length);
                return <div><span>Maximum Vacuums Reached!</span></div>;           
            default: break;
        } 
    }


    return <div className="itemstore-container container-slice">
        <div className="top-title">
            <h1>Item Store</h1>
        </div>
        <div className='stats-row'>
            <div className='total-coins'><img className="coin-img" alt="coin" src='https://www.iconpacks.net/icons/1/free-coin-icon-794-thumb.png'></img> <span>{coinAmount}</span></div>
        </div>
        <div className="upgrade-container">
            <div className="upgrade-item">
                { upgrades[0].inventoryUpgrade1 === false ? 
                <div onClick={() => dispatch(increaseInventorySize(15)) }><span>Increase Inventory Size</span></div> : 
                <div><span>Upgrade Bought!</span></div> }
            </div>
            <div className="upgrade-item">
                { upgrades[1].inventoryUpgrade2 === false ? 
                <div onClick={() => dispatch(increaseInventorySize2(27)) }><span>Increase Inventory Size More!</span></div> : 
                <div><span>Upgrade Bought!</span></div> }
            </div>
            <div className="upgrade-item">
               {renderSwitch(vacuumAmount)} 
            </div>
        </div>
    </div>;
};

export default ItemStore;