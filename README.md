# Gallery Search Images

This is a React application that allows users to search for images from the Unsplash API. The app displays images in a responsive gallery, with the option to open a full-size image in a modal. You can also click on the image to visit its original link.

## Features

- **Search Functionality**: Users can search for images using keywords.
- **Image Gallery**: Displays images in a responsive grid.
- **Image Preview**: Clicking on an image opens a full-size view in a modal.
- **Load More**: Click the "Load More" button to load additional images.
- **Error Handling**: Displays error messages if there are issues with the search or API.

## Installation

### Clone the repository:

```bash
git clone https://github.com/harisshafi10/Gallery-search-images.git
```
## Install dependencies:
Navigate to the project directory and install the required dependencies.


```bash
cd Gallery-search-images
npm install
```
## Installation

### After installing the dependencies, run the development server:

```bash
npm start
```
### The app will be available at http://localhost:3000.

### API Key
The app uses the Unsplash API to fetch images. To use the app, you need an API key. You can get your API key by following these steps:

1. Go to the Unsplash Developer API.
2. Create an account or log in.
3.  Register a new application to get your API key.
4. Replace the API key in the code where necessary.
## Technologies Used
**React**: Frontend framework for building the UI.

**Tailwind** CSS: For styling the application.

**Unsplash API**: To fetch images for the gallery.

**JavaScript**: For app logic.

## Folder Structure

```bash
scss
/src
  /components
    - ImageGallery.jsx      // Main component for the gallery functionality
  - App.js                  // Main app component
  - index.js                // Entry point for the app
  - styles.css              // Tailwind CSS configuration
  ```
## Contributing
Feel free to fork the repo and submit pull requests for new features or bug fixes. Contributions are welcome!

## License
This project is licensed under the MIT License.


