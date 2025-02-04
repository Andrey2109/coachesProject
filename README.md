

```markdown
# Find A Coach Platform

A Vue.js application that connects developers with professional coaches. Users can find coaches by their expertise.

## Features

- 🔐 User authentication (signup/login)
- 👥 Coach profiles with specialization areas
- 💬 Contact coaches through the platform
- ⭐ Filter coaches by expertise
- 📱 Responsive design
- ⚡ Real-time data with Firebase
- 🔄 Auto-logout on token expiration

## Technology Stack

- Vue.js 3.0
- Vuex 4.1.0 for state management  
- Vue Router 4.5.0
- Firebase Backend
- CSS3 with animations

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm/yarn
- Firebase account with Realtime Database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Andrey2109/coachesProject.git
```

2. Install dependencies:
```bash
npm install
```

3. Create a 

.env

 file in the root directory with your Firebase configuration:
```
VUE_APP_FIREBASE_API_KEY=your-api-key
```

4. Start the development server:
```bash
npm run serve
```

### Building for Production

```bash
npm run build
```

## Project Structure

src

 - Source code
  - `/components` - Reusable Vue components
  - `/pages` - Page components
  - `/store` - Vuex store modules
  - 

router.js

 - Route configurations

App.vue

 - Root component

## Features in Detail

### Authentication
- Sign up with email/password
- Login with existing credentials
- Auto-logout when the token expires
- Protected routes

### Coaches
- List all available coaches
- Filter coaches by Expertise
- View detailed coach profiles
- Register as a coach (authenticated users)

### Contact System
- Send messages to coaches
- View received requests (for coaches)
- Email integration
