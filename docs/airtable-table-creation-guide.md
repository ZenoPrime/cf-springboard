# Airtable Table Creation Guide for Builder Kits

## Overview

This guide provides step-by-step instructions for manually creating the required tables in your "💡 Product Ideas" Airtable base to support the Builder Kits migration.

**Status**: ✅ Categories table updated with all builder kit categories
**Next**: Create 4 additional tables manually (API limitation)

## Categories Added ✅

I've successfully added the following categories to your existing Categories table:

- **Branding** (card-purple) - Brand identity, visual design, and brand strategy kits
- **Research** (card-blue) - Market research, validation, and analysis kits  
- **Design** (card-green) - Design systems, UI/UX, and visual design kits
- **Development** (card-orange) - Coding, prototyping, and technical development kits
- **Content** (card-coral) - Content creation, copywriting, and documentation kits
- **Presentation** (card-yellow) - Pitch decks, demos, and presentation materials kits
- **Marketing** (card-blue) - Social media, launch strategies, and marketing kits
- **Productivity** (card-green) - Team collaboration, project management, and productivity kits

## Tables to Create Manually

You need to create these 4 tables in your Airtable base:

### 1. Builder Kits Table

**Table Name**: `Builder Kits`

**Fields to Create**:

1. **kit_id** (Single line text) - Primary field
   - Description: Unique identifier for each kit
   - Example: `complete-branding-kit`

2. **title** (Single line text)
   - Description: Display title of the kit
   - Example: `Build Your Complete Brand Identity`

3. **slug** (Single line text)
   - Description: URL-friendly identifier
   - Example: `complete-branding-kit`

4. **description** (Long text)
   - Description: Detailed kit description
   - Example: `Build a professional brand identity from strategy to visual assets in one weekend.`

5. **outcome_description** (Long text)
   - Description: What users will achieve
   - Example: `Professional brand package ready for launch`

6. **difficulty** (Single select)
   - Options: `Beginner`, `Intermediate`, `Advanced`
   - Colors: Green, Yellow, Red respectively

7. **estimated_duration** (Single line text)
   - Description: Time estimate
   - Example: `4-6 hours`

8. **category** (Link to another record)
   - Link to: Categories table
   - Allow linking to multiple records: No

9. **tags** (Multiple select)
   - Create options as needed: `branding`, `design`, `strategy`, `visual-identity`, `ai-tools`, `hackathon`, etc.
   - Use different colors for visual distinction

10. **tools_required** (Multiple select)
    - Options: `ChatGPT`, `DALL·E 3`, `Canva`, `Copy.ai`, `Perplexity AI`, `v0.dev`, `Figma AI`, `Adobe Firefly`, etc.
    - Add more as needed

11. **final_deliverables** (Long text)
    - Description: List of what users will create
    - Format as bullet points

12. **success_metrics** (Long text)
    - Description: How to measure success
    - Format as bullet points

13. **related_kits** (Link to another record)
    - Link to: Builder Kits table (same table)
    - Allow linking to multiple records: Yes

14. **display_order** (Number)
    - Description: For ordering kits
    - Precision: 0 (whole numbers)

15. **is_active** (Checkbox)
    - Description: Enable/disable kit
    - Default: Checked

16. **created_at** (Created time)
    - Include time: Yes

17. **updated_at** (Last modified time)
    - Include time: Yes

### 2. Kit Sections Table

**Table Name**: `Kit Sections`

**Fields to Create**:

1. **section_id** (Single line text) - Primary field
   - Example: `complete-branding-kit-brand-strategy`

2. **kit_id** (Link to another record)
   - Link to: Builder Kits table
   - Allow linking to multiple records: No

3. **title** (Single line text)
   - Example: `Brand Strategy`

4. **description** (Long text)
   - Example: `Define your brand's core identity, values, and positioning`

5. **order** (Number)
   - Description: Section order within kit
   - Precision: 0

6. **estimated_time** (Single line text)
   - Example: `1 hour`

7. **tools** (Multiple select)
   - Same options as tools_required in Builder Kits

8. **instructions** (Long text)
   - Detailed step-by-step instructions

9. **tips** (Long text)
   - Tips and best practices

