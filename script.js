console.log ('Hey Emona')

const baseUrl = "https://tribe.api.fdnd.nl/v1"
const loader = document.querySelector(".lds-grid")

getMembers()
async function getMembers() {
   const req = await fetch(`${baseUrl}/member`)
   await req.json()
   .then(function(json){
       console.log(json);
       hidePreloader()
        json.data.forEach(item => {
            if(item.memberId == 20) {
                document.querySelector("#surName").innerHTML = item.surname
                document.querySelector("#nickName").innerHTML = item.nickname
                document.querySelector("#githubHandle").innerHTML = item.githubHandle
                document.querySelector("#bio").innerHTML = item.bio
                document.querySelector("#url").innerHTML =item.url
                document.querySelector("#avatar").image.src= avatar
                
                
            }

        });
    })
function hidePreloader() {
    setTimeout(()=>{
     loader.style.display = "none"
    }, 1500)
}
   

}

