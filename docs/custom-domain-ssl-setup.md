# Custom Domain and SSL Configuration Guide

## Overview
This guide provides step-by-step instructions for configuring a custom domain and SSL certificate for the CF Springboard platform on Vercel.

## Prerequisites
- Active Vercel account with deployed CF Springboard project
- Domain name purchased from a domain registrar
- Access to domain DNS settings

## Step 1: Domain Configuration in Vercel

### 1.1 Add Custom Domain
1. Go to your Vercel dashboard
2. Select your CF Springboard project
3. Navigate to the "Settings" tab
4. Click on "Domains" in the left sidebar
5. Click "Add" button
6. Enter your custom domain (e.g., `cfspringboard.com` or `springboard.yourcompany.com`)
7. Click "Add"

### 1.2 Domain Verification
Vercel will provide DNS records that need to be configured:

#### For Root Domain (e.g., cfspringboard.com)
- **Type**: A Record
- **Name**: @ (or leave blank)
- **Value**: `76.76.19.61` (Vercel's IP)

#### For Subdomain (e.g., www.cfspringboard.com)
- **Type**: CNAME
- **Name**: www
- **Value**: `cname.vercel-dns.com`

#### For Custom Subdomain (e.g., springboard.yourcompany.com)
- **Type**: CNAME
- **Name**: springboard
- **Value**: `cname.vercel-dns.com`

## Step 2: DNS Configuration

### 2.1 Access Your Domain Registrar
1. Log in to your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.)
2. Navigate to DNS management or DNS settings
3. Locate the DNS records section

### 2.2 Add Required DNS Records

#### Option A: Root Domain Setup
```
Type: A
Name: @
Value: 76.76.19.61
TTL: 3600 (or Auto)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600 (or Auto)
```

#### Option B: Subdomain Setup
```
Type: CNAME
Name: springboard (or your chosen subdomain)
Value: cname.vercel-dns.com
TTL: 3600 (or Auto)
```

### 2.3 Save DNS Changes
- Save all DNS record changes
- Note: DNS propagation can take 24-48 hours

## Step 3: SSL Certificate Configuration

### 3.1 Automatic SSL (Recommended)
Vercel automatically provides SSL certificates for custom domains:

1. After DNS propagation, return to Vercel dashboard
2. Go to Project Settings > Domains
3. Verify that your domain shows "Valid Configuration"
4. SSL certificate will be automatically issued and renewed

### 3.2 Verify SSL Certificate
1. Visit your custom domain in a browser
2. Check for the lock icon in the address bar
3. Click the lock icon to view certificate details
4. Verify the certificate is issued by "Let's Encrypt" or "Vercel"

## Step 4: Update Application Configuration

### 4.1 Update Environment Variables
Update the `NEXT_PUBLIC_APP_URL` environment variable:

1. Go to Vercel Project Settings > Environment Variables
2. Edit `NEXT_PUBLIC_APP_URL`
3. Change value to your custom domain (e.g., `https://cfspringboard.com`)
4. Save changes
5. Redeploy the application

### 4.2 Update Next.js Configuration
If needed, update `next.config.mjs` for domain-specific settings:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['your-custom-domain.com'], // Add your domain
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

## Step 5: Domain Redirects (Optional)

### 5.1 WWW to Non-WWW Redirect
To redirect www.yourdomain.com to yourdomain.com:

1. In Vercel dashboard, go to Project Settings > Domains
2. Add both `yourdomain.com` and `www.yourdomain.com`
3. Set `yourdomain.com` as primary
4. Vercel will automatically redirect www to non-www

### 5.2 HTTP to HTTPS Redirect
Vercel automatically redirects HTTP to HTTPS for all custom domains.

## Step 6: Verification and Testing

### 6.1 Domain Accessibility
- [ ] Visit your custom domain in a browser
- [ ] Verify the site loads correctly
- [ ] Check that all assets load properly
- [ ] Test navigation between pages

### 6.2 SSL Certificate Verification
- [ ] Verify HTTPS is working
- [ ] Check SSL certificate validity
- [ ] Test SSL Labs rating (optional): https://www.ssllabs.com/ssltest/

### 6.3 Redirect Testing
- [ ] Test www redirect (if configured)
- [ ] Test HTTP to HTTPS redirect
- [ ] Verify old Vercel URL redirects to custom domain

## Troubleshooting

### Common Issues

#### 1. DNS Not Propagating
- **Solution**: Wait 24-48 hours for full DNS propagation
- **Check**: Use DNS checker tools like whatsmydns.net

#### 2. SSL Certificate Not Issued
- **Cause**: DNS records not properly configured
- **Solution**: Verify DNS records match Vercel requirements exactly
- **Wait**: SSL certificates can take up to 24 hours to issue

#### 3. Domain Shows "Invalid Configuration"
- **Check**: DNS records are correct
- **Verify**: Domain is pointing to correct Vercel values
- **Wait**: Allow time for DNS propagation

#### 4. Mixed Content Warnings
- **Cause**: HTTP resources loaded on HTTPS page
- **Solution**: Update all internal links to use HTTPS
- **Check**: Browser developer tools for mixed content errors

### DNS Propagation Check
Use these tools to check DNS propagation:
- https://whatsmydns.net/
- https://dnschecker.org/
- Command line: `nslookup yourdomain.com`

## Security Best Practices

1. **Enable HSTS**: Vercel automatically enables HSTS headers
2. **Use Strong SSL**: Vercel provides TLS 1.2+ by default
3. **Regular Monitoring**: Monitor SSL certificate expiration
4. **Security Headers**: Implement additional security headers in Next.js config

## Next Steps

After successful domain and SSL configuration:
1. Update all marketing materials with new domain
2. Set up domain monitoring
3. Configure analytics with new domain
4. Proceed to next task: Performance and SEO optimization

## Support Resources

- [Vercel Custom Domains Documentation](https://vercel.com/docs/concepts/projects/custom-domains)
- [Vercel SSL Documentation](https://vercel.com/docs/concepts/edge-network/ssl)
- [DNS Configuration Help](https://vercel.com/docs/concepts/projects/custom-domains#dns-configuration)