10. **expected_outputs** (Long text)
    - What users should create in this section

11. **quality_checklist** (Long text)
    - Quality criteria and checkpoints

12. **is_active** (Checkbox)
    - Default: Checked

13. **created_at** (Created time)

14. **updated_at** (Last modified time)

### 3. Starter Prompts Table

**Table Name**: `Starter Prompts`

**Fields to Create**:

1. **prompt_id** (Single line text) - Primary field
   - Example: `brand-strategy-core-values`

2. **section_id** (Link to another record)
   - Link to: Kit Sections table
   - Allow linking to multiple records: No

3. **title** (Single line text)
   - Example: `Define Core Values`

4. **category** (Single select)
   - Options: `strategy`, `creative`, `technical`, `optimization`
   - Colors: Blue, Purple, Orange, Green

5. **tool** (Single select)
   - Options: Same as tools_required options

6. **template** (Long text)
   - The actual prompt template with variables

7. **variables** (Multiple select)
   - Template variables like `{business_idea}`, `{target_audience}`, etc.

8. **example_output** (Long text)
   - Example of what the prompt should generate

9. **next_steps** (Long text)
   - What to do after using this prompt

10. **order** (Number)
    - Prompt order within section
    - Precision: 0

11. **is_active** (Checkbox)
    - Default: Checked

12. **created_at** (Created time)

13. **updated_at** (Last modified time)

### 4. AI Tools Table

**Table Name**: `AI Tools`

**Fields to Create**:

1. **tool_id** (Single line text) - Primary field
   - Example: `chatgpt`

2. **name** (Single line text)
   - Example: `ChatGPT`

3. **description** (Long text)
   - Tool description and capabilities

4. **category** (Single select)
   - Options: `Language Model`, `Image Generation`, `Design Tool`, `Code Assistant`, `Research Tool`

5. **website_url** (URL)
   - Official website link

6. **pricing_model** (Single select)
   - Options: `Free`, `Freemium`, `Paid`
   - Colors: Green, Yellow, Red

7. **is_active** (Checkbox)
   - Tool availability status

8. **created_at** (Created time)

9. **updated_at** (Last modified time)

## Step-by-Step Creation Process

### Step 1: Create Tables
1. Go to your "💡 Product Ideas" Airtable base
2. Click the "+" button to add a new table
3. Name it "Builder Kits"
4. Delete the default fields and create the fields listed above
5. Repeat for the other 3 tables

### Step 2: Set Up Relationships
1. In Builder Kits table, link the "category" field to the Categories table
2. In Kit Sections table, link the "kit_id" field to the Builder Kits table
3. In Starter Prompts table, link the "section_id" field to the Kit Sections table
4. In Builder Kits table, link the "related_kits" field to itself (Builder Kits table)

### Step 3: Configure Views
Create helpful views for each table:
- **Builder Kits**: "All Kits", "By Category", "By Difficulty"
- **Kit Sections**: "All Sections", "By Kit"
- **Starter Prompts**: "All Prompts", "By Section", "By Tool"
- **AI Tools**: "All Tools", "Active Tools", "By Category"

## Next Steps After Table Creation

Once you've created these tables manually:

1. **Notify me** - I'll populate all tables with the complete builder kit data
2. **Test the structure** - I'll add sample records to verify relationships
3. **Update the application** - Modify the code to fetch from Airtable instead of static files
4. **Validate functionality** - Ensure all features work with the new data source

## Benefits of This Structure

✅ **Dynamic Content Management** - Easy to add/edit kits without code changes
✅ **Proper Relationships** - Normalized data structure with clean relationships
✅ **Scalability** - Easy to add new fields and expand functionality
✅ **Team Collaboration** - Multiple people can manage content
✅ **Advanced Filtering** - Rich filtering and search capabilities
✅ **Analytics Ready** - Track usage and popularity
✅ **API Integration** - Seamless integration with existing Airtable setup

## Estimated Time

- **Manual table creation**: 30-45 minutes
- **Data population** (automated): 10-15 minutes
- **Code integration**: 1-2 hours
- **Testing and validation**: 30 minutes

**Total**: ~2.5-3 hours for complete migration

Let me know once you've created the tables and I'll populate them with all the builder kit data!