import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../../../medicine.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  medicines: any;

  constructor(private http: HttpClient, private service: MedicineService) {}

  ngOnInit() {
    this.getMedicines();
  }

  getMedicines() {
    this.service.getMed().subscribe(res => {
      this.medicines = res;
    });
  }

}
