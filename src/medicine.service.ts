import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  result: any;
  constructor(private http: HttpClient) {}

  addMed(name, price) {
    const uri = 'http://localhost:3000/medicines/add';
    const obj = {
      name: name,
      price: price
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  getMed() {
    const uri = 'http://localhost:3000/medicines';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editMed(id) {
    const uri = 'http://localhost:3000/medicines/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateMed(name, price, id) {
    const uri = 'http://localhost:3000/medicines/update/' + id;

    const obj = {
      name: name,
      price: price
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteMed(id) {
    const uri = 'http://localhost:3000/medicines/delete/' + id;

        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}
