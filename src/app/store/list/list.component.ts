import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  products = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://sk-api.intigo.tn/').subscribe((response: any) => {
      // this.http.get('http://localhost:8001/').subscribe((response: any) => {
      this.products = response.products;
    });
  }
}
