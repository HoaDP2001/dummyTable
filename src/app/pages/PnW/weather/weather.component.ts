import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  form: FormGroup;
  iconUrl: string = '';
  weatherInfor: any;
  lang: string = 'vi';
  currentCity: string = 'Ha Noi';

  listOfLang: Array<{ label: string; value: string }> = [
    { label: 'VI', value: 'vi' },
    { label: 'EN', value: 'en' },
    { label: 'KR', value: 'kr' },
  ];

  constructor(private weatherService: WeatherService) {
    this.form = new FormGroup({
      search: new FormControl('Ha noi'),
      lang: new FormControl('kr'),
    });
  }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() {
    this.weatherService
      .getWeather(
        this.form.controls['search'].value,
        this.form.controls['lang'].value
      )
      .subscribe((data: any) => (this.weatherInfor = data));
  }

  onUpdateCity(event: any) {
    this.currentCity =
      event.target.value == ''
        ? this.form.controls['search'].setValue(event)
        : event.target.value;
    this.getWeather();
  }

  getIconUrl() {
    this.iconUrl = `http://openweathermap.org/img/w/${this.weatherInfor.weather[0].icon}.png`;
    return this.iconUrl;
  }

  onLangChange() {
    this.getWeather();
  }
}
