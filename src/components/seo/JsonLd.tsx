import React from 'react';

interface JsonLdProps {
  locale: string;
}

export function JsonLd({ locale }: JsonLdProps) {
  const isHindi = locale === 'hi';
  const baseUrl = 'https://curiousmedia.in';

  // 1. Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'Curious Media',
    legalName: 'Curious Media Private Limited',
    url: baseUrl,
    logo: `${baseUrl}/images/logo.webp`,
    foundingDate: '2023',
    founders: [
      {
        '@type': 'Person',
        name: 'Aanchal',
        jobTitle: 'Founder',
      },
      {
        '@type': 'Person',
        name: 'Pushpraj',
        jobTitle: 'Co-Founder',
      },
    ],
    sameAs: [
      'https://www.instagram.com/curiousmedia_official/',
      'https://www.linkedin.com/company/curiousmediaa/',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-83750-70191',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    knowsAbout: [
      'Influencer Marketing',
      'Creator Economy & Monetization',
      'YouTube Creator Management',
      'Ad Production & Creative Direction',
      'Curious Studios',
      'Brand Partnerships & Deals',
      'Digital Marketing & Growth',
      'PR & Brand Awareness Campaigns',
      'Online Reputation Management (ORM)',
      'Content Distribution & Syndication',
    ],
    description: isHindi
      ? 'क्यूरियस मीडिया एक प्रमुख मीडिया-टेक कंपनी है जो ब्रांडों और क्रिएटर्स को जोड़ती है।'
      : 'Curious Media is a premium media-tech platform empowering digital storytelling, influencer marketing, content production, and brand growth.',
  };

  // 2. ProfessionalService / LocalBusiness Schema (Noida HQ & Mumbai Office)
  const localBusinessSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${baseUrl}/#noida-office`,
      name: 'Curious Media - Headquarters (Noida Office)',
      url: baseUrl,
      telephone: '+91-83750-70191',
      email: 'info@curiousmedia.in',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sector 63',
        addressLocality: 'Noida',
        addressRegion: 'Uttar Pradesh',
        postalCode: '201301',
        addressCountry: 'IN',
      },
      priceRange: '$$$',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${baseUrl}/#mumbai-office`,
      name: 'Curious Media - Mumbai Office',
      url: baseUrl,
      telephone: '+91-83750-70191',
      email: 'info@curiousmedia.in',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Wework Spectrum Tower, Malad West',
        addressLocality: 'Mumbai',
        addressRegion: 'Maharashtra',
        postalCode: '400064',
        addressCountry: 'IN',
      },
      priceRange: '$$$',
    },
  ];

  // 3. WebSite & SearchAction Schema
  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'Curious Media',
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
    inLanguage: ['en', 'hi'],
  };

  // 4. Services Catalog Schema
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Curious Media Core Services',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Influencer Marketing',
        description: 'End-to-end creator partnerships and campaign management.',
      },
      {
        '@type': 'Service',
        name: 'Content Production & Curious Studios',
        description: 'High-ROI ad production, styled sets, editing, audio, and creative direction.',
      },
      {
        '@type': 'Service',
        name: 'Digital Marketing & Growth',
        description: 'Strategic content distribution, audience engagement, and performance tracking.',
      },
      {
        '@type': 'Service',
        name: 'Brand Partnerships & PR',
        description: 'Strategic brand collaborations, PR, and brand awareness campaigns.',
      },
      {
        '@type': 'Service',
        name: 'Online Reputation Management',
        description: 'Brand building and community reputation management.',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {localBusinessSchemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </>
  );
}
