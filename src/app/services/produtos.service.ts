import { Injectable } from '@angular/core';
import { Iproduto } from '../../interfaces/iproduto';
import { produtos } from '../../interfaces/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private listaProdutos: Iproduto[] = produtos;

  constructor() {}

  // Retorna todos os produtos
  getAll(): Iproduto[] {
    return this.listaProdutos;
  }

  // Retorna um produto específico pelo ID
  getById(id: number): Iproduto | undefined {
    return this.listaProdutos.find(p => p.id === id);
  }
}
