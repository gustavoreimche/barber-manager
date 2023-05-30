import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ReloadService } from 'src/app/services/reload.service';

@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.scss'],
})
export class ClientReadComponent implements OnInit {
  constructor(
    private clientService: ClientService,
    private breakpointObserver: BreakpointObserver,
    private reloadService: ReloadService
  ) {}

  ngOnInit(): void {
    this.clientService.load().subscribe((clients: Client[]) => {
      this.clients = clients;
      this.clients.map((client) => {
        if (client.num !== undefined) {
          client.name = `${client.pg} ${client.num} ${client.name}`;
        } else if (client.pg !== undefined) {
          client.name = `${client.pg} ${client.name}`;
        }
      });
    });

    this.reloadService.reloadParent$.subscribe(() => {
      this.reload();
    });

    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
  }

  clients: Client[] = [];
  isMobile = false;

  displayedColumns = ['name', 'address', 'phone', 'action'];
  displayedColumnsMobile = ['name', 'action'];

  reload(): void {
    this.clientService.load().subscribe((clients: Client[]) => {
      this.clients = clients;
      this.clients.map((client) => {
        if (client.num !== undefined) {
          client.name = `${client.pg} ${client.num} ${client.name}`;
        } else if (client.pg !== undefined) {
          client.name = `${client.pg} ${client.name}`;
        }
      });
    });
  }

  edit(id: string): void {
    this.clientService.isDelete = false;
    this.clientService.isEdit = true;

    this.clientService.getById(id).subscribe((client) => {
      console.log(id);
      this.clientService.client = client;
      this.reloadService.reloadParent();
    });
  }

  delete(id: string): void {
    this.clientService.isEdit = true;
    this.clientService.isDelete = true;
    this.clientService.getById(id).subscribe((client) => {
      console.log(id);
      this.clientService.client = client;
      this.reloadService.reloadParent();
    });
  }
}
