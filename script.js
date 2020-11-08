window.onload = () => {
  var selecting = document.querySelectorAll(".right-side > span");
  var searcher = document.getElementsByClassName("searcher")[0];
  var items = document.querySelectorAll(".item");

  var myStore = [];

  var myObj = {
    0: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"],
    1: ["Fullstack", "Midweight", "Python", "React"],
    2: ["Frontend", "Junior", "React", "Sass", "JavaScript"],
    3: ["Frontend", "Junior", "HTML", "CSS", "JavaScript"],
    4: ["Fullstack", "Midweight", "JavaScript", "Ruby", "Sass"],
    5: ["Backend", "Junior", "Ruby", "RoR"],
    6: ["Frontend", "Junior", "HTML", "JavaScript", "Sass"],
    7: ["Frontend", "Junior", "JavaScript", "Vue", "Sass"],
    8: ["Fullstack", "Midweight", "JavaScript", "Python", "Django"],
    9: ["Frontend", "Junior", "JavaScript", "React", "Sass"],
  };
  var ind;
  selecting.forEach((item) => {
    item.onclick = () => {
      try {
        if (myStore.includes(item.innerText)) {
        } else {
          myStore.push(item.innerText);
          searcher.innerHTML += `<div class= "mavo">
        <div class="mavo1">${item.innerText}</div>
        <div class="remove">
        <img src="images/icon-remove.svg" alt="remove"/>
        </div>
        </div>
        `;

          // searcher.style.transform = "scale(1)";
          searcher.style.display = "block";
          for (let key in myObj) {
            for (let i of myStore) {
              if (myObj[key].includes(i)) {
                ind = true;
              } else {
                ind = false;
                break;
              }
            }
            if (ind) {
              items[key].style.display = "block";
            } else {
              items[key].style.display = "none";
            }
          }
        }
        var remover = document.querySelectorAll(".remove");
        var mavo = document.querySelectorAll(".mavo");
        for (let i = 0; i <= remover.length; i++) {
          if (remover.length > 0) {
            remover[i].onclick = () => {
              mavo[i].remove();
                myStore.splice(i);
                for (let key in myObj) {
                    for (let i2 of myStore) {
                      console.log(i2);
                      if (myObj[key].includes(i2)) {
                        ind = true;
                      } else {
                        ind = false;
                        break;
                      }
                    }
                    if (ind) {
                      items[key].style.display = "block";
                    } else {
                      items[key].style.display = "none";
                    }
                  }
              
              
              
              if (myStore.length === 0) {
                searcher.style.display = "none";
              }
            };
          }
        }
      } catch (err) {}
    };
  });
};
