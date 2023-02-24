import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent {
  listTareas: Tarea[] = [];
  nombreTarea = '';

  agregarTarea() {
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false,
    };

    this.listTareas.push(tarea);

    this.nombreTarea = '';
  }
  eliminarTarea(indice: number): void {
    this.listTareas.splice(indice, 1);
  }
  cambiarEstado(indice: number, tarea: Tarea): void {
    this.listTareas[indice].estado = !tarea.estado;
  }
}
