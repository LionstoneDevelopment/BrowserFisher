import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    coinAmount: 0,
    fishCaught: 0,
    inventoryContent: [],
    inventorySize: 7,
    upgrades: [{
        inventoryUpgrade1: false,
        upgradePrice: 1000,
        }, {
        inventoryUpgrade2: false,
        upgradePrice: 5000
        }, {
        inventoryUpgrade3: false,
        amount: 0,
        arrayAmount: [],
        upgradePrice: 1000
        }
    ]
};


export const coinSlice = createSlice({
    name: 'amounts',
    initialState,
    reducers: {
        incrementFishCaught: (state) => {
            state.fishCaught += 1;    
        },
        addCoinAmount: (state, action) => {
            state.coinAmount += action.payload;
        }, pushInventory: (state, action) => {
            state.inventoryContent.push(action.payload); 
        }, sellInventory: (state) => {
            const readThis = state.inventoryContent.map(item => item.price)
            const totalAmount = readThis.reduce((a,b) => a + b, 0);
            state.coinAmount =+ state.coinAmount + totalAmount;
            state.inventoryContent = [];
        }, increaseInventorySize: (state, action) => {
            if (state.coinAmount >= 1000 ) {
                state.inventorySize = action.payload;
                state.coinAmount = state.coinAmount - 1000;
                state.upgrades[0].inventoryUpgrade1 = true;
            } else {
                console.log("Not Enough Coins");
            }   
        }, increaseInventorySize2: (state, action) => {
            if (state.coinAmount >= 5000 ) {
                state.inventorySize = action.payload;
                state.coinAmount = state.coinAmount - 5000;
                state.upgrades[1].inventoryUpgrade2 = true;
            } else {
                console.log("Not Enough Coins");
            }  
        }, buyFishVacuum: (state) => {
            if (state.coinAmount >= 1000 ) {
                state.upgrades[2].inventoryUpgrade3 = true;
                state.upgrades[2].arrayAmount = [...state.upgrades[2].arrayAmount, state.upgrades[2].arrayAmount.length + 1];
            }
        }
    }
});

export const { addCoinAmount, incrementFishCaught, pushInventory, sellInventory, increaseInventorySize, increaseInventorySize2, buyFishVacuum } = coinSlice.actions;

export default coinSlice.reducer;