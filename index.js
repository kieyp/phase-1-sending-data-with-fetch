// Add your code here

function submitData(userName,userEmail)
{
  const data={
    name:userName,
    email:userEmail
  }


  const postData=
  {
    method:'POST',
    headers:
    {
      "content-Type":"application/json",
      Accept:"application/json",
    },
    body:JSON.stringify(data)
  }


  return fetch("http://localhost:3000/users",postData).then(function (response) {
    return response.json();
}).then (function(data){
  document.querySelector('body').textContent=data.id
})
    .catch((err) => {
        document.querySelector("body").textContent = err.message;
      


});}
