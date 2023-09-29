import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector   : 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls  : ['tab1.page.scss']
})
export class Tab1Page {

  cityName : string = ''   ;
  weather  : any    = null ;

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService
      .getWeather(this.cityName)
      .subscribe((weatherData) => {
        this.weather = {
          temperature: weatherData.main.temp,
          description: weatherData.weather[0].description,
          icon: 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png',
        };
      });
  }
}
