import { Component } from '@angular/core';
 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  //*ngIf-true
 
 
  productos:any[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas",
      "Precio":2000,
      "Year":2023,
      "Marca":"NISSAN",
      "Color":"Azul",
      "ImagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHirhyuXF6MfbmNSaPhPWjXewZ45QJhbYA7w&s"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"4 puertas",
      "Precio":150000,
      "Year":2020,
      "Marca":"KIA",
      "Color":"Azul",
      "ImagenUrl":"https://static.vecteezy.com/system/resources/thumbnails/023/192/562/small/sport-car-running-on-the-road-in-future-city-created-with-generative-ai-free-photo.jpg"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"4 puertas",
      "Precio":150000,
      "Year":2020,
      "Marca":"KIA",
      "Color":"Azul",
      "ImagenUrl":"https://img.freepik.com/foto-gratis/coche-3d-colores-vibrantes_23-2150796964.jpg"
    }
  ]
 
}
 