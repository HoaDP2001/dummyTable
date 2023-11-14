import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  END_POINT = 'https://api.openweathermap.org/data/2.5/weather?q=';

  constructor(private http: HttpClient) {}

  getWeather(city: string, lang: string): Observable<any> {
    return this.http.get<any>(
      `${this.END_POINT}${city}&lang=${lang}&appid=e884e270cfb522a25f66186fcf1f59bc`
    );
  }
}
