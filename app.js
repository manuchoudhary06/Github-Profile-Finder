//Init github class

const github = new Github();

//Init UI class

const ui = new UI();

//Search Input

let searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    //Get input Text
    let userText = e.target.value;

    if (userText !== "") {
      //make Http call

      github.getUser(userText).then((data) => {
        if (data.profile.message === "Not Found") {
          //Show Alert
          ui.showAlert("User Not Found", "alert alert-danger");
        } else {
          // Show profile data
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      });
    } else {
      //Clear profile
      ui.clearProfile();
      //Clear Repos
      ui.clearRepos();
    }
  }
});
