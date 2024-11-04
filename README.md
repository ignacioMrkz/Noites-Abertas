# Noites Abertas - Event Platform

A modern web and mobile application for "Noites Abertas," a leisure program designed to showcase and organize events in real-time. This platform allows users to discover ongoing activities, create personalized alerts, and seamlessly integrate events into their personal calendars.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Real-Time Event Display**: View all events on the homepage, organized by date, time, and activity type.
- **User Dashboard**: Create an account to customize your experience, save favorite events, and manage alerts.
- **Personalized Alerts**: Set up custom notifications for selected events via push notifications and email reminders.
- **Calendar Integration**: Import events directly into your personal calendars like Google Calendar, iCal, and Outlook.
- **Interactive Maps**: Locate events easily with integrated mapping services.
- **Responsive Design**: Enjoy a seamless experience across desktops, tablets, and mobile devices.
- **Dark Mode and Light Mode**: Switch between themes based on your preference.

## Technologies Used

- **Frontend**

  - [TypeScript](https://www.typescriptlang.org/)
  - [Next.js](https://nextjs.org/)
  - [React](https://reactjs.org/)
  - [Tailwind CSS](https://tailwindcss.com/) or [Styled Components](https://styled-components.com/)
  - [PWA](https://web.dev/progressive-web-apps/) (Progressive Web App) features for offline support

- **Backend**

  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/) or [Apollo Server](https://www.apollographql.com/docs/apollo-server/) for GraphQL
  - [GraphQL](https://graphql.org/) or REST API
  - Database: [PostgreSQL](https://www.postgresql.org/) or [MongoDB](https://www.mongodb.com/)
  - Authentication with [OAuth 2.0](https://oauth.net/2/) and [JWT](https://jwt.io/)

- **DevOps**

  - Containerization with [Docker](https://www.docker.com/)
  - Continuous Integration/Continuous Deployment (CI/CD) with [GitHub Actions](https://github.com/features/actions)
  - Deployment on [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or [AWS](https://aws.amazon.com/)

- **Integrations**

  - Calendar APIs: [Google Calendar API](https://developers.google.com/calendar), [Outlook Calendar API](https://docs.microsoft.com/en-us/graph/api/resources/event)
  - Notifications: [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging), [OneSignal](https://onesignal.com/)
  - Maps and Geolocation: [Google Maps API](https://developers.google.com/maps), [Mapbox](https://www.mapbox.com/)

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/noites-abertas.git
   cd noites-abertas
   ```

2. **Install Dependencies**

   ```bash
   yarn install
   # or
   npm install
   ```

3. **Set Up Environment Variables**

   - Create a `.env` file in the root directory.
   - Add necessary environment variables (e.g., API keys, database URLs).

4. **Run the Development Server**

   ```bash
   yarn dev
   # or
   npm run dev
   ```

   The app should now be running at [http://localhost:3000](http://localhost:3000).

## Usage

- **Access the Homepage**

  Navigate to [http://localhost:3000](http://localhost:3000) to view events.

- **User Registration**

  - Click on "Sign Up" to create a new account.
  - Optionally, sign up using Google or Facebook authentication.

- **Explore Events**

  - Use filters to sort events by date, time, or activity type.
  - Click on an event for more details and options.

- **Create Alerts**

  - From the event detail page, set up alerts to receive notifications.
  - Choose to receive notifications via email or push notifications.

- **Import Events to Calendar**

  - Click the "Add to Calendar" button on an event to import it into your personal calendar.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add YourFeature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request.

## License

This project is licensed under the [Creative Commons license].

## Contact

- **Email**: ignacio@ruralhackers.com
- **Website**: [www.noitesabertas.gal](https://www.noitesabertas.gal)
- **GitHub**: [https://github.com/ignacioMrkz/noites-abertas](https://github.com/ignacioMrkz/noites-abertas)

---

Thank you for your interest in Noites Abertas! If you have any questions or need assistance, please don't hesitate to reach out.
