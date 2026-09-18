// =========================
// ELEMENTS
// =========================

const enterButton = document.getElementById("enterButton");
const secretHome = document.getElementById("secretHome");
const daysButton = document.getElementById("daysButton");
const daysPage = document.getElementById("daysPage");
const backButton = document.getElementById("backButton");
const monthsContainer = document.getElementById("monthsContainer");
const unlockedCount = document.getElementById("unlockedCount");
const calendarCount = document.getElementById("calendarCount");
const progressFill = document.getElementById("progressFill");

// =========================
// SURPRISE ELEMENTS
// =========================

const surpriseModal = document.getElementById("surpriseModal");
const closeSurprise = document.getElementById("closeSurprise");
const surpriseDay = document.getElementById("surpriseDay");
const surpriseTitle = document.getElementById("surpriseTitle");
const surpriseMessage = document.getElementById("surpriseMessage");
const surpriseSignature = document.querySelector(".surprise-signature");
const todayDay = document.getElementById("todayDay");
const todayTitle = document.getElementById("todayTitle");
const todayDescription = document.getElementById("todayDescription");
const todayButton = document.getElementById("todayButton");

// =========================
// UNSAVED CHANGES CONFIRMATION
// =========================

const unsavedChangesModal =
    document.getElementById("unsavedChangesModal");

const keepEditingButton =
    document.getElementById("keepEditingButton");

const leaveWithoutSavingButton =
    document.getElementById("leaveWithoutSavingButton");

// =========================
// SPECIAL DAY POPUP
// =========================

const specialDayModal =
    document.getElementById("specialDayModal");

const specialDayIcon =
    document.getElementById("specialDayIcon");

const specialDayTitle =
    document.getElementById("specialDayTitle");

const specialDayMessage =
    document.getElementById("specialDayMessage");

const closeSpecialDay =
    document.getElementById("closeSpecialDay");

// Shown once, the very first time she ever opens
// the site, regardless of what today's date is.

const FIRST_VISIT_POPUP = {
    icon: "🎂",
    color: "#ffd28a",
    title: "Happy (slightly late) birthday",
    message:
        "Your birthday was yesterday — and this is kind of the real gift. Not a single day, but 365 of them, one at a time, starting right now. Consider this the actual start of your birthday year. Happy birthday, Sapna. Let's begin."
};

// Shown on specific calendar dates as they come up
// over the course of the year. Dates are in
// "YYYY-MM-DD" format, matched against the local date.

const SPECIAL_DAY_POPUPS = [
    {
        date: "2026-10-11",
        icon: "✨",
        color: "#c9a7ff",
        title: "Nine nights begin",
        message:
            "Nine nights of dandiya sticks, way too much garba, and probably losing your voice by day 3. Here's to Navratri — dance like nobody's filming (even though someone definitely is)."
    },
    {
        date: "2026-10-24",
        icon: "📖",
        color: "#9fd8ff",
        title: "Tomorrow's the day",
        message:
            "Tomorrow's the exam. Today, just breathe. You've put in the work — trust it. Whatever happens, I'm proud of you for showing up for this. Go get some rest. You've got this."
    },
    {
        date: "2026-11-08",
        icon: "🪔",
        color: "#ffd28a",
        title: "Happy Diwali",
        message:
            "May your year ahead have way more light than darkness, more sweets than stress, and at least one firecracker mishap you'll laugh about later. Happy Diwali, Sapna."
    },
    {
        date: "2026-12-25",
        icon: "🎄",
        color: "#8fdba0",
        title: "Merry Christmas",
        message:
            "Hope today is slow mornings, good food, and people who make you feel warm inside. Merry Christmas — sending you all of it from here."
    },
    {
        date: "2026-12-31",
        icon: "🥂",
        color: "#ffd28a",
        title: "One year left in the tank",
        message:
            "Whatever this year gave you — good, bad, weird — it's almost done. Get ready to say goodbye to it properly tonight."
    },
    {
        date: "2027-01-01",
        icon: "🎇",
        color: "#ffe08a",
        title: "New year, same us",
        message:
            "Happy New Year. Whatever this year holds, I hope it's kind to you. And whatever it isn't, I hope I'm still around for it."
    },
    {
        date: "2027-01-14",
        icon: "🪁",
        color: "#9fd8ff",
        title: "Kite season",
        message:
            "May your kites fly higher than everyone else's on the terrace, and may absolutely no one cut your string today. Happy Uttarayan!"
    },
    {
        date: "2027-01-26",
        icon: "🇮🇳",
        color: "#ff9a56",
        title: "Happy Republic Day",
        message:
            "Here's to the country that raised us, fed us way too much good food, and gave us a million reasons to complain and love it anyway. Happy Republic Day."
    },
    {
        date: "2027-02-14",
        icon: "💌",
        color: "#ff8fab",
        title: "Love comes in many forms",
        message:
            "Today's usually about romance, but honestly? This kind of love — the kind that shows up, remembers your birthday, and puts up with your nonsense for years — deserves a Valentine's Day too. Happy Valentine's, Sapna."
    },
    {
        date: "2027-02-17",
        icon: "🎈",
        color: "#7fe0c9",
        title: "Happy half(ish) birthday",
        message:
            "Not your real birthday, but somehow this date decided it deserved a celebration too. So: happy pseudo birthday. No cake required, but I wouldn't say no either."
    },
    {
        date: "2027-03-21",
        icon: "🔥",
        color: "#ff7a45",
        title: "Burn it down",
        message:
            "Tonight's for burning away whatever this year left you carrying — old stress, old versions of you that didn't work out. Let it go, literally."
    },
    {
        date: "2027-03-22",
        icon: "🎨",
        color: "#ff8fd1",
        title: "Happy Holi",
        message:
            "May today be loud, colorful, and slightly chaotic in the best way. Go get covered in colors you'll still find in your ears three days later."
    },
    {
        date: "2027-05-23",
        icon: "📚",
        color: "#9fd8ff",
        title: "Today's the day",
        message:
            "All those months of prep come down to today. However it goes, I already know how hard you worked for this. Go in steady. I'm rooting for you."
    },
    {
        date: "2027-06-01",
        icon: "🌱",
        color: "#8fdba0",
        title: "Somewhere around now",
        message:
            "We don't know the exact day anymore, but sometime around now, a year ago, you went from \"someone I know\" to \"someone I can't imagine not knowing.\" Close enough counts. Happy friend-iversary, roughly."
    },
    {
        date: "2027-08-01",
        icon: "💛",
        color: "#ffd28a",
        title: "The whole point of this website",
        message:
            "Every single day of this entire project has secretly been about this one. Happy Friendship Day, Sapna. Thank you for being the reason any of this existed."
    },
    {
        date: "2027-08-15",
        icon: "🇮🇳",
        color: "#ff9a56",
        title: "Happy Independence Day",
        message:
            "Freedom looks different for everyone. For us, maybe it's just the freedom to be exactly as weird as we actually are around each other."
    },
    {
        date: "2027-08-17",
        icon: "🧵",
        color: "#ff8f70",
        title: "Not blood, still family",
        message:
            "No thread today, no ceremony — but if there were, you'd absolutely be getting one. Some bonds don't need a blood relation to count. Happy Rakshabandhan."
    },
    {
        date: "2027-09-17",
        icon: "🎂",
        color: "#ffd28a",
        title: "One year, exactly.",
        message:
            "A year ago today, this whole thing began. Now it ends the same way it started — with your birthday, and with me still incredibly glad you exist. Happy birthday, Sapna. This was always for you."
    }
];

function getTodayDateString() {

    const now = new Date();

    const year = now.getFullYear();

    const month =
        String(now.getMonth() + 1).padStart(2, "0");

    const day =
        String(now.getDate()).padStart(2, "0");

    return year + "-" + month + "-" + day;

}

function showSpecialDayPopup(data, shownFlagKey) {

    specialDayIcon.textContent = data.icon;
    specialDayTitle.textContent = data.title;
    specialDayMessage.textContent = data.message;

    specialDayModal.style.setProperty(
        "--special-glow-color",
        data.color
    );

    specialDayModal.classList.add("active");

    try {

        localStorage.setItem(shownFlagKey, "true");

    } catch (error) {

        // If localStorage isn't available for some
        // reason, the popup can still show — it just
        // might repeat on a refresh. Not worth blocking
        // the popup itself over.

    }

}

function checkForSpecialDay() {

    let hasVisitedBefore = null;

    try {

        hasVisitedBefore =
            localStorage.getItem("hasVisitedSite");

    } catch (error) {

        hasVisitedBefore = "true";

    }

    if (!hasVisitedBefore) {

        showSpecialDayPopup(
            FIRST_VISIT_POPUP,
            "hasVisitedSite"
        );

        return;

    }

    const todayString = getTodayDateString();

    const shownFlagKey =
        "specialDayShown_" + todayString;

    let alreadyShownToday = null;

    try {

        alreadyShownToday =
            localStorage.getItem(shownFlagKey);

    } catch (error) {

        alreadyShownToday = null;

    }

    if (alreadyShownToday) {
        return;
    }

    const todaysSpecialDay =
        SPECIAL_DAY_POPUPS.find(function (entry) {

            return entry.date === todayString;

        });

    if (todaysSpecialDay) {

        showSpecialDayPopup(
            todaysSpecialDay,
            shownFlagKey
        );

    }

}

closeSpecialDay.addEventListener(
    "click",
    function () {

        specialDayModal.classList.remove("active");

    }
);

checkForSpecialDay();

// =========================
// OPEN WHEN ELEMENTS
// =========================

const letterModal = document.getElementById("letterModal");
const closeLetter = document.getElementById("closeLetter");
const letterTitle = document.getElementById("letterTitle");
const letterMessage = document.getElementById("letterMessage");

// =========================
// DAILY MEMORY ELEMENTS
// =========================

const dailyResponse = document.getElementById("dailyResponse");
const dailyPhoto = document.getElementById("dailyPhoto");
const photoName = document.getElementById("photoName");
const dailyPhotoPreview =
    document.getElementById("dailyPhotoPreview");
const removePhoto =
    document.getElementById("removePhoto");

const dailyPhoto2 = document.getElementById("dailyPhoto2");
const photoName2 = document.getElementById("photoName2");
const dailyPhotoPreview2 =
    document.getElementById("dailyPhotoPreview2");
const removePhoto2 =
    document.getElementById("removePhoto2");

const dailyPhoto3 = document.getElementById("dailyPhoto3");
const photoName3 = document.getElementById("photoName3");
const dailyPhotoPreview3 =
    document.getElementById("dailyPhotoPreview3");
const removePhoto3 =
    document.getElementById("removePhoto3");

const saveMemory =
    document.getElementById("saveMemory");
const memorySaved =
    document.getElementById("memorySaved");
const memoryMuseum =
    document.getElementById("memoryMuseum");

// =========================
// SOUNDTRACK ELEMENTS
// =========================

const addSongButton =
    document.getElementById("addSongButton");

const songModal =
    document.getElementById("songModal");

const closeSongModal =
    document.getElementById("closeSongModal");

const songTitle =
    document.getElementById("songTitle");

const songArtist =
    document.getElementById("songArtist");

const songLink =
    document.getElementById("songLink");

const songReason =
    document.getElementById("songReason");

const saveSong =
    document.getElementById("saveSong");

const soundtrackList =
    document.getElementById("soundtrackList");

// =========================
// BUCKET LIST ELEMENTS
// =========================

const addBucketItem =
    document.getElementById("addBucketItem");

const bucketModal =
    document.getElementById("bucketModal");

const closeBucketModal =
    document.getElementById("closeBucketModal");

const bucketItemInput =
    document.getElementById("bucketItemInput");

const saveBucketItem =
    document.getElementById("saveBucketItem");

const bucketList =
    document.getElementById("bucketList");

const previousDay =
    document.getElementById("previousDay");

const nextDay =
    document.getElementById("nextDay");

const navigationDay =
    document.getElementById("navigationDay");

let currentPage = "landing";



let mediaRecorder = null;
let audioChunks = [];
let recordedVoiceBlob = null;
let recordingTimerInterval = null;
let recordingSeconds = 0;

// Which photo/voice slot (1, 2, or 3) is next in line.
// Recording only ever happens into one slot at a time,
// since a device only has one microphone stream.
let activeVoiceSlot = null;

const recordVoice =
    document.getElementById("recordVoice");

const stopVoice =
    document.getElementById("stopVoice");

const recordingStatus =
    document.getElementById("recordingStatus");

const recordingTimer =
    document.getElementById("recordingTimer");

const voicePreview =
    document.getElementById("voicePreview");

