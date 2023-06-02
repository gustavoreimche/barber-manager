import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../service-executed-read/service-executed-read.component';
import { ServiceExecutedCreate } from '../serviceExecutedCreate.model';
import { ServiceExecutedService } from '../service-executed.service';
import { ReloadService } from 'src/app/services/reload.service';

@Component({
  selector: 'app-dialog-update',
  templateUrl: './dialog-update.component.html',
  styleUrls: ['./dialog-update.component.scss'],
})
export class DialogUpdateComponent {
  paymentMethods = [
    {
      value: 'CreditCard',
      label: 'Cartão de crédito',
    },
    {
      value: 'DebitCard',
      label: 'Cartão de débito',
    },
    {
      value: 'Cash',
      label: 'Dinheiro',
    },
    {
      value: 'Installments',
      label: 'Fiado',
    },
    {
      value: 'Pix',
      label: 'Pix',
    },
  ];

  constructor(
    public dialogRef: MatDialogRef<DialogUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public serviceExecuted: ServiceExecutedCreate,
    private serviceExecutedService: ServiceExecutedService,
    private reloadService: ReloadService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  update(): void {
    this.serviceExecutedService
      .updateById(this.serviceExecuted)
      .subscribe(() => {
        console.log(this.serviceExecuted);
        this.dialogRef.close();
        this.reloadService.reloadParent();
      });
  }
}
