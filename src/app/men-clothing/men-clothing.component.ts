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
  selector: 'app-men-clothing',
  standalone: false,
  templateUrl: './men-clothing.component.html',
  styleUrl: './men-clothing.component.css',
})
export class MenClothingComponent {
  
  data: any;
  ngOnInit() {
    fetch(`https://fakestoreapi.com/products/category/men's%20clothing`)
      .then((response) => response.json())
      .then((result) => {
        this.data = result.map((item: Product) => ({
          ...item,
          price: (item.price * 3.75).toFixed(2),
        }));
      });
  }
}
