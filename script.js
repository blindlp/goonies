


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

// obteneos el listado de imagenes
const imageNo1 = document.querySelector('#imgNo1');
// obteneos el listado de imagenes
const imageNo2 = document.querySelector('#imgNo2');
// obteneos el listado de imagenes
const imageNo3 = document.querySelector('#imgNo3');
// obteneos el listado de imagenes
const imageNo4 = document.querySelector('#imgNo4');
// obteneos el listado de imagenes
const imageNo5 = document.querySelector('#imgNo5');
// obteneos el listado de imagenes
const imageNo6 = document.querySelector('#imgNo6');

// obtenemos el el nombre de la imagen principal
const postImage =  document.querySelector('.related-info-container-crew-add-to-img2');
// obtenemos la informacion de la pelicula
const postTitleMovie = document.querySelector('.post-title-movie');
const postDetailMovie = document.querySelector('#post-title-movie-detail');
const postFooterMovie = document.querySelector('#post-title-movie-footer');


// procedemos a caputar el evento.
imageNo1.addEventListener('mouseenter', function() {
    postImage.src="https://m.media-amazon.com/images/M/MV5BMTQ2ODFlMDAtNzdhOC00ZDYzLWE3YTMtNDU4ZGFmZmJmYTczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,0,128,190_AL_.jpg";
    postTitleMovie.innerHTML = 'E.T. the Extra-Terrestrial (1982)';
    postDetailMovie.innerHTML = 'A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.';
    postFooterMovie.innerHTML = '<strong >Director: </strong>Steven Spielberg<br><strong>Stars: </strong>Henry Thomas, Drew Barrym';
});
// procedemos a caputar el evento.
imageNo2.addEventListener('mouseenter', function() {
    postImage.src="https://m.media-amazon.com/images/M/MV5BM2YwNWExYjItODZmOC00MTRjLWFlYmEtODFmNGI5M2E5NzYxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,0,128,190_AL_.jpg";
    postTitleMovie.innerHTML = 'The NeverEnding Story (1984)';
    postDetailMovie.innerHTML = 'A troubled boy dives into a wondrous fantasy world through the pages of a mysterious book.';
    postFooterMovie.innerHTML = '<strong >Director: </strong>Wolfgang Petersen<br><strong>Stars: </strong>Noah Hathaway, Barret Olive';
});
// procedemos a caputar el evento.
imageNo3.addEventListener('mouseenter', function() {
    postImage.src="https://m.media-amazon.com/images/M/MV5BMjM2MDE4OTQwOV5BMl5BanBnXkFtZTgwNjgxMTg2NzE@._V1_UX128_CR0,0,128,190_AL_.jpg";
    postTitleMovie.innerHTML = 'Labyrinth (1986)';
    postDetailMovie.innerHTML = 'A 16-year-old girl is given 13 hours to solve a labyrinth and rescue her baby brother when her wish for him to be taken away is granted by the Goblin King.';
    postFooterMovie.innerHTML = '<strong >Director: </strong>Jim Henson<br><strong>Stars: </strong>David Bowie, Jennifer Connell';
});
// procedemos a caputar el evento.
imageNo4.addEventListener('mouseenter', function() {
    postImage.src="https://m.media-amazon.com/images/M/MV5BNmJjNTQzMjctMmE2NS00ZmYxLWE1NjYtYmRmNjNiMzljOTc3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY190_CR0,0,128,190_AL_.jpg";
    postTitleMovie.innerHTML = 'Hook (1991)';
    postDetailMovie.innerHTML = 'When Captain Hook kidnaps his children, an adult Peter Pan must return to Neverland and reclaim his youthful spirit in order to challenge his old enemy.';
    postFooterMovie.innerHTML = '<strong >Director: </strong>Steven Spielberg<br><strong>Stars: </strong>Dustin Hoffman, Robin Willia';
});
// procedemos a caputar el evento.
imageNo5.addEventListener('mouseenter', function() {
    postImage.src="https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,0,128,190_AL_.jpg";
    postTitleMovie.innerHTML = 'Home Alone (1990)';
    postDetailMovie.innerHTML = 'An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.';
    postFooterMovie.innerHTML = '<strong >Director: </strong>Chris Columbus<br><strong>Stars: </strong>Macaulay Culkin, Joe Pesci, D';
});
// procedemos a caputar el evento.
imageNo6.addEventListener('mouseenter', function() {
    postImage.src="https://m.media-amazon.com/images/M/MV5BOTQ1NTg4MDAtOGU0OS00ZGQwLTliZjQtNDEzZjAzZGI5MjFjXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_UY190_CR0,0,128,190_AL_.jpg";
    postTitleMovie.innerHTML = 'Honey, I Shrunk the Kids (1989)';
    postDetailMovie.innerHTML = 'The scientist father of a teenage girl and boy accidentally shrinks his and two other neighborhood teens to the size of insects. ';
    postFooterMovie.innerHTML = '<strong >Director: </strong>Joe Johnston<br><strong>Stars: </strong>Rick Moranis, Matt Frewer, M';
});




//  agregamos el nuevo comentario








