import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  products = [
    {
      name: 'Jessica Parker',
      sizes: [],
      brand: '',
      price: 0,
      image: 'assets/image_1.jpeg',
      description: '',
      fabricMaterial: '',
      needs: 0,
      ref: 'MS-147',
    },
    {
      name: 'Jessica Parker',
      sizes: [],
      brand: '',
      price: 0,
      image: 'assets/image_2.jpeg',
      description: '',
      fabricMaterial: '',
      needs: 0,
      ref: 'MS-147',
    },
    {
      name: 'Jessica Parker',
      sizes: [],
      brand: '',
      price: 0,
      image: 'assets/image_3.jpeg',
      description: '',
      fabricMaterial: '',
      needs: 0,
      ref: 'MS-147',
    },
    {
      name: 'Jessica Parker',
      sizes: [],
      brand: '',
      price: 0,
      image: 'assets/image_4.jpeg',
      description: '',
      fabricMaterial: '',
      needs: 0,
      ref: 'MS-147',
    },
    {
      name: 'Jessica Parker',
      sizes: [],
      brand: '',
      price: 0,
      image: 'assets/image_5.jpeg',
      description: '',
      fabricMaterial: '',
      needs: 0,
      ref: 'MS-147',
    },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8001/').subscribe((response: any) => {
      this.products = response.products;
    });
  }
}