const removeVoice =
    document.getElementById("removeVoice");

let recordedVoiceBlob2 = null;

const voicePreview2 =
    document.getElementById("voicePreview2");

const removeVoice2 =
    document.getElementById("removeVoice2");

let recordedVoiceBlob3 = null;

const voicePreview3 =
    document.getElementById("voicePreview3");

const removeVoice3 =
    document.getElementById("removeVoice3");

// =========================
// ADD PHOTO / RECORD VOICE
// TRIGGER BUTTONS
// =========================

const addPhotoButton =
    document.getElementById("addPhotoButton");

const photoLimitMessage =
    document.getElementById("photoLimitMessage");

const voiceLimitMessage =
    document.getElementById("voiceLimitMessage");



// =========================
// ENTER SECRET HOME
// =========================

enterButton.addEventListener("click", function () {

    secretHome.classList.add("active");

    document
        .querySelector(".landing-page")
        .classList.add("hidden");

    currentPage = "home";

    history.pushState(
        { page: "home" },
        "",
        "#home"
    );

});

// =========================
// OPEN 365 DAYS
// =========================

daysButton.addEventListener("click", function () {

    daysPage.classList.add("active");

    createDays();

});

// =========================
// BACK TO HOME
// =========================

backButton.addEventListener("click", function () {

    daysPage.classList.remove("active");

});

// =========================
// CREATE CALENDAR
// =========================

function createDays() {

    monthsContainer.innerHTML = "";

    const unlockedDays =
        getUnlockedDays();

    const months = [

        "September 2026",
        "October 2026",
        "November 2026",
        "December 2026",
        "January 2027",
        "February 2027",
        "March 2027",
        "April 2027",
        "May 2027",
        "June 2027",
        "July 2027",
        "August 2027",
        "September 2027"

    ];

    const monthDescriptions = [

        "Where your little year begins ✨",
        "More memories waiting to happen 🍂",
        "A few more reasons to smile ☕",
        "A little warmth in the middle of winter ❄️",
        "A fresh little chapter 🌱",
        "Short month, big feelings 💌",
        "Springing into more memories 🌸",
        "More days, more stories 🌷",
        "Another month of you ✨",
        "Summer days & silly moments ☀️",
        "We're getting closer... 🫶",
        "One beautiful year, almost complete 💚",
        "Until we meet again on another birthday 🎂"

    ];

    let dayNumber = 1;

    months.forEach(function (month, monthIndex) {

        const monthSection =
            document.createElement("div");

        monthSection.classList.add(
            "month-section"
        );

        const monthTitle =
            document.createElement("h2");

        monthTitle.textContent =
            month;

        const monthDescription =
            document.createElement("p");

        monthDescription.textContent =
            monthDescriptions[monthIndex];

        const monthGrid =
            document.createElement("div");

        monthGrid.classList.add(
            "month-grid"
        );

        for (
            let day = 1;
            day <= daysInMonth(monthIndex);
            day++
        ) {

            const currentDayNumber =
                dayNumber;

            const dayBox =
                document.createElement("div");

            dayBox.classList.add("day");

            const number =
                document.createElement("div");

            number.classList.add(
                "day-number"
            );

            // Actual calendar date
            if (monthIndex === 0) {

                number.textContent =
                    day + 16;

            } else {

                number.textContent =
                    day;

            }

            const dayLabel =
                document.createElement("small");

            dayLabel.textContent =
                "DAY " + currentDayNumber;

            const icon =
                document.createElement("div");

            icon.classList.add(
                "day-icon"
            );

            // =========================
            // UNLOCKED DAY
            // =========================

            if (
                currentDayNumber <=
                unlockedDays
            ) {

                dayBox.classList.add(
                    "unlocked"
                );

                const surprise =
                    surprises[currentDayNumber];

                if (surprise) {

                    if (
                        surprise.type === "text"
                    ) {

                        icon.textContent = "💌";

                    }
                    else if (
                        surprise.type === "question"
                    ) {

                        icon.textContent = "💭";

                    }
                    else if (
                        surprise.type === "challenge"
                    ) {

                        icon.textContent = "🎯";

                    }
                    else if (
                        surprise.type === "photo"
                    ) {

                        icon.textContent = "📸";

                    }
                    else if (
                        surprise.type === "song"
                    ) {

                        icon.textContent = "🎵";

                    }
                    else {

                        icon.textContent = "✨";

                    }

                } else {

                    icon.textContent = "✨";

                }

                dayBox.addEventListener(
                    "click",
                    function () {

                        openSurprise(
                            currentDayNumber
                        );

                    }
                );

            }

            // =========================
            // LOCKED DAY
            // =========================

            else {

                dayBox.classList.add(
                    "locked"
                );

                icon.textContent = "🔒";

            }

            dayBox.appendChild(number);
            dayBox.appendChild(dayLabel);
            dayBox.appendChild(icon);

            monthGrid.appendChild(dayBox);

            dayNumber++;

        }

        monthSection.appendChild(
            monthTitle
        );

        monthSection.appendChild(
            monthDescription
        );

        monthSection.appendChild(
            monthGrid
        );

        monthsContainer.appendChild(
            monthSection
        );

    });

    // =========================
    // UPDATE PROGRESS
    // =========================

    unlockedCount.textContent =
        unlockedDays;

    calendarCount.textContent =
        unlockedDays;

    const percentage =
        (unlockedDays / 365) * 100;

    progressFill.style.width =
        percentage + "%";

}

// =========================
// DAYS IN EACH MONTH
// =========================

function daysInMonth(monthIndex) {

    const days = [

        14, // September 2026: 17–30
        31, // October
        30, // November
        31, // December
        31, // January
        28, // February
        31, // March
        30, // April
        31, // May
        30, // June
        31, // July
        31, // August
        16  // September 2027: 1–16

    ];

    return days[monthIndex];

}

// =========================
// CALCULATE UNLOCKED DAYS
// =========================

function getUnlockedDays() {

    const startDate =
        new Date("2026-09-17");

    const today =
        new Date();

    const differenceInTime =
        today - startDate;

    const differenceInDays =
        Math.floor(
            differenceInTime /
            (1000 * 60 * 60 * 24)
        );

    return Math.min(
        Math.max(
            differenceInDays + 1,
            1
        ),
        365
    );

}

// =========================
// OPEN SURPRISE
// =========================

// =========================
// OPEN SURPRISE
// =========================

function openSurprise(dayNumber) {

    // Wait until IndexedDB is ready before opening the surprise.
    // This prevents memoryDB.transaction() from running too early.
    if (!memoryDB) {
        console.log("Waiting for memory database...");
        setTimeout(function () {
            openSurprise(dayNumber);
        }, 50);
        return;
    }

    console.log(
        "Opening Day:",
        dayNumber
    );

    surpriseDay.textContent =
        dayNumber;

    updateDayNavigation(
        dayNumber
    );


    // =========================
    // RESET MEMORY EDIT STATE
    // =========================

    existingMemoryPhoto = null;
    existingMemoryPhotoName = "";
    existingVoiceNote = null;

    existingMemoryPhoto2 = null;
    existingMemoryPhotoName2 = "";
    existingVoiceNote2 = null;

    existingMemoryPhoto3 = null;
    existingMemoryPhotoName3 = "";
    existingVoiceNote3 = null;

    photoRemoved = false;
    voiceRemoved = false;

    photoRemoved2 = false;
    voiceRemoved2 = false;

    photoRemoved3 = false;
    voiceRemoved3 = false;

    recordedVoiceBlob = null;
    recordedVoiceBlob2 = null;
    recordedVoiceBlob3 = null;

    // Opening a day (whether blank or with a
    // saved memory) always starts out "clean".

    isMemoryDirty = false;


    // =========================
    // RESET TEXT
    // =========================

    dailyResponse.value = "";


    // =========================
    // RESET PHOTO UI
    // =========================

    dailyPhoto.value = "";

    photoName.textContent = "";

    dailyPhotoPreview.src = "";

    dailyPhotoPreview.classList.remove(
        "show"
    );

    removePhoto.classList.remove(
        "show"
    );

    dailyPhoto2.value = "";

    photoName2.textContent = "";

    dailyPhotoPreview2.src = "";

    dailyPhotoPreview2.classList.remove(
        "show"
    );

    removePhoto2.classList.remove(
        "show"
    );

    dailyPhoto3.value = "";

    photoName3.textContent = "";

    dailyPhotoPreview3.src = "";

    dailyPhotoPreview3.classList.remove(
        "show"
    );

    removePhoto3.classList.remove(
        "show"
    );


    // =========================
    // RESET VOICE UI
    // =========================

    voicePreview.pause();

    voicePreview.removeAttribute(
        "src"
    );

    voicePreview.load();

    voicePreview.hidden = true;

    removeVoice.hidden = true;

    voicePreview2.pause();

    voicePreview2.removeAttribute(
        "src"
    );

    voicePreview2.load();

    voicePreview2.hidden = true;

    removeVoice2.hidden = true;

    voicePreview3.pause();

    voicePreview3.removeAttribute(
        "src"
    );

    voicePreview3.load();

    voicePreview3.hidden = true;

    removeVoice3.hidden = true;

    // Shared recording controls (only one
    // recording can be in progress at a time).

    recordVoice.hidden = false;

    stopVoice.hidden = true;

    recordingStatus.hidden = true;

    voiceLimitMessage.classList.remove(
        "show"
    );

    photoLimitMessage.classList.remove(
        "show"
    );

    clearInterval(
        recordingTimerInterval
    );

    recordingSeconds = 0;

    recordingTimer.textContent =
        "00:00";

    activeVoiceSlot = null;


    // IMPORTANT:
    // Opening a saved memory should NOT
    // display "Memory saved".

    memorySaved.classList.remove(
        "show"
    );


    // =========================
    // LOAD SAVED MEMORY
    // =========================

    const transaction =
        memoryDB.transaction(
            ["memories"],
            "readonly"
        );

    const store =
        transaction.objectStore(
            "memories"
        );

    const request =
        store.get(
            dayNumber
        );


    request.onsuccess =
        function () {

            const memory =
                request.result;


            if (!memory) {
                return;
            }


            // =========================
            // LOAD TEXT
            // =========================

            dailyResponse.value =
                memory.text || "";


            // =========================
            // LOAD PHOTO
            // =========================

            if (memory.photo) {

                existingMemoryPhoto =
                    memory.photo;

                existingMemoryPhotoName =
                    memory.photoName || "";


                const photoURL =
                    URL.createObjectURL(
                        memory.photo
                    );

                dailyPhotoPreview.src =
                    photoURL;

                dailyPhotoPreview.classList.add(
                    "show"
                );

                removePhoto.classList.add(
                    "show"
                );


                if (
                    memory.photoName
                ) {

                    photoName.textContent =
                        "📎 " +
                        memory.photoName;

                }

            }

            if (memory.photo2) {

                existingMemoryPhoto2 =
                    memory.photo2;

                existingMemoryPhotoName2 =
                    memory.photoName2 || "";


                const photoURL2 =
                    URL.createObjectURL(
                        memory.photo2
                    );

                dailyPhotoPreview2.src =
                    photoURL2;

                dailyPhotoPreview2.classList.add(
                    "show"
                );

                removePhoto2.classList.add(
                    "show"
                );


                if (
                    memory.photoName2
                ) {

                    photoName2.textContent =
                        "📎 " +
                        memory.photoName2;

                }

            }

            if (memory.photo3) {

                existingMemoryPhoto3 =
                    memory.photo3;

                existingMemoryPhotoName3 =
                    memory.photoName3 || "";


                const photoURL3 =
                    URL.createObjectURL(
                        memory.photo3
                    );

                dailyPhotoPreview3.src =
                    photoURL3;

                dailyPhotoPreview3.classList.add(
                    "show"
                );

                removePhoto3.classList.add(
                    "show"
                );


                if (
                    memory.photoName3
                ) {

                    photoName3.textContent =
                        "📎 " +
                        memory.photoName3;

                }

            }


            // =========================
            // LOAD VOICE NOTE
            // =========================

            if (memory.voiceNote) {

                existingVoiceNote =
                    memory.voiceNote;


                const voiceURL =
                    URL.createObjectURL(
                        memory.voiceNote
                    );

                voicePreview.src =
                    voiceURL;

                voicePreview.hidden =
                    false;

                removeVoice.hidden =
                    false;


                console.log(
                    "Saved voice note loaded for Day " +
                    dayNumber
                );

            }

            if (memory.voiceNote2) {

                existingVoiceNote2 =
                    memory.voiceNote2;

                const voiceURL2 =
                    URL.createObjectURL(
                        memory.voiceNote2
                    );

                voicePreview2.src =
                    voiceURL2;

                voicePreview2.hidden =
                    false;

                removeVoice2.hidden =
                    false;

            }

            if (memory.voiceNote3) {

                existingVoiceNote3 =
                    memory.voiceNote3;

                const voiceURL3 =
                    URL.createObjectURL(
                        memory.voiceNote3
                    );

                voicePreview3.src =
                    voiceURL3;

                voicePreview3.hidden =
                    false;

                removeVoice3.hidden =
                    false;

            }

        };


    // =========================
    // LOAD SURPRISE
    // =========================

    const surprise =
        surprises[dayNumber];


    if (!surprise) {

        surpriseTitle.textContent =
            "Something is coming...";

        surpriseMessage.textContent =
            "This day hasn't been filled yet. ✨";

        surpriseSignature.textContent =
            "— come back soon";

    } else {

        surpriseTitle.textContent =
            surprise.title;

        surpriseMessage.textContent =
            surprise.message;

        surpriseSignature.textContent =
            surprise.signature ||
            "— from someone who is very glad you're here";

    }


    // =========================
    // SHOW MODAL
    // =========================

    surpriseModal.classList.add(
        "active"
    );

}

