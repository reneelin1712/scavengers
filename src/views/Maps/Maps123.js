import * as React from 'react';
import {useState} from 'react';
import MapGL,{Source, Layer,Popup}  from 'react-map-gl';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import hospitalImg from './hospital.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
  },
  media: {
    height: 100,
  },
});

// source: Natural Earth http://www.naturalearthdata.com/ via geojson.xyz
const hospitals = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "RBWH",
        description:"Waste Recycled 100 Tons 2020.07"
      },
      geometry: {
        type: "Point",
        coordinates: [153.02837780229257, -27.44662203771308],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Montserrat Day Hospitals",
        description:"Waste Recycled 120 Tons 2020.07"
      },
      geometry: {
        type: "Point",
        coordinates: [152.98251986580698, -27.417409893018192],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Mater Private Hospital Brisbane",
        description:"Waste Recycled 150 Tons 2020.07"
      },
      geometry: {
        type: "Point",
        coordinates: [153.02755196396518, -27.486752564788347],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "The Wesley Hospital",
        description:"Waste Recycled 110 Tons 2020.07"
      },
      geometry: {
        type: "Point",
        coordinates: [152.99763066174773, -27.47765964262413],
      },
    },
  ],
};
const MAPBOX_TOKEN = 'pk.eyJ1IjoicmVuZWVsaW4iLCJhIjoiY2s2bGdsM294MGFyNDNkcGZxdjRiamVtZCJ9.NXBRh4xFGeNFfqikqH97bA'; 

const SimpleMap = () =>{
  const classes = useStyles();
  const [viewport, setViewport] = useState({
    latitude: -27.44662203771308,
    longitude: 153.02837780229257,
    zoom: 12,
    bearing: 0,
    pitch: 0
  });
  const [showPopup, setShowPopup] = useState(false);
  const [lat, setLat] = useState(-27.465841);
  const [lon, setLon] = useState(153.026069);
  const [property, setProperty] = useState("");
  const [description, setDescription] = useState("");

  const _onClick = e => {
    const {
      features,
      srcEvent: { offsetX, offsetY }
    } = e;
    console.log(features[0]);
    if (features[0] && features[0].properties.name) {
      setShowPopup(true);
      setLat(features[0].geometry.coordinates[1]);
      setLon(features[0].geometry.coordinates[0]);
      setProperty(features[0].properties.name);
      setDescription(features[0].properties.description)
      console.log(features[0].properties);
    
    } else {
      setShowPopup(false);
    }
  };

  return (
    <Box position="fixed" top={0} height="60px" width="100%">
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/light-v9"
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      onClick={_onClick}
    >

{showPopup && property !== "" && (
          <Popup
            latitude={lat}
            longitude={lon}
            closeButton={true}
            closeOnClick={false}
            onClose={() => setShowPopup(false)}
            anchor="top"
          >
          
          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={hospitalImg}
          style={{padding:50}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {property}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
          </Popup>
        )}

       <Source type="geojson" data={hospitals}>
            <Layer 
              id= 'data'
              type= 'circle'
              paint= {{
                'circle-radius': 10,
                'circle-color': '#48B6FB'
              }}
             />
          </Source>

    </MapGL>
    </Box>
  );
}

export default SimpleMap