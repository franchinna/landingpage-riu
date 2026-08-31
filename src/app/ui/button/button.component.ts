import { Component } from '@angular/core';

// Selector de atributo, no tag propio: así el host es el <button> nativo y todo lo que le
// ponga quien lo use (aria-label, disabled, type) cae sobre el botón real. Con un wrapper
// quedaría en un elemento sin rol, que los lectores de pantalla ignoran.
@Component({
  selector: 'button[riu-button]',
  templateUrl: './button.component.html',
  host: {
    class: `inline-flex cursor-pointer items-center justify-center rounded-lg bg-brand p-2
            text-base font-bold text-white transition-colors duration-300 ease-in-out
            hover:bg-brand-hover active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-brand`,
  },
})
export class ButtonComponent {}
