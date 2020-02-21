import React from 'react'
import './Blog.css'
import { useTranslation} from 'react-i18next';
import '../page/118n';

export const Blog = () => {
  const { t, i18n } = useTranslation();
    return (
        <div className="container_blog" >
        <div className="best_sellers_title">{t('BLOG')}</div>
        <div className="box"></div>
        <div className="box_white">
          <p className="tite_card">
          {t('discover wine')}</p>
          <div className="line"></div>
          <p className="text_card">{t('And we are also blogging about wine - everything is written easily, fun and on business. The emphasis is on the pressing issues: how to drink good wine in a crisis, what to give to colleagues, what wine will brighten up the family life. About serious things - grape varieties and wine regions - also do not forget.')}</p>
          <button className="Button_blog">{t('Visit Blog')}</button>
        </div>
        <img className="blog_img" src={require('../img/blog.jpg')} alt="" />
      </div>
    )
}
