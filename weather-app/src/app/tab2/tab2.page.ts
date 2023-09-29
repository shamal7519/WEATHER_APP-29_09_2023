import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  cityName: string = '';
  weather: any = null;
  forecast: any[] = [];

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService
      .getWeather(this.cityName)
      .subscribe((weatherData: { main: { temp: any; }; weather: {
        description: any; icon: string; }[]; 
      }) => {
        this.weather = {
          current: {
            temperature: weatherData.main.temp,
            description: weatherData.weather[0].description,
            icon: 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png',
          }
        };
      });
  }

  getForecast() {
    this.weatherService
      .getForecast(this.cityName)
      .subscribe((forecastData: { list: any[]; }) => {
        this.forecast = forecastData.list
          .filter((entry: { dt_txt: string | string[]; }) => entry.dt_txt.includes('12:00:00')) 
          .map((entry: { dt: number; main: { temp: any; }; weather: {
            description: any; icon: string; } []; 
          }) => ({
            date: new Date(entry.dt * 1000),
            temperature: entry.main.temp,
            description: entry.weather[0].description,
            icon: 'http://openweathermap.org/img/w/' + entry.weather[0].icon + '.png',
          }));
      });
  }

  
}
