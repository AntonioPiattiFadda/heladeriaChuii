const MobileMenuButton = document.querySelector('.menu-icon');
const NavbarTop = document.querySelector('.navbar-top-mobile');

MobileMenuButton.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    NavbarTop.classList.toggle('inactive');
  }

  // imagenes de sabores

  const imagen1 = document.getElementById('sabor1');
  const imagen2 = document.getElementById('sabor2');
  const imagen3 = document.getElementById('sabor3');


  //La funcion se dispara 2 veces: Cuando la imagen entra en el Vp y cuando la imagen sale.
  const cargarImagen = (entradas, oservador) => {
   /* console.log(entradas);
    // Entradas es un arreglo de los elementos que esta vigilando
    console.log(oservador);
    console.log('cargo la iagen 1');*/

    // Entradas es un array por lo que la tengo qie iterar para ver cuando entra cada una de las imagenes al VP
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        console.log('Imagen dentro del VP');
        entrada.target.classList.add('visible')
      } else {
        // No se si me gusta este efecto
       /* entrada.target.classList.remove('visible');*/
      }
    });


  }

  const observador = new IntersectionObserver (cargarImagen, {
    root: null,
    rootMargin: '0px',
    //El valor de threshold va de 0.0 a 1.0 e indica el porcentaje de la imagen que entra en el vp que yo quiero que entre cuando se ejecute el codigo
    threshold: 0.8
  })

  observador.observe(imagen1);
  observador.observe(imagen2);
  observador.observe(imagen3);