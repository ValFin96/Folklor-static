import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import PdfDrink from '../../assets/Folklor drinks v2.pdf';
import PdfFood from '../../assets/FOLKLOR FOOD MENU FINAL.pdf';
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import './SpecialMenu.css';

function SpecialMenu() {


return (
  <div className="app__specialMenu flex__center section__padding" id='menu'>
    <Helmet>
<title>Folklor's Menu</title>
<meta name='description' content='Discover our menu' />
<meta property="og:type" content="website" />
<meta property="og:title" content='Folklor Restaurant Menu' />
<meta property="og:description" content='Discover our menu' />
<meta property="og:image" content="%PUBLIC_URL%/favicon.ico?v=2" />
<meta property="og:url" content="https://folklorrestaurant.com.au/#menu" />
</Helmet>
<div className='app__specialMenu-title'>
    <SubHeading title="Preview Our Menu"/>
    <h2 className='headtext__cormorant'>Menu</h2>
</div>

{/* <div className='app__specialMenu-menu'>
    <div className='app__specialMenu-menu_heading'>Coming soon!</div>
</div> */}
<div className='app__specialMenu-menu'>
<a href={PdfFood} style={{textAlign:'center', marginLeft: '0.5rem', marginRight:'0.5rem', marginBottom:'0.5rem'}} target="_blank">
      <button className='custom__button_mobile'>
        Food
      </button>
      </a>
    <a href={PdfDrink} style={{textAlign:'center', marginLeft: '0.5rem', marginRight:'0.5rem', marginBottom:'0.5rem'}} target="_blank">
    <button className='custom__button_mobile'>
        Drinks
      </button>
    </a>
    
</div>


{/* //     <Tabs className="Tabs">
//       <TabList>
//         <Tab>EAT</Tab>
//         <Tab>DRINK</Tab>
//       </TabList>
//       <TabPanel>
//         <p>Tab 1 works!</p>
//       </TabPanel>
//       <TabPanel>
//         <div className="app__specialMenu_menu_items">
//           {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </TabPanel>
    </Tabs> */}

  </div>
)};

export default SpecialMenu;
