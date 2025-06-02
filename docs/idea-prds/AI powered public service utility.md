# **PRD: AI-Powered Public Services & Utilities Aggregator**

## **Overview**

Build a centralized platform where users can find and access information about local public services—such as electricity, water services, emergency contacts, public transport, and municipal services.

## **Problem Statement**

Sierra Leone lacks digital directories for critical public services. Citizens rely on word-of-mouth or have to visit offices to get simple information or updates.

## **Goals**

* Centralize access to utility and public service information.

* Provide real-time updates (e.g., power outages, water availability).

* Help citizens find nearest facilities and contact info.

## **Features**

### **User Features**

* Directory of public services and contacts.

* Searchable listing by category (e.g., police, electricity, transport) and location.

* AI assistant to answer common service-related questions.

* Alerts system for public announcements.

### **Admin Features**

* CMS to manage and update listings.

* Push notifications for outages or emergencies.

### **AI Features**

* NLP chatbot for answering common questions (e.g., "Where is the nearest police station?").

* OCR to extract contact info from flyers/documents uploaded.

## **Non-Goals**

* Payment integration.

* Service issue resolution (e.g., bill payments).

## **User Stories**

1. As a user, I want to search for the nearest electricity office.

2. As a system, I want to notify users about sudden water outage and deadlines..

3. As a content admin, I want to add or update service info.

## **Tech Stack Options**

| Option | Framework | Backend | Database | Auth | Hosting |
| ----- | ----- | ----- | ----- | ----- | ----- |
| A | Next.js | Node.js/Firebase Functions | Supabase/Firebase | Firebase Auth | Vercel |
| B | SvelteKit | SvelteKit API or Express | Supabase | Supabase Auth | Netlify |

### **Shared Tools**

* AI: OpenAI, Cohere (for NLP)

* OCR: Tesseract.js (optional)

* Styling: TailwindCSS

* Notification: Firebase Cloud Messaging (FCM)

## **Deliverables**

* Public directory with filter/search.

* Admin dashboard for updates.

* AI assistant chatbot.

* Alert system (bonus).

## **Evaluation Criteria**

* Usefulness of the AI assistant.

* Accuracy and accessibility of listings.

* System UI/UX.

* Completeness of update mechanism.

## **Timeline**

* **Day 1**: Gather public service categories, plan schema.

* **Day 2-3**: Build frontend/backend.

* **Day 4**: Test NLP and notifications.

## **Notes**

* Teams can focus on specific cities or towns.

* Encourage using actual government service data if available.

