import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.recuperarPaises()
  }

  url: string = 'https://restcountries.com/v3.1/all'
  paises!: any[]
  paisesExibir!: any[]

  recuperarPaises() {
    fetch(this.url)
      .then(response => response.json())
      .then((response) => {
        this.paises = response
        this.paisesExibir = [...this.paises]
      })
      .catch(error => console.log(error))
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.paisesExibir = this.paises.filter((d: any) => d.name.common.toLowerCase().indexOf(query) > -1);
  }

  selectRegion(e: any) {
    const value = e.detail.value
    this.url = 'https://restcountries.com/v3.1/all'

    if (value !== 'all')
      this.url = `https://restcountries.com/v3.1/region/${value}`

    this.recuperarPaises()
  }

}
