import { getHTML, getTwitterFollowers, getInstagramFollowers } from './lib/scraper';

async function go(i = 'verygoodmarketingco', t = 'very_marketing') {

  const iPromise = getHTML(`https://instagram.com/${i}`);
  const tPromise = getHTML(`https://twitter.com/${t}`);
  const [instagramHTML, twitterHTML] = await Promise.all([iPromise, tPromise])
  const instagramCount = await getInstagramFollowers(instagramHTML);
  const twCount = await getTwitterFollowers(twitterHTML);

  console.log(`You have ${twCount} followers and ${instagramCount} instagram followers`);
}

go();