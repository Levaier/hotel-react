import CCardsGroup from './components/cCardsGroup';
import CCaurosel from './components/cCaurosel';
import CNavbar from './components/cNavbar';

import './assets/css/core.css';

import CBlockTextImage from './components/cBlockTextImage';
import CForm from './components/cForm';
import CTitleSeparator from './components/cTitleSeparator';
import CFooter from './components/cFooter';

function App() {

  const placeholder_01 = require("./assets/images/placeholder_image.jpg");
  const placeholder_02 = require("./assets/images/placeholder_image_02.jpeg");

  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit posuere nunc vitae fermentum. Donec elementum pulvinar risus, quis accumsan nisl iaculis nec. Maecenas magna dui, molestie at ultrices quis, accumsan sit amet eros. Phasellus ut sapien imperdiet, ullamcorper diam sed, fringilla velit. Cras venenatis faucibus massa ut congue. Nullam ut magna rhoncus, suscipit mauris eget, volutpat ex. Nullam dapibus tortor ex, ut aliquam libero lobortis quis. Curabitur diam mauris, dignissim nec eleifend eu, suscipit vitae mi. In cursus felis purus, consequat sagittis nisl feugiat eget. Duis fermentum interdum est non condimentum. Nam accumsan diam justo, nec finibus augue posuere non. Sed et volutpat metus. Fusce tempus vehicula justo, vel pellentesque turpis. Praesent sed porta diam."

  return (
    <div className="App">
      <CNavbar/>
      <CCaurosel />
      <CBlockTextImage 
        image={placeholder_01} 
        alt={"test"} 
        component={description} 
        buttonDescription={"Call to Action"}
      />
      <CCardsGroup 
        component={<CTitleSeparator color={'light'} title={"Dal nostro blog"}/>}
      />
      <CBlockTextImage 
        image={placeholder_02} 
        alt={"test"} 
        component={
          <CForm 
          component={<CTitleSeparator color={'dark'} title="Iscriviti alla Newsletter"/>}
          />
        } 
        hidden={true} 
        reverse={{order: 2}}
      />
      <CFooter />
    </div>
  );
}

export default App;
