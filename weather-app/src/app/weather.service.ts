import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '3d4d7385b6a35185b16be3f183f667a7'; 
  private apiUrl = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) {}

  getWeather(cityName: string): Observable<any> {
    const apiUrl = `${this.apiUrl}/weather?q=${cityName}&appid=${this.apiKey}&units=metric`;
    return this.http.get(apiUrl);
  }

  getForecast(cityName: string): Observable<any> {
    const apiUrl = `${this.apiUrl}/forecast?q=${cityName}&appid=${this.apiKey}&units=metric`;
    return this.http.get(apiUrl);
  }
}
