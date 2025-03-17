let friendsList = [];

function addFriend() {
    let friendInput = document.getElementById("friend");
    let enteredNames = friendInput.value.trim();

    if (!enteredNames) {
        alert("Please enter at least one friend's name to continue.");
        return;
    }

    // Split names by commas and trim any extra spaces
    let newFriends = enteredNames.split(",").map(name => name.trim()).filter(name => name !== "");

    // Check for duplicates
    let duplicates = newFriends.filter(name => friendsList.includes(name));
    if (duplicates.length > 0) {
        alert(`These names are already in the list: ${duplicates.join(", ")}. Please enter other names.`);
        return;
    }

    // Add valid names to the list
    friendsList.push(...newFriends);

    friendInput.value = "";
    friendInput.focus();

    console.log(friendsList);
    renderList();
}

function renderList() {
    let listContainer = document.getElementById("friendsList");
    listContainer.innerHTML = "";

    friendsList.forEach((friend) => {
        let listItem = document.createElement("li");
        listItem.textContent = friend;
        listContainer.appendChild(listItem);
    });
}

function pickRandomFriend() {
    if (friendsList.length < 3) {
        alert("You need at least 3 friends to pick a secret friend.");
        return;
    }

    let randomIndex = Math.floor(Math.random() * friendsList.length);
    let selectedFriend = friendsList[randomIndex];

    let result = document.getElementById("result");
    result.innerHTML = `The selected friend is: <strong>${selectedFriend}</strong>`;

    friendsList = [];
    renderList();
}
