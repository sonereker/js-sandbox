/*
const square = function (number) {
    return number * number;
}
*/

const square = number => number * number

console.log(square(5))

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
]

/*
const activeJobs = jobs.filter(function (job) {
  return job.isActive;
});
*/

const activeJobs = jobs.filter(job => job.isActive)
console.log(activeJobs)

const person = {
  talk() {
    self = this
    setTimeout(function () {
      console.log('this', this)
      console.log('self', self)
    }, 1000)

    setTimeout(() => console.log('this', this), 1000)
  },
}

person.talk()
