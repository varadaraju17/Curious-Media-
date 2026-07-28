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
    logo: `${baseUrl}/images/logo.png`,
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
        areaServed: [
          'India',
          'Noida',
          'Mumbai',
          'Delhi NCR',
          'Bangalore',
          'Gurgaon',
          'Kolkata',
          'Chennai',
          'Hyderabad',
          'Pune',
          'Ahmedabad',
        ],
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'City', name: 'Noida' },
      { '@type': 'City', name: 'Mumbai' },
      { '@type': 'City', name: 'Delhi NCR' },
      { '@type': 'City', name: 'Bangalore' },
      { '@type': 'City', name: 'Gurgaon' },
      { '@type': 'City', name: 'Kolkata' },
      { '@type': 'City', name: 'Chennai' },
      { '@type': 'City', name: 'Hyderabad' },
      { '@type': 'City', name: 'Pune' },
      { '@type': 'City', name: 'Ahmedabad' },
    ],
    knowsAbout: [
      'Influencer Marketing Agency',
      'Best Influencer Marketing Agency India',
      'Top Influencer Marketing Agency Noida Mumbai',
      'Influencer Marketing Platform',
      'Influencer Campaign Management',
      'YouTube Influencer Marketing Agency',
      'Instagram Influencer Marketing',
      'LinkedIn Creator Marketing',
      'Micro Influencer Marketing India',
      'Macro Influencer Campaign',
      'Regional Creator Marketing',
      'Creator Economy Agency India',
      'YouTube Creator Monetization',
      'Content Monetization Network',
      'YouTube Channel Growth Agency',
      'Digital Rights Management for Creators',
      'High CPM YouTube Strategy',
      'Ad Production House Noida Mumbai',
      'Commercial Ad Production',
      'Digital Video Production Agency',
      'High ROI Video Creatives',
      'Creative Direction & Set Design',
      'Product Photoshoot Studio',
      'F&B Product Photography',
      'Reels and Shorts Production Agency',
      'Brand Partnerships Agency',
      'Brand Deals for Influencers',
      'Digital Brand Strategy',
      'PR and Brand Awareness Campaigns',
      'Online Reputation Management ORM',
      'Social Media Management Agency',
      'Gen-Z Growth Marketing Agency India',
      'Influencer Marketing Agency Mumbai',
      'Influencer Marketing Agency Bangalore',
      'Influencer Marketing Agency Delhi NCR',
      'Influencer Marketing Agency Noida',
    ],
    description: isHindi
      ? 'क्यूरियस मीडिया भारत की अग्रणी क्रिएटर मोनेटाइजेशन और इन्फ्लुएंसर मार्केटिंग एजेंसी है।'
      : 'Curious Media is India\'s leading creator monetization and influencer marketing agency. Connecting top brands with creators to deliver 5B+ monthly views, viral campaigns, and scalable income.',
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
