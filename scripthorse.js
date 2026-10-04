let horses = []
// fetch data from json //
fetch("horses.json").then(response => response.json())
    .then(json => {
        horses = json
        for(let i = 0; i < horses.length; i++) {
            let horse = horses[i]
            makeDisplay(horse)
        }
    })
.catch(error => console.log("error", error))

//// display items ////
function makeDisplay(horse) {
    // the whole container for all the indiv horse info //
        let horsesSection = document.querySelector("#horses")
    // // stuff for horses' status //
    //     let status = horse.status.split(",")
    //     let statusList = document.createElement("p")
    // the individual horses & their information //
        let newHorse = document.createElement("div")
    // make the section with all the horse info //
        newHorse.classList.add("card")
        newHorse.innerHTML = `
                <h3 class="horseName">${horse["horse_name"]}</h3>
                <div>
                    <img class="horseImage" src="${horse.image_path}" alt="${horse.alt_text}">
                </div>
                <p><span class="font-bold">Status:</span> ${horse["status"]}</p>
                <p><span class="font-bold"> Foaled:</span> ${horse["foaled"]}</p>
                <p><span class="font-bold">Owner:</span> ${horse["owner"]}</p>
                <p><span class="font-bold">Gender:</span> ${horse["gender"]}</p>
                <p><span class="font-bold">Coat:</span> ${horse["coat"]}</p>
                <p><span class="font-bold">Surface(s) Ran:</span> ${horse["surface"]}</p>
            `
    // append things //
        horsesSection.appendChild(newHorse)
}

// SEARCH BAR ////
    let searchBar = document.getElementById("site-search")
    searchBar.addEventListener("keyup", function() {
        let search = searchBar.value.toLowerCase()
        let filteredHorses = horses.filter(horse =>
            horse.horse_name.toLowerCase().startsWith(search)
        )
        let horsesSection = document.querySelector("#horses")
        horsesSection.innerHTML = `
            <h2 class="filter-title">Search Results</h2>
        `
        for (let horse of filteredHorses) {
            makeDisplay(horse)
        }
        let filters = document.querySelectorAll(".filter")
        filters.forEach(filter => {
            filter.classList.remove("clicked")
        })
    })

// TOGGLE BUTTONS //
let showStatusBtns = document.getElementById("status-filter-sec")
let showGenderbtns = document.getElementById("gender-filter-sec")
let showCoatbtns = document.getElementById("coat-filter-sec")
let showSurfbtns = document.getElementById("surface-filter-sec")
// toggle for status buttons //
    function toggleStatuses() {
        if (showStatusBtns.style.display === "inline-block") {
            showStatusBtns.style.display = "none"
        } else {
            showStatusBtns.style.display = "inline-block"
            showGenderbtns.style.display = "none"
            showCoatbtns.style.display = "none"
            showSurfbtns.style.display = "none"
        }
    } 
// toggle for gender buttons //
    function toggleGenders() {
        if (showGenderbtns.style.display === "inline-block") {
            showGenderbtns.style.display = "none"
        } else {
            showGenderbtns.style.display = "inline-block"
            showStatusBtns.style.display = "none"
            showCoatbtns.style.display = "none"
            showSurfbtns.style.display = "none"
        }
    } 
// toggle for coat buttons //
    function toggleCoat() {
        if (showCoatbtns.style.display === "inline-block") {
            showCoatbtns.style.display = "none"
        } else {
            showCoatbtns.style.display = "inline-block"
            showGenderbtns.style.display = "none"
            showStatusBtns.style.display = "none"
            showSurfbtns.style.display = "none"
        }
    }
// toggle for surface buttons //
    function toggleSurface() {
        if (showSurfbtns.style.display === "inline-block") {
            showSurfbtns.style.display = "none"
        } else {
            showSurfbtns.style.display = "inline-block"
            showGenderbtns.style.display = "none"
            showCoatbtns.style.display = "none"
            showStatusBtns.style.display = "none"
        }
    }
// Button Clicked State //
    //// call for all buttons with the class filter
    let filters = document.querySelectorAll(".filter")
    // make clicked state for buttons //
    filters.forEach(filter => {
        filter.addEventListener("click", function() {
            // Remove clicked state from all buttons //
            filters.forEach(filter => {
                filter.classList.remove("clicked")
            })
            // Add clicked state to clicked button //
            this.classList.add("clicked")
            })
    })
// remove clicked status when show all //
document.querySelector("#show-all-btn").addEventListener("click", function() {
    let filters = document.querySelectorAll(".filter")
    filters.forEach(filter => {
        filter.classList.remove("clicked")
    })
})

