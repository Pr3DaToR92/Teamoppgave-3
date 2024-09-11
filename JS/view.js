function updateView() {
  document.getElementById("app").innerHTML = `
        <div id="coolness">Kulhet:
          <div id="coolnessBar">50%</div>
        </div>
        <div id="fuel">Bensin:
          <div id="fuelBar">100%</div>
        </div>
        <div id="congrats">
            <h1> Gratulerer! du vant</h1>                
        </div>
        <div class="main">                                   
          <img id="car" src="../images/car.gif"  alt="car"/>
          <img class="kompis" src="../images/images.jpg" alt="kompis"/>
          
        </div>            
          <p id="message"></p>
          
          <button class="button" onclick="drive()"> KJØR Forbi</button>
          <button class="button" onclick="receive()"> Ta i Mot</button>
        <div id="dropdown" >
          <button class="button" onclick="greet()"> Hilse </button>
            <ul id="hilsList">
              <li>Assen går det!</li>
              <li>Hva Skjera!</li>
              <li>Wazzaaap!</li>
              <li>Kom på besøk!</li>
            </ul>
        </div>
          `;
}

updateView();
