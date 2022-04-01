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