function handleFileSelect(evt) {
    var file = evt.target.files;
    var f = file[0];
    if (!f.type.match('mp4.*')) {
        var warn = document.getElementById('filecontrol');
        warn.innerHTML="<h3>Formato no válido.</h3>";
    } else {
        
        var reader = new FileReader();
        reader.onload = (function (theFile) {
            return function (e) {
                var warn = document.getElementById('filecontrol');
                warn.innerHTML="Cargando...";
                var div = document.getElementById('reproduccion');
                div.innerHTML = ['<video id="video" controls src="', e.target.result, '"width="620"><video/>'].join('');
                var warn = document.getElementById('filecontrol');
                warn.innerHTML="";
            };
        })(f);
        reader.readAsDataURL(f);
        //Ver el progreso de carga en la consola
        reader.addEventListener('progress', (event) => {
            if (event.loaded && event.total) {
              const percent = (event.loaded / event.total) * 100;
              console.log(Math.round(percent));
            }
          });
          //la botonera se visualiza si hay un video cargado
        let botonera = document.getElementById('botonera');
        botonera.style.visibility="visible";
        var warn = document.getElementById('filecontrol');
        warn.innerHTML="";
    }


}