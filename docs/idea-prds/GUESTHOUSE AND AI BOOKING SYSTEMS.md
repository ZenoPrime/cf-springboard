# **PRD: AI-Powered Hotel & Guesthouse Booking Platform**

## **Overview**

Create a digital platform for hotels and guesthouses in Sierra Leone to allow users to search, discover, and book accommodation online. The system should utilize AI to improve recommendations and potentially streamline data entry via OCR for traditional bookings.

## **Problem Statement**

Currently, no digital platform in Sierra Leone offers online booking for hotels or guesthouses. This causes inconvenience to tourists and residents and restricts visibility and accessibility for hospitality providers.

## **Goals**

* Digitize hotel and guesthouse listings.

* Allow real-time availability and booking.

* Improve user experience with AI-based recommendations.

* Enable guesthouse owners to onboard easily.

## **Features**

### **User Features**

* Search and browse hotels/guesthouses.

* Filter by location, amenities, price, and ratings.

* View room details, availability, and photos.

* Make bookings and receive confirmations.

### **Admin/Hotel Owner Features**

* Dashboard to manage listings, availability, and bookings.

* Upload photos, descriptions, and pricing.

* View booking history and performance analytics.

### **AI Features**

* Personalized recommendations based on user behavior.

* OCR to extract handwritten guest info from scanned logbooks (optional).

## **Non-Goals**

* Managing payments (may be handled manually).

* Providing physical services like transportation.

## **User Stories**

1. As a user, I want to search for accommodations by location and date.

2. As a user, I want to view hotel photos and details.

3. As a hotel owner, I want to list my property with rooms and prices.

4. As a system, I want to suggest relevant accommodations using user behavior.

## **Tech Stack Options**

| Option | Framework | Backend | Database | Auth | Hosting |
| ----- | ----- | ----- | ----- | ----- | ----- |
| A | Next.js | Next.js API Routes | Firebase/Supabase | Firebase Auth/NextAuth | Vercel |
| B | SvelteKit | \+server.ts API Routes | Supabase/Firebase | Supabase Auth | Vercel/Netlify |

### **Shared Tools**

* AI: OpenAI, Tesseract.js

* Styling: TailwindCSS

* Storage: Firebase Storage/Cloudinary

## **Deliverables**

* Full-stack web application (frontend \+ backend).

* At least 10 sample hotels with images.

* Booking functionality with date selection.

* AI-powered suggestion logic.

## **Evaluation Criteria**

* Functionality completeness.

* UI/UX quality.

* AI feature relevance and effectiveness.

* Code quality and documentation.

## **Timeline**

* **Day 1**: Ideation, team formation, tech stack choice.

* **Day 2-3**: Development & testing.

* **Day 4**: Demo & presentation.

## **Notes** 

* AI component is mandatory.

