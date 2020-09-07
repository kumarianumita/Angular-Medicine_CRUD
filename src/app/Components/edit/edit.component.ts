import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineService } from '../../../medicine.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  medicine: any;
  angForm: FormGroup;
  title = 'Edit Medicine';
  constructor(private route: ActivatedRoute, private router: Router, private service: MedicineService, private fb: FormBuilder) {
    this.createForm();
   }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ]
   });
  }

  updateMedicine(name, price) {
    this.route.params.subscribe(params => {
    this.service.updateMed(name, price, params['id']);
    this.router.navigate(['index']);
  });
}

  deleteMedicine(id) {
    this.service.deleteMed(id).subscribe(res => {
      console.log('Deleted');
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.medicine = this.service.editMed(params['id']).subscribe(res => {
        this.medicine = res;
      });
    });
  }
}
