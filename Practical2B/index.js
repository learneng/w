let stateSection = document.getElementById('state');

let Toast = Swal.mixin({
    background: "#4e03fc",
    toast: true,
    position: 'top',
    showConfirmButton: false
  });
  
  document.querySelectorAll("area").forEach((state) => {
      
    // state on mouse over
    state.addEventListener("mouseover", function (event) {
      Toast.fire({
        title: `<p style='color:white'> ${event.toElement.title} </p>`,
        target: "body",
        footer: `<b style='color:white'> Part of Union of India</b>`,
      });
    });
  
    // state on mouse out
    state.addEventListener("mouseout", function (e) {
      Toast.close();
    });
  });



  