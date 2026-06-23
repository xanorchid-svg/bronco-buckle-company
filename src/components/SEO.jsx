import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.broncobucklecompany.com';
const SITE_NAME = 'Bronco Buckles Company';
const DEFAULT_IMAGE = 'https://images.squarespace-cdn.com/content/v1/66b2a6d245284578268d3713/6796795d-7074-4af8-a557-dff021ccad24/_DSF3492.jpeg';
const DEFAULT_IMAGE_ALT = 'Bronco Buckles Company — Hand-Crafted Sterling Silver Belt Buckles, Dallas Texas';

const businessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'CraftBusiness', 'JewelryStore'],
      '@id': `${SITE_URL}/#business`,
      name: SITE_NAME,
      alternateName: 'Bronco Buckles',
      description: 'Hand-crafted sterling silver belt buckles and premium leather belts made to order in Dallas, Texas. Custom monograms, initials, and logos. Inspired by the Kalo Silver Shop tradition.',
      url: SITE_URL,
      telephone: '+12142065060',
      email: 'stocker@broncobuckles.com',
      foundingDate: '2024',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1901 N. Akard Street',
        addressLocality: 'Dallas',
        addressRegion: 'TX',
        postalCode: '75201',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 32.7897,
        longitude: -96.8077,
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      priceRange: '$$$',
      currenciesAccepted: 'USD',
      paymentAccepted: 'Cash, Credit Card, Check',
      openingHours: 'Mo-Fr 09:00-17:00',
      image: DEFAULT_IMAGE,
      logo: `${SITE_URL}/bblogo.png`,
      sameAs: [],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Sterling Silver Belt Buckles and Premium Leather Belts',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Custom Sterling Silver Belt Buckle',
              description: 'Hand-crafted .925 sterling silver belt buckle with custom block initials or logo. Classic or Elegante finish. Run2theRoar stamped on the back. Made in Dallas, Texas.',
              brand: { '@type': 'Brand', name: 'Bronco Buckles Company' },
              material: 'Sterling Silver .925',
              offers: {
                '@type': 'Offer',
                price: '1275.00',
                priceCurrency: 'USD',
                priceValidUntil: '2026-12-31',
                availability: 'https://schema.org/InStock',
                url: `${SITE_URL}/the-buckle`,
              },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'American Alligator Leather Belt',
              description: 'Premium American alligator leather belt, hand-crafted to pair with your Bronco Buckles sterling silver buckle.',
              brand: { '@type': 'Brand', name: 'Bronco Buckles Company' },
              material: 'American Alligator Leather',
              offers: {
                '@type': 'Offer',
                lowPrice: '525.00',
                highPrice: '675.00',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
                url: `${SITE_URL}/the-belt`,
              },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Cowhide Leather Belt',
              description: 'Standard and Bridal grade cowhide leather belts. Made to pair with your Bronco Buckles sterling silver buckle.',
              brand: { '@type': 'Brand', name: 'Bronco Buckles Company' },
              material: 'Cowhide Leather',
              offers: {
                '@type': 'Offer',
                lowPrice: '150.00',
                highPrice: '350.00',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
                url: `${SITE_URL}/the-belt`,
              },
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: 'Hand-crafted sterling silver belt buckles and premium leather belts. Dallas, Texas.',
      publisher: { '@id': `${SITE_URL}/#business` },
      inLanguage: 'en-US',
    },
  ],
};

export default function SEO({
  title,
  description,
  path = '',
  image = DEFAULT_IMAGE,
  imageAlt = DEFAULT_IMAGE_ALT,
  type = 'website',
  schema = null,
  keywords = '',
}) {
  const fullTitle = title
    ? `${title} | Bronco Buckles Company`
    : 'Bronco Buckles Company | Hand-Crafted Sterling Silver Belt Buckles — Dallas, Texas';

  const fullUrl = `${SITE_URL}${path}`;

  // Default keywords covering core search intent
  const defaultKeywords = 'sterling silver belt buckle, custom belt buckle, personalized belt buckle, silver buckle Dallas Texas, monogram belt buckle, hand crafted belt buckle, custom western belt buckle, sterling silver western buckle, Run2theRoar, Bronco Buckles';
  const pageKeywords = keywords || defaultKeywords;

  // Breadcrumb schema for every page
  const breadcrumbSchema = path && path !== '/' ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: fullTitle.split(' | ')[0],
        item: fullUrl,
      },
    ],
  } : null;

  return (
    <Helmet>
      {/* ── Primary ── */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content="Bronco Buckles Company" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={fullUrl} />

      {/* ── Open Graph ── */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* ── Twitter / X Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* ── Geo ── */}
      <meta name="geo.region" content="US-TX" />
      <meta name="geo.placename" content="Dallas, Texas" />
      <meta name="geo.position" content="32.7897;-96.8077" />
      <meta name="ICBM" content="32.7897, -96.8077" />

      {/* ── Business JSON-LD ── */}
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>

      {/* ── Breadcrumb JSON-LD ── */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {/* ── Page-specific schema ── */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
