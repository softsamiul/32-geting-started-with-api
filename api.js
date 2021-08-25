// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


// By my customly

function onLoad(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(data => console.log(data))

}

const loadUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => publishUser(data))
}

const loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data)
    )
}
// loadUsers();

const loadPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => console.log(data)
    )
}

const publishUser = (data) => {
    const ul = document.querySelector('#users');
    for( const user of data){   
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name} and Email: ${user.email}`;
        ul.appendChild(li);
    }
}