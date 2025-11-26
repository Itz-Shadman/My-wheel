# RentWheels – Car Rental Platform

Live Site:

RentWheels is a full-stack MERN application designed to connect users with local car owners and rental providers. Users can browse cars, view details, and book rentals. Car providers can list vehicles, manage bookings, and update availability.

---

## Features

1. **User Authentication:**
   - Secure login and registration with email/password.
   - Google login option.
   - Password validation with real-time error messages using Toast/SweetAlert.

2. **Car Management (Providers):**
   - Add, update, and delete cars (private routes for providers).
   - Each car includes name, description, category, price, location, and image.
   - Providers can view a list of their cars and manage bookings.

3. **Car Booking (Users):**
   - Browse all available cars.
   - View detailed car information including provider details.
   - Book a car and see real-time availability updates.
   - Prevent double booking of the same car.

4. **Home Page Features:**
   - Hero banner with carousel.
   - Featured cars from MongoDB database.
   - “Why Rent With Us” section with 4 benefits cards.
   - Extra sections like Top Rated Cars and Customer Testimonials.

5. **Responsive UI & UX:**
   - Clean and professional design optimized for desktop, tablet, and mobile.
   - Navbar and footer consistent across all pages.
   - Smooth animations using Framer Motion and Lottie for booking confirmation.
   - Search functionality for cars by name.

6. **Additional Functionalities:**
   - Protected routes for private pages (Add Car, My Listings, My Bookings, Car Details).
   - Conditional Navbar for logged-in users.
   - Custom 404 page.
   - Loading spinner on data fetch.
   - Toast/SweetAlert notifications for success and error messages.

---

## Technologies Used

- **Frontend:** React, Tailwind CSS, React Router, Framer Motion, React Simple Typewriter, Lottie React, React Tooltip
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** Firebase Authentication (Email/Password + Google)
- **Hosting:** Client-side on Netlify/Surge, Server-side on Vercel

---