// =========================
// CLOSE SURPRISE
// =========================

function attemptCloseSurprise() {

    // If the daily card has unsaved changes,
    // ask before actually closing it.

    if (isMemoryDirty) {

        unsavedChangesModal.classList.add(
            "active"
        );

        return;

    }

    surpriseModal.classList.remove(
        "active"
    );

}

closeSurprise.addEventListener(
    "click",
    function () {

        attemptCloseSurprise();

    }
);

// =========================
// CLOSE SURPRISE OUTSIDE
// =========================

surpriseModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            surpriseModal
        ) {

            attemptCloseSurprise();

        }

    }
);

// =========================
// UNSAVED CHANGES: KEEP EDITING
// =========================

keepEditingButton.addEventListener(
    "click",
    function () {

        unsavedChangesModal.classList.remove(
            "active"
        );

    }
);

// =========================
// UNSAVED CHANGES: LEAVE WITHOUT SAVING
// =========================

leaveWithoutSavingButton.addEventListener(
    "click",
    function () {

        // Discard the in-progress edits. The next
        // time this day is opened, openSurprise()
        // reloads it fresh from the database, so
        // nothing further needs to be reset here.

        isMemoryDirty = false;

        unsavedChangesModal.classList.remove(
            "active"
        );

        surpriseModal.classList.remove(
            "active"
        );

    }
);

// =========================
// TODAY'S SURPRISE
// =========================

function setupTodaySurprise() {

    const unlockedDays =
        getUnlockedDays();

    const surprise =
        surprises[unlockedDays];

    todayDay.textContent =
        unlockedDays;

    if (surprise) {

        todayTitle.textContent =
            surprise.title;

        todayDescription.textContent =
            "A little surprise chosen especially for today. 💌";

    } else {

        todayTitle.textContent =
            "Something is waiting for you...";

        todayDescription.textContent =
            "Your surprise for today is still a secret. ✨";

    }

    todayButton.addEventListener(
        "click",
        function () {

            openSurprise(
                unlockedDays
            );

        }
    );

}

setupTodaySurprise();

// =========================
// OPEN WHEN LETTERS
// =========================

const letterCards =
    document.querySelectorAll(
        ".letter-card"
    );

letterCards.forEach(
    function (card) {

        card.addEventListener(
            "click",
            function () {

                const letterType =
                    card.dataset.letter;

                const letter =
                    letters[letterType];

                if (!letter) {
                    return;
                }

                letterTitle.textContent =
                    letter.title;

                letterMessage.textContent =
                    letter.message;

                letterModal.classList.add(
                    "active"
                );

            }
        );

    }
);

// =========================
// CLOSE LETTER
// =========================

closeLetter.addEventListener(
    "click",
    function () {

        letterModal.classList.remove(
            "active"
        );

    }
);

letterModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            letterModal
        ) {

            letterModal.classList.remove(
                "active"
            );

        }

    }
);

// =========================
// ADD PHOTO BUTTON
// =========================

addPhotoButton.addEventListener(
    "click",
    function () {

        const photoPreviews =
            [dailyPhotoPreview, dailyPhotoPreview2, dailyPhotoPreview3];

        const photoInputs =
            [dailyPhoto, dailyPhoto2, dailyPhoto3];

        const nextSlotIndex =
            photoPreviews.findIndex(
                function (preview) {
                    return !preview.classList.contains("show");
                }
            );

        if (nextSlotIndex === -1) {

            photoLimitMessage.classList.add(
                "show"
            );

            setTimeout(
                function () {

                    photoLimitMessage.classList.remove(
                        "show"
                    );

                },
                2500
            );

            return;

        }

        photoInputs[nextSlotIndex].click();

    }
);

// =========================
// DAILY MEMORY PHOTO INPUT
// =========================

dailyPhoto.addEventListener(
    "change",
    function () {

        if (
            dailyPhoto.files.length > 0
        ) {

            const file =
                dailyPhoto.files[0];

            // A new photo has been selected,
            // so it should replace the old photo.
            photoRemoved = false;

            isMemoryDirty = true;

            photoName.textContent =
                "📎 " +
                file.name;


            const reader =
                new FileReader();


            reader.onload =
                function (event) {

                    dailyPhotoPreview.src =
                        event.target.result;

                    dailyPhotoPreview.classList.add(
                        "show"
                    );

                    removePhoto.classList.add(
                        "show"
                    );

                };


            reader.readAsDataURL(
                file
            );

        }

    }
);

dailyPhoto2.addEventListener(
    "change",
    function () {

        if (
            dailyPhoto2.files.length > 0
        ) {

            const file =
                dailyPhoto2.files[0];

            photoRemoved2 = false;

            isMemoryDirty = true;

            photoName2.textContent =
                "📎 " +
                file.name;


            const reader =
                new FileReader();


            reader.onload =
                function (event) {

                    dailyPhotoPreview2.src =
                        event.target.result;

                    dailyPhotoPreview2.classList.add(
                        "show"
                    );

                    removePhoto2.classList.add(
                        "show"
                    );

                };


            reader.readAsDataURL(
                file
            );

        }

    }
);

dailyPhoto3.addEventListener(
    "change",
    function () {

        if (
            dailyPhoto3.files.length > 0
        ) {

            const file =
                dailyPhoto3.files[0];

            photoRemoved3 = false;

            isMemoryDirty = true;

            photoName3.textContent =
                "📎 " +
                file.name;


            const reader =
                new FileReader();


            reader.onload =
                function (event) {

                    dailyPhotoPreview3.src =
                        event.target.result;

                    dailyPhotoPreview3.classList.add(
                        "show"
                    );

                    removePhoto3.classList.add(
                        "show"
                    );

                };


            reader.readAsDataURL(
                file
            );

        }

    }
);

// =========================
// TRACK TEXT EDITS
// =========================

dailyResponse.addEventListener(
    "input",
    function () {

        isMemoryDirty = true;

    }
);

// =========================
// INDEXEDDB MEMORY SYSTEM
// =========================

let memoryDB;

// =========================
// MEMORY EDIT STATE
// =========================

let existingMemoryPhoto = null;
let existingMemoryPhotoName = "";

let existingVoiceNote = null;

let photoRemoved = false;
let voiceRemoved = false;

let existingMemoryPhoto2 = null;
let existingMemoryPhotoName2 = "";

let existingVoiceNote2 = null;

let photoRemoved2 = false;
let voiceRemoved2 = false;

let existingMemoryPhoto3 = null;
let existingMemoryPhotoName3 = "";

let existingVoiceNote3 = null;

let photoRemoved3 = false;
let voiceRemoved3 = false;

// Tracks whether the currently open daily
// card has unsaved changes (text, photos,
// or voice notes added/removed since it
// was opened or last saved).

let isMemoryDirty = false;

// let recordedVoiceBlob = null;

const dbRequest =
    indexedDB.open(
        "365DaysOfUsDB",
        10
    );

dbRequest.onupgradeneeded =
    function (event) {

        const db =
            event.target.result;

        if (
            !db.objectStoreNames.contains(
                "memories"
            )
        ) {

            db.createObjectStore(
                "memories",
                {
                    keyPath: "day"
                }
            );

        }

        if (
            !db.objectStoreNames.contains(
                "songs"
            )
        ) {

            db.createObjectStore(
                "songs",
                {
                    keyPath: "id",
                    autoIncrement: true
                }
            );

        }

        if (
            !db.objectStoreNames.contains(
                "bucketList"
            )
        ) {

            db.createObjectStore(
                "bucketList",
                {
                    keyPath: "id",
                    autoIncrement: true
                }
            );

        }

        if (
            !db.objectStoreNames.contains(
                "autoBackup"
            )
        ) {

            db.createObjectStore(
                "autoBackup",
                {
                    keyPath: "id"
                }
            );

        }

    };

dbRequest.onsuccess =
    function (event) {

        memoryDB =
            event.target.result;

        console.log(
            "Memory database ready ❤️"
        );

        loadMemoryMuseum();
        loadSoundtrack();
        seedInitialBucketList();
        loadBucketList();
        updateFinaleStats();
        updateYearStatistics();
        setupFinaleUnlock();

        // =========================
        // AUTOMATIC BACKUP
        // =========================

        createAutomaticBackup();

        setInterval(
            function () {
                createAutomaticBackup();
            },
            5 * 60 * 1000
        );

    };

dbRequest.onerror =
    function (event) {

        console.error(
            "Could not open memory database.",
            event.target.error
        );

    };

dbRequest.onblocked =
    function () {

        console.error(
            "Memory database opening is blocked."
        );

    };

// =========================
// INITIAL BUCKET LIST ITEMS
// =========================

function seedInitialBucketList() {

    if (!memoryDB) {
        return;
    }

    const transaction =
        memoryDB.transaction(
            ["bucketList"],
            "readwrite"
        );

    const store =
        transaction.objectStore(
            "bucketList"
        );

    const request =
        store.count();

    request.onsuccess =
        function () {

            // Only add the starter list
            // if the bucket list is completely empty.

            if (request.result > 0) {
                return;
            }

            const initialItems = [

                {
                    text:
                        "🏃‍♀️ Run a marathon",
                    completed:
                        false,
                    addedAt:
                        new Date().toISOString()
                },

                {
                    text:
                        "🧘‍♀️ Go to Vipassana",
                    completed:
                        false,
                    addedAt:
                        new Date().toISOString()
                },

                {
                    text:
                        "🏛️ Visit LBSNAA for training",
                    completed:
                        false,
                    addedAt:
                        new Date().toISOString()
                },

                {
                    text:
                        "🦩 Spend a day at Thol",
                    completed:
                        false,
                    addedAt:
                        new Date().toISOString()
                },

                {
                    text:
                        "☕ Try tiramisu at 5 famous cafés in Ahmedabad",
                    completed:
                        false,
                    addedAt:
                        new Date().toISOString()
                }

            ];

            initialItems.forEach(
                function (item) {

                    store.add(item);

                }
            );

            transaction.oncomplete =
                function () {

                    console.log(
                        "Initial bucket list added 🪣❤️"
                    );

                };

        };

}

// =========================
// SAVE DAILY MEMORY
// =========================

