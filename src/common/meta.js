var default_meta = {
  title: '官方網站',
  content:
    '正新橡膠工業股份公司，創立於1969年，目前為台灣最大的輪胎製造商。輪胎產品線廣闊，小至自行車、摩托車、農耕機具，大至卡車、客車、工業用車等。於台灣境內設有五座生產工廠，並於中國、泰國、越南、印度、印尼等地皆設有工廠，並於美國、加拿大、德國、日本、荷蘭等國家成立分公司，為佈局全世界之國際化企業。建立「 正新 Cheng Shin 」/「 瑪吉斯 MAXXIS」成為世界級品牌是公司的願景之一。品牌是企業裡最具價值的無形資產，更是企業維持長期競爭力的最佳利器。我們著眼世界市場，自許以創造世界品牌為職志。',
  image: '/img/share/index.jpg',
};

export function GetMetaData(title, content, image) {
  title = title == '' ? default_meta.title : title;
  return {
    title: title + ' | MAXXIS S98 | 世新車業有限公司',
    meta: [
      {
        property: 'og:description',
        name: 'og:description',
        content: content == '' ? default_meta.content : content,
        vmid: 'og:description',
      },
      {
        property: 'twitter:description',
        name: 'twitter:description',
        content: content == '' ? default_meta.content : content,
        vmid: 'twitter:description',
      },
      {
        property: 'description',
        name: 'description',
        content: content == '' ? default_meta.content : content,
        vmid: 'description',
      },
      {
        property: 'og:image',
        name: 'og:image',
        content: image == '' ? default_meta.image : image,
        vmid: 'og:image',
      },
      {
        property: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: title + ' | MAXXIS S98 | 世新車業有限公司',
        vmid: 'apple-mobile-web-app-title',
      },
      {
        property: 'application-name',
        name: 'application-name',
        content: title + ' | MAXXIS S98 | 世新車業有限公司',
        vmid: 'application-name',
      },
      {
        property: 'og:site_name',
        name: 'og:site_name',
        content: '官方網站 | MAXXIS S98 | 世新車業有限公司',
        vmid: 'og:site_name',
      },
      {
        property: 'og:type',
        name: 'og:type',
        content: 'website',
        vmid: 'og:type',
      },
      {
        property: 'og:locale',
        name: 'og:locale',
        content: 'zh_tw',
        vmid: 'og:locale',
      },
    ],
  };
}
