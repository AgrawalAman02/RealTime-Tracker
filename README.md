# Real-Time Location Tracker

## Overview

This is a real-time location tracking application built using WebSockets. The app allows users to share their geographic locations and see each other’s positions on an interactive map in real time.

## Live Demo

Check out the live app here: [Real-Time Tracker](https://real-time-trackers.onrender.com/)

## Tech Stack

- **Node.js** and **Express.js** for the backend server
- **Socket.IO** for real-time, bidirectional communication
- **Leaflet.js** for interactive maps
- **EJS templates** for rendering views
- **HTML**, **CSS**, and **JavaScript** for the frontend

## Features

- Real-time location sharing
- Interactive map with user markers
- Automatic updates when users connect or disconnect
- Responsive design suitable for both desktop and mobile

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```bash
   https://github.com/AgrawalAman02/RealTime-Tracker.git

2. Navigate into the project directory:
   ```bash
   cd realtime-tracker

3. Install the dependencies:
   ```bash
   npm install

4. Start the server:
   ```bash
   npm start

5. Open your browser and navigate to ```http://localhost:7777``` to see the app in action.


### Usage
-----

Once the app is running, users will be prompted to allow location access. The app will continuously send the user's location to the server and update the map in real time with other users' locations.

### Potential Improvements
----------------------

-   Implement error handling for geolocation and WebSocket connection issues

-   Enhance the user interface with additional features and styles

-   Add user authentication for a more secure experience

-   Remember users' last known locations

-   Ensure mobile responsiveness

