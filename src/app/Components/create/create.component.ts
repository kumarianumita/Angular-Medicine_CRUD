import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../../../medicine.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  title = 'Add Medicine';
  angForm: FormGroup;
  constructor(private medservice: MedicineService, private fb: FormBuilder) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ]
   });
  }
  addMed(name, price) {
      this.medservice.addMed(name, price);
  }

  ngOnInit(): void {
  }

}
