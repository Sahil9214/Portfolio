// components/SEO.tsx
import Head from "next/head";
import { SEODataTypes } from "./types";

export interface SEOTypes {
  title: string;
  description?: string;
  keywords?: string[];
  jsonLdData?: object;
  canonical: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterSite?: string;
  ogSiteName?: string;
  fbAppId?: string;
}

interface SEOProps {
  seo: SEODataTypes;
}

const SEO = ({ seo }: SEOProps) => {
  const {
    title,
    description = "",
    keywords = [],
    jsonLdData,
    canonical,
    og,
    twitter,
  } = seo;

  return (
    <Head>
      {/* Page Title */}
      <title>{title}</title>

      {/* Meta Tags */}
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Social Meta Tags */}
      <meta property="og:title" content={og.title} />
      <meta property="og:description" content={og.description} />
      <meta property="og:type" content={og.type} />
      <meta property="og:url" content={og.url} />
      <meta property="og:image" content={og.image} />
      <meta property="og:site_name" content={og.site_name} />
      {og.fb_app_id && <meta property="fb:app_id" content={og.fb_app_id} />}

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={twitter.card} />
      <meta name="twitter:title" content={twitter.title} />
      <meta name="twitter:description" content={twitter.description} />
      <meta name="twitter:image" content={twitter.image} />
      <meta name="twitter:site" content={twitter.site} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* JSON-LD Schema  */}
      {jsonLdData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      )}
    </Head>
  );
};

export default SEO;
