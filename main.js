// DOM elemnt 
const result = document.getElementById('result');
const input = document.getElementById('filter');
const listItems = [];

// Event to input
input.addEventListener('input', (e) => fliterData(e.target.value))

// Get Data Function
async function getData(){

// Fetch link of data
const res = await fetch('https://randomuser.me/api?results=50');

// change data to json
const { results } = await res.json();

// Clear the result
result.innerHTML = ''

// Loop Through data Users
results.forEach(user => {

// creat the li Element
const li = document.createElement('li')

// push it to array
listItems.push(li)

// Put data to li element
li.innerHTML = `
<img src="${user.picture.large}" alt = "${user.name.first}">
<div class="user-info">
<h4>${user.name.first} ${user.name.last}</h4>
<p>${user.location.city}, ${user.location.country}</p>
</div>
`;

// apper to the page
result.appendChild(li)
});
}

// Function of get Matchy Word
function fliterData(search){

// Loop Through Array of Data
listItems.forEach( item=> {

// Check if input value match data
if(item.innerText.toLowerCase().includes(search.toLowerCase())){
item.classList.remove('hide')
}else{
item.classList.add('hide')
}

})
}

// Run
getData()