# Airtable CSV Import Files for Builder Kits

This directory contains CSV files that can be used to quickly create and populate the Builder Kits tables in Airtable.

## Files Overview

### 1. `builder_kits.csv`
Main table containing all builder kit information including:
- Basic kit details (title, description, outcome)
- Metadata (difficulty, duration, category, tags)
- Technical requirements (tools, deliverables)
- Status and tracking information

### 2. `kit_sections.csv`
Detailed sections for each builder kit including:
- Section organization (kit_id, section_number)
- Learning content (title, description, objectives)
- Time estimates and difficulty levels
- Prerequisites and deliverables

### 3. `starter_prompts.csv`
Individual prompts within each section including:
- Detailed prompt instructions
- Expected outcomes and time estimates
- Prerequisites and follow-up actions
- Difficulty levels and tags

## Import Instructions

### Step 1: Create Tables in Airtable

1. **Create `builder_kits` table:**
   - Import `builder_kits.csv`
   - Set `id` as Primary field
   - Configure field types as specified in the schema
   - Set up Single Select fields for `difficulty`, `category`, `status`
   - Configure Multi Select field for `tags`

2. **Create `kit_sections` table:**
   - Import `kit_sections.csv`
   - Set `id` as Primary field
   - Link `kit_id` to `builder_kits` table
   - Configure field types appropriately

3. **Create `starter_prompts` table:**
   - Import `starter_prompts.csv`
   - Set `id` as Primary field
   - Link `section_id` to `kit_sections` table
   - Configure field types appropriately

### Step 2: Configure Field Types

#### Builder Kits Table
- `id`: Single line text (Primary)
- `title`: Single line text
- `slug`: Single line text
- `description`: Long text
- `outcome`: Long text
- `difficulty`: Single select (Beginner, Intermediate, Advanced)
- `duration_hours`: Number
- `category`: Single select
- `tags`: Multiple select
- `tools_required`: Long text
- `final_deliverables`: Long text
- `success_metrics`: Long text
- `related_kits`: Long text
- `icon`: Single line text
- `color`: Single line text
- `status`: Single select (Active, Draft, Archived)
- `created_date`: Date
- `updated_date`: Date

#### Kit Sections Table
- `id`: Single line text (Primary)
- `kit_id`: Link to `builder_kits`
- `section_number`: Number
- `title`: Single line text
- `description`: Long text
- `estimated_time_minutes`: Number
- `prompt_count`: Number
- `learning_objectives`: Long text
- `prerequisites`: Long text
- `deliverables`: Long text
- `resources`: Long text
- `difficulty_level`: Single select (Beginner, Intermediate, Advanced)
- `status`: Single select (Active, Draft, Archived)
- `created_date`: Date
- `updated_date`: Date

#### Starter Prompts Table
- `id`: Single line text (Primary)
- `section_id`: Link to `kit_sections`
- `prompt_number`: Number
- `title`: Single line text
- `prompt_text`: Long text
- `expected_outcome`: Long text
- `difficulty_level`: Single select (Beginner, Intermediate, Advanced)
- `estimated_time_minutes`: Number
- `tags`: Multiple select
- `prerequisites`: Long text
- `follow_up_actions`: Long text
- `status`: Single select (Active, Draft, Archived)
- `created_date`: Date
- `updated_date`: Date

### Step 3: Set Up Relationships

1. **Builder Kits → Kit Sections:**
   - In `kit_sections` table, link `kit_id` field to `builder_kits` table
   - This creates a one-to-many relationship

2. **Kit Sections → Starter Prompts:**
   - In `starter_prompts` table, link `section_id` field to `kit_sections` table
   - This creates a one-to-many relationship

### Step 4: Configure Views

Create useful views for different perspectives:

#### Builder Kits Views
- **All Kits**: Default view showing all kits
- **By Category**: Grouped by category
- **By Difficulty**: Grouped by difficulty level
- **Active Kits**: Filtered to show only active kits

#### Kit Sections Views
- **By Kit**: Grouped by kit_id
- **By Difficulty**: Grouped by difficulty level
- **Section Overview**: Summary view with key fields

#### Starter Prompts Views
- **By Section**: Grouped by section_id
- **By Difficulty**: Grouped by difficulty level
- **Prompt Library**: All prompts with search functionality

## Data Validation

After import, verify:

1. **Record Counts:**
   - Builder Kits: 9 records
   - Kit Sections: 16 records (sample sections for first 2 kits)
   - Starter Prompts: 24 records (sample prompts for first kit)

2. **Relationships:**
   - All kit_sections properly linked to builder_kits
   - All starter_prompts properly linked to kit_sections

3. **Field Types:**
   - Dates properly formatted
   - Numbers in correct format
   - Select fields showing options correctly

## Next Steps

1. **Complete the Data:**
   - Add remaining sections for kits 3-9
   - Add all starter prompts for all sections
   - Review and refine content

2. **Enhance Structure:**
   - Add custom fields as needed
   - Create additional views
   - Set up automations

3. **Integration:**
   - Update application to fetch from Airtable
   - Test data synchronization
   - Implement caching strategies

## Notes

- The CSV files contain sample data for the first 2 builder kits with complete sections and prompts for the first kit
- Additional data can be added directly in Airtable or through additional CSV imports
- Field types and relationships should be configured before importing large amounts of data
- Consider setting up Airtable automations for data validation and notifications