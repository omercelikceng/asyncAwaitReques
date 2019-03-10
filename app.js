// Elementleri Seçme

const githubForm = document.getElementById("github-form");


eventListeners();

function eventListeners(){
    githubForm.addEventListener("submit",putData);
}


function getData(e){
	const github = new Github();
	github.getRequest("https://jsonplaceholder.typicode.com/todos/1")
		.then(response =>{
			console.log(response);
		})
		.catch(err => console.log(err));
    
    e.preventDefault();
}

function postData(e){
	const github = new Github();
	let data = {
			  title: 'omer',
			  body: 'celik',
			  userId: 1
			};
	github.postRequest("https://jsonplaceholder.typicode.com/posts", data)
		.then(response =>{
			console.log(response);
		})
		.catch(err => console.log(err));
    

    e.preventDefault();
}

function putData(e){
	const github = new Github();
	let data = {
			  id:1,
			  title: 'omer',
			  body: 'celik',
			  userId: 1
			};
	github.putOrPostRequest("https://jsonplaceholder.typicode.com/posts/1", data,"PUT")
		.then(response =>{
			console.log(response);
		})
		.catch(err => console.log(err));
    

    e.preventDefault();
}

function deleteData(e){
	const github = new Github();
	github.deleteRequest("https://jsonplaceholder.typicode.com/posts/1")
		.then(response =>{
			console.log(response);
		})
		.catch(err => console.log(err));
    
    e.preventDefault();
}


