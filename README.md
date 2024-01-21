# Movies React App

Movies is a React application that allows users to browse currently playing movies, view details about each movie, and search for movies using The Movie Database (TMDb) API.

## Features

- View a list of movies currently playing in theaters.
- Switch between Now Playing and Top Rated movies.
- Search for movies using the search bar.
- View detailed information about each movie.
- Responsive design for an optimal user experience.

## Technologies Used

- ReactJS with TypeScript
- SCSS for styling
- React Router for navigation
- Axios for API requests

## Project Structure

```bash
|-- src
| |-- components
| | |-- MovieList
| | |-- MovieListItem
| | |-- MovieDetails
| | |-- ...
| |-- services
| | |-- movieApiService.ts
| | |-- movieService.ts
| |-- typings
| | |-- movie.d.ts
| | |-- movieDetails.d.ts
| |-- App.tsx
| |-- index.tsx
|-- public
| |-- images
|-- README.md
```


## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/lienthanhnhan/movie-project.git

2. Install dependencies:

    ```bash
    cd movies-project
    npm install
    ```

3. Run the app:

    ```bash
    npm start
    ```
    The app will be available at http://localhost:3000.

## Video Walkthrough

Check out this video walkthrough to see the Movies React App in action:

[![Movies React App Walkthrough](public/images/demo.png)](https://www.loom.com/share/19f4ebd99cea465fbee0160b6f78b894)


### API Key
This project uses The Movie Database (TMDb) API. You need to obtain an API key by creating an account on the TMDb website and following their API documentation.

### License
Copyright 2024 lienthanhnhan

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.