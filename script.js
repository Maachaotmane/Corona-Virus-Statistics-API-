// OLD METHOD (Promise)

// fetch("https://coronavirus-19-api.herokuapp.com/countries")
//     .then(function(result){
//         console.log(result.json())
//         return result.json();
//     })

//NEW METHOD
// async function get(){
// const result = await fetch("https://coronavirus-19-api.herokuapp.com/countries")
// const data = await result.json()
// console.log(data)
// }
// get()


// EXAMPLE

const api = "https://coronavirus-19-api.herokuapp.com/";
const header = document.querySelector("#header")
const head = document.querySelector("#head")
const content = document.querySelector("#content")
const contenu = document.querySelector("#contenu")

async function getdata() {
    try{
    const result = await fetch(api+"countries/")
    const data = await result.json();
    Readata(data)
    }catch(e){
        console.log("Error",e.message)
    }
}

function Readata(data) {
    const read = data.map(e => e.country)
    read.sort()
    header.innerHTML += `
    <select class="form-control" onchange="getct(this.value)">
    <option>Choose Country</option>
    ${read.map(e=>`<option>${e}</option>`)}
    </select>
    `

}
async function getct(e) {
  head.innerHTML='';
    const result = await fetch(`${api}`+"countries/"+`${e}`)
    const data = await result.json()
    // console.log(data)
    content.innerHTML = `
<div class="row mt-4">
<div class="col-xl-12 col-lg-12 mb-2">
  <div class="card card-stats mb-4 mb-xl-0 text-center">
    <div class="card-body">
      <div class="row">
        <div class="col">
          <h5 class="card-title text-uppercase text-muted mb-0">Total Cases</h5>
          <span class="h2 font-weight-bold mb-0">${data.cases}</span>
        </div>
        <div class="col-auto">
          <div class="icon icon-shape bg-danger text-white rounded-circle shadow">
            <i class="fas fa-chart-bar"></i>
          </div>
        </div>
      </div>
      <p class="mt-3 mb-0 text-muted text-sm">
        <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
        <span class="text-nowrap">Since last month</span>
      </p>
    </div>
  </div>
</div>
<div class="col-xl-6 col-lg-6">
  <div class="card card-stats mb-4 mb-xl-0">
    <div class="card-body">
      <div class="row">
        <div class="col">
          <h5 class="card-title text-uppercase text-muted mb-0">Active Cases</h5>
          <span class="h2 font-weight-bold mb-0">${data.active}</span>
        </div>
          <div class="col-auto">
          <div class="icon icon-shape bg-warning text-white rounded-circle shadow">
            <i class="fas fa-chart-pie"></i>
          </div>
        </div>
      </div>
      <p class="mt-3 mb-0 text-muted text-sm">
        <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
        <span class="text-nowrap">Since last month</span>
      </p>
    </div>
  </div>
</div>

<div class="col-xl-6 col-lg-6">
  <div class="card card-stats mb-4 mb-xl-0">
    <div class="card-body">
      <div class="row">
        <div class="col">
          <h5 class="card-title text-uppercase text-muted mb-0">New Cases</h5>
          <span class="h2 font-weight-bold mb-0">${data.todayCases}</span>
        </div>
        <div class="col-auto">
          <div class="icon icon-shape bg-warning text-white rounded-circle shadow">
            <i class="fas fa-chart-line"></i>
          </div>
        </div>
      </div>
      <p class="mt-3 mb-0 text-muted text-sm">
        <span class="text-danger mr-2"><i class="fas fa-arrow-down"></i> 3.48%</span>
        <span class="text-nowrap">Since last week</span>
      </p>
    </div>
  </div>
</div>
<div class="col-xl-6 col-lg-6 mt-2">
  <div class="card card-stats mb-4 mb-xl-0">
    <div class="card-body">
      <div class="row">
        <div class="col">
          <h5 class="card-title text-uppercase text-muted mb-0">Total Deaths</h5>
          <span class="h2 font-weight-bold mb-0">${data.deaths}</span>
        </div>
        <div class="col-auto">
        <div class="icon icon-shape bg-danger text-white rounded-circle shadow">
          <i class="fas fa-sad-tear"></i>
        </div>
      </div>
      </div>
      <p class="mt-3 mb-0 text-muted text-sm">
        <span class="text-warning mr-2"><i class="fas fa-arrow-down"></i> 1.10%</span>
        <span class="text-nowrap">Since yesterday</span>
      </p>
    </div>
  </div>
</div>
<div class="col-xl-6 col-lg-6 mt-2">
  <div class="card card-stats mb-4 mb-xl-0">
    <div class="card-body">
      <div class="row">
        <div class="col">
          <h5 class="card-title text-uppercase text-muted mb-0">New Deaths</h5>
          <span class="h2 font-weight-bold mb-0">${data.todayDeaths}</span>
        </div>
        <div class="col-auto">
        <div class="icon icon-shape bg-danger text-white rounded-circle shadow">
          <i class="fas fa-sad-cry"></i>
        </div>
      </div>
      </div>
      <p class="mt-3 mb-0 text-muted text-sm">
        <span class="text-warning mr-2"><i class="fas fa-arrow-down"></i> 1.10%</span>
        <span class="text-nowrap">Since yesterday</span>
      </p>
    </div>
  </div>
</div>
<div class="col-xl-12 col-lg-12 mt-2">
  <div class="card card-stats mb-4 mb-xl-0 text-center">
    <div class="card-body">
      <div class="row">
        <div class="col">
          <h5 class="card-title text-uppercase text-muted mb-0">Total Recovered</h5>
          <span class="h2 font-weight-bold mb-0">${data.recovered}</span>
        </div>
        <div class="col-auto">
          <div class="icon icon-shape bg-info text-white rounded-circle shadow">
            <i class="fas fa-briefcase-medical"></i>
          </div>
        </div>
      </div>
      <p class="mt-3 mb-0 text-muted text-sm">
        <span class="text-success mr-2"><i class="fas fa-arrow-up"></i> 12%</span>
        <span class="text-nowrap">Since last month</span>
      </p>
    </div>
  </div>
</div>
</div>

`

}
async function glb(){
  const result = await fetch(api+"all")
  const data = await result.json()
  // console.log(data)
  contenu.innerHTML = `

  <div class="row mt-4">
<div class="col-xl-12 col-lg-12 mb-2">
  <div class="card card-stats mb-4 mb-xl-0 text-center">
    <div class="card-body">
      <div class="row">
        <div class="col">
          <h5 class="card-title text-uppercase text-muted mb-0">Total Cases</h5>
          <span class="h2 font-weight-bold mb-0">${data.cases}</span>
        </div>
        <div class="col-auto">
          <div class="icon icon-shape bg-warning text-white rounded-circle shadow">
            <i class="fas fa-chart-pie"></i>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</div>
<div class="col-xl-6 col-lg-6">
  <div class="card card-stats mb-4 mb-xl-0">
    <div class="card-body">
      <div class="row">
        <div class="col">
          <h5 class="card-title text-uppercase text-muted mb-0">Total Deaths</h5>
          <span class="h2 font-weight-bold mb-0">${data.deaths}</span>
        </div>
        <div class="col-auto">
        <div class="icon icon-shape bg-danger text-white rounded-circle shadow">
          <i class="fas fa-sad-cry"></i>
        </div>
      </div>
      </div>
      <p class="mt-3 mb-0 text-muted text-sm">
        <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
        <span class="text-nowrap">Since last month</span>
      </p>
    </div>
  </div>
</div>

<div class="col-xl-6 col-lg-6">
  <div class="card card-stats mb-4 mb-xl-0">
    <div class="card-body">
      <div class="row">
        <div class="col">
          <h5 class="card-title text-uppercase text-muted mb-0">Total Recovered</h5>
          <span class="h2 font-weight-bold mb-0">${data.recovered}</span>
        </div>
        <div class="col-auto">
        <div class="icon icon-shape bg-info text-white rounded-circle shadow">
          <i class="fas fa-briefcase-medical"></i>
        </div>
      </div>
      </div>
      <p class="mt-3 mb-0 text-muted text-sm">
        <span class="text-danger mr-2"><i class="fas fa-arrow-down"></i> 3.48%</span>
        <span class="text-nowrap">Since last week</span>
      </p>
    </div>
  </div>
</div>
</div>
</div>

  `
}
getdata()