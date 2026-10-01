let horses
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
    // stuff for horses' status //
        let status = horse.status.split(",")
        let statusList = document.createElement("p")
    // the individual horses & their information //
        let newHorse = document.createElement("div")
    // make the section with all the horse info //
        newHorse.classList.add("card")
        newHorse.innerHTML = `
                <h3 class="horseName">${horse["horse_name"]}</h3>
                <div>
                    <img class="horseImage" src="${horse.image_path}" alt="${horse.alt_text}">
                </div>
                <span>Status: ${horse["status"]}</span>
                <span>Foaled: ${horse["foaled"]}</span>
                <span>Owner: ${horse["owner"]}</span>
                <span>Gender: ${horse["gender"]}</span>
                <span>Coat: ${horse["coat"]}</span>
                <span>Surface(s) Ran: ${horse["surface"]}</span>
            `
    // append things //
        horsesSection.appendChild(newHorse)
} //end//

//// filter for horse status////
// show all hopefully//
    document.querySelector('[horse-status="all"]').addEventListener("click", function(event) {
    let filteredStatus= event.target
    let selectedStatus= filteredStatus.getAttribute("horse-status")
    let horsesSection = document.querySelector("#horses")
    horsesSection.innerHTML = "" 
    let filters = document.querySelectorAll(".statusFilter")
    
    for(let i = 0; i < movies.length; i++) {
            let horse = horses[i]
            let statuses = horse.statuses.toLowerCase().split(",")
            if (statuses.includes("all") || selectedStatus === "all") {
                makeDisplay(horse)
            } 
    }
    // remove and set filter element style //
    styleFilters(filters, selectedGenre)
})
// trying to make the all button work (under statuses) //
    function makeStatusFilter(status) {
        document.querySelector(`[horse-status="${status}"]`).addEventListener("click", function() {
        let horsesSection = document.querySelector("#horses")
        horsesSection.innerHTML = ""
        let filteredStatus = horses.filter(horse => horse.status.toLowerCase() === status);
        for(let i = 0; i < filteredStatus.length; i++) {
            makeDisplay(filteredStatus[i])
        }
        let filters = document.querySelectorAll(".filter")
        styleFilters(filters, status)

        if (statuses.includes(`${status}`) || filteredStatus === "all") {
            makeDisplay(horses)
            }
    })
    }
/// trying to make clicking a dropdown option bring up the name of what you're filtering ///
// document.querySelector('sort-status').addEventListener("click", function() {
//     let showfilterType = document.querySelector('filter-type')
//     showfilterType.innerHTML = `
//         <span>Status</span>
//     `
// })
// //// Okay so we're gonna try and make the dropdown menu bring up the buttons ////
// document.querySelector('sort-status').addEventListener("click", function() {
//     let showAfterClickDropStatus = document.querySelector("#filter-sec")
//     showAfterClickDropStatus.classList.add("#filter-sec")
//     showAfterClickDropStatus.innerHTML = `
//             <button horse-status="all" id="show-all-btn">All</button>
//             <button horse-status="active" id="active-btn" class="filter statusFilter">Active</button>
//             <button horse-status="retired" id="retired-btn" class="filter statusFilter">Retired</button>
//             <button horse-status="retired (rip)" class="filter statusFilter">RIP</button>
//             <button horse-status="retired (stud)" class="filter statusFilter">Stud</button>
//             <button horse-status="retired (broodmare)" class="filter statusFilter">Broodmare</button>
//             <button horse-status="retired (other work)" class="filter statusFilter">Working</button>
//     `
// })
// array for statuses //
    let statuses = ["all", "active", "retired", "retired (rip)", "retired (other work)", "retired (stud)", "retired (broodmare)"]
    for(let i = 0; i < statuses.length; i++) {
        makeStatusFilter(statuses[i])
    }
    // active horses filter eventListener //
        // would be nice if by default it highlights them in a different color & you can check a box to show only applicable, or the other way around //
            // but alas idk how to do that //
        document.querySelector('[horse-status="all"]').addEventListener("click", function() {
            let horsesSection = document.querySelector("#horses")
            horsesSection.innerHTML = `
                <h2 class="filter-title">All</h2>
                `
            let filteredStatus = horses.filter(horse => horse.status.toLowerCase() === "all");
            for(let i = 0; i < filteredStatus.length; i++) {
                makeDisplay(filteredStatus[i])
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