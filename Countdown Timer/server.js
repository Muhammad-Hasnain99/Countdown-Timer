const months = [
    "January",
    "Febraury",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "saturday"
]

const giveaway = document.querySelector(".giveaway")
const deadline = document.querySelector(".deadline")
const items = document.querySelectorAll(".deadline-formate h4")

const futureDate = new Date(2024 ,6 ,25,12 ,30 ,30 ,30 ,0)

const weekday = weekdays[futureDate.getDay()]
const date = futureDate.getDate()
const month = months[futureDate.getMonth()]
const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()

giveaway.innerHTML = `<h3 class="text-lg text-black font-medium md:font-mono md:text-xl md:w-[450px] ">Giveaway Ends On ${weekday}, ${date} ${month} ${year}
${hours}:${minutes} pm</h3>`

const futureTime = futureDate.getTime();

function getFutureTime(){
    const today = new Date().getTime();
    const t =futureTime - today;
    // console.log(t);

    const oneday = 24 * 60 * 60 * 1000
    const onehour = 60 * 60 * 1000
    const oneminute = 60 * 1000
    //calculate values
    let days = t / oneday
    days = Math.floor(days)
    let hours = Math.floor((t % oneday) / onehour)
    let minutes = Math.floor((t % onehour) / oneminute)
    let seconds = Math.floor((t % oneminute) / 1000)
    //values array
    const values = [days,hours,minutes,seconds]
    
    function formate(item){
      if( item < 10){
        return (item = ` 0${item}`)
      }
      return item;
    }

    items.forEach(function(item,index){
        item.innerHTML = formate(values[index])
    })

   if(t < 0){
   clearInterval(countdown);
   deadline.innerHTML = `<h4 class="expired text-xl font-mono"> Sorry , The giveaway has been expired </h4>`
}

}
const countdown = setInterval(getFutureTime,1000)
getFutureTime()