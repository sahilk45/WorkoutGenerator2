..............................*PowerHouse Fitness Website Documentation*................................


📖 Overview:
PowerHouse is a comprehensive fitness web application built with Next.js. It empowers users to manage workouts, track progress, and access a diverse library of exercises, offering a seamless and intuitive fitness management experience.

🚀 Features:

🔐 Authentication:
User registration and login functionality.
Google OAuth integration.
Secure authentication with NextAuth.js.
Protected routes for authenticated users.

💪 Core Functionalities:
Workout Library: Browse and search a comprehensive list of exercises.
Dashboard: Personalize and manage your workouts.
Progress Tracker: Monitor fitness progress over time.
Custom Workout Generation: AI-powered workout suggestions tailored to user goals.
Responsive Design: Mobile-first approach for seamless cross-device usability.



🛠 Tech Stack:-

🎨 Frontend:
Next.js 13+ (App Router)
React
Tailwind CSS
Framer Motion (for animations)
🔧 Backend:
Firebase
NextAuth.js (authentication)
Node.js
🗄 Database:
Firebase Firestore


📂 Project Structure:
csharp-
workoutgen/
├── app/
│   ├── dashboard/       # User dashboard
│   ├── library/         # Exercise library
│   ├── login/           # Authentication pages
│   ├── progress/        # Progress tracking
│   └── about/           # About the platform
├── components/
│   ├── auth/            # Authentication components
│   ├── layout/          # Reusable layout components
│   └── ui/              # User interface components
├── context/
│   └── AuthContext.js   # Authentication context
├── firebase/
│   └── config.js        # Firebase configuration
├── public/              # Public assets
└── styles/              # Global stylesheets

⚙ Setup Instructions
Clone the Repository:
bash-
git clone https://github.com/your-username/powerhouse-fitness.git
cd powerhouse-fitness

Install Dependencies:
bash-
npm install

Set Up Environment Variables:
Create a .env.local file in the root directory.
Add the following environment variables:
ini-
NEXTAUTH_URL=your_app_url
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_PROJECT_ID=your_project_id

Run the Development Server:
bash-
npm run dev


🔑 Key Components:-

📌 Navigation:
Responsive navbar with a mobile-friendly menu.
UI adapts based on the authentication state.
Dynamic route highlighting for active pages.

🔒 Authentication Flow:
Email and password-based authentication.
Google OAuth integration.
Protected routes using middleware for secure access.

🏋 Workout Management:
Create and customize workouts.
Save favorite exercises for easy access.
Track and view workout history.

📊 Progress Tracking:
Record workout data.
Visualize progress through charts.
Set and monitor personal fitness goals.

🚀 Deployment:
This application is ready for deployment on Vercel-
Connect your GitHub repository to Vercel.
Configure environment variables in the Vercel dashboard.
Deploy with automatic CI/CD pipelines for seamless updates.

🤝 Contributing:
Fork the repository.
Create a new feature branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add your message').
Push to your branch (git push origin feature/your-feature).
Open a pull request.

