import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ReloadService } from 'src/app/services/reload.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.scss'],
})
export class ClientReadComponent implements OnInit {
  clients: Client[] = [];
  isMobile = false;
  isLoading = false;

  dataSource!: MatTableDataSource<Client>;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private clientService: ClientService,
    private breakpointObserver: BreakpointObserver,
    private reloadService: ReloadService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.clientService.load().subscribe((clients: Client[]) => {
      this.clients = clients;
      this.dataSource = new MatTableDataSource(clients);
      this.dataSource.sort = this.sort;
    });

    this.reloadService.reloadParent$.subscribe(() => {
      this.reload();
    });

    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
    this.isLoading = false;
  }

  displayedColumns = ['pg', 'name', 'esqd', 'address', 'phone', 'action'];
  displayedColumnsMobile = ['pg', 'name', 'action'];

  reload(): void {
    this.clientService.load().subscribe((clients: Client[]) => {
      this.clients = clients;
      this.dataSource = new MatTableDataSource(clients);
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
