# Airtable Database Schema

This document outlines the complete database schema for the Springboard application using Airtable as the backend.

## Overview

The Springboard application uses Airtable with the following tables:
- `categories` - Project idea categories
- `ideas` - Project ideas with detailed PRDs
- `resource_tool_guides` - Tool guides for the Resource Center
- `resource_how_to_guides` - How-to guides for the Resource Center
- `resource_existing_docs_pocs` - Links to existing documentation and POCs
- `hackathons` - Information about upcoming hackathons

## Table Schemas

### 1. Categories Table

**Table Name:** `categories`

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| name | Single line text | Yes | Category name (e.g., "AI", "Web App", "Mobile App") |
| description | Long text | No | Brief description of the category |
| color | Single line text | No | Color code for UI display (e.g., "blue", "green") |

**Sample Data:**
\`\`\`
AI, Artificial Intelligence and Machine Learning projects, blue
Web App, Full-stack web applications, green
Mobile App, iOS and Android applications, purple
\`\`\`

### 2. Ideas Table

**Table Name:** `ideas`

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| title | Single line text | Yes | Project idea title |
| slug | Single line text | Yes | URL-friendly identifier (auto-generated) |
| description | Long text | Yes | Brief project description |
| problem_statement | Long text | Yes | Problem the project solves |
| category | Link to another record | No | Links to Categories table |
| status | Single select | Yes | Options: "submitted", "approved", "rejected", "archived" |
| submitted_by_name | Single line text | No | Name of person who submitted the idea |
| submitted_by_email | Email | No | Email of submitter |
| prd_content | Long text | No | JSON string containing detailed PRD information |
| created_at | Created time | Auto | When the record was created |
| updated_at | Last modified time | Auto | When the record was last updated |

**PRD Content JSON Structure:**
\`\`\`json
{
  "target_audience": ["Primary users", "Secondary users"],
  "mvp_features": ["Feature 1", "Feature 2", "Feature 3"],
  "tech_stack": ["Technology 1", "Technology 2"],
  "stretch_goals": ["Future feature 1", "Future feature 2"]
}
\`\`\`

**Status Options:**
- `submitted` - User-submitted idea awaiting review
- `approved` - Approved idea visible to public
- `rejected` - Rejected idea (not visible to public)
- `archived` - Archived idea (not visible to public)

### 3. Resource Tool Guides Table

**Table Name:** `resource_tool_guides`

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| title | Single line text | Yes | Guide title |
| slug | Single line text | Yes | URL-friendly identifier |
| description | Long text | Yes | Brief description of the tool/guide |
| content | Long text | Yes | Full guide content (Markdown supported) |
| tool_name | Single line text | Yes | Name of the tool being covered |
| difficulty | Single select | No | Options: "Beginner", "Intermediate", "Advanced" |
| tags | Multiple select | No | Tags for categorization |
| external_url | URL | No | Link to official tool documentation |
| display_order | Number | No | Order for displaying in lists |
| is_featured | Checkbox | No | Whether to feature this guide |
| created_at | Created time | Auto | When the record was created |
| updated_at | Last modified time | Auto | When the record was last updated |

### 4. Resource How-To Guides Table

**Table Name:** `resource_how_to_guides`

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| title | Single line text | Yes | Guide title |
| slug | Single line text | Yes | URL-friendly identifier |
| description | Long text | Yes | Brief description of what the guide teaches |
| content | Long text | Yes | Full guide content (Markdown supported) |
| difficulty | Single select | No | Options: "Beginner", "Intermediate", "Advanced" |
| estimated_time | Single line text | No | Estimated completion time |
| prerequisites | Long text | No | What users should know before starting |
| tags | Multiple select | No | Tags for categorization |
| display_order | Number | No | Order for displaying in lists |
| is_featured | Checkbox | No | Whether to feature this guide |
| created_at | Created time | Auto | When the record was created |
| updated_at | Last modified time | Auto | When the record was last updated |

### 5. Resource Existing Docs/POCs Table

**Table Name:** `resource_existing_docs_pocs`

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| title | Single line text | Yes | Resource title |
| description | Long text | Yes | Brief description of the resource |
| url | URL | Yes | Link to the external resource |
| resource_type | Single select | Yes | Options: "Documentation", "Tutorial", "POC", "Example", "Tool" |
| tags | Multiple select | No | Tags for categorization |
| difficulty | Single select | No | Options: "Beginner", "Intermediate", "Advanced" |
| display_order | Number | No | Order for displaying in lists |
| is_featured | Checkbox | No | Whether to feature this resource |
| created_at | Created time | Auto | When the record was created |
| updated_at | Last modified time | Auto | When the record was last updated |

### 6. Hackathons Table

**Table Name:** `hackathons`

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| title | Single line text | Yes | Hackathon name |
| slug | Single line text | Yes | URL-friendly identifier |
| description | Long text | Yes | Hackathon description |
| start_date | Date | Yes | Start date of the hackathon |
| end_date | Date | Yes | End date of the hackathon |
| registration_deadline | Date | No | Last date to register |
| location | Single line text | No | Physical location or "Virtual" |
| organizer | Single line text | No | Organization running the hackathon |
| website_url | URL | No | Official hackathon website |
| registration_url | URL | No | Registration link |
| prize_pool | Single line text | No | Prize information |
| themes | Multiple select | No | Hackathon themes/tracks |
| is_active | Checkbox | No | Whether the hackathon is currently active |
| is_featured | Checkbox | No | Whether to feature on homepage |
| created_at | Created time | Auto | When the record was created |
| updated_at | Last modified time | Auto | When the record was last updated |

## Relationships

### Ideas → Categories
- **Type:** Many-to-One
- **Description:** Each idea can belong to one category
- **Implementation:** Link field in Ideas table pointing to Categories table

## Field Validation Rules

### Ideas Table
- `slug` must be unique across all records
- `status` defaults to "submitted" for new user submissions
- `prd_content` should be valid JSON when provided

### Categories Table
- `name` must be unique
- `color` should be a valid CSS color name or hex code

### All Resource Tables
- `slug` must be unique within each table
- `display_order` should be unique when provided (for consistent ordering)

## Indexes and Performance

For optimal performance, consider creating the following views in Airtable:

### Ideas Table Views
- **Public Ideas:** Filter by `status = "approved"`
- **Pending Review:** Filter by `status = "submitted"`
- **By Category:** Group by `category`

### Resource Tables Views
- **Featured Items:** Filter by `is_featured = true`
- **By Difficulty:** Group by `difficulty`
- **Ordered Display:** Sort by `display_order`

### Hackathons Table Views
- **Active Hackathons:** Filter by `is_active = true`
- **Upcoming:** Filter by `start_date >= today()`
- **Featured:** Filter by `is_featured = true`

## Data Import Notes

When importing data from CSV files:

1. **Categories** should be imported first (no dependencies)
2. **Ideas** should be imported after Categories (depends on category links)
3. **Resource tables** can be imported in any order (no dependencies)
4. **Hackathons** can be imported in any order (no dependencies)

## API Considerations

When using the Airtable API:

- Use the `filterByFormula` parameter for efficient querying
- Implement proper error handling for rate limits
- Cache frequently accessed data on the frontend
- Use batch operations for bulk updates

## Security and Access Control

- **Public Read Access:** Categories, approved Ideas, all Resource tables, active Hackathons
- **Admin Write Access:** All tables and fields
- **User Submissions:** Limited write access to Ideas table with status "submitted"

## Environment Variables Required

\`\`\`env
AIRTABLE_API_KEY=your_airtable_api_key
AIRTABLE_BASE_ID=your_airtable_base_id
\`\`\`

## Migration from Supabase

If migrating from a Supabase setup:

1. Export data from Supabase tables
2. Transform data to match Airtable field types
3. Import using CSV files or Airtable API
4. Update application code to use Airtable client instead of Supabase client
5. Test all CRUD operations
6. Update environment variables

---

*Last updated: [Current Date]*
*Version: 1.0*
