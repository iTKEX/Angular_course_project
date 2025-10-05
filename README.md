# 🛒 Angular E-commerce (Frontend Only, API-Driven)

[![Angular](https://img.shields.io/badge/Angular-19+-dd0031?logo=angular&logoColor=white)]()
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)]()
[![SweetAlert2](https://img.shields.io/badge/SweetAlert2-11.x-ff4b5c?logo=sweetalert2&logoColor=white)]()
[![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?logo=netlify&logoColor=white)]()

A responsive, API-driven **Angular 19** e-commerce frontend built entirely with public APIs — no backend server required.  
It handles product listing, details, cart management, and checkout using REST endpoints and SweetAlert2 for user feedback.  
Deployed on **Netlify** with Bootstrap for styling.

---

## 🔗 Live Demo
👉 [E-commerce Project Demo](https://turki-ecommerce-project.netlify.app/)

---

## ✨ Features
- Product listing by category (Men, Women, Jewelry, Electronics)
- Product details and description page
- Shopping cart with quantity and total tracking
- Checkout and billing flow
- Contact form page
- API-based product data (no local DB)
- Alerts & confirmations with **SweetAlert2**
- Global state management using **NgRx Store**
- Responsive **Bootstrap 5** layout
- Simple, modular folder structure

---

## 🧱 Project Structure
```
src/
 └── app/
     ├── bill/                 # Billing and checkout
     ├── cart/                 # Cart components
     ├── contact-us/           # Contact page
     ├── details/              # Product detail page
     ├── electronics/          # Electronics category
     ├── footer/               # Footer component
     ├── header/               # Header / navbar
     ├── home/                 # Homepage
     ├── info/                 # Info / About page
     ├── jelewry/              # Jewelry category
     ├── men-clothing/         # Men's clothing
     ├── women-clothing/       # Women's clothing
     ├── models/
     │    └── product.model.ts # Product interface/model
     ├── reducers/             # Reducers for NgRx Store
     ├── state/                # App-wide state logic
     ├── app-routing.module.ts # Routes
     ├── app.component.*       # Root component files
     ├── app.module.ts         # Main module
 ├── index.html                # Entry point
```

---

## ⚙️ Tech Stack
| Category | Technology |
|-----------|-------------|
| Framework | **Angular 19** |
| State Management | **NgRx Store** |
| Styling | **Bootstrap 5.3** + **Bootstrap Icons** |
| Alerts / Modals | **SweetAlert2** |
| Language | **TypeScript 5.7** |
| Deployment | **Netlify** |
| APIs | External REST APIs (no backend server) |

---

## 🧩 Setup Instructions

### 1. Clone and Install
```bash
git clone https://github.com/iTKEX/Angular_course_project
npm install
```

### 2. Environment Config
**`src/environments/environment.ts`**
```ts
export const environment = {
  production: false,
  apiBaseUrl: 'https://api.example.com',
};
```

**`src/environments/environment.prod.ts`**
```ts
export const environment = {
  production: true,
  apiBaseUrl: 'https://api.example.com',
};
```

### 3. Run Locally
```bash
npm start
# or 
ng serve
```

### 4. Build for Production
```bash
npm run build
```
Output directory: `dist/project`

---

## 💬 SweetAlert2 Integration
Installed via NPM:
```bash
npm i sweetalert2
```

Usage example:
```ts
import Swal from 'sweetalert2';

Swal.fire({
  title: 'Added to Cart!',
  text: 'Your product has been successfully added.',
  icon: 'success',
  confirmButtonText: 'OK'
});
```

SweetAlert2 is used throughout for success/error messages and confirmations.

---

## 🎨 Bootstrap Integration
Installed via NPM:
```bash
npm i bootstrap bootstrap-icons
```

Add to `angular.json`:
```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "node_modules/bootstrap-icons/font/bootstrap-icons.css",
  "src/styles.css"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

Then use standard Bootstrap classes across templates.

---

## 🧠 Example Product Service
```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private baseUrl = `${environment.apiBaseUrl}/products`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }
}
```

---

## 🌐 Deployment on Netlify

**Build Command:**
```
ng build --configuration production
```

**Publish Directory:**
```
dist/project
```

**SPA Redirects:**  
Create `_redirects` file inside `dist/project`:
```
/*  /index.html  200
```

**Environment Variables (optional):**  
Set in Netlify → **Site Settings → Build & Deploy → Environment**  
e.g. `API_BASE_URL=https://api.example.com`

---

## 🚀 Future Enhancements
- User authentication (login/register via API)
- Product search and filters
- Reviews and ratings
- Admin panel for managing products
- Payment gateway integration

---
