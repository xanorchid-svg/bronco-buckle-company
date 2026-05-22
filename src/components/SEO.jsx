import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.broncobucklecompany.com';
const SITE_NAME = 'Bronco Buckles Company';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export default function SEO({
  title,
  description,
  path = '',
  image = DEFAULT_IMAGE,
  type = 'website',
  schema = null,
}) {
  const fullTitle = title
    ? `${title} | Bronco Buckles Company`
    : 'Bronco Buckles Company | Hand-Crafted Sterling Silver Belt Buckles — Dallas, Texas';

  const fullUrl = `${SITE_URL}${path}`;

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    description: 'Hand-crafted sterling silver belt buckles and belts. Custom initials, logos, and designs. Made in Dallas, Texas.',
    url: SITE_URL,
    telephone: '+12142065060',
    email: 'Stocker@BroncoBuckleCompany.com',
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
    priceRange: '$$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card',
    openingHours: 'Mo-Fr 09:00-17:00',
    sameAs: [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Sterling Silver Buckles and Belts',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Sterling Silver Belt Buckle',
            description: 'Hand-crafted .925 sterling silver belt buckle with custom block initials or logo. Run2theRoar stamped on the back.',
            offers: {
              '@type': 'Offer',
              price: '1275.00',
              priceCurrency: 'USD',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'American Alligator Belt',
            description: 'Premium American alligator leather belt, made to pair with your Bronco Buckles buckle.',
            offers: {
              '@type': 'Offer',
              price: '625.00',
              priceCurrency: 'USD',
            },
          },
        },
      ],
    },
  };

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Geo */}
      <meta name="geo.region" content="US-TX" />
      <meta name="geo.placename" content="Dallas, Texas" />

      {/* Business JSON-LD — on every page */}
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>

      {/* Page-specific schema if provided */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
