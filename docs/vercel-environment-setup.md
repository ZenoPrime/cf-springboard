# Vercel Environment Variables Configuration Guide

## Overview
This guide provides step-by-step instructions for configuring environment variables in Vercel for the CF Springboard platform.

## Required Environment Variables

The following environment variables must be configured in your Vercel project:

### Airtable Configuration
- `AIRTABLE_API_KEY`: Your Airtable personal access token
- `AIRTABLE_BASE_ID`: The base ID for your CF Springboard Airtable base

### Application Configuration
- `NEXT_PUBLIC_APP_URL`: The production URL of your deployed application
- `NODE_ENV`: Set to "production" for production deployment

## Step-by-Step Configuration

### 1. Access Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) and log in to your account
2. Navigate to your CF Springboard project
3. Click on the "Settings" tab
4. Select "Environment Variables" from the left sidebar

### 2. Add Environment Variables

For each environment variable, follow these steps:

#### AIRTABLE_API_KEY
1. Click "Add New" button
2. Name: `AIRTABLE_API_KEY`
3. Value: `patuIzoXh4Frorz8Y.176dce2a2d840d504a819a186fbeb5574b6a27f90a52599e33f6b35328ca5ac5`
4. Environment: Select "Production", "Preview", and "Development"
5. Click "Save"

#### AIRTABLE_BASE_ID
1. Click "Add New" button
2. Name: `AIRTABLE_BASE_ID`
3. Value: `appoZEsQfRUei49i9`
4. Environment: Select "Production", "Preview", and "Development"
5. Click "Save"

#### NEXT_PUBLIC_APP_URL
1. Click "Add New" button
2. Name: `NEXT_PUBLIC_APP_URL`
3. Value: Your production URL (e.g., `https://your-domain.vercel.app`)
4. Environment: Select "Production" and "Preview"
5. Click "Save"

#### NODE_ENV
1. Click "Add New" button
2. Name: `NODE_ENV`
3. Value: `production`
4. Environment: Select "Production"
5. Click "Save"

### 3. Redeploy Application
After adding all environment variables:
1. Go to the "Deployments" tab
2. Click "Redeploy" on the latest deployment
3. Select "Use existing Build Cache" (optional)
4. Click "Redeploy"

## Verification

To verify that environment variables are properly configured:

1. Check the deployment logs for any environment variable errors
2. Test Airtable integration by visiting the ideas page
3. Ensure all data loads correctly from Airtable

## Security Best Practices

- Never commit environment variables to version control
- Use Vercel's built-in environment variable encryption
- Regularly rotate API keys
- Use different API keys for development and production if possible

## Troubleshooting

### Common Issues

1. **"Missing Airtable API key or Base ID" Error**
   - Verify environment variables are spelled correctly
   - Ensure variables are set for the correct environment
   - Check that the deployment has been redeployed after adding variables

2. **Airtable Connection Errors**
   - Verify API key has proper permissions
   - Check that Base ID is correct
   - Ensure Airtable base is accessible

3. **Environment Variables Not Loading**
   - Redeploy the application after adding variables
   - Check that variables are set for the correct environment (Production/Preview/Development)

## Next Steps

After configuring environment variables:
1. Test all Airtable integrations
2. Verify data loading on all pages
3. Monitor deployment logs for any errors
4. Proceed to the next task: Custom Domain and SSL configuration