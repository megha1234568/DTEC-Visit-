
function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdown-content");
    if (dropdownContent.classList.contains("show")) {
      dropdownContent.classList.remove("show");
    } else {
      dropdownContent.classList.add("show");
    }
  }
  function toggleDropdown2() {
    const dropdownContent2 = document.getElementById("dropdown-content2");
    if (dropdownContent2.classList.contains("show")) {
      dropdownContent2.classList.remove("show");
    } else {
      dropdownContent2.classList.add("show");
    }
  }
  function toggleDropdown3() {
    const dropdownContent3 = document.getElementById("dropdown-content3");
    if (dropdownContent3.classList.contains("show")) {
      dropdownContent3.classList.remove("show");
    } else {
      dropdownContent3.classList.add("show");
    }
  }

const tagContainer = document.getElementById('input-group');
const input = document.getElementById('my-input');

let tags = []

input.addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        tags.push(input.value);
        addTags();
        input.value = '';
    }
})

function addTags(){
    reset();
    tags.slice().reverse().forEach(function(tag){
        const input = createTag(tag);
        tagContainer.prepend(input);
    })
}

function reset(){
    document.querySelectorAll('.tag').forEach(function(tag){
        tag.parentElement.removeChild(tag)
    })
}

function createTag(label){
    const div = document.createElement('div');
    div.setAttribute('class','tag');
    const span = document.createElement('span');
    span.innerHTML = label;
    const closebtn = document.createElement('i');
    closebtn.setAttribute('class', 'material-icon');
    closebtn.setAttribute('data-item', label);
    closebtn.innerHTML = 'x';

    div.appendChild(span);
    div.appendChild(closebtn);
    return div;
}

document.addEventListener('click', function(e){
    if (e.target.tagName === 'I'){
        const value = e.target.getAttribute('data=item');
        const index = tags.indexOf(value);
        tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
        addTags();
    }
})

function send(){
    valid = true;
    if(tags.length < 1){
        valid = false;
    }
    tags.forEach(function(tag){
        if(!validateEmail(tag)){
            valid = false;
        };
    })
    if ( valid == true){
        sendEmail();
    }
    else{
         document.getElementById('error').style.display = "block";
         document.getElementById('success').style.display = "none";

    }
}

function validateEmail(){
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(email);
}

function sendEmail(){
    document.getElementById('success').style.display = "block";
    document.getElementById('error').style.display = "none";
}


function returnText(){
    let input = document.getElementById('title').value;
    alert(input);
}

  