saveMemory.addEventListener(
    "click",
    function () {

        const text =
            dailyResponse.value.trim();

        const currentDay =
            Number(
                surpriseDay.textContent
            );


        // =========================
        // CHECK EXISTING MEMORY
        // =========================

        const checkTransaction =
            memoryDB.transaction(
                ["memories"],
                "readonly"
            );

        const checkStore =
            checkTransaction.objectStore(
                "memories"
            );

        const checkRequest =
            checkStore.get(
                currentDay
            );


        checkRequest.onsuccess =
            function () {

                const existingMemory =
                    checkRequest.result;


                const hasNewPhoto =
                    dailyPhoto.files.length > 0;

                const hasNewPhoto2 =
                    dailyPhoto2.files.length > 0;

                const hasNewPhoto3 =
                    dailyPhoto3.files.length > 0;


                // =========================
                // DETERMINE FINAL PHOTO
                // =========================

                let finalPhoto = null;

                let finalPhotoName = "";


                if (hasNewPhoto) {

                    // New photo selected:
                    // replace the old photo.

                    finalPhoto =
                        dailyPhoto.files[0];

                    finalPhotoName =
                        dailyPhoto.files[0].name;

                } else if (
                    existingMemory &&
                    existingMemory.photo &&
                    !photoRemoved
                ) {

                    // No new photo and user did
                    // not remove the old one:
                    // keep the existing photo.

                    finalPhoto =
                        existingMemory.photo;

                    finalPhotoName =
                        existingMemory.photoName ||
                        "";

                }

                let finalPhoto2 = null;

                let finalPhotoName2 = "";


                if (hasNewPhoto2) {

                    finalPhoto2 =
                        dailyPhoto2.files[0];

                    finalPhotoName2 =
                        dailyPhoto2.files[0].name;

                } else if (
                    existingMemory &&
                    existingMemory.photo2 &&
                    !photoRemoved2
                ) {

                    finalPhoto2 =
                        existingMemory.photo2;

                    finalPhotoName2 =
                        existingMemory.photoName2 ||
                        "";

                }

                let finalPhoto3 = null;

                let finalPhotoName3 = "";


                if (hasNewPhoto3) {

                    finalPhoto3 =
                        dailyPhoto3.files[0];

                    finalPhotoName3 =
                        dailyPhoto3.files[0].name;

                } else if (
                    existingMemory &&
                    existingMemory.photo3 &&
                    !photoRemoved3
                ) {

                    finalPhoto3 =
                        existingMemory.photo3;

                    finalPhotoName3 =
                        existingMemory.photoName3 ||
                        "";

                }


                // =========================
                // DETERMINE FINAL VOICE NOTE
                // =========================

                let finalVoiceNote = null;


                if (recordedVoiceBlob) {

                    // New recording:
                    // replace the old voice note.

                    finalVoiceNote =
                        recordedVoiceBlob;

                } else if (
                    existingMemory &&
                    existingMemory.voiceNote &&
                    !voiceRemoved
                ) {

                    // No new recording and user did
                    // not remove the old one:
                    // keep the existing voice note.

                    finalVoiceNote =
                        existingMemory.voiceNote;

                }

                let finalVoiceNote2 = null;


                if (recordedVoiceBlob2) {

                    finalVoiceNote2 =
                        recordedVoiceBlob2;

                } else if (
                    existingMemory &&
                    existingMemory.voiceNote2 &&
                    !voiceRemoved2
                ) {

                    finalVoiceNote2 =
                        existingMemory.voiceNote2;

                }

                let finalVoiceNote3 = null;


                if (recordedVoiceBlob3) {

                    finalVoiceNote3 =
                        recordedVoiceBlob3;

                } else if (
                    existingMemory &&
                    existingMemory.voiceNote3 &&
                    !voiceRemoved3
                ) {

                    finalVoiceNote3 =
                        existingMemory.voiceNote3;

                }


                // =========================
                // CHECK IF MEMORY IS EMPTY
                // =========================

                if (
                    !existingMemory &&
                    !text &&
                    !finalPhoto &&
                    !finalPhoto2 &&
                    !finalPhoto3 &&
                    !finalVoiceNote &&
                    !finalVoiceNote2 &&
                    !finalVoiceNote3
                ) {

                    dailyResponse.focus();

                    return;
                }


                // =========================
                // SAVE MEMORY
                // =========================

                const transaction =
                    memoryDB.transaction(
                        ["memories"],
                        "readwrite"
                    );

                const store =
                    transaction.objectStore(
                        "memories"
                    );


                const memory = {

                    day:
                        currentDay,

                    // Empty text is intentional.
                    // This allows old text to be deleted.

                    text:
                        text,

                    photoName:
                        finalPhotoName,

                    photo:
                        finalPhoto,

                    photoName2:
                        finalPhotoName2,

                    photo2:
                        finalPhoto2,

                    photoName3:
                        finalPhotoName3,

                    photo3:
                        finalPhoto3,

                    voiceNote:
                        finalVoiceNote,

                    voiceNote2:
                        finalVoiceNote2,

                    voiceNote3:
                        finalVoiceNote3,

                    savedAt:
                        new Date()
                            .toISOString()
                };


                const request =
                    store.put(
                        memory
                    );


                request.onsuccess =
                    function () {

                        console.log(
                            "Memory successfully stored for Day " +
                            currentDay
                        );

                    };


                request.onerror =
                    function () {

                        console.error(
                            "Could not store memory:",
                            request.error
                        );

                    };


                // =========================
                // AFTER SAVE
                // =========================

                transaction.oncomplete =
                    function () {

                        // Update current editing state
                        // so the next save knows what
                        // currently exists.

                        existingMemoryPhoto =
                            finalPhoto;

                        existingMemoryPhotoName =
                            finalPhotoName;

                        existingVoiceNote =
                            finalVoiceNote;

                        existingMemoryPhoto2 =
                            finalPhoto2;

                        existingMemoryPhotoName2 =
                            finalPhotoName2;

                        existingVoiceNote2 =
                            finalVoiceNote2;

                        existingMemoryPhoto3 =
                            finalPhoto3;

                        existingMemoryPhotoName3 =
                            finalPhotoName3;

                        existingVoiceNote3 =
                            finalVoiceNote3;


                        // Reset deletion flags

                        photoRemoved =
                            false;

                        voiceRemoved =
                            false;

                        photoRemoved2 =
                            false;

                        voiceRemoved2 =
                            false;

                        photoRemoved3 =
                            false;

                        voiceRemoved3 =
                            false;


                        // New recording has now
                        // been saved.

                        recordedVoiceBlob =
                            null;

                        recordedVoiceBlob2 =
                            null;

                        recordedVoiceBlob3 =
                            null;


                        // Clear selected file input

                        dailyPhoto.value =
                            "";

                        dailyPhoto2.value =
                            "";

                        dailyPhoto3.value =
                            "";


                        // The memory now matches what is
                        // saved in the database, so there
                        // are no unsaved changes left.

                        isMemoryDirty =
                            false;


                        // =========================
                        // SAVE CONFIRMATION
                        // =========================

                        memorySaved.textContent =
                            existingMemory
                                ? "✓ Memory updated just now"
                                : "✓ Memory saved just now";


                        memorySaved.classList.add(
                            "show"
                        );


                        setTimeout(
                            function () {

                                memorySaved.classList.remove(
                                    "show"
                                );

                            },
                            2500
                        );


                        // =========================
                        // REFRESH MUSEUM + STATS
                        // =========================

                        loadMemoryMuseum();
                        updateYearStatistics();
                        updateFinaleStats();

                        createAutomaticBackup();

                    };

            };

    }
);

// =========================
// REMOVE PHOTO
// =========================

// removePhoto.addEventListener(
//     "click",
//     function () {

//         // Do NOT modify IndexedDB yet.
//         // Just mark the photo for deletion.
//         photoRemoved = true;

//         // Clear newly selected photo
//         dailyPhoto.value = "";

//         // Clear the preview
//         dailyPhotoPreview.src = "";

//         dailyPhotoPreview.classList.remove(
//             "show"
//         );

//         removePhoto.classList.remove(
//             "show"
//         );

//         photoName.textContent = "";

//         console.log(
//             "Photo marked for removal. Save memory to confirm."
//         );

//     }
// );

// =========================
// AUTOMATIC LOCAL BACKUP
// =========================

function createAutomaticBackup() {

    if (window.isRestoringBackup) {
        return;
    }

    if (!memoryDB) {
        return;
    }


    const transaction =
        memoryDB.transaction(
            [
                "memories",
                "songs",
                "bucketList",
                "autoBackup"
            ],
            "readwrite"
        );


    const memoriesStore =
        transaction.objectStore(
            "memories"
        );

    const songsStore =
        transaction.objectStore(
            "songs"
        );

    const bucketStore =
        transaction.objectStore(
            "bucketList"
        );

    const backupStore =
        transaction.objectStore(
            "autoBackup"
        );


    const memoriesRequest =
        memoriesStore.getAll();

    const songsRequest =
        songsStore.getAll();

    const bucketRequest =
        bucketStore.getAll();


    Promise.all([

        new Promise(function (resolve) {

            memoriesRequest.onsuccess =
                function () {

                    resolve(
                        memoriesRequest.result
                    );

                };

        }),

        new Promise(function (resolve) {

            songsRequest.onsuccess =
                function () {

                    resolve(
                        songsRequest.result
                    );

                };

        }),

        new Promise(function (resolve) {

            bucketRequest.onsuccess =
                function () {

                    resolve(
                        bucketRequest.result
                    );

                };

        })

    ]).then(
        function (results) {

            const backup = {

                id:
                    "latest",

                savedAt:
                    new Date().toISOString(),

                memories:
                    results[0],

                songs:
                    results[1],

                bucketList:
                    results[2]

            };


            backupStore.put(
                backup
            );


            transaction.oncomplete =
                function () {

                    console.log(
                        "Automatic local backup created.",
                        backup.savedAt
                    );

                };

        }
    ).catch(
        function (error) {

            console.error(
                "Automatic backup failed:",
                error
            );

        }
    );

}

// =========================
// SAFETY BACKUP BEFORE RESTORE
// =========================

function createSafetyBackupBeforeRestore(
    onComplete
) {

    if (!memoryDB) {
        return;
    }


    const transaction =
        memoryDB.transaction(
            [
                "memories",
                "songs",
                "bucketList",
                "autoBackup"
            ],
            "readwrite"
        );


    const memoriesStore =
        transaction.objectStore(
            "memories"
        );

    const songsStore =
        transaction.objectStore(
            "songs"
        );

    const bucketStore =
        transaction.objectStore(
            "bucketList"
        );

    const backupStore =
        transaction.objectStore(
            "autoBackup"
        );


    const memoriesRequest =
        memoriesStore.getAll();

    const songsRequest =
        songsStore.getAll();

    const bucketRequest =
        bucketStore.getAll();


    Promise.all([

        new Promise(function (resolve) {

            memoriesRequest.onsuccess =
                function () {

                    resolve(
                        memoriesRequest.result
                    );

                };

        }),

        new Promise(function (resolve) {

            songsRequest.onsuccess =
                function () {

                    resolve(
                        songsRequest.result
                    );

                };

        }),

        new Promise(function (resolve) {

            bucketRequest.onsuccess =
                function () {

                    resolve(
                        bucketRequest.result
                    );

                };

        })

    ]).then(
        function (results) {

            const safetyBackup = {

                id:
                    "beforeRestore",

                savedAt:
                    new Date().toISOString(),

                memories:
                    results[0],

                songs:
                    results[1],

                bucketList:
                    results[2]

            };


            backupStore.put(
                safetyBackup
            );


            transaction.oncomplete =
                function () {

                    console.log(
                        "Safety backup created before restore."
                    );


                    if (
                        typeof onComplete ===
                        "function"
                    ) {

                        onComplete();

                    }

                };

        }
    ).catch(
        function (error) {

            console.error(
                "Could not create safety backup:",
                error
            );

        }
    );

}

// =========================
// RESTORE AUTOMATIC BACKUP
// =========================

// =========================
// RESTORE AUTOMATIC BACKUP
// =========================

function restoreAutomaticBackup() {

    window.isRestoringBackup = true;

    if (!memoryDB) {
        window.isRestoringBackup = false;
        return;
    }

    // =========================
    // READ LATEST BACKUP
    // =========================

    const readTransaction =
    memoryDB.transaction(
        ["autoBackup"],
        "readonly"
    );

const backupStore =
    readTransaction.objectStore(
        "autoBackup"
    );

const request =
    backupStore.get("latest");


request.onsuccess =
    function () {

        const backup =
            request.result;


        if (!backup) {

            console.warn(
                "No automatic backup found."
            );

            backupStatus.textContent =
                "⚠️ No local backup was found.";

            backupStatus.classList.add(
                "show"
            );

            return;
        }


        // =========================
        // RESTORE TRANSACTION
        // =========================

        const restoreTransaction =
            memoryDB.transaction(
                [
                    "memories",
                    "songs",
                    "bucketList"
                ],
                "readwrite"
            );


        const memoriesStore =
            restoreTransaction.objectStore(
                "memories"
            );

        const songsStore =
            restoreTransaction.objectStore(
                "songs"
            );

        const bucketStore =
            restoreTransaction.objectStore(
                "bucketList"
            );


        // =========================
        // CLEAR CURRENT DATA
        // =========================

        memoriesStore.clear();
        songsStore.clear();
        bucketStore.clear();


        // =========================
        // RESTORE MEMORIES
        // =========================

        backup.memories.forEach(
            function (memory) {

                memoriesStore.put(
                    memory
                );

            }
        );


        // =========================
        // RESTORE SONGS
        // =========================

        backup.songs.forEach(
            function (song) {

                songsStore.put(
                    song
                );

            }
        );


        // =========================
        // RESTORE BUCKET LIST
        // =========================

        backup.bucketList.forEach(
            function (item) {

                bucketStore.put(
                    item
                );

            }
        );


        // =========================
        // RESTORE COMPLETE
        // =========================

        restoreTransaction.oncomplete =
            function () {

                console.log(
                    "Automatic backup restored successfully."
                );


                backupStatus.textContent =
                    "✓ Our local backup has been restored successfully. ❤️";

                backupStatus.classList.add(
                    "show"
                );


                loadMemoryMuseum();
                loadSoundtrack();
                loadBucketList();

                updateYearStatistics();
                updateFinaleStats();

                window.isRestoringBackup = false;
            };


        restoreTransaction.onerror =
            function () {

                window.isRestoringBackup = false;

                console.error(
                    "Could not restore automatic backup:",
                    restoreTransaction.error
                );


                backupStatus.textContent =
                    "⚠️ Something went wrong while restoring the backup.";

                backupStatus.classList.add(
                    "show"
                );

            };

    };


request.onerror =
    function () {

        console.error(
            "Could not read automatic backup:",
            request.error
        );

    };

}

