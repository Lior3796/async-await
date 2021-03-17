
// תרגיל 2 סעיף 1
let userArray =
    [{ nickName: "liorlsa9", email: "liorlsa9@gmail.com", fullName: "lior solomon", img: "https://rickandmortyapi.com/api/character/avatar/1.jpeg" },
    { nickName: "yoseflsa9", email: "yoseflsa9@gmail.com", fullName: "yosef shalo", img: "https://rickandmortyapi.com/api/character/avatar/2.jpeg" },
    { nickName: "yehodalsa9", email: "yehodalsa9@gmail.com", fullName: "yehoda bayana", img: "https://rickandmortyapi.com/api/character/avatar/3.jpeg" }
    ];

function getUser(nickName) {
    const timeLoad = new Promise((resolve, reject) => {
        setTimeout(() => {
            const filterArray = userArray.filter(item => item.nickName === nickName)

            if (filterArray.length === 0) {
                reject("no such user");
            }
            else {
                resolve(filterArray[0]);
            }


        }, 6000);
    });
    return timeLoad;
}

async function objPromise() {
    let img1 = document.getElementById("img1");
    img1.src = "giphy.gif";
    let div2 = document.getElementById("div2");

    try {
        const nickName = document.getElementById("userInput").value;
        const user = await getUser(nickName);
        div2.innerHTML = `<h1>${user.nickName}</h1>
                          <h2> ${user.email}</h2> 
                          <img src="${user.img}"> `;

    }
    catch (res) {
        div2.innerHTML = res;
    }
    finally {
        img1.style.display = "none";
    }
}

