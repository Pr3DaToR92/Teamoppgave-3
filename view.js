//View
updateView();
function updateView(){ 
    document.getElementById("app").innerHTML= /*HTML*/`
        <div id="coolness">
          <div id="coolnessBar">50%</div>
          </div>
          <div id="fuel">
          <div id="fuelBar">100%</div>
          </div>
          <div id="congrats">
            <h1> Gratulerer! du vant</h1>                
          </div>
          <div>                                   
          <img id="kompis" src="./imegs3/car.gif"  alt="kompis"/>
          <img class="bilbilde" src="./imegs3/images.jpg" alt="Racerbil"/>
          <img id="kompis" src="./imegs3/grandmother.webp"  alt="kompis"/>
          </div>            
          <p id="message">${message}</p>
          <button class="button" onclick="greet()"> Hilse </button>
          <button class="button" onclick="drive()"> KJØR Forbi</button>
          <button class="button" onclick="receive()"> Ta i Mot</button>
      `;
  }
  console.log( document.getElementById("app"))
  updateView(); 