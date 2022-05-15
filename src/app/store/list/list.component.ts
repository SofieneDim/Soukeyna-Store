import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { endpoint } from 'src/environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  products = [];
  timeout: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getProducts(null);
  }

  onSearch(event: any): void {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.getProducts(event.target.value);
    }, 400);
  }

  getProducts(ref: any): void {
    const url = !ref ? endpoint : endpoint + `?ref=${ref}`;

    this.http.get(url).subscribe((response: any) => {
      this.products = response.products;
    });
  }
}
