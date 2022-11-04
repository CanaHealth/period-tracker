import Head from 'next/head'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

import { openGraph } from '@/lib/helper'

// !STARTERCONF Change these default meta
const defaultMeta: Meta = {
  title: 'Cana Health : Private Period Tracking',
  keywords: 'Cana Health, Secure, Blockchain, Polygon, Solana, Health Tracking',
  siteName: 'Cana Health',
  description: 'We aim to end hunger and poverty in Africa.',
  /** Without additional '/' on the end, e.g. https://theodorusclarence.com */
  url: 'https://www.cana.health',
  type: 'website',
  robots: 'follow, index',
  /** No need to be filled, will be populated with openGraph function */
  image: '',
}

export type Meta = {
  title: string
  keywords: string
  siteName: string
  description: string
  url: string
  type: string
  robots: string
  image?: string
  twitter?: {
    siteHandle?: string
  }
}

export type SeoProps = {
  date?: string
  templateTitle?: string
} & Partial<Meta>

export default function Seo(props: SeoProps) {
  const router = useRouter()
  const meta = {
    ...defaultMeta,
    ...props,
  }
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title

  // Use siteName if there is templateTitle
  // but show full title if there is none
  meta['image'] = openGraph({
    description: meta.description,
    siteName: props.templateTitle ? meta.siteName : meta.title,
    templateTitle: props.templateTitle,
  })

  const url = useMemo(
    () => `${meta.url}${router.asPath}`,
    [meta.url, router.asPath]
  )

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='robots' content={meta.robots} />
      <meta name='description' content={meta.description} />
      <meta property='og:url' content={url} />
      <link rel='canonical' href={url} />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      {meta.twitter?.siteHandle && (
        <meta name='twitter:site' content={meta.twitter.siteHandle} />
      )}
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      <meta name='twitter:url' content={url} />
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />
          <meta
            name='author'
            property='article:author'
            content='Roots Africa'
          />
        </>
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta
        name='msapplication-TileImage'
        content='/favicon/ms-icon-144x144.png'
      />
      <meta name='theme-color' content='#ffffff' />
    </Head>
  )
}

type Favicons = {
  rel: string
  href: string
  sizes?: string
  type?: string
}

// !STARTERCONF this is the default favicon, you can generate your own from https://www.favicon-generator.org/ then replace the whole /public/favicon folder
const favicons: Array<Favicons> = [
  {
    rel: 'apple-touch-icon',
    sizes: '57x57',
    href: '/favicon/apple-icon-57x57.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '60x60',
    href: '/favicon/apple-icon-60x60.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '72x72',
    href: '/favicon/apple-icon-72x72.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '76x76',
    href: '/favicon/apple-icon-76x76.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '114x114',
    href: '/favicon/apple-icon-114x114.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '120x120',
    href: '/favicon/apple-icon-120x120.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: '/favicon/apple-icon-144x144.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '152x152',
    href: '/favicon/apple-icon-152x152.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-icon-180x180.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/favicon/android-icon-192x192.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: '/favicon/favicon-96x96.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  {
    rel: 'manifest',
    href: '/favicon/manifest.json',
  },
]
