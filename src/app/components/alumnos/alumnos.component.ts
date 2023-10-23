import { Component, OnInit } from '@angular/core';
import { ServicerestService } from 'src/app/services/servicerest.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent  implements OnInit {

  users:any;
  user:any={
    id: null,
    nombre: "",
    username: "",
    password: ""
  };

  constructor(private api:ServicerestService) { 
    this.getUserList();
  }

  getUsers(userId: any) {
    this.api.getUsers(userId).subscribe((data) => {
      console.log(data);
      this.user = data;
    });
  }

  getUserList() {
    this.api.getUserList().subscribe((data) => {
      console.log(data);
      this.users = data;

    });
  }

  ngOnInit() {}

}
