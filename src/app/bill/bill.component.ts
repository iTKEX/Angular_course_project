import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill',
  standalone: false,
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
})
export class BillComponent implements OnInit {
  orderDetails: any;

  ngOnInit() {
    const savedOrder = localStorage.getItem('orderDetails');
    this.orderDetails = savedOrder ? JSON.parse(savedOrder) : null;
  }

  printBill() {
    window.print();
  }
}
