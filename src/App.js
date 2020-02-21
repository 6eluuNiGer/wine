import './App.css';
import {Header} from './page/Header'
import {Best_sellers} from './page/Best_sellers'
import {Blog} from './page/Blog'
import {Agreement} from './page/Agreement'
import React, {Suspense } from 'react';
import { useTranslation} from 'react-i18next';
import './page/118n';


const Componenti18n = () => {
  const { t, i18n } = useTranslation();
  return <h1 onClick={() => {
    i18n.changeLanguage('ua');
  }}>{t('GOODS')}</h1>
};                                                                                                                                                                         
const AllRender = () => {
  return (<>
  <div className="App" >   
        <Header />
        <Best_sellers />
        <Blog />
        <Agreement />

        
  <div className="boll"></div>
   <div className="ellipe"></div>
      <div className="footer">
        <p className="footer_first_logo">© 2012—2020</p>
        <p className="footer_first_logo">+7 (499) 350-97-46 </p>
        <p className="logo_footer">invisible</p>
      </div>
      </div>
  </>
  );
  }

export default function App() {
  return (<Suspense fallback='loading'>
     <AllRender />  
      </Suspense>
  );
}