// =========================
// MEMORY MUSEUM
// =========================

function loadMemoryMuseum() {

    if (!memoryDB) {
        return;
    }

    const transaction =
        memoryDB.transaction(
            ["memories"],
            "readonly"
        );

    const store =
        transaction.objectStore(
            "memories"
        );

    const request =
        store.getAll();

    request.onsuccess =
        function () {

            const memories =
                request.result;

            renderMemoryMuseum(
                memories
            );

        };

}

// =========================
// RENDER MEMORY MUSEUM
// =========================

function renderMemoryMuseum(memories) {

    memoryMuseum.innerHTML =
        "";

    if (
        memories.length === 0
    ) {

        memoryMuseum.innerHTML = `

            <div class="empty-museum">

                <div class="empty-museum-icon">
                    🏛️
                </div>

                <h3>
                    Nothing here yet...
                </h3>

                <p>
                    Your little memories will slowly
                    find their way here.
                </p>

            </div>

        `;

        return;

    }

    memories.sort(
        function (a, b) {

            return b.day - a.day;

        }
    );

    memories.forEach(
        function (memory) {

            const memoryCard =
                document.createElement(
                    "div"
                );

            memoryCard.classList.add(
                "museum-card"
            );

            // =========================
            // DAY
            // =========================

            const dayTitle =
                document.createElement(
                    "p"
                );

            dayTitle.classList.add(
                "museum-day"
            );

            dayTitle.textContent =
                "DAY " + memory.day;

            memoryCard.appendChild(
                dayTitle
            );

            // =========================
            // CALENDAR DATE
            // =========================

            const memoryDate =
                document.createElement(
                    "p"
                );

            memoryDate.classList.add(
                "museum-calendar-date"
            );

            const startDate =
                new Date("2026-09-17");

            const actualDate =
                new Date(startDate);

            actualDate.setDate(
                startDate.getDate() +
                memory.day -
                1
            );

            memoryDate.textContent =
                actualDate.toLocaleDateString(
                    "en-IN",
                    {
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                    }
                );

            memoryCard.appendChild(
                memoryDate
            );

            // =========================
            // MEMORY TEXT
            // =========================

            if (memory.text) {

                const memoryText =
                    document.createElement(
                        "p"
                    );

                memoryText.classList.add(
                    "museum-text"
                );

                memoryText.textContent =
                    memory.text;

                memoryCard.appendChild(
                    memoryText
                );

            }

            // =========================
            // PHOTOS
            // =========================

            [
                memory.photo,
                memory.photo2,
                memory.photo3
            ].forEach(
                function (photoBlob, index) {

                    if (!photoBlob) {
                        return;
                    }

                    const image =
                        document.createElement(
                            "img"
                        );

                    image.classList.add(
                        "museum-photo"
                    );

                    image.alt =
                        "Memory from Day " +
                        memory.day +
                        (
                            index > 0
                                ? " (" + (index + 1) + ")"
                                : ""
                        );

                    image.src =
                        URL.createObjectURL(
                            photoBlob
                        );

                    memoryCard.appendChild(
                        image
                    );

                }
            );

            memoryMuseum.appendChild(
                memoryCard
            );

        }
    );

}

// =========================
// SOUNDTRACK MODAL
// =========================

addSongButton.addEventListener(
    "click",
    function () {

        songModal.classList.add(
            "active"
        );

    }
);

closeSongModal.addEventListener(
    "click",
    function () {

        songModal.classList.remove(
            "active"
        );

    }
);

songModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            songModal
        ) {

            songModal.classList.remove(
                "active"
            );

        }

    }
);

// =========================
// SAVE SONG
// =========================

saveSong.addEventListener(
    "click",
    function () {

        const title =
            songTitle.value.trim();

        const artist =
            songArtist.value.trim();

        const link =
            songLink.value.trim();

        const reason =
            songReason.value.trim();

        const editingId =
            saveSong.dataset.editingId;

        if (
            !title ||
            !artist
        ) {

            songTitle.focus();

            return;

        }

        const transaction =
            memoryDB.transaction(
                ["songs"],
                "readwrite"
            );

        const store =
            transaction.objectStore(
                "songs"
            );

        const song = {

            title: title,
            artist: artist,
            link: link,
            reason: reason,
            addedAt:
                new Date().toISOString()

        };

        if (editingId) {

            song.id =
                Number(editingId);

            store.put(song);

        } else {

            store.add(song);

        }

        transaction.oncomplete =
            function () {

                console.log(
                    "Song added to Our Soundtrack 🎵"
                );

                songTitle.value =
                    "";

                songArtist.value =
                    "";

                songLink.value =
                    "";

                songReason.value =
                    "";

                saveSong.removeAttribute(
                    "data-editing-id"
                );

                songModal.classList.remove(
                    "active"
                );

                loadSoundtrack();
                updateYearStatistics();
                updateFinaleStats();

            };

    }
);

// =========================
// LOAD SOUNDTRACK
// =========================

function loadSoundtrack() {

    if (!memoryDB) {
        return;
    }

    const transaction =
        memoryDB.transaction(
            ["songs"],
            "readonly"
        );

    const store =
        transaction.objectStore(
            "songs"
        );

    const request =
        store.getAll();

    request.onsuccess =
        function () {

            const songs =
                request.result;

            soundtrackList.innerHTML =
                "";

            if (
                songs.length === 0
            ) {

                soundtrackList.innerHTML = `

                    <div class="empty-soundtrack">

                        <div class="empty-soundtrack-icon">
                            🎵
                        </div>

                        <h3>
                            Our first song is waiting...
                        </h3>

                        <p>
                            Maybe you'll find it today.
                        </p>

                    </div>

                `;

                return;

            }

            songs.reverse();

            songs.forEach(
                function (song) {

                    const songCard =
                        document.createElement(
                            "div"
                        );

                    songCard.classList.add(
                        "soundtrack-song"
                    );

                    songCard.innerHTML = `

                        <div class="song-card-side">

                            <div class="song-card-icon">
                                🎵
                            </div>

                            <div class="song-actions">

                                <button
                                    class="edit-song-button"
                                    data-id="${song.id}"
                                    title="Edit song"
                                >
                                    ✏️
                                </button>

                                <button
                                    class="delete-song-button"
                                    data-id="${song.id}"
                                    title="Delete song"
                                >
                                    🗑️
                                </button>

                            </div>

                        </div>

                        <div class="song-card-info">

                            <h3>
                                ${song.title}
                            </h3>

                            <p class="song-artist">
                                ${song.artist}
                            </p>

                            ${song.reason
                            ? `
                                        <p class="song-reason-display">
                                            “${song.reason}”
                                        </p>
                                    `
                            : ""
                        }

                            ${song.link
                            ? `
                                        <a
                                            href="${song.link}"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="song-link-button"
                                        >
                                            ▶ LISTEN
                                        </a>
                                    `
                            : ""
                        }

                        </div>

                    `;

                    soundtrackList.appendChild(
                        songCard
                    );

                }
            );

        };

}

// =========================
// DELETE SONG
// =========================

soundtrackList.addEventListener(
    "click",
    function (event) {

        if (
            !event.target.classList.contains(
                "delete-song-button"
            )
        ) {

            return;

        }

        const songId =
            Number(
                event.target.dataset.id
            );

        deleteTarget =
            "song";

        deleteTargetId =
            songId;

        deleteConfirmTitle.textContent =
            "Delete this song?";

        deleteConfirmMessage.textContent =
            "This song will be removed from Our Soundtrack. This can't be undone.";

        deleteConfirmModal.classList.add(
            "active"
        );

    }
);

// =========================
// EDIT SONG
// =========================

soundtrackList.addEventListener(
    "click",
    function (event) {

        if (
            !event.target.classList.contains(
                "edit-song-button"
            )
        ) {

            return;

        }

        const songId =
            Number(
                event.target.dataset.id
            );

        const transaction =
            memoryDB.transaction(
                ["songs"],
                "readonly"
            );

        const store =
            transaction.objectStore(
                "songs"
            );

        const request =
            store.get(songId);

        request.onsuccess =
            function () {

                const song =
                    request.result;

                if (!song) {
                    return;
                }

                songTitle.value =
                    song.title || "";

                songArtist.value =
                    song.artist || "";

                songLink.value =
                    song.link || "";

                songReason.value =
                    song.reason || "";

                songModal.classList.add(
                    "active"
                );

                saveSong.dataset.editingId =
                    songId;

            };

    }
);

// =========================
// BUCKET LIST MODAL
// =========================

addBucketItem.addEventListener(
    "click",
    function () {

        bucketModal.classList.add(
            "active"
        );

        bucketItemInput.focus();

    }
);

closeBucketModal.addEventListener(
    "click",
    function () {

        bucketModal.classList.remove(
            "active"
        );

    }
);

bucketModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            bucketModal
        ) {

            bucketModal.classList.remove(
                "active"
            );

        }

    }
);

// =========================
// SAVE / EDIT BUCKET LIST
// =========================

saveBucketItem.addEventListener(
    "click",
    function () {

        const item =
            bucketItemInput.value.trim();

        if (!item) {

            bucketItemInput.focus();

            return;

        }

        const editingId =
            saveBucketItem.dataset.editingId;

        const transaction =
            memoryDB.transaction(
                ["bucketList"],
                "readwrite"
            );

        const store =
            transaction.objectStore(
                "bucketList"
            );

        // EDIT EXISTING ITEM

        if (editingId) {

            const request =
                store.get(
                    Number(editingId)
                );

            request.onsuccess =
                function () {

                    const existingItem =
                        request.result;

                    if (!existingItem) {
                        return;
                    }

                    existingItem.text =
                        item;

                    store.put(
                        existingItem
                    );

                };

        }

        // ADD NEW ITEM

        else {

            store.add({

                text: item,

                completed: false,

                addedAt:
                    new Date().toISOString()

            });

        }

        transaction.oncomplete =
            function () {

                console.log(
                    editingId
                        ? "Bucket list item edited ✏️"
                        : "Bucket list item added 🪣"
                );

                bucketItemInput.value =
                    "";

                saveBucketItem.removeAttribute(
                    "data-editing-id"
                );

                bucketModal.classList.remove(
                    "active"
                );

                loadBucketList();
                updateYearStatistics();
                updateFinaleStats();

            };

    }
);

// =========================
// LOAD BUCKET LIST
// =========================

function loadBucketList() {

    if (!memoryDB) {
        return;
    }

    const transaction =
        memoryDB.transaction(
            ["bucketList"],
            "readonly"
        );

    const store =
        transaction.objectStore(
            "bucketList"
        );

    const request =
        store.getAll();

    request.onsuccess =
        function () {

            const items =
                request.result;

            bucketList.innerHTML =
                "";

            if (
                items.length === 0
            ) {

                bucketList.innerHTML = `

                    <div class="empty-bucket">

                        <div class="empty-bucket-icon">
                            ✨
                        </div>

                        <h3>
                            Nothing on the list yet...
                        </h3>

                        <p>
                            Maybe your first adventure is
                            waiting to be added.
                        </p>

                    </div>

                `;

                updateBucketProgress(
                    items
                );

                return;

            }

            items.forEach(
                function (item) {

                    const itemCard =
                        document.createElement(
                            "div"
                        );

                    itemCard.classList.add(
                        "bucket-item"
                    );

                    if (item.completed) {

                        itemCard.classList.add(
                            "completed"
                        );

                    }

                    itemCard.innerHTML = `

                        <button
                            class="bucket-check"
                            data-id="${item.id}"
                            title="Mark as complete"
                        >
                            ${item.completed
                            ? "✓"
                            : ""
                        }
                        </button>

                        <span class="bucket-item-text">
                            ✦ ${item.text}
                        </span>

                        <div class="bucket-actions">

                            <button
                                class="edit-bucket-button"
                                data-id="${item.id}"
                                title="Edit"
                            >
                                ✏️
                            </button>

                            <button
                                class="delete-bucket-button"
                                data-id="${item.id}"
                                title="Delete"
                            >
                                🗑️
                            </button>

                        </div>

                    `;

                    bucketList.appendChild(
                        itemCard
                    );

                }
            );

            updateBucketProgress(
                items
            );

        };

}

