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
        "One beautiful year, almost complete 💜",
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

function openSurprise(dayNumber) {

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
        store.get(dayNumber);

    request.onsuccess =
        function () {

            const memory =
                request.result;

            if (memory) {

                dailyResponse.value =
                    memory.text || "";

                if (memory.photoName) {

                    photoName.textContent =
                        "📎 " +
                        memory.photoName;

                } else {

                    photoName.textContent =
                        "";

                }

                if (memory.photo) {

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

                } else {

                    dailyPhotoPreview.src =
                        "";

                    dailyPhotoPreview.classList.remove(
                        "show"
                    );

                    removePhoto.classList.remove(
                        "show"
                    );

                }

                memorySaved.classList.add(
                    "show"
                );

            } else {

                dailyResponse.value =
                    "";

                photoName.textContent =
                    "";

                dailyPhotoPreview.src =
                    "";

                dailyPhotoPreview.classList.remove(
                    "show"
                );

                removePhoto.classList.remove(
                    "show"
                );

                memorySaved.classList.remove(
                    "show"
                );

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

    surpriseModal.classList.add(
        "active"
    );

}

// =========================
// CLOSE SURPRISE
// =========================

closeSurprise.addEventListener(
    "click",
    function () {

        surpriseModal.classList.remove(
            "active"
        );

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

            surpriseModal.classList.remove(
                "active"
            );

        }

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

            photoName.textContent =
                "📎 " + file.name;

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

            reader.readAsDataURL(file);

        } else {

            photoName.textContent =
                "";

            dailyPhotoPreview.src =
                "";

            dailyPhotoPreview.classList.remove(
                "show"
            );

            removePhoto.classList.remove(
                "show"
            );

        }

    }
);

// =========================
// INDEXEDDB MEMORY SYSTEM
// =========================

let memoryDB;

const dbRequest =
    indexedDB.open(
        "365DaysOfUsDB",
        4
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

    };

dbRequest.onerror =
    function () {

        console.error(
            "Could not open memory database."
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

        if (
            !text &&
            dailyPhoto.files.length === 0
        ) {

            dailyResponse.focus();

            return;

        }

        const currentDay =
            Number(
                surpriseDay.textContent
            );

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

            day: currentDay,

            text: text,

            photoName:
                dailyPhoto.files.length > 0
                    ? dailyPhoto.files[0].name
                    : "",

            photo:
                dailyPhoto.files.length > 0
                    ? dailyPhoto.files[0]
                    : null,

            savedAt:
                new Date().toISOString()

        };

        const request =
            store.put(memory);

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

        transaction.oncomplete =
            function () {

                memorySaved.classList.add(
                    "show"
                );

                console.log(
                    "Memory saved for Day " +
                    currentDay
                );

                loadMemoryMuseum();
                updateYearStatistics();
                updateFinaleStats();

            };

    }
);

// =========================
// REMOVE PHOTO
// =========================

removePhoto.addEventListener(
    "click",
    function () {

        const currentDay =
            Number(
                surpriseDay.textContent
            );

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

        const transaction =
            memoryDB.transaction(
                ["memories"],
                "readwrite"
            );

        const store =
            transaction.objectStore(
                "memories"
            );

        const request =
            store.get(currentDay);

        request.onsuccess =
            function () {

                const memory =
                    request.result;

                if (!memory) {
                    return;
                }

                memory.photo =
                    null;

                memory.photoName =
                    "";

                store.put(memory);

                console.log(
                    "Photo removed from Day " +
                    currentDay
                );

            };

        transaction.oncomplete =
            function () {

                loadMemoryMuseum();
                updateYearStatistics();
                updateFinaleStats();

            };

    }
);

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
            // PHOTO
            // =========================

            if (memory.photo) {

                const image =
                    document.createElement(
                        "img"
                    );

                image.classList.add(
                    "museum-photo"
                );

                image.alt =
                    "Memory from Day " +
                    memory.day;

                image.src =
                    URL.createObjectURL(
                        memory.photo
                    );

                memoryCard.appendChild(
                    image
                );

            }

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

        const confirmed =
            confirm(
                "Delete this song from Our Soundtrack?"
            );

        if (!confirmed) {
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

        store.delete(songId);

        transaction.oncomplete =
            function () {

                console.log(
                    "Song deleted from Our Soundtrack."
                );

                loadSoundtrack();
                updateYearStatistics();
                updateFinaleStats();

            };

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

            const confirmed =
                confirm(
                    "Remove this from Our Little Bucket List?"
                );

            if (!confirmed) {
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

            store.delete(itemId);

            transaction.oncomplete =
                function () {

                    loadBucketList();
                    updateYearStatistics();
                    updateFinaleStats();

                };

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
                memories.filter(
                    function (memory) {

                        return !!memory.photo;

                    }
                ).length;

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

                            return (
                                text.includes(
                                    searchTerm
                                ) ||
                                photoName.includes(
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


// =========================
// MOBILE / BROWSER BACK GESTURE
// =========================

let currentPage = "landing";

// =========================
// ENTER SECRET HOME
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