import type { Plugin } from 'vite';
import { EVENT } from './src/constants';

/**
 * Vite plugin to inject Open Graph and Twitter Card meta tags from constants
 */
export function metaTagsPlugin(siteUrl: string = 'https://your-site-url.netlify.app'): Plugin {
  return {
    name: 'meta-tags',
    transformIndexHtml(html) {
      const description = `${EVENT.hosts.full} are throwing a ${EVENT.title}. ${EVENT.tagline}. ${EVENT.date.day} ${EVENT.date.dayNumber} ${EVENT.date.month}, ${EVENT.date.time} at ${EVENT.location}.`;
      const title = `${EVENT.title} - RSVP`;
      const imageUrl = `${siteUrl}/parent-picnic-invitation.jpg`;

      const metaTags = `
    <!-- Primary Meta Tags -->
    <meta name="title" content="${title}" />
    <meta name="description" content="${description}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${siteUrl}/" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${EVENT.title} Invitation" />
    <meta property="og:site_name" content="${EVENT.title}" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${siteUrl}/" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${imageUrl}" />
    <meta name="twitter:image:alt" content="${EVENT.title} Invitation" />
`;

      // Replace title and insert meta tags after viewport meta tag
      return html
        .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
        .replace(
          /<meta name="viewport"[^>]*>/,
          `$&${metaTags}`
        );
    },
  };
}