//// FILTERS ////
/// filter for horse status ///
    // function makeStatusFilter(status) {
    //     document.querySelector(`[horse-status="${status}"]`).addEventListener("click", function() {
    //     let horsesSection = document.querySelector("#horses")
    //     horsesSection.innerHTML = ""
    //     let filteredStatus = horses.filter(horse => horse.status.toLowerCase() === status);
    //     for(let i = 0; i < filteredStatus.length; i++) {
    //         makeDisplay(filteredStatus[i])
    //     }
    //     let filters = document.querySelectorAll(".filter")
    //     styleFilters(filters, status)
    // })
    // }
    // array for statuses //
    // let statuses = ["active", "retired", "retired (rip)", "retired (other work)", "retired (stud)", "retired (broodmare)"]
    // for(let i = 0; i < statuses.length; i++) {
    //     makeStatusFilter(statuses[i])
    // }
    // would be nice if by default it highlights them in a different color & you can check a box to show only applicable, or the other way around //
        // but alas idk how to do that //
        // SHOW ALL BUTTON //
        document.querySelector('[horse-status="all"]').addEventListener("click", function() {
            let horsesSection = document.querySelector("#horses")
            horsesSection.innerHTML = `
                <h2 class="filter-title">All</h2>
                `
            for(let i = 0; i < horses.length; i++) {
                makeDisplay(horses[i])
            }
            let filters = document.querySelectorAll(".filter")
            styleFilters(filters, "all")
            })
        // active //
        document.querySelector('[horse-status="active"]').addEventListener("click", function() {
            let horsesSection = document.querySelector("#horses")
            horsesSection.innerHTML = `
                <h2 class="filter-title">Currenty Active</h2>
                `
            let filteredStatus = horses.filter(horse => horse.status.toLowerCase() === "active");
            for(let i = 0; i < filteredStatus.length; i++) {
                makeDisplay(filteredStatus[i])
            }
            let filters = document.querySelectorAll(".filter")
                styleFilters(filters, "active")
            })
        // retired //
        document.querySelector('[horse-status="retired"]').addEventListener("click", function() {
            let horsesSection = document.querySelector("#horses")
            horsesSection.innerHTML = `
                <h2 class="filter-title">Retired</h2>
                `
            let filteredStatus = horses.filter(horse => horse.status.toLowerCase() === "retired");
            for(let i = 0; i < filteredStatus.length; i++) {
                makeDisplay(filteredStatus[i])
            }
            let filters = document.querySelectorAll(".filter")
                styleFilters(filters, "retired")
            })
        // RIP //
        document.querySelector('[horse-status="retired (rip)"]').addEventListener("click", function() {
            let horsesSection = document.querySelector("#horses")
            horsesSection.innerHTML = `
                <h2 class="filter-title">Passed Away (RIP)</h2>
                `
            let filteredStatus = horses.filter(horse => horse.status.toLowerCase() === "retired (rip)");
            for(let i = 0; i < filteredStatus.length; i++) {
                makeDisplay(filteredStatus[i])
            }
            let filters = document.querySelectorAll(".filter")
            styleFilters(filters, "retired (rip)")
            })
        // broodmare //
        document.querySelector('[horse-status="retired (broodmare)"]').addEventListener("click", function() {
            let horsesSection = document.querySelector("#horses")
            horsesSection.innerHTML = `
                <h2 class="filter-title">Broodmare Duty</h2>
                `
            let filteredStatus = horses.filter(horse => horse.status.toLowerCase() === "retired (broodmare)");
            for(let i = 0; i < filteredStatus.length; i++) {
                makeDisplay(filteredStatus[i])
            }
            let filters = document.querySelectorAll(".filter")
            styleFilters(filters, "retired (broodmare)")
            })
        // stud //
        document.querySelector('[horse-status="retired (stud)"]').addEventListener("click", function() {
            let horsesSection = document.querySelector("#horses")
            horsesSection.innerHTML = `
                <h2 class="filter-title">Stud Duty</h2>
                `
            let filteredStatus = horses.filter(horse => horse.status.toLowerCase() === "retired (stud)");
            for(let i = 0; i < filteredStatus.length; i++) {
                makeDisplay(filteredStatus[i])
            }
            let filters = document.querySelectorAll(".filter")
            styleFilters(filters, "retired (stud)")
            })
        // working //
        document.querySelector('[horse-status="retired (other work)"]').addEventListener("click", function() {
            let horsesSection = document.querySelector("#horses")
            horsesSection.innerHTML = `
                <h2 class="filter-title">Working as Off-Track Thoroughbreds</h2>
                `
            let filteredStatus = horses.filter(horse => horse.status.toLowerCase() === "retired (other work)");
            for(let i = 0; i < filteredStatus.length; i++) {
                makeDisplay(filteredStatus[i])
            }
            let filters = document.querySelectorAll(".filter")
            styleFilters(filters, "retired (other work)")
            })
