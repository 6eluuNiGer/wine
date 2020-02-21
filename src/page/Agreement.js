import React from 'react'
import './Agreement.css'
import { useTranslation} from 'react-i18next';
import '../page/118n';


export const Agreement = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="container_agreement" >
        <div className="best_sellers_title">{t('AGREEMENT')}</div>
        <p className="text_agreement">'Since you have registered with us, please read this.
There’s a user agreement, through which it’s not easy to break through, especially if the rough legal language is not your native language. So here’s a little squeeze, the most important moments.
 - We, Invisible, offer you, an adult citizen, to conclude a user agreement. It will come into force from the moment you register with us. We undertake not to tell anyone outside of Invisible your personal data.
 - We guarantee that we will never lie about our faults and give you as much information as will fit into the description of each wine.
 - To each set we promise to attach a description of wines and recommendations - how and with what to drink them, if you ask.
 - The composition of the set, which you get from us, will be exactly as listed on the site. Sometimes we change bottles in sets, but always ask in advance whether you agree to this.
 - We can not guarantee the eternal and trouble-free work invisible.ru. Our site, like any website, can break down, surrender under the onslaught of hackers and even be in the roster of prohibited resources (you never know). But we do everything so that this does not happen.
From you it is required:
 - be of age and legal capacity
 - do not sell our wine
      
 - keep your login and password carefully.</p>
      </div>
    )
}


