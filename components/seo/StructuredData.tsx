import Script from 'next/script'

interface StructuredDataProps {
  type?: 'website' | 'organization' | 'article' | 'product'
  data?: Record<string, any>
}

export default function StructuredData({ type = 'website', data = {} }: StructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://springboard-web3.vercel.app'
  
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
    }

    switch (type) {
      case 'website':
        return {
          ...baseData,
          '@type': 'WebSite',
          name: 'Springboard',
          description: 'Discover vetted Web3 project ideas, builder kits, and hackathon opportunities. Your launchpad for blockchain innovation.',
          url: baseUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${baseUrl}/ideas?search={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Springboard',
            url: baseUrl,
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/icons/icon-512x512.png`
            }
          },
          ...data
        }
      
      case 'organization':
        return {
          ...baseData,
          '@type': 'Organization',
          name: 'Springboard',
          description: 'Web3 project ideas and builder resources platform',
          url: baseUrl,
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/icons/icon-512x512.png`
          },
          sameAs: [
            'https://twitter.com/springboard_web3',
            'https://github.com/springboard-web3'
          ],
          ...data
        }
      
      case 'article':
        return {
          ...baseData,
          '@type': 'Article',
          publisher: {
            '@type': 'Organization',
            name: 'Springboard',
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/icons/icon-512x512.png`
            }
          },
          ...data
        }
      
      case 'product':
        return {
          ...baseData,
          '@type': 'SoftwareApplication',
          name: 'Springboard',
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'Web',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          },
          ...data
        }
      
      default:
        return { ...baseData, ...data }
    }
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  )
}