import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.companyService.load().subscribe((companys) => {
    //   console.log(companys);
    // });
  }
  navigateToClientCreate(): void {
    this.router.navigate(['/client/create']);
  }
}
