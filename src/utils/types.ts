/* eslint-disable @typescript-eslint/no-explicit-any */
export interface OpenGraphData {
  title: string;
  description: string;
  url: string;
  site_name?: string;
  type: string;
  image: string;
  image_alt?: string;
  fb_app_id?: string;
}

export interface TwitterData {
  card: string;
  title: string;
  description: string;
  image: string;
  site?: string;
}

export interface ContactPoint {
  "@type": "ContactPoint";
  telephone: string;
  contactType: string;
  areaServed?: string;
  availableLanguage?: string[];
}

export interface Address {
  "@type": "PostalAddress";
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry?: string;
}

export interface OfferCatalog {
  "@type": "OfferCatalog";
  name: string;
  itemListElement: Service[];
}

export interface Service {
  "@type": "Service";
  serviceType: string;
  provider: {
    "@type": "Organization";
    name: string;
    url: string;
  };
  areaServed: {
    "@type": "Country";
    name: string;
  };
  description: string;
}

interface mainEntityTyes {
  "@type": string;
  name: string;
  about?: string;
  url?: string;
  logo?: string;
  contactPoint?: ContactPoint;
  address?: Address;
  sameAs?: string[];
  acceptedAnswer?: {
    "@type": string;
    text: string;
  };
}
// added BreadcrumbList
export interface BreadcrumbList {
  "@type": "BreadcrumbList";
  itemListElement: {
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }[];
}
// added SearchAction

export interface SearchAction {
  "@type": "SearchAction";
  target: string;
  "query-input"?: string;
}
// added Provider
export interface Provider {
  "@type": "Organization";
  name: string;
  url: string;
  logo?: string;
}
export interface JsonLdData {
  "@context": "https://schema.org";
  "@type": string;
  name?: string;
  url?: string;
  logo?: string;
  image?: string;
  email?: string;
  telephone?: string;
  description?: string;
  contactPoint?: ContactPoint;
  breadcrumb?: BreadcrumbList;
  jobTitle?: string;
  knowsAbout?: Array<string>;
  alumniOf?: any;
  address?: Address;
  sameAs?: string[];
  hasOfferCatalog?: OfferCatalog;
  mainEntity?: mainEntityTyes[] | mainEntityTyes;
  potentialAction?: SearchAction;
  serviceType?: string;
  provider?: Provider;
  keywords?: string[];
  numberOfItems?: number;
  areaServed?: {
    "@type": "Country";
    name: string;
  };
  itemListElement?: {
    "@type": "ListItem";
    position?: number;
    name?: string;
    url?: string;
  }[];
}

export interface SEODataTypes {
  page: string;
  title: string;
  description: string;
  keywords?: string[];
  canonical: string;
  og: OpenGraphData;
  twitter: TwitterData;
  jsonLdData: JsonLdData;
  jobTitle?: string;
}
