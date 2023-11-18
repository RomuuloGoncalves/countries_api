import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.page.html',
  styleUrls: ['./pais.page.scss'],
})
export class PaisPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  id!: any
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.recuperarPaises(`https://restcountries.com/v3.1/alpha/${this.id}`)
  }

  pais!: any
  currencies!: any
  languages!: any

  recuperarPaises(url: any) {
    fetch(url)
      .then(response => response.json())
      .then((response) => {
        console.log(response)
        this.pais = response[0]
        console.log(this.languages)
      })
      .catch(error => console.log(error))
  }

  pegarVariantes(obj: any) {
    return Object.keys(obj)
  }

}
