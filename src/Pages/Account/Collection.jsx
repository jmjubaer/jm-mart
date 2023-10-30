import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MyProductCard from '../../Components/MyProductCard';
import UseGetMyProducts from '../../Hooks/UseGetMyProducts';
const Collection = () => {
    const {myProducts} = UseGetMyProducts()

    return (
        <div className="py-10 overflow-hidden">
        <Tabs>
            <TabList>
                <Tab>My Products</Tab>
                <Tab>Winning Products</Tab>
            </TabList>

            <TabPanel>
                <div className="grid grid-cols-3 gap-7 mt-8">
                {
                    myProducts.map(product => <MyProductCard product={product} key={product?._id}></MyProductCard>)
                }
                </div>
            </TabPanel>
            <TabPanel>
                <div className=" container overflow-hidden">
                    <h2 className="text-5xl font-bold text-slate-500 my-28 text-center">No Collection Available</h2>
                </div>
            </TabPanel>
        </Tabs>
        </div>
    );
};

export default Collection;