function renderCreate(contact) {
  //create each element on page2.html and populate
  let divmain = document.createElement('div');
  divmain.setAttribute('class', 'main');
  let header = document.getElementsByTagName('header')[0];
  header.insertAdjacentElement('afterend', divmain);
  let htmlToInsert = `<div class="contactedit">
    <div class="contactimg">
        <img src="./img/profile.jpg" class ="profilepic" alt="Profile picture">
    </div>
    <div class="form">
        <form>
            <div class="inputcontainer">
                <input type="text" id="contactname" name="contactname" placeholder="Contact Name">
                <button class="extrafield" id="extranamefield" name="extranamefield">+</button>
            </div>

            <div class="inputcontainer">
                <input type="tel" id="contactphone" name="contactphone" placeholder="Contact Phone">
                <button class="extrafield" id="extraphonefield" name="extraphonefield">+</button>
            </div>

            <div class="inputcontainer">
                <input type="text" id="contactaddress" name="contactaddress" placeholder="Contact Address">
                <button class="extrafield" id="extraaddressfield" name="extraaddressfield">+</button>
            </div>
            
            <div class="inputcontainer">
                <input type="email" id="contactemail" name="contactemail" placeholder="Contact Email">
                <button class="extrafield" id="extraemailfield" name="extraemailfield">+</button>
            </div>

            <div class="buttons">
                <button type="submit" class="button save" id="savecontact" name="savecontact">Save Contact</button>
                <button type="reset" class="button cancel" id="cancel" name="cancel">Cancel</button>
            </div>
        </form>
    </div>
  </div>`;
  divmain.insertAdjacentHTML('afterbegin', htmlToInsert);
  document.getElementById('contactname').value = contact.name;
  document.getElementById('contactphone').value = contact.phone;
  document.getElementById('contactaddress').value = contact.address;
  document.getElementById('contactemail').value = contact.email;
  
  //renderCreate(contactList[0])
}




function cleanUpIndex() {
  let elementArr = document.querySelectorAll(".main > *");
  return elementArr.forEach((i) => i.remove());
}




function createSingleIndex() {
  const singleContact = document.querySelectorAll(".contact");
  singleContact.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault;
      var contact = {};
      for (let i = 0; i < contactList.length; i++) {
        if (contactList[i]["name"] == e.target.textContent) {
          contact = contactList[i]
        }
      }
      cleanUpIndex();
      renderCreate(contact);
      return `
      <div class="contact">
        <p>${contact["name"]}</p>
      </div>
    `;
    });
  });
}


function renderView(contact) {
  //create each element on page3.html and populate
  let divmain = document.createElement('div');
  divmain.setAttribute('class', 'main');
  let header = document.getElementsByTagName('header')[0];
  header.insertAdjacentElement('afterend', divmain);

  let divcinfo = document.createElement('div');
  divcinfo.setAttribute('class', 'contactinfo');
  divmain.appendChild(divcinfo);

  let divcname = document.createElement('div');
  divcname.setAttribute('class', 'contactname');
  divcname.innerHTML = contact.name + '<img src="./img/profile.jpg" class="profilepic" alt="Profile picture">';
  divcinfo.appendChild(divcname);

  let divcemail = document.createElement('div');
  divcemail.setAttribute('class', 'contactemail');
  divcemail.innerHTML = 'email: ' + contact.email;
  divcinfo.appendChild(divcemail);

  let divcphone = document.createElement('div');
  divcphone.setAttribute('class', 'contactphone');
  divcphone.innerHTML = 'cell: ' + contact.phone
  divcinfo.appendChild(divcphone);

  let divcadd = document.createElement('div');
  divcadd.setAttribute('class', 'contactaddress');
  divcadd.innerHTML = 'address: ' + contact.address;
  divcinfo.appendChild(divcadd);

  let divcbutt = document.createElement('div');
  divcbutt.setAttribute('class', 'buttons');
  divcbutt.innerHTML = '<button class="button edit" value="Edit">Edit</button><button class="button close" value="Close">Close</button>';
  divcinfo.appendChild(divcbutt);

  //renderView(contactList[0])
}

function renderIndex(contactList) {
  for (let i = 0; i < contactList.length; i++) {
    addItemToMain(contactList[i]["name"])
  }
}

function addItemToMain(contactName) {
  mainView = document.querySelector('.main')
  let contactCard = `
    <a href="page3.html"><div class="contact"><p>${contactName}</p></div></a>`
  mainView.insertAdjacentHTML('beforeend', contactCard)
}

function cleanUpView() {
  let elements = document.querySelectorAll(".main");
  elements.forEach(ele => ele.remove());
}

/* Clean Create Page */
function cleanUpCreate() {
  let elements = document.querySelectorAll(".main > *");
  return elements.forEach((i) => i.remove());
}



/* All our code above this line */

//Array of contacts
let contactList = [
  {
    name: "Barry Allen",
    phone: "+1 555 555-5555",
    address: "123 front st, Unit #1, Dakota City",
    email: "theflash@gmail.com",
  },
  {
    name: "Beverly Crusher",
    phone: "778-555-1234",
    address: "101 Main St, Anytown, USA",
    email: "chiefmedicalofficer@slack.example.com",
  },
  {
    name: "Diana Prince",
    phone: "123-867-5309",
    address: "Warner Brothers Animation Lot",
    email: "wonderwoman@doc.example.com",
  }
]