// =========================
// BUCKET LIST PROGRESS
// =========================

function updateBucketProgress(items) {

    const total =
        items.length;

    const completed =
        items.filter(
            function (item) {

                return item.completed;

            }
        ).length;

    const percentage =
        total === 0
            ? 0
            : (completed / total) * 100;

    document.getElementById(
        "bucketProgressText"
    ).textContent =
        completed +
        " / " +
        total +
        " completed";

    document.getElementById(
        "bucketProgressFill"
    ).style.width =
        percentage + "%";

}

// =========================
// BUCKET LIST ACTIONS
// =========================

bucketList.addEventListener(
    "click",
    function (event) {

        const target =
            event.target;

        const itemId =
            Number(
                target.dataset.id
            );

        if (!itemId) {
            return;
        }

        // =========================
        // COMPLETE / UNCOMPLETE
        // =========================

        if (
            target.classList.contains(
                "bucket-check"
            )
        ) {

            const transaction =
                memoryDB.transaction(
                    ["bucketList"],
                    "readwrite"
                );

            const store =
                transaction.objectStore(
                    "bucketList"
                );

            const request =
                store.get(itemId);

            request.onsuccess =
                function () {

                    const item =
                        request.result;

                    if (!item) {
                        return;
                    }

                    item.completed =
                        !item.completed;

                    store.put(item);

                };

            transaction.oncomplete =
                function () {

                    loadBucketList();
                    updateYearStatistics();
                    updateFinaleStats();

                };

            return;

        }

        // =========================
        // DELETE
        // =========================

        if (
            target.classList.contains(
                "delete-bucket-button"
            )
        ) {

            deleteTarget =
                "bucket";

            deleteTargetId =
                itemId;

            deleteConfirmTitle.textContent =
                "Remove this from the list?";

            deleteConfirmMessage.textContent =
                "This will remove the item from Our Little Bucket List. This can't be undone.";

            deleteConfirmModal.classList.add(
                "active"
            );

            return;

        }

        // =========================
        // EDIT
        // =========================

        if (
            target.classList.contains(
                "edit-bucket-button"
            )
        ) {

            const transaction =
                memoryDB.transaction(
                    ["bucketList"],
                    "readonly"
                );

            const store =
                transaction.objectStore(
                    "bucketList"
                );

            const request =
                store.get(itemId);

            request.onsuccess =
                function () {

                    const item =
                        request.result;

                    if (!item) {
                        return;
                    }

                    bucketItemInput.value =
                        item.text || "";

                    bucketModal.classList.add(
                        "active"
                    );

                    bucketItemInput.focus();

                    saveBucketItem.dataset.editingId =
                        itemId;

                };

        }

    }
);

// =========================
// UPDATE DAY 365 FINALE STATS
// =========================

function updateFinaleStats() {

    if (!memoryDB) {
        return;
    }

    // =========================
    // COUNT MEMORIES
    // =========================

    const memoryTransaction =
        memoryDB.transaction(
            ["memories"],
            "readonly"
        );

    const memoryStore =
        memoryTransaction.objectStore(
            "memories"
        );

    const memoryRequest =
        memoryStore.getAll();

    memoryRequest.onsuccess =
        function () {

            document.getElementById(
                "finaleMemories"
            ).textContent =
                memoryRequest.result.length;

        };

    // =========================
    // COUNT SONGS
    // =========================

    const songTransaction =
        memoryDB.transaction(
            ["songs"],
            "readonly"
        );

    const songStore =
        songTransaction.objectStore(
            "songs"
        );

    const songRequest =
        songStore.getAll();

    songRequest.onsuccess =
        function () {

            document.getElementById(
                "finaleSongs"
            ).textContent =
                songRequest.result.length;

        };

    // =========================
    // COUNT COMPLETED PLANS
    // =========================

    const bucketTransaction =
        memoryDB.transaction(
            ["bucketList"],
            "readonly"
        );

    const bucketStore =
        bucketTransaction.objectStore(
            "bucketList"
        );

    const bucketRequest =
        bucketStore.getAll();

    bucketRequest.onsuccess =
        function () {

            const completedItems =
                bucketRequest.result.filter(
                    function (item) {

                        return item.completed;

                    }
                );

            document.getElementById(
                "finaleBucket"
            ).textContent =
                completedItems.length;

        };

}

// =========================
// YEAR STATISTICS
// =========================

function updateYearStatistics() {

    if (!memoryDB) {
        return;
    }

    // =========================
    // DAYS UNLOCKED
    // =========================

    const unlockedDays =
        getUnlockedDays();

    document.getElementById(
        "statsDaysUnlocked"
    ).textContent =
        unlockedDays;

    document.getElementById(
        "statsYearProgress"
    ).textContent =
        unlockedDays +
        " / 365";

    const progressPercentage =
        (unlockedDays / 365) * 100;

    document.getElementById(
        "statsYearProgressFill"
    ).style.width =
        progressPercentage + "%";

    // =========================
    // MEMORIES
    // =========================

    const memoryTransaction =
        memoryDB.transaction(
            ["memories"],
            "readonly"
        );

    const memoryStore =
        memoryTransaction.objectStore(
            "memories"
        );

    const memoryRequest =
        memoryStore.getAll();

    memoryRequest.onsuccess =
        function () {

            const memories =
                memoryRequest.result;

            document.getElementById(
                "statsMemories"
            ).textContent =
                memories.length;

            // =========================
            // PHOTOS
            // =========================

            const photos =
                memories.reduce(
                    function (total, memory) {

                        return (
                            total +
                            (memory.photo ? 1 : 0) +
                            (memory.photo2 ? 1 : 0) +
                            (memory.photo3 ? 1 : 0)
                        );

                    },
                    0
                );

            document.getElementById(
                "statsPhotos"
            ).textContent =
                photos;

        };

    // =========================
    // SONGS
    // =========================

    const songTransaction =
        memoryDB.transaction(
            ["songs"],
            "readonly"
        );

    const songStore =
        songTransaction.objectStore(
            "songs"
        );

    const songRequest =
        songStore.getAll();

    songRequest.onsuccess =
        function () {

            document.getElementById(
                "statsSongs"
            ).textContent =
                songRequest.result.length;

        };

    // =========================
    // BUCKET LIST
    // =========================

    const bucketTransaction =
        memoryDB.transaction(
            ["bucketList"],
            "readonly"
        );

    const bucketStore =
        bucketTransaction.objectStore(
            "bucketList"
        );

    const bucketRequest =
        bucketStore.getAll();

    bucketRequest.onsuccess =
        function () {

            const items =
                bucketRequest.result;

            const completed =
                items.filter(
                    function (item) {

                        return item.completed;

                    }
                ).length;

            const waiting =
                items.filter(
                    function (item) {

                        return !item.completed;

                    }
                ).length;

            document.getElementById(
                "statsPlansCompleted"
            ).textContent =
                completed;

            document.getElementById(
                "statsPlansWaiting"
            ).textContent =
                waiting;

        };

}

// =========================
// DAY 365 FINALE UNLOCK
// =========================

function setupFinaleUnlock() {

    const finaleSection =
        document.getElementById(
            "finaleSection"
        );

    if (!finaleSection) {
        return;
    }

    const unlockedDays =
        getUnlockedDays();

    if (
        unlockedDays >= 365
    ) {

        finaleSection.classList.add(
            "unlocked"
        );

    } else {

        finaleSection.classList.remove(
            "unlocked"
        );

    }

}

// =========================
// PREVIOUS / NEXT DAY
// =========================

function updateDayNavigation(dayNumber) {

    const unlockedDays =
        getUnlockedDays();

    navigationDay.textContent =
        "DAY " + dayNumber;

    const progressFill =
        document.getElementById(
            "surpriseProgressFill"
        );

    if (progressFill) {

        const percentage =
            (dayNumber / 365) * 100;

        progressFill.style.width =
            percentage + "%";

    }

    previousDay.disabled =
        dayNumber <= 1;

    nextDay.disabled =
        dayNumber >= unlockedDays;

}

previousDay.addEventListener(
    "click",
    function () {

        const currentDay =
            Number(
                surpriseDay.textContent
            );

        if (currentDay <= 1) {
            return;
        }

        const card =
            document.querySelector(
                ".surprise-card"
            );

        card.classList.remove(
            "day-changing"
        );

        void card.offsetWidth;

        card.classList.add(
            "day-changing"
        );

        openSurprise(
            currentDay - 1
        );

    }
);

nextDay.addEventListener(
    "click",
    function () {

        const currentDay =
            Number(
                surpriseDay.textContent
            );

        const unlockedDays =
            getUnlockedDays();

        if (
            currentDay >=
            unlockedDays
        ) {

            return;

        }

        const card =
            document.querySelector(
                ".surprise-card"
            );

        card.classList.remove(
            "day-changing"
        );

        void card.offsetWidth;

        card.classList.add(
            "day-changing"
        );

        openSurprise(
            currentDay + 1
        );

    }
);

// =========================
// BACKUP & RESTORE
// =========================

const backupButton =
    document.getElementById(
        "backupButton"
    );

const restoreButton =
    document.getElementById(
        "restoreButton"
    );

const restoreLocalBackupButton =
    document.getElementById(
        "restoreLocalBackupButton"
    );

const restoreFile =
    document.getElementById(
        "restoreFile"
    );

const backupStatus =
    document.getElementById(
        "backupStatus"
    );

// =========================
// CREATE BACKUP
// =========================

backupButton.addEventListener(
    "click",
    function () {

        if (!memoryDB) {
            return;
        }

        const backup = {

            version: 1,

            createdAt:
                new Date().toISOString(),

            memories: [],

            songs: [],

            bucketList: []

        };

        const transaction =
            memoryDB.transaction(
                [
                    "memories",
                    "songs",
                    "bucketList"
                ],
                "readonly"
            );

        const memoriesStore =
            transaction.objectStore(
                "memories"
            );

        const songsStore =
            transaction.objectStore(
                "songs"
            );

        const bucketStore =
            transaction.objectStore(
                "bucketList"
            );

        const memoriesRequest =
            memoriesStore.getAll();

        const songsRequest =
            songsStore.getAll();

        const bucketRequest =
            bucketStore.getAll();

        let memoriesDone = false;
        let songsDone = false;
        let bucketDone = false;

        function createBackupFile() {

            if (
                !memoriesDone ||
                !songsDone ||
                !bucketDone
            ) {

                return;

            }

            const backupJSON =
                JSON.stringify(
                    backup
                );

            const blob =
                new Blob(
                    [backupJSON],
                    {
                        type: "application/json"
                    }
                );

            const url =
                URL.createObjectURL(
                    blob
                );

            const link =
                document.createElement(
                    "a"
                );

            link.href =
                url;

            link.download =
                "365-Days-of-Us-Backup.json";

            document.body.appendChild(
                link
            );

            link.click();

            document.body.removeChild(
                link
            );

            URL.revokeObjectURL(
                url
            );

            backupStatus.textContent =
                "✓ Our year has been backed up safely. ❤️";

            backupStatus.classList.add(
                "show"
            );

        }

        memoriesRequest.onsuccess =
            function () {

                backup.memories =
                    memoriesRequest.result;

                memoriesDone =
                    true;

                createBackupFile();

            };

        songsRequest.onsuccess =
            function () {

                backup.songs =
                    songsRequest.result;

                songsDone =
                    true;

                createBackupFile();

            };

        bucketRequest.onsuccess =
            function () {

                backup.bucketList =
                    bucketRequest.result;

                bucketDone =
                    true;

                createBackupFile();

            };

    }
);

// =========================
// OPEN RESTORE FILE PICKER
// =========================

restoreButton.addEventListener(
    "click",
    function () {

        restoreFile.click();

    }
);

// =========================
// RESTORE BACKUP
// =========================

