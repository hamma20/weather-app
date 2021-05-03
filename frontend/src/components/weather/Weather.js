import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';

import { getCityNames,getWeather } from '../../actions/weather';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid,TextField } from '@material-ui/core';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import Alert from '../layout/Alert';
import { setAlert } from '../../actions/alert';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const filterOptions = createFilterOptions({
  limit: 100,
  
});

function Weather(props) {
  const classes = useStyles();

  useEffect(() => {
    props.getCityNames();
  },[]);

  const onchangeCity =(event,name) =>{
   
    props.getWeather(name);
   
  }

  return props.loading ? (
    <Spinner />
  ) : (
    <Grid  item xs={3}>
     <Card className={classes.root} variant="outlined">
      <CardContent>
      <CardMedia
          component="img"
          alt="Météo image"
          height="140"
          image={require('../../static/images/weather.jpg')}
          title="Météo image"
        />
        <Typography style={{ marginTop: '10px'}}  color="textSecondary" variant="h5" gutterBottom >
          Météo du jour
        </Typography>
        <Autocomplete  onChange={onchangeCity} style={{ marginTop: '10px', width: 250}} filterOptions={filterOptions} disableClearable={true} id="combo-box-demo" options={props.names} getOptionLabel={(option) => option} getOptionSelected={(option,  value ) =>  option.id === value.id} renderInput={(params) => <TextField {...params} label="Sélectionner une ville" variant="outlined" />} />
      
        <Typography style={{ marginTop: '10px'}} >
          Date et heure: {props.weather ? new Date(props.weather.dateTime).toLocaleDateString("fr-FR",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:'numeric',minute: 'numeric', second:'numeric' }):""} 
        </Typography>
        <Typography style={{ marginTop: '10px'}} >
          Description: {props.weather ? props.weather.description: ""}
        </Typography>
        <Typography style={{ marginTop: '10px'}} >
          Température: {props.weather ? props.weather.temperature + " °C": ""}
        </Typography>
        <Typography style={{ marginTop: '10px'}}>
          Humidité: {props.weather ? props.weather.humidity + " %": ""}
        </Typography>
        <Typography style={{ marginTop: '10px'}} >
          Pression: {props.weather ? props.weather.pressure + " hPa": ""} 
        </Typography>
        <Typography style={{ marginTop: '10px'}}>
          Pluie: {props.weather ? props.weather.rain +" mm": ""} 
        </Typography>
        <Alert />
      </CardContent>
    </Card>
    
    </Grid>
  );
}

const mapStateToProps = state => {
  return {
  names: state.weather.names,
  weather: state.weather.weather,
  loading: state.weather.loading
  }
}


const mapDispatchToProps = () => {

  return {
      getWeather,
      getCityNames,
      setAlert
  }

}

export default connect(mapStateToProps,

  mapDispatchToProps(),

)(Weather)
