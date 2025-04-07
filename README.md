# Interactive Banner App

A React-based web application featuring a dynamic banner that users can customize in real-time without page reloads.

## Features

- **Dynamic Banner**: A full-width banner displaying content about a personal interest.
- **Interactive Controls**: Form elements enabling users to modify:
  - Banner background color
  - Banner title
  - Banner description
- **Real-Time Updates**: Immediate reflection of changes without page reloads.

## Explore this Interactive banner

https://vercel.com/preshgits-projects/interactive-banner-web-app

## Prerequisites

Before you clone, please ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (version 1.22 or higher)

## Installation

To set up the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Preshgit/interactive-banner-web-app
   cd interactive-banner-web-app
   ```

2. **Install dependencies**:

   Using Yarn:

   ```bash
   yarn install
   ```

   Or using npm:

   ```bash
   npm install
   ```

3. **Start the development server**:

   Using Yarn:

   ```bash
   yarn dev
   ```

   Or using npm:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to view the application.

## Scripts

The following scripts are available for both npm and Yarn:

- **Start development server**:

  - Yarn: `yarn dev`
  - npm: `npm run dev`

- **Build for production**:

  - Yarn: `yarn build`
  - npm: `npm run build`

- **Preview production build**:

  - Yarn: `yarn preview`
  - npm: `npm run preview`

- **Run tests**:

  - Yarn: `yarn test`
  - npm: `npm test`

- **Lint the code**:

  - Yarn: `yarn lint`
  - npm: `npm run lint`

## Testing

This project uses [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/) for unit testing.

To run tests:

using Yarn:

```bash
yarn test
```

Or Using npm:

```bash
npm test
```

## Folder Structure

```
interactive-banner-app/
├── src/
│   ├── components/       # React components
│   ├── __tests__/        # Unit tests
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── package.json          # Project metadata and dependencies
├── jest.config.mjs       # Jest configuration
├── jest.setup.js         # Jest setup file
├── babel.config.js       # Babel configuration
├── .gitignore            # Git ignore file
└── README.md             # Project documentation
```

## To my Outreachy Mentors

Your Contributions/Review are highly welcome! To review:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push your changes to your fork:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request on the main repository and I will gladly review the PR and merge, thank you!.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
