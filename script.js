const umimJs = document.querySelector("#learn")
const endCourse2024 = dayjs("2024-12-09")
const now = dayjs()


if(now.isAfter(endCourse2024)) {
    umimJs.textContent = "Ano, základy JavaScriptu už máš v hlavě!"
} else {
    umimJs.textContent = "Zdaleka neee! Trénink dělá mistra, tak jen tak dál!"
}