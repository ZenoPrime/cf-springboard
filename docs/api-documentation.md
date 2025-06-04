# 🔌 Springboard API Documentation

This document provides comprehensive information about the Springboard platform's API endpoints, data structures, and integration patterns.

## 📋 Table of Contents

- [Overview](#overview)
- [Authentication](#authentication)
- [Base URLs](#base-urls)
- [Data Sources](#data-sources)
- [API Endpoints](#api-endpoints)
- [Data Models](#data-models)
- [Error Handling](#error-handling)
- [Rate Limiting](#rate-limiting)
- [SDK and Libraries](#sdk-and-libraries)
- [Examples](#examples)
- [Webhooks](#webhooks)
- [Best Practices](#best-practices)

## 🌟 Overview

Springboard's API provides programmatic access to:

- **Project Ideas**: Curated Web3 project concepts
- **Builder Kits**: Resource packages and templates
- **Hackathons**: Event information and submissions
- **Resources**: Documentation and guides
- **Search**: Global search functionality

### API Characteristics

- **RESTful Design**: Standard HTTP methods and status codes
- **JSON Format**: All requests and responses use JSON
- **CORS Enabled**: Cross-origin requests supported
- **Rate Limited**: Fair usage policies applied
- **Versioned**: API versioning for backward compatibility

## 🔐 Authentication

### Public Endpoints

Most Springboard endpoints are publicly accessible and don't require authentication:

- Project ideas browsing
- Builder kit information
- Hackathon listings
- Resource access
- Search functionality

### Authenticated Endpoints

Some features require authentication:

- Content submission
- User preferences
- Analytics access
- Administrative functions

### API Key Authentication

```http
GET /api/v1/ideas
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
```

### Request Headers

```http
Content-Type: application/json
Accept: application/json
User-Agent: YourApp/1.0
Authorization: Bearer YOUR_API_KEY (if required)
```

## 🌐 Base URLs

### Production
```
https://springboard.vercel.app/api/v1
```

### Development
```
http://localhost:3000/api/v1
```

### API Versioning

The API uses URL-based versioning:
- Current version: `v1`
- Future versions: `v2`, `v3`, etc.

## 📊 Data Sources

### Airtable Integration

Springboard uses Airtable as its primary data source:

- **Base ID**: Configured via environment variables
- **Tables**: Ideas, Builder Kits, Hackathons, Resources
- **Sync**: Real-time data synchronization
- **Caching**: Optimized for performance

### Environment Configuration

```env
AIRTABLE_API_KEY=your_airtable_api_key
AIRTABLE_BASE_ID=your_base_id
AIRTABLE_IDEAS_TABLE=Ideas
AIRTABLE_BUILDER_KITS_TABLE=Builder Kits
AIRTABLE_HACKATHONS_TABLE=Hackathons
AIRTABLE_RESOURCES_TABLE=Resources
```

## 🛠️ API Endpoints

### Ideas

#### Get All Ideas

```http
GET /api/v1/ideas
```

**Query Parameters:**
- `category` (string): Filter by category (defi, nft, dao, etc.)
- `difficulty` (string): Filter by difficulty (beginner, intermediate, advanced, expert)
- `limit` (number): Number of results (default: 50, max: 100)
- `offset` (number): Pagination offset (default: 0)
- `search` (string): Search query

**Response:**
```json
{
  "data": [
    {
      "id": "rec123456",
      "title": "DeFi Yield Aggregator",
      "category": "DeFi",
      "difficulty": "Intermediate",
      "description": "A platform that automatically finds the best yield farming opportunities...",
      "tags": ["DeFi", "Yield Farming", "Ethereum"],
      "estimatedTime": "3-6 months",
      "techStack": ["Solidity", "React", "Node.js"],
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-20T14:45:00Z"
    }
  ],
  "pagination": {
    "total": 150,
    "limit": 50,
    "offset": 0,
    "hasMore": true
  }
}
```

#### Get Single Idea

```http
GET /api/v1/ideas/{id}
```

**Response:**
```json
{
  "data": {
    "id": "rec123456",
    "title": "DeFi Yield Aggregator",
    "category": "DeFi",
    "difficulty": "Intermediate",
    "description": "Detailed description...",
    "problemStatement": "Current yield farming requires...",
    "keyFeatures": [
      "Automated yield optimization",
      "Multi-protocol support",
      "Risk assessment tools"
    ],
    "technicalArchitecture": {
      "blockchain": "Ethereum",
      "smartContracts": "Solidity",
      "frontend": "React",
      "backend": "Node.js"
    },
    "businessModel": {
      "revenueStreams": ["Performance fees", "Premium features"],
      "targetMarket": "DeFi users seeking optimized yields"
    },
    "roadmap": [
      {
        "phase": "MVP",
        "duration": "2 months",
        "deliverables": ["Basic aggregation", "Simple UI"]
      }
    ]
  }
}
```

### Builder Kits

#### Get All Builder Kits

```http
GET /api/v1/builder-kits
```

**Query Parameters:**
- `type` (string): Filter by kit type (branding, technical, business, legal)
- `limit` (number): Number of results
- `offset` (number): Pagination offset

**Response:**
```json
{
  "data": [
    {
      "id": "rec789012",
      "name": "Complete Branding Kit",
      "type": "Branding",
      "description": "Everything you need for professional branding",
      "contents": [
        "Logo templates",
        "Brand guidelines",
        "Color palettes"
      ],
      "downloadUrl": "https://example.com/download/branding-kit",
      "fileSize": "25.6 MB",
      "lastUpdated": "2024-01-10T09:15:00Z"
    }
  ]
}
```

### Hackathons

#### Get All Hackathons

```http
GET /api/v1/hackathons
```

**Query Parameters:**
- `status` (string): Filter by status (upcoming, ongoing, completed)
- `theme` (string): Filter by theme
- `startDate` (string): Filter by start date (ISO 8601)
- `endDate` (string): Filter by end date (ISO 8601)

**Response:**
```json
{
  "data": [
    {
      "id": "rec345678",
      "name": "Web3 Gaming Hackathon",
      "theme": "Gaming",
      "status": "upcoming",
      "startDate": "2024-03-15T00:00:00Z",
      "endDate": "2024-03-17T23:59:59Z",
      "registrationDeadline": "2024-03-10T23:59:59Z",
      "prizePool": "$50,000",
      "sponsors": ["Polygon", "Chainlink", "OpenSea"],
      "location": "Virtual",
      "registrationUrl": "https://example.com/register",
      "requirements": [
        "Original project",
        "Use sponsor APIs",
        "Submit by deadline"
      ]
    }
  ]
}
```

### Resources

#### Get All Resources

```http
GET /api/v1/resources
```

**Query Parameters:**
- `type` (string): Filter by type (guide, tutorial, documentation, tool)
- `category` (string): Filter by category
- `difficulty` (string): Filter by difficulty level

**Response:**
```json
{
  "data": [
    {
      "id": "rec901234",
      "title": "Smart Contract Security Best Practices",
      "type": "Guide",
      "category": "Security",
      "difficulty": "Intermediate",
      "description": "Comprehensive guide to secure smart contract development",
      "url": "https://docs.springboard.com/security-guide",
      "estimatedReadTime": "15 minutes",
      "tags": ["Security", "Smart Contracts", "Solidity"]
    }
  ]
}
```

### Search

#### Global Search

```http
GET /api/v1/search
```

**Query Parameters:**
- `q` (string, required): Search query
- `type` (string): Filter by content type (ideas, kits, hackathons, resources)
- `limit` (number): Number of results per type

**Response:**
```json
{
  "query": "defi yield",
  "results": {
    "ideas": {
      "total": 12,
      "data": [/* idea objects */]
    },
    "builderKits": {
      "total": 3,
      "data": [/* builder kit objects */]
    },
    "hackathons": {
      "total": 1,
      "data": [/* hackathon objects */]
    },
    "resources": {
      "total": 8,
      "data": [/* resource objects */]
    }
  },
  "totalResults": 24
}
```

## 📝 Data Models

### Idea Model

```typescript
interface Idea {
  id: string;
  title: string;
  category: 'DeFi' | 'NFT' | 'DAO' | 'DePIN' | 'Gaming' | 'Social' | 'Developer Tools' | 'Security' | 'Payments';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  description: string;
  problemStatement?: string;
  keyFeatures?: string[];
  technicalArchitecture?: {
    blockchain?: string;
    smartContracts?: string;
    frontend?: string;
    backend?: string;
    database?: string;
  };
  businessModel?: {
    revenueStreams?: string[];
    targetMarket?: string;
    competitiveAdvantage?: string;
  };
  roadmap?: RoadmapPhase[];
  tags: string[];
  estimatedTime?: string;
  techStack?: string[];
  createdAt: string;
  updatedAt: string;
}

interface RoadmapPhase {
  phase: string;
  duration: string;
  deliverables: string[];
  milestones?: string[];
}
```

### Builder Kit Model

```typescript
interface BuilderKit {
  id: string;
  name: string;
  type: 'Branding' | 'Technical' | 'Business' | 'Legal';
  description: string;
  contents: string[];
  downloadUrl?: string;
  fileSize?: string;
  requirements?: string[];
  lastUpdated: string;
}
```

### Hackathon Model

```typescript
interface Hackathon {
  id: string;
  name: string;
  theme: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  startDate: string;
  endDate: string;
  registrationDeadline?: string;
  prizePool?: string;
  sponsors?: string[];
  location: string;
  registrationUrl?: string;
  requirements?: string[];
  judgingCriteria?: string[];
}
```

### Resource Model

```typescript
interface Resource {
  id: string;
  title: string;
  type: 'Guide' | 'Tutorial' | 'Documentation' | 'Tool';
  category: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  url?: string;
  estimatedReadTime?: string;
  tags: string[];
  prerequisites?: string[];
}
```

## ⚠️ Error Handling

### HTTP Status Codes

- `200` - Success
- `400` - Bad Request (invalid parameters)
- `401` - Unauthorized (authentication required)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found (resource doesn't exist)
- `429` - Too Many Requests (rate limit exceeded)
- `500` - Internal Server Error
- `503` - Service Unavailable

### Error Response Format

```json
{
  "error": {
    "code": "INVALID_PARAMETER",
    "message": "The 'category' parameter must be one of: defi, nft, dao, depin, gaming, social, developer-tools, security, payments",
    "details": {
      "parameter": "category",
      "provided": "invalid-category",
      "allowed": ["defi", "nft", "dao", "depin", "gaming", "social", "developer-tools", "security", "payments"]
    }
  }
}
```

### Common Error Codes

- `INVALID_PARAMETER` - Invalid query parameter
- `MISSING_PARAMETER` - Required parameter missing
- `RESOURCE_NOT_FOUND` - Requested resource doesn't exist
- `RATE_LIMIT_EXCEEDED` - Too many requests
- `AUTHENTICATION_REQUIRED` - API key required
- `INVALID_API_KEY` - Invalid or expired API key
- `SERVICE_UNAVAILABLE` - External service (Airtable) unavailable

## 🚦 Rate Limiting

### Limits

- **Public endpoints**: 100 requests per minute per IP
- **Authenticated endpoints**: 1000 requests per minute per API key
- **Search endpoints**: 50 requests per minute per IP

### Headers

Rate limit information is included in response headers:

```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1640995200
```

### Rate Limit Exceeded

```json
{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Rate limit exceeded. Try again in 60 seconds.",
    "retryAfter": 60
  }
}
```

## 📚 SDK and Libraries

### JavaScript/TypeScript SDK

```bash
npm install @springboard/api-client
```

```typescript
import { SpringboardClient } from '@springboard/api-client';

const client = new SpringboardClient({
  baseUrl: 'https://springboard.vercel.app/api/v1',
  apiKey: 'your-api-key' // optional
});

// Get all ideas
const ideas = await client.ideas.getAll({
  category: 'defi',
  difficulty: 'intermediate'
});

// Search
const results = await client.search('yield farming');
```

### Python SDK

```bash
pip install springboard-api
```

```python
from springboard_api import SpringboardClient

client = SpringboardClient(
    base_url='https://springboard.vercel.app/api/v1',
    api_key='your-api-key'  # optional
)

# Get all ideas
ideas = client.ideas.get_all(
    category='defi',
    difficulty='intermediate'
)

# Search
results = client.search('yield farming')
```

## 💡 Examples

### Fetch DeFi Ideas

```javascript
fetch('https://springboard.vercel.app/api/v1/ideas?category=defi&limit=10')
  .then(response => response.json())
  .then(data => {
    console.log('DeFi Ideas:', data.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### Search with Filters

```javascript
const searchParams = new URLSearchParams({
  q: 'smart contract',
  type: 'resources',
  limit: '5'
});

fetch(`https://springboard.vercel.app/api/v1/search?${searchParams}`)
  .then(response => response.json())
  .then(data => {
    console.log('Search Results:', data.results);
  });
```

### Get Upcoming Hackathons

```javascript
fetch('https://springboard.vercel.app/api/v1/hackathons?status=upcoming')
  .then(response => response.json())
  .then(data => {
    data.data.forEach(hackathon => {
      console.log(`${hackathon.name} - ${hackathon.startDate}`);
    });
  });
```

## 🔗 Webhooks

### Webhook Events

- `idea.created` - New idea added
- `idea.updated` - Idea modified
- `hackathon.created` - New hackathon added
- `hackathon.status_changed` - Hackathon status updated
- `resource.created` - New resource added

### Webhook Payload

```json
{
  "event": "idea.created",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "id": "rec123456",
    "title": "New DeFi Project",
    "category": "DeFi"
  }
}
```

### Webhook Security

Webhooks are signed with HMAC-SHA256:

```javascript
const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  
  return signature === `sha256=${expectedSignature}`;
}
```

## ✅ Best Practices

### Performance

1. **Use Pagination**: Always use `limit` and `offset` for large datasets
2. **Cache Responses**: Cache API responses when appropriate
3. **Batch Requests**: Combine multiple requests when possible
4. **Use Filters**: Apply filters to reduce response size

### Error Handling

1. **Check Status Codes**: Always check HTTP status codes
2. **Handle Rate Limits**: Implement exponential backoff
3. **Graceful Degradation**: Handle API unavailability
4. **Log Errors**: Log API errors for debugging

### Security

1. **Secure API Keys**: Never expose API keys in client-side code
2. **Use HTTPS**: Always use HTTPS for API requests
3. **Validate Input**: Validate all user input before API calls
4. **Monitor Usage**: Monitor API usage for anomalies

### Integration

1. **Version Pinning**: Pin to specific API versions
2. **Backward Compatibility**: Handle API changes gracefully
3. **Testing**: Test API integrations thoroughly
4. **Documentation**: Document your API usage

---

## 📞 Support

For API support and questions:

- **Documentation**: Check this guide and inline docs
- **GitHub Issues**: Report bugs and request features
- **Community**: Join discussions and get help
- **Email**: Contact support for urgent issues

---

**API Version**: v1.0.0  
**Last Updated**: January 2024  
**Status**: Active Development

*This documentation is regularly updated. Check back for new endpoints and features.*