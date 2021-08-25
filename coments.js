const getData = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data  => displayComments(data))
}
getData();

const displayComments = (comments) =>{
    const section = document.getElementById('comments');

    for(const comment of comments){
        const div = document.createElement('div');
        div.classList.add('comment-design');
        const singleComment =  `<h3 class="comment-header">Name: ${comment.name}</h3> <p>${comment.body}`;

        div.innerHTML = singleComment;

        section.appendChild(div);
    }
}
