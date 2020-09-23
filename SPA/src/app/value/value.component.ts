import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  baseUrl = 'http://localhost:5000/api/';
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getValues();
  }

  getValues() {
    return this.http.get(this.baseUrl + 'values').subscribe(res => {
      if(res){
        this.values = res;
      }
    }, error => {
      console.log(error);
    });
  }
}