/// filter for horse surfaces ///
    function makeSurfaceFilter(surface) {
        document.querySelector(`[horse-status="${surface}"]`).addEventListener("click", function() {
        let horsesSection = document.querySelector("#horses")
        horsesSection.innerHTML = ""
        let filteredSurface = horses.filter(horse => horse.surface.toLowerCase() === surface);
        for(let i = 0; i < filteredSurface.length; i++) {
            makeDisplay(filteredSurface[i])
        }
        let filters = document.querySelectorAll(".filter")
        styleFilters(filters, surface)
    })
    }
        // turf //
        document.querySelector('[horse-surface="turf"]').addEventListener("click", function() {
            let horsesSection = document.querySelector("#horses")
            horsesSection.innerHTML = `
                <h2 class="filter-title">Turf</h2>
                `
            let filteredSurfaces = horses.filter(horse => horse.surface.toLowerCase() === "turf" || "turf (steeplechase)");
            for(let i = 0; i < filteredSurfaces.length; i++) {
                makeDisplay(filteredSurfaces[i])
            }
            let filters = document.querySelectorAll(".filter")
            styleFilters(filters, "turf")
            })
        // dirt //
        document.querySelector('[horse-surface="dirt"]').addEventListener("click", function() {
            let horsesSection = document.querySelector("#horses")
            horsesSection.innerHTML = `
                <h2 class="filter-title">Dirt</h2>
                `
            let filteredSurfaces = horses.filter(horse => horse.surface.toLowerCase() === "dirt");
            for(let i = 0; i < filteredSurfaces.length; i++) {
                makeDisplay(filteredSurfaces[i])
            }
            let filters = document.querySelectorAll(".filter")
            styleFilters(filters, "dirt")
            })
        // turf/dirt //
        document.querySelector('[horse-surface="turf/dirt"]').addEventListener("click", function() {
            let horsesSection = document.querySelector("#horses")
            horsesSection.innerHTML = `
                <h2 class="filter-title">Turf/Dirt</h2>
                `
            let filteredSurfaces = horses.filter(horse => horse.surface.toLowerCase() === "turf/dirt");
            for(let i = 0; i < filteredSurfaces.length; i++) {
                makeDisplay(filteredSurfaces[i])
            }
            let filters = document.querySelectorAll(".filter")
            styleFilters(filters, "turf/dirt")
            }) 
/// filter for horse coat colors ///
    function makeCoatFilter(coat) {
        document.querySelector(`[horse-status="${coat}"]`).addEventListener("click", function() {
        let horsesSection = document.querySelector("#horses")
        horsesSection.innerHTML = ""
        let filteredCoat = horses.filter(horse => horse.coat.toLowerCase() === coat);
        for(let i = 0; i < filteredCoat.length; i++) {
            makeDisplay(filteredCoat[i])
        }
        let filters = document.querySelectorAll(".filter")
        styleFilters(filters, surface)
    })
    }
        // bay //
        document.querySelector('[horse-coat="bay"]').addEventListener("click", function() {
            let horsesSection = document.querySelector("#horses")
            horsesSection.innerHTML = `
                <h2 class="filter-title">Bay</h2>
                `
            let filteredCoat = horses.filter(horse => horse.coat.toLowerCase() === "bay");
            for(let i = 0; i < filteredCoat.length; i++) {
                makeDisplay(filteredCoat[i])
            }
            let filters = document.querySelectorAll(".filter")
            styleFilters(filters, "bay")
            })
        // dark bay //
        document.querySelector('[horse-coat="dark bay"]').addEventListener("click", function() {
            let horsesSection = document.querySelector("#horses")
            horsesSection.innerHTML = `
                <h2 class="filter-title">Dark Bay</h2>
                `
            let filteredCoat = horses.filter(horse => horse.coat.toLowerCase() === "dark bay");
            for(let i = 0; i < filteredCoat.length; i++) {
                makeDisplay(filteredCoat[i])
            }
            let filters = document.querySelectorAll(".filter")
            styleFilters(filters, "dark bay")
            })
        // chestnut //
        document.querySelector('[horse-coat="chestnut"]').addEventListener("click", function() {
            let horsesSection = document.querySelector("#horses")
            horsesSection.innerHTML = `
                <h2 class="filter-title">Chestnut</h2>
                `
            let filteredCoat = horses.filter(horse => horse.coat.toLowerCase() === "chestnut");
            for(let i = 0; i < filteredCoat.length; i++) {
                makeDisplay(filteredCoat[i])
            }
            let filters = document.querySelectorAll(".filter")
            styleFilters(filters, "chestnut")
            })
        // gray //
        document.querySelector('[horse-coat="gray"]').addEventListener("click", function() {
            let horsesSection = document.querySelector("#horses")
            horsesSection.innerHTML = `
                <h2 class="filter-title">Gray</h2>
                `
            let filteredCoat = horses.filter(horse => horse.coat.toLowerCase() === "gray");
            for(let i = 0; i < filteredCoat.length; i++) {
                makeDisplay(filteredCoat[i])
            }
            let filters = document.querySelectorAll(".filter")
            styleFilters(filters, "gray")
            })
        // white //
        document.querySelector('[horse-coat="white"]').addEventListener("click", function() {
            let horsesSection = document.querySelector("#horses")
            horsesSection.innerHTML = `
                <h2 class="filter-title">White</h2>
                `
            let filteredCoat = horses.filter(horse => horse.coat.toLowerCase() === "white");
            for(let i = 0; i < filteredCoat.length; i++) {
                makeDisplay(filteredCoat[i])
            }
            let filters = document.querySelectorAll(".filter")
            styleFilters(filters, "white")
            })
