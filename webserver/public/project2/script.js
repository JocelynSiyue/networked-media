const stars = document.getElementById("stars");

for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 70 + "%";
    star.style.animationDelay =
        Math.random() * 3 + "s";
    stars.appendChild(star);
}

const sky = document.querySelector(".sky");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const ground = document.querySelector(".ground");
const timeDisplay =
    document.getElementById("time");
const dateDisplay =
    document.getElementById("date");

function updateScreen() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let displayHours = hours % 12;
    if (displayHours === 0) {
        displayHours = 12;
    }

    const formattedMinutes =
        minutes.toString().padStart(2, "0");
    const formattedSeconds =
        seconds.toString().padStart(2, "0");
    timeDisplay.textContent =
        displayHours +
        ":" +
        formattedMinutes +
        ":" +
        formattedSeconds;

        dateDisplay.textContent =
        now.toLocaleDateString(
            "en-US",
            {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric"
            }
        );


    /* --------------------------------
       CONVERT TIME TO MINUTES
    -------------------------------- */

    const totalMinutes =
        hours * 60 + minutes;


    /*
        Sunrise = 6:00 AM
        Sunset = 6:00 PM
    */

    const sunrise = 6 * 60;

    const sunset = 18 * 60;


    /* --------------------------------
       DAY
    -------------------------------- */

    if (
        totalMinutes >= sunrise &&
        totalMinutes < sunset
    ) {

        /*
            Convert 6 AM → 6 PM
            into a number from 0 → 1
        */

        const progress =
            (totalMinutes - sunrise) /
            (sunset - sunrise);


        /*
            Sun moves horizontally
        */

        const sunX =
            progress * 100;


        /*
            Sun moves in an arc
        */

        const sunY =
            75 -
            Math.sin(progress * Math.PI) * 60;
        sun.style.left =
            sunX + "%";
        sun.style.top =
            sunY + "%";
        sun.style.opacity = "1";
        moon.style.opacity = "0";
        stars.style.opacity = "0";

        if (progress < 0.15) {
            sky.style.background =
                "linear-gradient(to bottom, #f7b267, #f6d365)";

        }

        else if (progress > 0.80) {
            sky.style.background =
                "linear-gradient(to bottom, #813c1e, #f6d365)";
        }

        else {
            sky.style.background =
                "linear-gradient(to bottom, #4facfe, #c2e9fb)";
        }
        ground.style.background =
            "#4f633f";

    }

    else {

        sun.style.opacity = "0";
        moon.style.opacity = "1";
        stars.style.opacity = "1";
        sky.style.background =
            "linear-gradient(to bottom, #020024, #090979, #000000)";


        ground.style.background =
            "#101a14";


        let nightProgress;


        if (totalMinutes >= sunset) {

            nightProgress =
                (totalMinutes - sunset) /
                (24 * 60 - sunset);

        }

        else {

            nightProgress =
                (totalMinutes +
                (24 * 60 - sunset)) /
                (24 * 60 - sunset);

        }


        const moonX =
            nightProgress * 100;


        const moonY =
            75 -
            Math.sin(
                nightProgress * Math.PI
            ) * 50;


        moon.style.left =
            moonX + "%";

        moon.style.top =
            moonY + "%";
    }
}

updateScreen();

setInterval(
    updateScreen,
    1000
);