restoreFile.addEventListener(
    "change",
    function () {

        const file =
            restoreFile.files[0];

        if (!file) {
            return;
        }

        const reader =
            new FileReader();

        reader.onload =
            function (event) {

                let backup;

                try {

                    backup =
                        JSON.parse(
                            event.target.result
                        );

                } catch (error) {

                    backupStatus.textContent =
                        "⚠️ This doesn't appear to be a valid backup file.";

                    backupStatus.classList.add(
                        "show"
                    );

                    restoreFile.value =
                        "";

                    return;

                }

                // =========================
                // VALIDATE BACKUP
                // =========================

                if (
                    !backup ||
                    !Array.isArray(
                        backup.memories
                    ) ||
                    !Array.isArray(
                        backup.songs
                    ) ||
                    !Array.isArray(
                        backup.bucketList
                    )
                ) {

                    backupStatus.textContent =
                        "⚠️ This backup file is not compatible with 365 Days of Us.";

                    backupStatus.classList.add(
                        "show"
                    );

                    restoreFile.value =
                        "";

                    return;

                }

                const confirmed =
                    confirm(
                        "Restore this backup?\n\nExisting memories, songs and bucket-list items with the same IDs will be replaced."
                    );

                if (!confirmed) {

                    restoreFile.value =
                        "";

                    return;

                }

                const transaction =
                    memoryDB.transaction(
                        [
                            "memories",
                            "songs",
                            "bucketList"
                        ],
                        "readwrite"
                    );

                const memoriesStore =
                    transaction.objectStore(
                        "memories"
                    );

                const songsStore =
                    transaction.objectStore(
                        "songs"
                    );

                const bucketStore =
                    transaction.objectStore(
                        "bucketList"
                    );

                // Restore memories

                backup.memories.forEach(
                    function (memory) {

                        memoriesStore.put(
                            memory
                        );

                    }
                );

                // Restore songs

                backup.songs.forEach(
                    function (song) {

                        songsStore.put(
                            song
                        );

                    }
                );

                // Restore bucket list

                backup.bucketList.forEach(
                    function (item) {

                        bucketStore.put(
                            item
                        );

                    }
                );

                transaction.oncomplete =
                    function () {

                        backupStatus.textContent =
                            "✓ Our year has been restored successfully. ❤️";

                        backupStatus.classList.add(
                            "show"
                        );

                        loadMemoryMuseum();
                        loadSoundtrack();
                        loadBucketList();
                        updateFinaleStats();
                        updateYearStatistics();

                        restoreFile.value =
                            "";

                    };

                transaction.onerror =
                    function () {

                        backupStatus.textContent =
                            "⚠️ Something went wrong while restoring the backup.";

                        backupStatus.classList.add(
                            "show"
                        );

                        restoreFile.value =
                            "";

                    };

            };

        reader.readAsText(
            file
        );

    }
);

// =========================
// MEMORY MUSEUM SEARCH
// =========================

const memorySearch =
    document.getElementById(
        "memorySearch"
    );

const clearMemorySearch =
    document.getElementById(
        "clearMemorySearch"
    );

// =========================
// SEARCH MEMORIES
// =========================

memorySearch.addEventListener(
    "input",
    function () {

        const searchTerm =
            memorySearch.value
                .trim()
                .toLowerCase();

        if (searchTerm) {

            clearMemorySearch.classList.add(
                "show"
            );

        } else {

            clearMemorySearch.classList.remove(
                "show"
            );

        }

        filterMemoryMuseum(
            searchTerm
        );

    }
);

// =========================
// FILTER MEMORY MUSEUM
// =========================

function filterMemoryMuseum(
    searchTerm
) {

    if (!memoryDB) {
        return;
    }

    const transaction =
        memoryDB.transaction(
            ["memories"],
            "readonly"
        );

    const store =
        transaction.objectStore(
            "memories"
        );

    const request =
        store.getAll();

    request.onsuccess =
        function () {

            let memories =
                request.result;

            if (searchTerm) {

                memories =
                    memories.filter(
                        function (memory) {

                            const text =
                                (
                                    memory.text ||
                                    ""
                                )
                                    .toLowerCase();

                            const photoName =
                                (
                                    memory.photoName ||
                                    ""
                                )
                                    .toLowerCase();

                            const photoName2 =
                                (
                                    memory.photoName2 ||
                                    ""
                                )
                                    .toLowerCase();

                            const photoName3 =
                                (
                                    memory.photoName3 ||
                                    ""
                                )
                                    .toLowerCase();

                            return (
                                text.includes(
                                    searchTerm
                                ) ||
                                photoName.includes(
                                    searchTerm
                                ) ||
                                photoName2.includes(
                                    searchTerm
                                ) ||
                                photoName3.includes(
                                    searchTerm
                                )
                            );

                        }
                    );

            }

            memories.sort(
                function (a, b) {

                    return b.day - a.day;

                }
            );

            renderMemoryMuseum(
                memories
            );

        };

}

// =========================
// CLEAR SEARCH
// =========================

clearMemorySearch.addEventListener(
    "click",
    function () {

        memorySearch.value =
            "";

        clearMemorySearch.classList.remove(
            "show"
        );

        filterMemoryMuseum(
            ""
        );

        memorySearch.focus();

    }
);

// =========================
// LANDING PAGE STAR FIELD
// =========================

function createStarField() {

    const starsContainer =
        document.querySelector(
            ".stars"
        );

    if (!starsContainer) {
        return;
    }

    starsContainer.innerHTML =
        "";

    const starSymbols = [

        "✦",
        "✧",
        "⋆",
        "·",
        "✦",
        "⋆"

    ];

    const numberOfStars =
        80;

    for (
        let i = 0;
        i < numberOfStars;
        i++
    ) {

        const star =
            document.createElement(
                "span"
            );

        star.classList.add(
            "star"
        );

        star.textContent =
            starSymbols[
            Math.floor(
                Math.random() *
                starSymbols.length
            )
            ];

        star.style.left =
            Math.random() * 100 +
            "%";

        star.style.top =
            Math.random() * 100 +
            "%";

        star.style.setProperty(
            "--star-size",
            (Math.random() * 10 + 7) +
            "px"
        );

        star.style.setProperty(
            "--star-opacity",
            Math.random() * 0.45 + 0.2
        );

        star.style.setProperty(
            "--star-duration",
            (Math.random() * 5 + 5) +
            "s"
        );

        star.style.setProperty(
            "--star-delay",
            Math.random() * 5 +
            "s"
        );

        star.style.setProperty(
            "--float-x",
            (Math.random() * 16 - 8) +
            "px"
        );

        star.style.setProperty(
            "--float-y",
            (Math.random() * 16 - 8) +
            "px"
        );

        starsContainer.appendChild(
            star
        );

    }

}

createStarField();

// =========================
// SECRET HOME STAR FIELD
// =========================

function createHomeStarField() {

    const starsContainer =
        document.querySelector(
            ".home-stars"
        );

    if (!starsContainer) {
        return;
    }

    starsContainer.innerHTML =
        "";

    const starSymbols = [

        "✦",
        "✧",
        "⋆",
        "·",
        "✦",
        "⋆"

    ];

    const numberOfStars =
        55;

    for (
        let i = 0;
        i < numberOfStars;
        i++
    ) {

        const star =
            document.createElement(
                "span"
            );

        star.classList.add(
            "home-star"
        );

        star.textContent =
            starSymbols[
            Math.floor(
                Math.random() *
                starSymbols.length
            )
            ];

        star.style.left =
            Math.random() * 100 +
            "%";

        star.style.top =
            Math.random() * 100 +
            "%";

        star.style.setProperty(
            "--home-star-size",
            (Math.random() * 8 + 6) +
            "px"
        );

        star.style.setProperty(
            "--home-star-opacity",
            Math.random() * 0.3 + 0.2
        );

        star.style.setProperty(
            "--home-star-duration",
            (Math.random() * 7 + 7) +
            "s"
        );

        star.style.setProperty(
            "--home-star-delay",
            Math.random() * 6 +
            "s"
        );

        star.style.setProperty(
            "--home-float-x",
            (Math.random() * 12 - 6) +
            "px"
        );

        star.style.setProperty(
            "--home-float-y",
            (Math.random() * 12 - 6) +
            "px"
        );

        starsContainer.appendChild(
            star
        );

    }

}

createHomeStarField();

// let currentPage = "landing";

// =========================
// ENTER SECRET HOME
// =========================

enterButton.addEventListener(
    "click",
    function () {

        secretHome.classList.add(
            "active"
        );

        document
            .querySelector(".landing-page")
            .classList.add("hidden");

        history.pushState(
            {
                page: "home"
            },
            "",
            "#home"
        );

    }
);

// =========================
// OPEN 365 DAYS
// =========================

// =========================
// ENTER SECRET HOME
// =========================

enterButton.addEventListener(
    "click",
    function () {

        secretHome.classList.add(
            "active"
        );

        document
            .querySelector(".landing-page")
            .classList.add("hidden");

        history.pushState(
            {
                page: "home"
            },
            "",
            "#home"
        );

    }
);

// =========================
// BROWSER / MOBILE BACK
// =========================

window.addEventListener(
    "popstate",
    function () {

        // =========================
        // CLOSE OPEN MODALS FIRST
        // =========================

        if (
            surpriseModal.classList.contains(
                "active"
            )
        ) {

            surpriseModal.classList.remove(
                "active"
            );

            return;
        }

        if (
            letterModal.classList.contains(
                "active"
            )
        ) {

            letterModal.classList.remove(
                "active"
            );

            return;
        }

        if (
            songModal.classList.contains(
                "active"
            )
        ) {

            songModal.classList.remove(
                "active"
            );

            return;
        }

        if (
            bucketModal.classList.contains(
                "active"
            )
        ) {

            bucketModal.classList.remove(
                "active"
            );

            return;
        }


        // =========================
        // EXPLORE YEAR → HOME
        // =========================

        if (
            daysPage.classList.contains(
                "active"
            )
        ) {

            daysPage.classList.remove(
                "active"
            );

            return;
        }


        // =========================
        // HOME → LANDING
        // =========================

        if (
            secretHome.classList.contains(
                "active"
            )
        ) {

            secretHome.classList.remove(
                "active"
            );

            document
                .querySelector(".landing-page")
                .classList.remove(
                    "hidden"
                );

            return;
        }

    }
);

// =========================
// QUICK NAVIGATION
// =========================

const quickNavButton =
    document.getElementById(
        "quickNavButton"
    );

const quickNavMenu =
    document.getElementById(
        "quickNavMenu"
    );

const closeQuickNav =
    document.getElementById(
        "closeQuickNav"
    );


// OPEN MENU

quickNavButton.addEventListener(
    "click",
    function () {

        quickNavMenu.classList.toggle(
            "active"
        );

    }
);


// CLOSE MENU

closeQuickNav.addEventListener(
    "click",
    function () {

        quickNavMenu.classList.remove(
            "active"
        );

    }
);


// NAVIGATION ITEMS

document
    .querySelectorAll(
        ".quick-nav-item"
    )
    .forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const target =
                        button.dataset.target;

                    let targetElement;


                    if (
                        target === "today"
                    ) {

                        targetElement =
                            document.querySelector(
                                ".today-surprise"
                            );

                    }


                    if (
                        target === "days"
                    ) {

                        quickNavMenu.classList.remove(
                            "active"
                        );

                        daysButton.click();

                        return;

                    }


                    if (
                        target === "openWhen"
                    ) {

                        targetElement =
                            document.querySelector(
                                ".open-when-section"
                            );

                    }


                    if (
                        target === "museum"
                    ) {

                        targetElement =
                            document.querySelector(
                                ".memory-museum-section"
                            );

                    }


                    if (
                        target === "soundtrack"
                    ) {

                        targetElement =
                            document.querySelector(
                                ".soundtrack-section"
                            );

                    }


                    if (
                        target === "bucket"
                    ) {

                        targetElement =
                            document.querySelector(
                                ".bucket-list-section"
                            );

                    }


                    if (
                        target === "stats"
                    ) {

                        targetElement =
                            document.querySelector(
                                ".year-stats-section"
                            );

                    }


                    if (
                        target === "backup"
                    ) {

                        targetElement =
                            document.querySelector(
                                ".backup-section"
                            );

                    }


                    if (targetElement) {

                        quickNavMenu.classList.remove(
                            "active"
                        );

                        targetElement.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        }
    );

// =========================
// VOICE NOTE RECORDING
// =========================

// let mediaRecorder = null;
// let audioChunks = [];
// let recordedVoiceBlob = null;
// let recordingTimerInterval = null;
// let recordingSeconds = 0;

// const recordVoice =
//     document.getElementById("recordVoice");

