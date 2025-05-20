
export interface JsonLdOrganization {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo: string;
  contactPoint: {
    "@type": string;
    telephone: string;
    contactType: string;
  }[];
  sameAs: string[];
}

export interface JsonLdRestaurant {
  "@context": string;
  "@type": string;
  name: string;
  image: string | string[];
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  priceRange: string;
  servesCuisine: string | string[];
  telephone: string;
  url: string;
}

export interface JsonLdReview {
  "@context": string;
  "@type": string;
  itemReviewed: {
    "@type": string;
    name: string;
  };
  reviewRating: {
    "@type": string;
    ratingValue: number;
    bestRating: number;
  };
  name: string;
  author: {
    "@type": string;
    name: string;
  };
  datePublished: string;
  reviewBody: string;
}

/**
 * Generate Organization JSON-LD data
 */
export const generateOrganizationSchema = (): JsonLdOrganization => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FoodDash",
    "url": "https://fooddelivery.example.com",
    "logo": "https://fooddelivery.example.com/logo.png",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "contactType": "customer service"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/fooddash",
      "https://www.twitter.com/fooddash",
      "https://www.instagram.com/fooddash"
    ]
  };
};

/**
 * Generate Restaurant JSON-LD data
 */
export const generateRestaurantSchema = (restaurant: any): JsonLdRestaurant => {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": restaurant.name,
    "image": restaurant.image || "https://fooddelivery.example.com/placeholder-restaurant.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": restaurant.address || "123 Main St",
      "addressLocality": restaurant.city || "New York",
      "postalCode": restaurant.zipCode || "10001",
      "addressCountry": restaurant.country || "US"
    },
    "priceRange": restaurant.priceRange || "$$",
    "servesCuisine": restaurant.cuisine || "American",
    "telephone": restaurant.phone || "+1-555-123-4567",
    "url": `https://fooddelivery.example.com/restaurant/${restaurant.id}`
  };
};

/**
 * Generate Review JSON-LD data
 */
export const generateReviewSchema = (review: any): JsonLdReview => {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Restaurant",
      "name": review.restaurantName || "Restaurant Name"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating || 5,
      "bestRating": 5
    },
    "name": review.title || "Great food and service",
    "author": {
      "@type": "Person",
      "name": review.author || "Customer"
    },
    "datePublished": review.date || new Date().toISOString().split('T')[0],
    "reviewBody": review.content || "The food was delicious and the service was excellent."
  };
};

/**
 * Generate breadcrumb JSON-LD data
 */
export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

/**
 * Create script element with JSON-LD data
 */
export const createJsonLdScript = (data: any): string => {
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
};

/**
 * Generate meta tags for a page
 */
export const generateMetaTags = (options: {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
}): string => {
  const {
    title,
    description,
    keywords = '',
    canonicalUrl,
    ogImage = 'https://fooddelivery.example.com/og-image.png',
    ogType = 'website'
  } = options;

  return `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    ${keywords ? `<meta name="keywords" content="${keywords}" />` : ''}
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:type" content="${ogType}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${ogImage}" />
  `;
};
