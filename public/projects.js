let expandButtons = document.getElementsByClassName('expand');
let collapseButtons = document.getElementsByClassName('collapse');
let aDropDownCheckbox = document.getElementsByClassName('project-dropdown-trigger');
let pBottomButtonSet = document.getElementById('bottom-button-set');

window.addEventListener('DOMContentLoaded', (event) => {
  
  fnAddEvents();

  fnOpenStartingProject(document.getElementById(window.location.hash.substring(1)));
  
  expandButtons = document.getElementsByClassName('expand');
  collapseButtons = document.getElementsByClassName('collapse');
  aDropDownCheckbox = document.getElementsByClassName('project-dropdown-trigger');
  pBottomButtonSet = document.getElementById('bottom-button-set');
});

function fnAddEvents() {
  for(let checkbox of aDropDownCheckbox) {
    checkbox.addEventListener('change', fnShowBottomButtons);
  }
  
  for(let button of expandButtons) {
    button.addEventListener('click', (event) => {
      for(let checkbox of aDropDownCheckbox) {
        checkbox.checked = true;
      }
      fnShowBottomButtons()
    });
  }
  
  for(let button of collapseButtons) {
    button.addEventListener('click', (event) => {
      for(let checkbox of aDropDownCheckbox) {
        checkbox.checked = false;
      }
      fnShowBottomButtons()
    });
  }
}

function fnShowBottomButtons() {
  let anyChecked = false;
  for(let checkbox of aDropDownCheckbox) {
    if (checkbox.checked == true) {
      anyChecked = true;
    }
  }
  if(anyChecked) {
    pBottomButtonSet.style.visibility = "visible";
  } else {
    pBottomButtonSet.style.visibility = "hidden";
  }
}

function fnOpenStartingProject(pStartingProject) {
  if(pStartingProject === null) return;
  pStartingProject.getElementsByClassName('project-dropdown-trigger')[0].checked = true;
  fnShowBottomButtons()
}