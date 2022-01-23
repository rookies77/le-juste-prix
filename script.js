
let input = document.querySelector('#prix');
let button = document.querySelector('button');
let error = document.querySelector('small');
let instruction = document.querySelector('#instructions');
let formulaire = document.querySelector('#formulaire');
error.style.cssText = "visibility : hidden;"
let nombreAleatoire = Math.round(Math.random() * 10);
console.log('le nombre aleatoire est : ', nombreAleatoire);
input.addEventListener('click', (e) => {
   e.target.value = ''
})

formulaire.addEventListener('submit', (e) => {
   e.preventDefault();
   let valeur = e.target['prix'].value;
  

   verifier(valeur);

})


function verifier(valeur) {
   console.log('valeur dans verifier',valeur);
   if (!isNaN(valeur)) {
      error.style.cssText = "visibility : hidden;"
      if (valeur > nombreAleatoire) {
         instruction.innerHTML = `(${valeur }), c'est moins`;
         instruction.classList.remove('plus');

         instruction.classList.add('moins');
      } else if (valeur < nombreAleatoire) {
         instruction.innerHTML = ` (${valeur }), c'est plus`;
         instruction.classList.remove('moins');

         instruction.classList.add('plus');
      } else {
         instruction.innerHTML = ` (${valeur }), Bravo vous avez trouvé le juste prix`;
         instruction.classList.remove('moins','plus');

         instruction.classList.add('fini');
         input.disabled = true
      }

   } else {
      error.style.cssText = "visibility : visible;"
   }
}
