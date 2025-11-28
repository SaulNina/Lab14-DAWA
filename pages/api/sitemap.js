// pages/api/sitemap.js


const EXTERNAL_DATA_URL = 'https://jsonplaceholder.typicode.com/posts';
const BASE_URL = 'https://lab14-dawa-iota.vercel.app/'; 

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${BASE_URL}</loc>
     </url>
     <url>
       <loc>${BASE_URL}/blog</loc>
     </url>
     <url>
       <loc>${BASE_URL}/contacto</loc>
     </url>

     ${posts
       .map(({ id }) => {
         return `
       <url>
           <loc>${BASE_URL}/blog/${id}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

export default async function handler(req, res) {
  // 2. Simulamos la llamada a la Base de Datos o CMS
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // Tomamos solo los primeros 10 posts para el ejemplo
  const limitedPosts = posts.slice(0, 10);

  // 3. Generamos el XML con los datos reales
  const sitemap = generateSiteMap(limitedPosts);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
}