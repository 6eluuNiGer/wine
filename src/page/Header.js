import React from 'react'
import './Header.css'
import { useTranslation} from 'react-i18next';
import '../page/118n';

export const Header = () => {
  const { t, i18n } = useTranslation();

    return (
        <div className="container_main">
        <header>
          <nav>
            <ul>
              <li><a href="#">{t('GOODS')}</a></li>
              <li><a href="#">{t('ABOUT')} </a></li>
              <li><a href="#">{t('HOW WE WORK')} </a></li>
              <li><a href="#">{t('BLOG')} </a></li>
              <li><a href="#">{t('CONTACT')} </a></li>
              <li><a href="#">{t('SUBSCRIPTIONS')} </a></li>
              <div className="container.button">
              </div>
            </ul>
          </nav>  
              <button className="ua" onClick={() => i18n.changeLanguage('ua')}>ua</button>
              <button className="en" onClick={() => i18n.changeLanguage('en')}>en</button>
          
          
          <a href="#" h f className="fas fa-user-alt"> </a>
        </header>

        <div>
          <h4>{t('TAKING TIME TO JUST SIMPLE DRINK SOME WINE')}</h4>
          <button className="Button">{t('SUBSCRIPTIONS')}</button>
          <h5>invisible</h5>
        </div>
      </div>
    )
}


