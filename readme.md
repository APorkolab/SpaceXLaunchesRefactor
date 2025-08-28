# SpaceX Launch Viewer

This is an Angular application designed to display launch data from the SpaceX API. It serves as a demonstration of modern, senior-level Angular development practices, focusing on clean architecture, reactive state management, and a professional user interface built with Angular Material.

## Features

- **View SpaceX Launches**: Displays a list of SpaceX launches in a clean, sortable, and paginated table.
- **Reactive UI**: Built with a reactive approach, featuring loading indicators and clear error states.
- **Sortable Data**: Click on any column header to sort the launch data.
- **Paginated Table**: Easily navigate through large sets of launch data using the paginator.

## Tech Stack

- **Angular 20**: A powerful framework for building dynamic web applications.
- **TypeScript**: For strong typing and improved code quality.
- **RxJS**: For reactive programming and managing asynchronous operations.
- **Angular Material**: For a high-quality, pre-built set of UI components.
- **GraphQL**: The application communicates with a GraphQL API to fetch data.

## Architecture Highlights

- **State Management**: Uses a custom, service-based state management solution (`LaunchStateService`) with RxJS BehaviorSubjects to provide a single source of truth for the application state.
- **Global Error Handling**: A custom `HttpInterceptor` is implemented to catch all API errors globally, ensuring consistent and robust error handling.
- **Clean Architecture**: A clear separation of concerns between components (UI), state services (state management), and data services (API communication).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (which includes npm) installed on your machine.
- The [Angular CLI](https://angular.io/cli) installed globally (`npm install -g @angular/cli`).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd <project-directory>
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Development Server

Run `npm start` or `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `npm run build` or `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running Unit Tests

Run `npm test` or `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). Note that this may require a local installation of Chrome or another browser supported by Karma. For CI environments, you may need to configure a headless browser.
