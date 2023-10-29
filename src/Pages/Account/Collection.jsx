import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Collection = () => {
    return (
        <div className="my-10">
        <Tabs>
            <TabList>
                <Tab>My Products</Tab>
                <Tab>Winning Products</Tab>
            </TabList>

            <TabPanel>
                <h2>Any content 1</h2>
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