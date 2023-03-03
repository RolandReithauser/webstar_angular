import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webstar';
}
/*
document.getElementById("ellenorzes").addEventListener("click", function(){
  let eredmeny = document.getElementById("eredmeny");
  let felhasznalonev = document.getElementById("felhasznalonev").value;
  let jelszo = document.getElementById("jelszo").value;
  

  if(jelszo == "s9@:8BpuC]*Q,e,A" && felhasznalonev == "frontend@webstar.hu"){
      window.location.href = "/karakter.html";
  }
  else{
      eredmeny.innerHTML = "Nem megfelelő felhasználónév vagy jelszó!";
  }
}, false);

/*
  frontend@webstar.hu
  s9@:8BpuC]*Q,e,A
*/