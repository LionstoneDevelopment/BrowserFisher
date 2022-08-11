import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

const InventoryItem = () => {

    const inventoryContent = useSelector(state => state.amounts.inventoryContent);

return (          
    <AnimatePresence>{
        inventoryContent.map((item, index) => (
            <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, x: 100, scale: 0.25 }}
            className={item.name} key={index}>
                <div className='fish-info'>
                    
<img className="coin-img" alt="coin" src='https://www.iconpacks.net/icons/1/free-coin-icon-794-thumb.png'></img>                    <h2 className="fish-price">{item.price}</h2>
                </div>
                <img alt={item.name} src={item.url}></img>
            </motion.div>
        ))}
    </AnimatePresence>
)
};

export default InventoryItem;