# International Space Station (ISS) Tracker

This is a simple web application that allows you to track the real-time position of the International Space Station (ISS) on a map.

## Features

- Displays the real-time position of the ISS on a map.
- Shows the ISS coordinates on hover.
- Uses OpenStreetMap as the map background.
- Updates the ISS position every 2 seconds.
- Customizable with different map styles and markers.

## Prerequisites

Before using this ISS tracker, ensure you have the following:

- A modern web browser.
- An internet connection to fetch map tiles and ISS data.
- \[Leaflet.js\](https://leafletjs.com/) (included via CDN in the HTML).

## Installation

1. Clone or download this repository to your local machine.

```bash
git clone https://github.com/xHardc0re/iss-tracker.git
```

2. Open the `index.html` file in your web browser.

## Usage

- When you open the web page, you'll see a map displaying the current position of the ISS.
- Hover over the ISS marker to view its coordinates.

## Customization

- To customize the map style, you can replace the tile layer URL in the JavaScript code (`iss.js`) with your preferred map source.
- You can also customize the ISS icon by replacing `'iss.png'` with the URL to your desired icon image.

## License

This project is licensed under the \[MIT License\](LICENSE).

---

Feel free to customize and enhance this ISS tracker according to your needs. If you have any questions or encounter issues, please open an issue in this repository.