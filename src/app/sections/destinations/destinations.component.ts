import { Component, computed, signal } from '@angular/core';
import { DestinationCardComponent } from '../../ui/destination-card/destination-card.component';
import { DESTINATIONS } from '../../data/destination';

// Sin acentos y en minúsculas, para que "cancun" encuentre "Cancún".
function normalizar(texto: string): string {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

@Component({
  selector: 'app-destinations',
  imports: [DestinationCardComponent],
  templateUrl: './destinations.component.html',
  host: { class: 'block' },
})
export class DestinationsComponent {
  protected readonly consulta = signal('');

  protected readonly destinations = computed(() => {
    const buscado = normalizar(this.consulta().trim());
    if (!buscado) return DESTINATIONS;

    return DESTINATIONS.filter((destino) =>
      normalizar(`${destino.title} ${destino.label} ${destino.description}`).includes(buscado),
    );
  });

  protected buscar(evento: Event): void {
    this.consulta.set((evento.target as HTMLInputElement).value);
  }
}
