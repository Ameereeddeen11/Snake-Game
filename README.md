# React Native Snake Game 🐍

A classic Snake game built with **React Native** and **Expo**, utilizing modern React practices and a **Domain-Driven Design (DDD)** architecture.

## 📱 Features

- **Classic Gameplay:** Navigate the snake to eat food and grow longer.
- **Score Tracking:** Earn points for each piece of food consumed.
- **Swipe Controls:** Steer the snake seamlessly using swipe gestures.
- **Game States:** Support for Idle, Running, Paused, Game Over, and Victory states.
- **Clean Architecture:** Game logic is strictly separated from UI components.

## 🏗️ Project Architecture

The codebase follows a structured Domain-Driven Design (DDD) approach to keep the UI decoupled from the core game engine.

- `src/domain/models/`: Contains the pure business logic and rules for the game.
  - `Coordinate/`: Logic for 2D grid coordinates.
  - `Direction/`: Movement rules and preventing opposite direction turns.
  - `Food/`: Food spawning logic avoiding the snake's body.
  - `Snake/`: Snake movement and collision detection.
  - `GameSession/`: Core game loop (`tick`), score management, and state transitions.
- `src/adapters/`: Interface adapters connecting external inputs (like swipe gestures) to the domain.
- `src/components/`: Reusable React Native UI components (e.g., `GameBoard`).
- `src/hooks/`: Custom React hooks, notably `useSnakeGame.ts`, which bridges the domain logic with the React component lifecycle.
- `src/app/`: Expo Router entry points forming the app's screens.
- `src/styles/`: Global stylesheets and theme constants.

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or newer recommended)
- npm or yarn

### Installation

1. **Clone the repository and navigate to the project directory:**
   ```bash
   cd snake-game
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   # or
   npx expo start
   ```

4. **Run the app:**
   - **iOS Simulator:** Press `i` in the terminal.
   - **Android Emulator:** Press `a` in the terminal.
   - **Physical Device:** Scan the QR code using the Expo Go app.

## 🛠️ Tech Stack

- **Framework:** [React Native](https://reactnative.dev/)
- **Platform/Tooling:** [Expo](https://expo.dev/)
- **Routing:** [Expo Router](https://docs.expo.dev/router/introduction/)
- **Gestures:** [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/)
- **Animations:** [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## 🧪 Testing

The project uses Jest for unit testing. The domain logic has test coverage to ensure the game engine works flawlessly independent of the UI.

To run the tests:
```bash
npm run test
```

## 🧹 Linting

Keep the code formatted and clean:
```bash
npm run lint
```

## Future Plans

Here are some of the planned features and improvements for the project:

- **End-to-End Testing:** Implement E2E testing using [Maestro](https://maestro.mobile.dev/) to ensure the app works flawlessly on real devices and simulators.
- **Dynamic Configuration:** Introduce dynamic `app.json` configuration for handling different build profiles (e.g., `development`, `preview`, and `production`) easily.
- **UI/UX Enhancements:** Improve the overall user interface and user experience with updated designs, animations, and smoother interactions.
- **Multiple Control Inputs:** Beyond swipe gestures, add support for on-screen directional buttons and Bluetooth-connected game controllers leveraging native OS APIs (`GCController` on iOS and `InputDevice` on Android).
- **Multiplayer Mode:** Enable real-time multiplayer, allowing multiple users to connect to a single game session and play together simultaneously.
- **Web Support:** Add the ability to run the game seamlessly in the browser.
- **Responsive Design:** Improve responsiveness and adapt the layout for larger screen sizes, such as tablets and desktop monitors.
