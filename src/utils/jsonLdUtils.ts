
/**
 * Utilities for generating JSON-LD structured data
 */

// Restaurant JSON-LD
export const generateRestaurantJsonLd = (restaurant: {
  name: string;
  description: string;
  image: string;
  address: string;
  cuisine: string;
  rating: number;
  priceRange?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": restaurant.name,
    "description": restaurant.description,
    "image": restaurant.image,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": restaurant.address
    },
    "servesCuisine": restaurant.cuisine,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": restaurant.rating.toString(),
      "reviewCount": "100" // Placeholder count
    },
    "priceRange": restaurant.priceRange || "$$"
  };
};

// Menu Item JSON-LD
export const generateMenuItemJsonLd = (menuItem: {
  name: string;
  description: string;
  image: string;
  price: number;
  restaurantName: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "MenuItem",
    "name": menuItem.name,
    "description": menuItem.description,
    "image": menuItem.image,
    "offers": {
      "@type": "Offer",
      "price": menuItem.price.toString(),
      "priceCurrency": "USD"
    },
    "menuAddOn": [],
    "nutrition": {
      "@type": "NutritionInformation"
    }
  };
};

// Order JSON-LD
export const generateOrderJsonLd = (order: {
  id: string;
  dateCreated: string;
  restaurant: string;
  customer: string;
  deliveryAddress: string;
  status: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Order",
    "orderNumber": order.id,
    "orderStatus": order.status,
    "orderDate": order.dateCreated,
    "customer": {
      "@type": "Person",
      "name": order.customer
    },
    "merchant": {
      "@type": "Organization",
      "name": order.restaurant
    },
    "deliveryAddress": {
      "@type": "PostalAddress",
      "streetAddress": order.deliveryAddress
    }
  };
};

// FAQPage JSON-LD
export const generateFaqJsonLd = (
  faqs: Array<{ question: string; answer: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// Local Business JSON-LD (for landing page)
export const generateLocalBusinessJsonLd = (business: {
  name: string;
  description: string;
  logo: string;
  url: string;
  telephone?: string;
  email?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": business.name,
    "description": business.description,
    "url": business.url,
    "logo": business.logo,
    "sameAs": [
      "https://www.facebook.com/fooddash",
      "https://www.twitter.com/fooddash",
      "https://www.instagram.com/fooddash"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": business.telephone || "+1-555-555-5555",
      "email": business.email || "support@fooddelivery.example.com",
      "contactType": "customer service"
    }
  };
};

// BreadcrumbList JSON-LD
export const generateBreadcrumbJsonLd = (
  items: Array<{ name: string; url: string }>
) => {
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
