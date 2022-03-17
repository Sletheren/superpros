const defaultSeo = {
  title: 'Bacelus, certifications on the blockchain',
  description: 'The future of certification authenticity and document anti-forgery, combining crypto, blockchain and NFTs',
  author: 'Bacelus',
  lang: 'en',
  meta: [],
  keywords: ['blockchain', 'NFT', 'certification', 'anti-forgery', 'platform', 'technology', 'crypto']
}

const seo = {
  index: {
    ...defaultSeo,  
  },
  presale: {
    ...defaultSeo,
    title: 'Bacelus coin presale'
  }
}

module.exports = {
  defaultSeo,
  seo
};