// const stopVoice =
//     document.getElementById("stopVoice");

// const recordingStatus =
//     document.getElementById("recordingStatus");

// const recordingTimer =
//     document.getElementById("recordingTimer");

// const voicePreview =
//     document.getElementById("voicePreview");

// const removeVoice =
//     document.getElementById("removeVoice");


// =========================
// START RECORDING
// =========================

recordVoice.addEventListener(
    "click",
    async function () {

        // =========================
        // FIND NEXT EMPTY VOICE SLOT
        // =========================

        const voicePreviews =
            [voicePreview, voicePreview2, voicePreview3];

        const nextSlotIndex =
            voicePreviews.findIndex(
                function (preview) {
                    return preview.hidden;
                }
            );

        if (nextSlotIndex === -1) {

            voiceLimitMessage.classList.add(
                "show"
            );

            setTimeout(
                function () {

                    voiceLimitMessage.classList.remove(
                        "show"
                    );

                },
                2500
            );

            return;

        }

        activeVoiceSlot =
            nextSlotIndex + 1;


        try {

            const stream =
                await navigator.mediaDevices
                    .getUserMedia({
                        audio: true
                    });


            audioChunks = [];

            recordedVoiceBlob = null;


            mediaRecorder =
                new MediaRecorder(
                    stream
                );


            mediaRecorder.ondataavailable =
                function (event) {

                    if (
                        event.data.size > 0
                    ) {

                        audioChunks.push(
                            event.data
                        );

                    }

                };


            mediaRecorder.onstop =
                function () {

                    const finishedBlob =
                        new Blob(
                            audioChunks,
                            {
                                type:
                                    mediaRecorder.mimeType ||
                                    "audio/webm"
                            }
                        );

                    const audioURL =
                        URL.createObjectURL(
                            finishedBlob
                        );

                    // =========================
                    // STORE INTO THE SLOT THAT
                    // WAS ACTIVE FOR THIS RECORDING
                    // =========================

                    const targetPreview =
                        voicePreviews[activeVoiceSlot - 1];

                    const targetRemoveButtons =
                        [removeVoice, removeVoice2, removeVoice3];

                    const targetRemoveButton =
                        targetRemoveButtons[activeVoiceSlot - 1];

                    if (activeVoiceSlot === 1) {

                        recordedVoiceBlob =
                            finishedBlob;

                    } else if (activeVoiceSlot === 2) {

                        recordedVoiceBlob2 =
                            finishedBlob;

                    } else if (activeVoiceSlot === 3) {

                        recordedVoiceBlob3 =
                            finishedBlob;

                    }

                    targetPreview.src =
                        audioURL;

                    targetPreview.hidden =
                        false;

                    targetRemoveButton.hidden =
                        false;

                    isMemoryDirty = true;


                    recordingStatus.hidden =
                        true;

                    recordVoice.hidden =
                        false;

                    stopVoice.hidden =
                        true;

                    activeVoiceSlot =
                        null;


                    clearInterval(
                        recordingTimerInterval
                    );


                    stream
                        .getTracks()
                        .forEach(
                            function (track) {
                                track.stop();
                            }
                        );


                    console.log(
                        "Voice note recorded."
                    );

                };


            // =========================
            // START
            // =========================

            mediaRecorder.start();


            recordingSeconds = 0;

            recordingTimer.textContent =
                "00:00";


            recordingStatus.hidden =
                false;

            recordVoice.hidden =
                true;

            stopVoice.hidden =
                false;


            recordingTimerInterval =
                setInterval(
                    function () {

                        recordingSeconds++;


                        const minutes =
                            Math.floor(
                                recordingSeconds / 60
                            );

                        const seconds =
                            recordingSeconds % 60;


                        recordingTimer.textContent =
                            String(minutes)
                                .padStart(2, "0")
                            + ":" +
                            String(seconds)
                                .padStart(2, "0");

                    },
                    1000
                );


        } catch (error) {

            console.error(
                "Microphone access failed:",
                error
            );


            alert(
                "Microphone access is needed to record a voice note."
            );

            activeVoiceSlot =
                null;

        }

    }
);


// =========================
// STOP RECORDING
// =========================

stopVoice.addEventListener(
    "click",
    function () {

        if (
            mediaRecorder &&
            mediaRecorder.state !== "inactive"
        ) {

            mediaRecorder.stop();

        }

    }
);



// =========================
// REMOVE VOICE NOTE
// =========================

// removeVoice.addEventListener(
//     "click",
//     function () {

//         // Do NOT immediately change IndexedDB.
//         // Mark the voice note for deletion.
//         voiceRemoved = true;

//         recordedVoiceBlob = null;


//         voicePreview.pause();

//         voicePreview.removeAttribute(
//             "src"
//         );

//         voicePreview.load();

//         voicePreview.hidden =
//             true;


//         removeVoice.hidden =
//             true;


//         recordVoice.hidden =
//             false;


//         console.log(
//             "Voice note marked for removal. Save memory to confirm."
//         );

//     }
// );

// =========================
// DELETE CONFIRMATION
// =========================

const deleteConfirmModal =
    document.getElementById(
        "deleteConfirmModal"
    );

const deleteConfirmTitle =
    document.getElementById(
        "deleteConfirmTitle"
    );

const deleteConfirmMessage =
    document.getElementById(
        "deleteConfirmMessage"
    );

const cancelDelete =
    document.getElementById(
        "cancelDelete"
    );

const confirmDelete =
    document.getElementById(
        "confirmDelete"
    );

let deleteTarget = null;
let deleteTargetId = null;

// =========================
// LOCAL BACKUP RESTORE
// =========================

restoreLocalBackupButton.addEventListener(
    "click",
    function () {

        restoreConfirmModal.classList.add(
            "active"
        );

    }
);


cancelRestore.addEventListener(
    "click",
    function () {

        restoreConfirmModal.classList.remove(
            "active"
        );

    }
);


confirmRestore.addEventListener(
    "click",
    function () {

        restoreConfirmModal.classList.remove(
            "active"
        );


        createSafetyBackupBeforeRestore(
            function () {

                restoreAutomaticBackup();

            }
        );

    }
);

// =========================
// REQUEST PHOTO REMOVAL
// =========================

removePhoto.addEventListener(
    "click",
    function () {

        deleteTarget =
            "photo";

        deleteConfirmTitle.textContent =
            "Remove this photo?";

        deleteConfirmMessage.textContent =
            "The photo will be removed when you save this memory.";

        deleteConfirmModal.classList.add(
            "active"
        );

    }
);

removePhoto2.addEventListener(
    "click",
    function () {

        deleteTarget =
            "photo2";

        deleteConfirmTitle.textContent =
            "Remove this photo?";

        deleteConfirmMessage.textContent =
            "The photo will be removed when you save this memory.";

        deleteConfirmModal.classList.add(
            "active"
        );

    }
);

removePhoto3.addEventListener(
    "click",
    function () {

        deleteTarget =
            "photo3";

        deleteConfirmTitle.textContent =
            "Remove this photo?";

        deleteConfirmMessage.textContent =
            "The photo will be removed when you save this memory.";

        deleteConfirmModal.classList.add(
            "active"
        );

    }
);


// =========================
// REQUEST VOICE REMOVAL
// =========================

removeVoice.addEventListener(
    "click",
    function () {

        deleteTarget =
            "voice";

        deleteConfirmTitle.textContent =
            "Remove this voice note?";

        deleteConfirmMessage.textContent =
            "The voice note will be removed when you save this memory.";

        deleteConfirmModal.classList.add(
            "active"
        );

    }
);

removeVoice2.addEventListener(
    "click",
    function () {

        deleteTarget =
            "voice2";

        deleteConfirmTitle.textContent =
            "Remove this voice note?";

        deleteConfirmMessage.textContent =
            "The voice note will be removed when you save this memory.";

        deleteConfirmModal.classList.add(
            "active"
        );

    }
);

removeVoice3.addEventListener(
    "click",
    function () {

        deleteTarget =
            "voice3";

        deleteConfirmTitle.textContent =
            "Remove this voice note?";

        deleteConfirmMessage.textContent =
            "The voice note will be removed when you save this memory.";

        deleteConfirmModal.classList.add(
            "active"
        );

    }
);


// =========================
// CANCEL DELETE
// =========================

cancelDelete.addEventListener(
    "click",
    function () {

        deleteTarget =
            null;

        deleteTargetId =
            null;

        deleteConfirmModal.classList.remove(
            "active"
        );

    }
);


// =========================
// CONFIRM DELETE
// =========================

confirmDelete.addEventListener(
    "click",
    function () {

        // Removing a photo or voice note from the
        // daily card is an edit — it only becomes
        // permanent once the memory is saved.

        const memoryFormTargets = [
            "photo",
            "photo2",
            "photo3",
            "voice",
            "voice2",
            "voice3"
        ];

        if (
            memoryFormTargets.includes(
                deleteTarget
            )
        ) {

            isMemoryDirty = true;

        }

        if (
            deleteTarget ===
            "photo"
        ) {

            photoRemoved =
                true;

            dailyPhoto.value =
                "";

            dailyPhotoPreview.src =
                "";

            dailyPhotoPreview.classList.remove(
                "show"
            );

            removePhoto.classList.remove(
                "show"
            );

            photoName.textContent =
                "";

        }

        if (
            deleteTarget ===
            "photo2"
        ) {

            photoRemoved2 =
                true;

            dailyPhoto2.value =
                "";

            dailyPhotoPreview2.src =
                "";

            dailyPhotoPreview2.classList.remove(
                "show"
            );

            removePhoto2.classList.remove(
                "show"
            );

            photoName2.textContent =
                "";

        }

        if (
            deleteTarget ===
            "photo3"
        ) {

            photoRemoved3 =
                true;

            dailyPhoto3.value =
                "";

            dailyPhotoPreview3.src =
                "";

            dailyPhotoPreview3.classList.remove(
                "show"
            );

            removePhoto3.classList.remove(
                "show"
            );

            photoName3.textContent =
                "";

        }


        if (
            deleteTarget ===
            "voice"
        ) {

            voiceRemoved =
                true;

            recordedVoiceBlob =
                null;

            voicePreview.pause();

            voicePreview.removeAttribute(
                "src"
            );

            voicePreview.load();

            voicePreview.hidden =
                true;

            removeVoice.hidden =
                true;

            recordVoice.hidden =
                false;

        }

        if (
            deleteTarget ===
            "voice2"
        ) {

            voiceRemoved2 =
                true;

            recordedVoiceBlob2 =
                null;

            voicePreview2.pause();

            voicePreview2.removeAttribute(
                "src"
            );

            voicePreview2.load();

            voicePreview2.hidden =
                true;

            removeVoice2.hidden =
                true;

        }

        if (
            deleteTarget ===
            "voice3"
        ) {

            voiceRemoved3 =
                true;

            recordedVoiceBlob3 =
                null;

            voicePreview3.pause();

            voicePreview3.removeAttribute(
                "src"
            );

            voicePreview3.load();

            voicePreview3.hidden =
                true;

            removeVoice3.hidden =
                true;

        }


        // =========================
        // DELETE SONG (IMMEDIATE)
        // =========================

        if (
            deleteTarget ===
            "song"
        ) {

            const songTransaction =
                memoryDB.transaction(
                    ["songs"],
                    "readwrite"
                );

            const songStore =
                songTransaction.objectStore(
                    "songs"
                );

            songStore.delete(
                deleteTargetId
            );

            songTransaction.oncomplete =
                function () {

                    console.log(
                        "Song deleted from Our Soundtrack."
                    );

                    loadSoundtrack();
                    updateYearStatistics();
                    updateFinaleStats();

                };

        }


        // =========================
        // DELETE BUCKET ITEM (IMMEDIATE)
        // =========================

        if (
            deleteTarget ===
            "bucket"
        ) {

            const bucketDeleteTransaction =
                memoryDB.transaction(
                    ["bucketList"],
                    "readwrite"
                );

            const bucketDeleteStore =
                bucketDeleteTransaction.objectStore(
                    "bucketList"
                );

            bucketDeleteStore.delete(
                deleteTargetId
            );

            bucketDeleteTransaction.oncomplete =
                function () {

                    console.log(
                        "Item removed from Our Little Bucket List."
                    );

                    loadBucketList();
                    updateYearStatistics();
                    updateFinaleStats();

                };

        }


        deleteTarget =
            null;

        deleteTargetId =
            null;

        deleteConfirmModal.classList.remove(
            "active"
        );


        console.log(
            "Memory item marked for removal. Save memory to confirm."
        );

    }
);