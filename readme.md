# Developyst Data Platform Prototype

## Data Exploration

This prototype demonstrates a data visualization platform for education data-sets from Pakistan. 

The site is built using simple html+css+javascript with no real server-side framework. We use Mapbox.js, Tilemill and Twitter's Bootstrap Kit for most of our components. The initial basecode was forked from a branch of the data-exploration template from the Mapbox team to get a quick-start on features like layer switching.

To make your custom base map, [sign up for MapBox](http://mapbox.com/plans/) and [create a map](http://mapbox.com/hosting/creating/).

To learn about making [TileMill](/tilemill) maps with your own data, check out the [TileMill documentation](http://mapbox.com/tilemill/docs/). 

For Bootstrap check out their [Repo](http://twitter.github.com/bootstrap/)

## HTML layout

The html markup for the template is in `index.html`. It's a simple html page layout. Generally, you'll want to change the content elements like `title`, `h1`, `div#branding` and `div#about`.


## CSS styles

Most of the hard work on a map site build is template design implemented through CSS. This template by default is simple and clean so you can modify or replace it. This design and be completely overridden by applying new CSS styles or changing the exisiting rules in `style.css`.

CSS rules are set in two files:

- `style.css` contains all the layout and typographic styles as well as some overridden styles for map controls, and a [reset stylesheet](http://meyerweb.com/eric/tools/css/reset/). Implement your design by editing this file.
- `map.css` holds the default map styles from tiles.mapbox.com embeds.
- `bootstrap.css`


## Javascript interaction

All of the external javascript libraries to make the map interactive and connect it to MapBox are stored in the `ext` directory. For this template, we're using [Modest Maps](http://modestmaps.com/) and [Wax](http://mapbox.com/wax) to make the map interactive, [Easey](https://github.com/mapbox/easey) for smooth aninmated panning and zooming, and [MMG](http://mapbox.com/mmg/) for adding markers to the map based on [geojson](http://www.geojson.org/)-formatted data. We're also using [jQuery](http://jquery.com/) for DOM manipulation and handling events.

An internal javascript library, `script.js`, abstracts common map settings, and includes configuration for layer switching controls and a geocoding address search.

Bootstrap components are all tucked away in `bootstrap.js`

### Map configuration

The map is added to the `<div>` container in `index.html` with `id="map"`. Styles to lay out the map container come from `class="map"`.

```html
<div id="map" class="map"></div>
```

At the bottom of the `index.html` document, we set up the map. The `id` of the container is the first argument (`'map'`), and an object of options is the second argument. The third arugement is the name of an optional callback function that is called once the map is loaded. 

The only required option is `api`, and it should contain the API URL from MapBox. After you create a new map through your MapBox account, click `embed` on the `info` tab and copy the API URL.

```js
var main = Map('map', { 
    api: 'http://a.tiles.mapbox.com/v3/mapbox.map-hv50mbs9.jsonp' 
});
```


### Layer switching

The `script.js` provides an easy way to toggle between layers on a map. When activated, layers will overlay the initial base map. If turned on, tooltips and legends will update to pull from the current layer. 

Layers are bound to links on the page by specifying a name for the layer in the `href` attribute of the link element and giving it a `data-control=layer` attribute.

```html
<div id="projects" class="layers">
   <a data-control="layer" href="#building">Teacher Attendance, 2011</a>
   <a data-control="layer" href="#construction">PEC scores, 2011</a>
</div>
```
Then specify the configuration for your layers in the script at the end of `index.html`:

```js
main.layers({
    building: {
        api: 'http://a.tiles.mapbox.com/v3/blah.jsonp',
        center: {                   // Optionally reposition the map.
            lat: 38.910606275724,   // New center point and zoom level
            lon: -77.00126406355,   // for the map. Specific either
            zoom: 14,               // lat and lon, zoom, or both.
            ease: 500               // Optional time to animimate moving
        }                           // the map in milliseconds.
    },
    construction: { 
        api: 'http://a.tiles.mapbox.com/v3/pmiu_teacher_attendance.jsonp',
        center: { zoom: 12, ease: 1000 }
    }
});

```
## Further Reading

* [MapBox API](http://mapbox.com/hosting/api/)
* [MapBox Wax](http://mapbox.com/wax/)
* [MapBox MMG](http://mapbox.com/mmg/)
* [MapBox Easey](http://mapbox.com/easey/)
* [Modest Maps](http://modestmaps.com/)
* [jQuery](http://jquery.com/)