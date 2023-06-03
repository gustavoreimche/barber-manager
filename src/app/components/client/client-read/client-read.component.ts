import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ReloadService } from 'src/app/services/reload.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

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

  async gerarPdf(): Promise<void> {
    const filteredData: Client[] = this.clients.filter(
      (item) => (item.debit as number) > 0
    );

    // Verificar se existem objetos para adicionar ao PDF
    if (filteredData.length > 0) {
      // Cria um novo documento PDF
      const pdfDoc = await PDFDocument.create();

      // Adiciona uma nova página ao documento
      const page = pdfDoc.addPage();

      // Define a fonte padrão (Helvetica)
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

      // Define o tamanho do texto e a cor
      const textSize = 12;
      const textColor = rgb(0, 0, 0);

      // Define as coordenadas de início para o texto
      let x = 50;
      let y = page.getHeight() - 50;

      // Adiciona os títulos das colunas
      page.drawText('PG', { x, y, size: textSize, font, color: textColor });
      x += 100;
      page.drawText('Nome', { x, y, size: textSize, font, color: textColor });
      x += 100;
      page.drawText('Esqd', { x, y, size: textSize, font, color: textColor });
      x += 100;
      page.drawText('Débito', { x, y, size: textSize, font, color: textColor });

      // Atualiza a posição y para a próxima linha
      y -= 20;

      // Adiciona os dados das linhas
      filteredData.forEach((item) => {
        x = 50;
        page.drawText(item.pg || '', {
          x,
          y,
          size: textSize,
          font,
          color: textColor,
        });
        x += 100;
        page.drawText(item.name || '', {
          x,
          y,
          size: textSize,
          font,
          color: textColor,
        });
        x += 100;
        page.drawText(item.esqd || '', {
          x,
          y,
          size: textSize,
          font,
          color: textColor,
        });
        x += 100;
        page.drawText(
          item.debit
            ? `R$ ${item.debit.toFixed(2).toString().replace('.', ',')}`
            : '',
          {
            x,
            y,
            size: textSize,
            font,
            color: textColor,
          }
        );

        // Atualiza a posição y para a próxima linha
        y -= 20;
      });

      // Salva o documento PDF em um arquivo ou exibe-o no navegador
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      window.open(url);
    } else {
      console.log('Nenhum objeto com débito maior que 0 encontrado.');
    }
  }

  displayedColumns = ['pg', 'name', 'esqd', 'address', 'phone', 'action'];
  displayedColumnsMobile = ['pg', 'name', 'action'];

  reload(): void {
    this.clientService.load().subscribe((clients: Client[]) => {
      this.clients = clients;
      console.log(this.clients);
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
      this.clientService.client = client;
      this.reloadService.reloadParent();
    });
  }

  delete(id: string): void {
    this.clientService.isEdit = true;
    this.clientService.isDelete = true;
    this.clientService.getById(id).subscribe((client) => {
      this.clientService.client = client;
      this.reloadService.reloadParent();
    });
  }
}
