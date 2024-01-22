import '../styles/appStyle.css'
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <div className='container'>
      <header className='containerTop'>
        <select className='languageChoice' >
          <option value="" 
          className=""
          >
            Choose Language
          </option>
          <option value="En">English</option>
          <option value="Ar">Arabic</option>
        </select>
        <h3>Amazon Chat Quip</h3>
      </header>
      <section className='containerSection' >
        
        <div className="DataUsed">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Customer Name" />
          <input type="text" placeholder="Order Name" />
          <input type="text" placeholder="Link" />
          <input type="text" placeholder="Order Id" />
        </div>

        <div className="tabs">
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="RMA" {...a11yProps(0)} />
              <Tab label="Replacement" {...a11yProps(1)} />
              <Tab label="Shipment delayed" {...a11yProps(2)} />
              <Tab label="Shipment not delayed" {...a11yProps(3)} />
              <Tab label="Missing" {...a11yProps(4)} />
              <Tab label="DNR" {...a11yProps(5)} />
              <Tab label="Complain" {...a11yProps(6)} />
              <Tab label="Carrier" {...a11yProps(7)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
          <div>
              <h1>Greeting</h1>
              <p>Hello </p>
              <p >all the data </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut fringilla ligula. Morbi venenatis dolor non tellus condimentum, quis bibendum velit ullamcorper. Fusce non cursus neque. Sed efficitur efficitur diam eu luctus. Nulla facilisi. Maecenas tincidunt, sapien sit amet volutpat imperdiet, eros odio ultricies purus, nec fringilla quam arcu non ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin vel dapibus orci.

              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut nec risus a quam aliquam posuere nec vel libero. Suspendisse potenti. Fusce volutpat elit id nisl tempus, in vulputate justo venenatis. Quisque sit amet augue eu augue congue euismod. Nulla facilisi. Suspendisse potenti. Duis tincidunt ultricies massa, ac cursus lacus efficitur vitae. Aenean lacinia metus ac ex ultrices, quis varius turpis mattis.

              Vestibulum fringilla urna vel nisi convallis, non pharetra ligula eleifend. Praesent quis urna at neque blandit interdum. Vestibulum tristique libero vel mi vulputate, eget volutpat nisl posuere. Integer sit amet rhoncus purus. Sed lacinia justo sit amet posuere laoreet. Maecenas sit amet facilisis justo. Ut ac aliquet justo. Quisque auctor bibendum turpis, vel tincidunt elit tempus eu. Vivamus consectetur quam a nisl venenatis, nec gravida nisl consectetur.</p>
              <h1>Ending</h1>
              Vestibulum fringilla urna vel nisi convallis
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div>
              <h1>Greeting</h1>
              <p>Hello </p>
              <p>all the data </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut fringilla ligula. Morbi venenatis dolor non tellus condimentum, quis bibendum velit ullamcorper. Fusce non cursus neque. Sed efficitur efficitur diam eu luctus. Nulla facilisi. Maecenas tincidunt, sapien sit amet volutpat imperdiet, eros odio ultricies purus, nec fringilla quam arcu non ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin vel dapibus orci.

              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut nec risus a quam aliquam posuere nec vel libero. Suspendisse potenti. Fusce volutpat elit id nisl tempus, in vulputate justo venenatis. Quisque sit amet augue eu augue congue euismod. Nulla facilisi. Suspendisse potenti. Duis tincidunt ultricies massa, ac cursus lacus efficitur vitae. Aenean lacinia metus ac ex ultrices, quis varius turpis mattis.

              Vestibulum fringilla urna vel nisi convallis, non pharetra ligula eleifend. Praesent quis urna at neque blandit interdum. Vestibulum tristique libero vel mi vulputate, eget volutpat nisl posuere. Integer sit amet rhoncus purus. Sed lacinia justo sit amet posuere laoreet. Maecenas sit amet facilisis justo. Ut ac aliquet justo. Quisque auctor bibendum turpis, vel tincidunt elit tempus eu. Vivamus consectetur quam a nisl venenatis, nec gravida nisl consectetur.</p>
              <h1>Ending</h1>
              Vestibulum fringilla urna vel nisi convallis
            </div>
          

          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
          <div>
              <h1>Greeting</h1>
              <p>شكراً لتواصلك مع خدمة عملاء امازون السعودية, محمد مع حضرتك, كيف اقدر اساعدك؟ </p>
              <p>all the data </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut fringilla ligula. Morbi venenatis dolor non tellus condimentum, quis bibendum velit ullamcorper. Fusce non cursus neque. Sed efficitur efficitur diam eu luctus. Nulla facilisi. Maecenas tincidunt, sapien sit amet volutpat imperdiet, eros odio ultricies purus, nec fringilla quam arcu non ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin vel dapibus orci.

              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut nec risus a quam aliquam posuere nec vel libero. Suspendisse potenti. Fusce volutpat elit id nisl tempus, in vulputate justo venenatis. Quisque sit amet augue eu augue congue euismod. Nulla facilisi. Suspendisse potenti. Duis tincidunt ultricies massa, ac cursus lacus efficitur vitae. Aenean lacinia metus ac ex ultrices, quis varius turpis mattis.

              Vestibulum fringilla urna vel nisi convallis, non pharetra ligula eleifend. Praesent quis urna at neque blandit interdum. Vestibulum tristique libero vel mi vulputate, eget volutpat nisl posuere. Integer sit amet rhoncus purus. Sed lacinia justo sit amet posuere laoreet. Maecenas sit amet facilisis justo. Ut ac aliquet justo. Quisque auctor bibendum turpis, vel tincidunt elit tempus eu. Vivamus consectetur quam a nisl venenatis, nec gravida nisl consectetur.</p>
              <h1>Ending</h1>
              Vestibulum fringilla urna vel nisi convallis
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            Item Three
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            Item Three
          </CustomTabPanel>
          <CustomTabPanel value={value} index={5}>
            Item Three
          </CustomTabPanel>
          <CustomTabPanel value={value} index={6}>
            Item Three
          </CustomTabPanel>
          <CustomTabPanel value={value} index={7}>
            Item Three
          </CustomTabPanel>
          
        </Box>
        </div>
        

        
      </section>
    </div>
  )
}
