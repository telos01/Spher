const ShareItems = document.querySelector("#shares")
const ShareCreateForm = document.querySelector('#share-form')

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}


function handleFormError(msg, display) {
  var myErrorDiv = document.querySelector("#create-form-error")
  if (display === true) {
    myErrorDiv.setAttribute("class", "d-block alert  alert-danger")
    myErrorDiv.innerText = msg
  } else {
    myErrorDiv.setAttribute("class", "d-none alert alert-danger")
  }
}


function handleForm(event) {
  event.preventDefault()

  const myForm = event.target
  const myFormData = new FormData(myForm)

  const url = myForm.getAttribute("action")
  const method = myForm.getAttribute("method")
  const xhr = new XMLHttpRequest()
  xhr.responseType = "json"
  xhr.open(method, url)

  xhr.setRequestHeader("HTTP_X_REQUESTED_WITH", "XMLHttpRequest")
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest")

  xhr.onload = function () {
    if (xhr.status === 201) {
      handleFormError("", false)
      const newResponse = xhr.response
      const share_el = formatItems(newResponse)
      ShareItems.innerHTML = share_el + ShareItems.innerHTML
      myForm.reset()
    } else if (xhr.status === 400) {
      const errorJson = xhr.response
      const contentError = errorJson.content
      let contentErrorMsg;
      if (contentError) {
        contentErrorMsg = contentError[0]
        if (contentErrorMsg) {
          handleFormError(contentErrorMsg, true)
        }
      } else {
        alert("An error occured.Please try again")
      }
    } else if (xhr.status === 401) {
      alert("You must login!!")
      window.location.href = "/login"
    } else if (xhr.status === 403) {
      alert("You must login!!")
      window.location.href = "/login"
    } else if (xhr.status === 500) {
      alert("There was a server error, please try again later")
    }
  }

  xhr.onerror = function () {
    alert("Sorry an error occurred. Please try again later")
  }


  xhr.send(myFormData)
}

ShareCreateForm.addEventListener("submit", handleForm)


function LoadShare(Share_ele) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open("GET", "api/share_ls");


  xhr.onload = function () {
    const serverResponse = xhr.response;
    const Itemlist = serverResponse;
    var finalItem = "";
    for (let item of Itemlist) {
      var shareobj = item;
      var currentItem = formatItems(shareobj);
      finalItem += currentItem;
    }
    Share_ele.innerHTML = finalItem;
  };


  xhr.send();
}

function HandleCommitAction(share_id, CurrentCount, action) {
  const url = "/api/share/action"
  const method = "POST"
  const data = JSON.stringify({
    id: share_id,
    action: action
  })
  const xhr = new XMLHttpRequest()
  const csrftoken = getCookie('csrftoken');
  xhr.open(method, url)
  xhr.setRequestHeader("Content-Type", "application/json")
  xhr.setRequestHeader("HTTP_X_REQUESTED_WITH", "XMLHttpRequest")
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest")
  xhr.setRequestHeader("X-CSRFToken", csrftoken)
  xhr.onload = function () {
    console.log(xhr.status, xhr.response)
    LoadShare(ShareItems)
  }
  xhr.send(data)
  return
}





  
function LikeBtn(share) {
  return "<button class='btn btn-primary btn-sm' onclick=HandleCommitAction(" +
    share.id + "," + share.likes + ",'like')>" + share.likes + " Likes</button>"
}


function UnlikeBtn(share) {
  return "<button class='btn btn-outline-primary btn-sm' onclick=HandleCommitAction(" +
    share.id + "," + share.likes + ",'unlike')>" + "Unlike</button>"
}


function RecommitBtn(share) {
  return "<button class='btn btn-outline-success btn-sm' onclick=HandleCommitAction(" +
    share.id + "," + share.likes + ",'recommit')>" + "Recommit</button>"
}





function formatItems(share) {
  var currentItem =
    "<div class='col-12 col-md-10 mx-auto border rounded py-3 mb-4 share' id='share-" +
    share.id +
    "'><h4>" +
    share.user + "." +
    "</h4>" +
    "<p>" +
    share.content +
    "<div class='btn-group'>" +
    LikeBtn(share) + UnlikeBtn(share) + RecommitBtn(share) +
    "</div></p></div>";

  return currentItem;
}
LoadShare(ShareItems)

