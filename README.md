# Fire Truck Invoice Generator 🚒

## Overview
The **Fire Truck Invoice Generator** is a Next.js app that allows users to create and download PDF invoices for fire truck listings on [Garage](https://www.withgarage.com/). By integrating with Garage’s backend API, the app fetches listing details and dynamically generates an invoice based on the provided input.

View it here at: [Fire Truck Invoice Generator](https://firetruck-invoice-generator.vercel.app/)!

---

## Features
- **Dynamic Invoice Generation**: Fetches fire truck listing details and transforms them into a PDF invoice.
- **Preview Functionality**: Users can preview invoices in before downloading.
- **Input Validation**: Ensures valid email addresses and correctly formatted URLs for reliable operation.
- **Modular Components**: Built with reusable, composable components for scalability and maintainability.
- **TypeScript Integration**: Ensures type safety and clear API contracts.
- **Responsive Design**: Styled with TailwindCSS for a clean, user-friendly interface.

---

## Usage
1. Open the app in your browser at [https://firetruck-invoice-generator.vercel.app/](https://firetruck-invoice-generator.vercel.app/).
2. Enter the fire truck listing URL from [Garage](https://www.withgarage.com/), recipient’s name, and email address.
3. Preview the generated invoice in the application.
4. Download the PDF, either in the PDF Viewer or with the Download button.

---
## File Structure

### **Frontend Components**
- **`src/app`**: Defines the global layout, styles, and metadata.
- **`src/components`**:
  - **`InvoiceForm`**: Collects user input with client-side validation.
  -  **`InvoicePreview`**: Displays the invoice PDF after requesting, calls on `InvoiceTemplate`

  - **`src/components/invoice`**: Components for generating the invoice, such as subcomponents including `InvoiceTemplate`, `InvoiceHeader`, `InvoiceSummary`, `InvoiceDetails`, and more.
    - **`InvoiceTemplate`**: Combines multiple invoice sections into a cohesive PDF document.


### **Services**
- **`src/services/api.ts`**: Manages API requests to fetch listing details from Garage’s backend.
- **`src/services/api.test.ts`**: Contains Jest unit tests for API interactions.

### **Types**
- **`src/types/ListingResponseData.ts`**: Defines the structure of API response data.
- **`src/types/InvoiceProps.ts`**: Provides detailed types for invoice-related props, ensuring consistency across components.

### **Utilities**
- **`src/utils/mapListingToInvoiceSections.ts`**: Maps API response data to structured invoice sections for rendering.

---

## Thought Process

### Code Decisions
1. **TypeScript**:
   - TypeScript's robust type safety helps ensure reliable and predictable API interactions.
   - Being able to define specific types (e.g., `ListingResponseData`, `InvoiceProps`) helps reduce ambiguity and streamline development.

2. **Validation**:
   - Implemented email and URL validation in `InvoiceForm` using regex patterns.
   - Provided user-friendly error messages to improve the form’s usability, noting that the error will be displayed `onBlur`, when the user leaves the text input. 

3. **Data Mapping**:
   - Utilizes `mapListingToInvoiceSections.ts` to cleanly transform the API response data into structured sections, allowing for a simplier process in rendering the invoice components.

4. **PDF Generation**:
   - Used `@react-pdf/renderer` for modular and customizable invoice creation.
   - Designed the `InvoiceTemplate` component to compile the layout using broken down subcomponents and their respective props mapped from API data.

### Design Decisions
1. **Modular Architecture**:
   - Split invoice sections into individual components (e.g., `InvoiceHeader`, `InvoiceDetails`) for better reusability and maintainability.
   - Ensured that components follow single-responsibility principles, making future enhancements easier.

2. **Styling**:
   - Used TailwindCSS for responsive and visually appealing UI.
   - Applied consistent styles across components, leveraging CSS variables for theming.

3. **Preview Integration**:
   - Integrated a real-time preview using `@react-pdf/renderer` to enhance the user experience.

4. **API Interaction**:
   - Centralized API calls in `src/services/api.ts` to separate business logic from UI components.

5. **Invoice Styling**:
     - Specifically for the invoice, decided to provide all the same information as the current invoice as well as sections for more detailed item features, auction details, and condition of the item. 

---

## Future Enhancements

### Immediate Improvements
1. **Enhanced Invoice Formatting**:
   - Refactor the display of long descriptions to avoid clutter. Consider using two columns or other forms of display.

2. **Increase Speed**:
   - Increase efficiency of the app so that the PDFs can be generated faster, with less waiting for the preview.

3. **Email Functionality**:
   - Add an option to send invoices via email directly from the app.

4. **Dark Mode**:
   - Implement a dark mode toggle for improved accessibility.


### Long-Term Features
1. **Custom Notes**:
   - Allow users to add personalized notes or messages to the invoice.

2. **Expansion in Audiences**:
   - Support multiple languages and regional formats for broader usability.

3. **Tax Calculations**:
   - Add dynamic tax calculations based on user input or geographic data.

---

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd fire-truck-invoice-generator
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Technologies Used
- **Framework**: Next.js
- **Styling**: TailwindCSS and `@react-pdf/renderer`
- **PDF Utilities**: `@react-pdf/renderer`, `file-saver`
- **TypeScript**: Comprehensive type definitions
- **API Integration**: Axios
- **Testing**: Jest for unit tests
