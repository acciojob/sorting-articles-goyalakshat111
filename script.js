//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const sortedBands = bands
  .slice() // Create a copy of the array
  .sort((a, b) =>
    a.replace(/^(a |an |the )/i, '').localeCompare(
      b.replace(/^(a |an |the )/i, '')
    )
  );




let list = document.createElement("ul");
list.id="band";

for(let t of sortedBands){
	let li = document.createElement("li");
	li.innerText = t;
	list.append(li)
}


document.body.append(list)



