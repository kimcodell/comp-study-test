const postList = document.querySelector(".post_list");

// const getList = async () => {
//     const reponse = await fetch('http://localhost:3000/api/post_list', {
//         mode: 'no-cors'
//       });
//     const body = await reponse.json();
//     console.log("ehoTsk?")
//     console.log(body);
//     return body;
// }


function getList() {
    console.log("시작")
    fetch('http://localhost:3000/api/post_list')
    .then(function(response) {
        console.log("됐니?");
        // console.log(response.json());
		return response.json()
	}).then(function(json){
        console.log(json);
        postList.innerText = json[0].contents;
    })
    // .catch(function(err) {
    //     console.log(err)
    // })
    console.log("안녕하세요.");
}

getList();