


// funcion para retornar el tiempo 
function getDateTime() {
const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
return  dateTime = date+' '+time;
};



// obtenemos el objeto aceptar
const post = document.querySelector('.new-post-done');



// creamos nuestro evento para ingresar un comentario.
post.addEventListener('click', function () {
    // obtenemos el objeto al cual queremos agregar la informacion 
    const post = document.querySelector('.new-post-done');
    const addToNewPost = document.querySelector(".realated-coments-post-comment");
    
    const textPost = document.querySelector('.new-post-text');
    // construimos nuesto string a agregar    
    const postTextMessage = '<div class="Media"><div class="media-post"><img class="Media-figure" src="https://m.media-amazon.com/images/M/MV5BMTUzNjQ3MDY0OF5BMl5BanBnXkFtZTcwNjE1ODQyOA@@._V1_UX32_CR0,0,32,44_AL_.jpg" alt=""><p class="Media-body">' +  textPost.value + '</p></div><div class="media-post-autor"><p>'+ getDateTime() + ' | Rating: 4/4  <a href="#">Full Review…</a></p></div></div>';
    // agragamos al inicio para ir colocando los mensajes nuevos al principio
    addToNewPost.insertAdjacentHTML('afterbegin', postTextMessage);
});




// obtenemos el texto de la etiqueta text.



//  agregamos el nuevo comentario








