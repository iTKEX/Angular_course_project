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
  selector: 'app-jelewry',
  standalone: false,
  templateUrl: './jelewry.component.html',
  styleUrl: './jelewry.component.css'
})
export class JelewryComponent {

  data:any
  
  ngOnInit() {
    fetch(`https://fakestoreapi.com/products/category/jewelery`)
      .then((response) => response.json())
      .then((result) => {
        this.data = result.map((item: Product) => ({
          ...item,
          price: (item.price * 3.75).toFixed(2),
        }));
      });
  }

}
