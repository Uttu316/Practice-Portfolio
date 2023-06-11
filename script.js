const info = {
  title: "Hi! I'm Utkarsh Gupta",
  subHeading:
    "I'm a 24-year-old software engineer specializing in TypeScript, React, and Web Performance.",
  desgination: "Front end Developer Engineer",
  companyName: "Housing.com",
  companyUrl: "https://housing.com/",
  expirences: [
    {
      from: "May 2023",
      to: "Present",
      title: "Front end Instructor",
      subTitle: "Newton School",
      link: "https://www.linkedin.com/in/utkarsh-gupta-032223147/",
    },
    {
      from: "Jun 2022",
      to: "Present",
      title: "Front end Instructor",
      subTitle: "Edyoda",
      link: "https://www.linkedin.com/in/utkarsh-gupta-032223147/",
    },
    {
      from: "May",
      to: "Present",
      title: "Front end Engineer",
      subTitle: "Housing.com",
      link: "https://www.linkedin.com/in/utkarsh-gupta-032223147/",
    },
  ],
};

(function () {
  addPageHeading();
  addPageSubHeading();
  addDesignation();
  addExpeirences()
})();

function addPageHeading() {
  const h1 = document.createElement("h1");

  h1.innerHTML = info.title;
  h1.classList.add("page-heading");

  const main = document.querySelector("main");

  main.prepend(h1);
}

function addPageSubHeading() {
  const h3 = document.createElement("h3");

  h3.innerHTML = info.subHeading;
  h3.classList.add("page-subheading");

  const heading = document.querySelector(".page-heading");

  heading.insertAdjacentElement("afterend", h3);
}

function addDesignation() {
  const desginationEl = document.querySelector(
    "#designation-container .designation"
  );
  const companyEl = document.querySelector("#designation-container .company");

  desginationEl.innerHTML = info.desgination + " at";
  companyEl.innerHTML = info.companyName;
  companyEl.setAttribute("href", info.companyUrl);
  companyEl.setAttribute("target", "_blank");
}

function addExpeirences() {
  const expirences = info.expirences;
  const list = document.getElementById("expirences-list");
  expirences.forEach((item) => {
    const card = createCard(item);
    list.append(card);
  });
}

function createCard(cardInfo) {
  const card = document.createElement("div");
  const heading = document.createElement("h3");
  const subHeading = document.createElement("h4");
  const dateContainer = document.createElement("div");
  const from = document.createElement("span");
  const to = document.createElement("span");

  heading.innerHTML = cardInfo.title;
  subHeading.innerHTML = cardInfo.subTitle;
  from.innerHTML = cardInfo.from;
  to.innerHTML = cardInfo.to;
  dateContainer.append(from);
  dateContainer.append(to);

  card.classList.add('card')
  dateContainer.classList.add('timeline')
  card.append(heading);
  card.append(subHeading);
  card.append(dateContainer);
  return card;
}
