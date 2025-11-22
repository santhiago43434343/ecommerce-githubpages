import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '@services/carrinho.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // 🔍 Campo de busca
  termoBusca: string = '';

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('HeaderComponent inicializado');
  }

  // 🔎 Executa busca com queryParams
  buscar(event?: Event): void {
    if (event) event.preventDefault();
    if (this.termoBusca.trim()) {
      this.router.navigate(['/produtos'], {
        queryParams: { busca: this.termoBusca },
      });
    }
    console.log('Buscando por:', this.termoBusca);
  }

  // 🔁 Força recarregamento da rota /produtos
  voltarParaProdutos(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/produtos']);
    });
  }
}
