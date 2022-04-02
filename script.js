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

function cleanUpIndex() {
  let elementArr = document.querySelectorAll(".main > *");
  return elementArr.forEach((i) => i.remove());
}

function renderCreate(contact) {
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

  //renderCreate(contactList[0])
}