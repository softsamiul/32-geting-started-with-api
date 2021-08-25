const getApi = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhotos(data))

}
getApi();
const displayPhotos = (photos) => {
    const section = document.getElementById('photos-wrapper');

    for(const photo of photos){
        const div = document.createElement('div');
        div.classList.add('album-parent')
        const singlePhoto = `<h4>Photot Title: ${photo.title}</h4> <img src="${photo.url}">`;
        div.innerHTML = singlePhoto;
        section.appendChild(div);
    }
}