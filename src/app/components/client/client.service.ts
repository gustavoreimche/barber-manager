import { Client } from './client.model';
import { Injectable } from '@angular/core';
import { Address } from '../../models/address.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor() {}

  address: Address = {
    logradouro: '',
    bairro: '',
    cep: '',
    numero: null,
  };

  client: Client = {
    name: '',
    phone: '',
    idCompany: localStorage.getItem('idCompany') ?? '',
  };

  isEdit = false;
  isDelete = false;
  isMilitary = true;

  squad = ['1º Esqd', '2º Esqd', '3º Esqd', 'Esqd C Ap', 'EM'];
  pg = [
    'Cel',
    'TC',
    'Maj',
    'Cap',
    '1º Ten',
    '2º Ten',
    '1º Sgt',
    '2º Sgt',
    '3º Sgt',
    'Cb',
    'Sd EP',
    'Sd EV',
  ];
}
