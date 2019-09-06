
// axios.get("https://api.github.com/users/JaxAtwood")
// .then(res => {
//   console.log(res.data)
//   card.appendChild(createCard(res.data)); 
// })
// .catch(err => {
//   console.log(err);
// })

const followersArray = [
 'tetondan',
 'dustinmyers',
 'justsml',
 'luishrd',
 'bigknell'
];

followersArray.forEach (user => {
  axios.get(`https://api.github.com/users/${user}`)
    .then (data => {
      const card = createCard(data.data)
      const cards = document.querySelector('.cards')
      cards.appendChild(card)
    })
  })

function createCard(object) {
  const card = document.createElement("div");
  const image = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const handle = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const url = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(handle);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(url);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  card.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  handle.classList.add("username");

  image.setAttribute("src", object.avatar_url);
  name.textContent = object.name;
  handle.textContent = object.login;
  location.textContent = object.location;
  url.setAttribute("href", object.html_url);
  url.textContent = (`${object.html_url}`);
  followers.textContent = (`Followers: ${object.followers}`);
  following.textContent = (`Following: ${object.following}`);
  bio.textContent = (`Bio: ${object.bio}`);
  
  console.log(profile);

  return card;
}