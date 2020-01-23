let lastSection = null;
let benefits = null;

const toggle = (panel) => {
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
  panel.previousSibling.classList.toggle("shown");
  benefits === true ? changeIcon(panel.previousSibling, 0, 1) : changeIcon(panel.previousSibling, 1, 2);
};

const changeIcon = (toggle, index1, index2) => {
  const hidden = 'hidden';
  toggle.childNodes[index1].classList.toggle(hidden); // down icon
  toggle.childNodes[index2].classList.toggle(hidden); // up icon
};

const sectionCollapseHandler = (evt, type) => {
  let element = evt.target;
  const elemClass = element.classList[0];
  if (!type) {
    if (elemClass !== "section-toggle") {
      if (benefits) {
        lastSection = null;
      }
      benefits = false;
      console.log(benefits);
      // the click element came from from icon or title span
      if (elemClass === "section-title"){
        element = element.parentNode; // set element to parent of span/icon
      }
      else if (elemClass === "down") {
        element = element.parentNode; // set element to parent of parent of span/icon
      }
      else if (elemClass === "up") {
        element = element.parentNode; // set element to parent of parent of span/icon
      }
      else  if (elemClass === undefined) {
        element = element.parentNode.parentNode; // set element to parent of parent of span/icon
      }
      else  if (elemClass === "injected-svg") {
        element = element.parentNode.parentNode.parentNode; // set element to parent of parent of span/icon
      }
    }
  }
  else {
    if (elemClass !== "benefits-toggle"){
      benefits = true;
      console.log(benefits);
      if (elemClass === "benefits-title"){
          element = element.parentNode; // set element to parent of span/icon
        }
      else if (elemClass === "down") {
        element = element.parentNode; // set element to parent of parent of span/icon
      }
      else if (elemClass === "up") {
        element = element.parentNode; // set element to parent of parent of span/icon
      }
      else  if (elemClass === undefined) {
        element = element.parentNode.parentNode; // set element to parent of parent of span/icon
      }
      else  if (elemClass === "injected-svg") {
        element = element.parentNode.parentNode.parentNode; // set element to parent of parent of span/icon
      }
    }
  }
  //console.log(elemClass);
  //element.classList.toggle("shown");
  let current = element.nextElementSibling;
  if (lastSection && lastSection !== current) {
    // if lastNode is not null AND the lastNode is not equal to current element
    toggle(lastSection); // toggle last node
  }

  if (lastSection === current) { // if current element equal to lastNode
    // null the last element to avoid double show (current and last element)
    lastSection = null;
  } else {
    lastSection = current; // lastNode equal to current element
  }
  toggle(current);
  try { // scroll in to view of current clicked element
    element.parentNode.previousElementSibling.scrollIntoView();
  } catch (e) {
    element.parentNode.parentNode.previousElementSibling.scrollIntoView();
    /*try {
      element.parentNode.previousElementSibling.scrollIntoView();
    } catch (e) {
      element.parentNode.parentNode.previousElementSibling.scrollIntoView();
    }*/
  }
};

export default sectionCollapseHandler;
