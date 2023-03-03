import { Component } from '@angular/core';

@Component({
  selector: 'app-karakter',
  templateUrl: './karakter.component.html',
  styleUrls: ['./karakter.component.css']
})
export class KarakterComponent {

}
/*
fetch('https://developer.webstar.hu/rest/frontend-felveteli/v2/characters/', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "id": ctzLUF94 })
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))
   */