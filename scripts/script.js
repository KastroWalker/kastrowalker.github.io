const createTalkCard = (title, description, link) => {
    const talkLink = document.createElement("a");
    const talkCard = document.createElement("section");
    const talkTitle = document.createElement("h2");
    const talkDescription = document.createElement("p");

    talkCard.classList.add("talk-link");
    talkCard.classList.add("talk-card");
    talkTitle.classList.add("talk-title");
    talkDescription.classList.add("talk-description");

    talkTitle.textContent = title;
    talkDescription.textContent = description;

    talkCard.appendChild(talkTitle);
    talkCard.appendChild(talkDescription);
    talkLink.appendChild(talkCard);
    talkLink.href = link;
    talkLink.target = "_blank";

    return talkLink;
}

talks.forEach(talk => {
    const talkCard = createTalkCard(talk.title, talk.description, talk.link);
    document.querySelector("body").appendChild(talkCard);
});