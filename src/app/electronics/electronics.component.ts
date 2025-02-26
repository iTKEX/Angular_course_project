import { Component } from '@angular/core';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

@Component({
  selector: 'app-electronics',
  standalone: false,
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css',
})
export class ElectronicsComponent {
  data: any;
  ngOnInit() {
    fetch(`https://fakestoreapi.com/products/category/electronics`)
      .then((response) => response.json())
      .then((result) => {
        this.data = result.map((item: Product) => ({
          ...item,
          price: (item.price * 3.75).toFixed(2),
        }));
      });
  }
}