/// filter for horse genders ///
    function makeGenderFilter(gender) {
        document.querySelector(`[horse-status="${gender}"]`).addEventListener("click", function() {
        let horsesSection = document.querySelector("#horses")
        horsesSection.innerHTML = ""
        let filteredGender = horses.filter(horse => horse.gender.toLowerCase() === gender);
        for(let i = 0; i < filteredGender.length; i++) {
            makeDisplay(filteredGender[i])
        }
        let filters = document.querySelectorAll(".filter")
        styleFilters(filters, surface)
    })
    }
        // filly //
        document.querySelector('[horse-gender="filly"]').addEventListener("click", function() {
            let horsesSection = document.querySelector("#horses")
            horsesSection.innerHTML = `
                <h2 class="filter-title">Filly</h2>
                `
            let filteredGender = horses.filter(horse => horse.gender.toLowerCase() === "filly");
            for(let i = 0; i < filteredGender.length; i++) {
                makeDisplay(filteredGender[i])
            }
            let filters = document.querySelectorAll(".filter")
            styleFilters(filters, "filly")
            })
        // mare //
        document.querySelector('[horse-gender="mare"]').addEventListener("click", function() {
            let horsesSection = document.querySelector("#horses")
            horsesSection.innerHTML = `
                <h2 class="filter-title">Mare</h2>
                `
            let filteredGender = horses.filter(horse => horse.gender.toLowerCase() === "mare");
            for(let i = 0; i < filteredGender.length; i++) {
                makeDisplay(filteredGender[i])
            }
            let filters = document.querySelectorAll(".filter")
            styleFilters(filters, "mare")
            })
        // colt //
        document.querySelector('[horse-gender="colt"]').addEventListener("click", function() {
            let horsesSection = document.querySelector("#horses")
            horsesSection.innerHTML = `
                <h2 class="filter-title">Colt</h2>
                `
            let filteredGender = horses.filter(horse => horse.gender.toLowerCase() === "colt");
            for(let i = 0; i < filteredGender.length; i++) {
                makeDisplay(filteredGender[i])
            }
            let filters = document.querySelectorAll(".filter")
            styleFilters(filters, "colt")
            })
        // horse //
        document.querySelector('[horse-gender="horse"]').addEventListener("click", function() {
            let horsesSection = document.querySelector("#horses")
            horsesSection.innerHTML = `
                <h2 class="filter-title">Horse</h2>
                `
            let filteredGender = horses.filter(horse => horse.gender.toLowerCase() === "horse");
            for(let i = 0; i < filteredGender.length; i++) {
                makeDisplay(filteredGender[i])
            }
            let filters = document.querySelectorAll(".filter")
            styleFilters(filters, "horse")
            })
        // gelding //
        document.querySelector('[horse-gender="gelding"]').addEventListener("click", function() {
            let horsesSection = document.querySelector("#horses")
            horsesSection.innerHTML = `
                <h2 class="filter-title">Gelding</h2>
                `
            let filteredGender = horses.filter(horse => horse.gender.toLowerCase() === "gelding");
            for(let i = 0; i < filteredGender.length; i++) {
                makeDisplay(filteredGender[i])
            }
            let filters = document.querySelectorAll(".filter")
            styleFilters(filters, "gelding")
            })

