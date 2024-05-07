let projects = [
	{name: "Home", root: "index.html"},
	{name: "Bootstrap v3", root: "practice-v3.html"},
	{name: "Bootstrap v4", root: ""},
	{name: "Bootstrap v5", root: "practice-v5.html"},
	{name: "Dashboard v5", root: "dashboard-v5.html"},
]

const projectGroup = document.getElementById("project-group");
const selectList = document.createElement("select");
selectList.classList.add("form-select");
selectList.onchange = function() { if(this.value) location.href=(this.value); };

projects.forEach((data, i) => {
  const option = document.createElement("option");
  const thisFileFullName = document.URL.substring(document.URL.lastIndexOf('/') + 1, document.URL.length);
  
  option.value = projects[i].root;
  option.text  = projects[i].name;
  option.classList.add('link');
  
  if(option.value === "") {
    option.disabled = true;
  } else if(option.value.split("/").reverse()[0] === thisFileFullName) {
    option.classList.add('active');
    option.selected = true;
  }

	selectList.appendChild(option);
});

projectGroup.append(selectList);