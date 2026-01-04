// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()



  // Tax toggle
  let taxSwitch = document.getElementById("flexSwitchCheckDefault");
  taxSwitch.addEventListener("click", () => {
    let taxInfo = document.getElementsByClassName("tax-info");
    for (let info of taxInfo) {
      if (info.style.display !== "inline") {
        info.style.display = "inline";
      } else {
        info.style.display = "none";
      }
    }
  });

  // Scroll buttons for filters
  const scrollBox = document.getElementById("filtersScroll");
  document.getElementById("leftBtn").onclick = () => {
    scrollBox.scrollLeft -= 150;
  };
  document.getElementById("rightBtn").onclick = () => {
    scrollBox.scrollLeft += 150;
  };





  // Select all heart icons
  const hearts = document.querySelectorAll('.card-img-overlay i');

  hearts.forEach(heart => {
    heart.addEventListener('click', (e) => {
      e.preventDefault();           // Link ke click ko stop kare
      heart.classList.toggle('fa-solid');
      heart.classList.toggle('fa-regular');
      heart.classList.toggle('favorited'); // red color toggle
    });
  });


  