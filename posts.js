function getApi(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data)
    )
}
getApi();
const displayPosts = (posts) => {
    const section = document.querySelector('#posts-container');
    for(const post of posts){
        const article = document.createElement('article');
        article.classList.add('article-design');
        article.innerHTML = `<h3 class="header-design">Post: ${post.id} ${post.title}</h3>
        <p>${post.body}</p>
        `;        

        section.appendChild(article);
    }
}