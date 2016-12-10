"use strict"

class App{
    constructor()
    {
      this.media = [
        {
          "img" : "img/cappa.jpg",
          "alignment" : "center-align",
          "caption": "Ballooning Cappadocia",
          "slogan": "Life is short and the world is wide."
        },
        {
          "img" : "img/nabanana.jpg",
          "alignment" : "left-align",
          "caption": "Nabana no Sato",
          "slogan": "Make memories. Capture the moments."
        },
        {
          "img" : "img/stargaze1.jpg",
          "alignment" : "right-align",
          "caption": "Night sky in Aoraki",
          "slogan": "Wherever you go, go with all your heart."
        },
        {
          "img" : "img/victoria.jpg",
          "alignment" : "center-align",
          "caption": "Sunset at the Devil's pool.",
          "slogan": "You will never have this day again so make it count."
        }
      ];

      this.entry = [
        {
          "id": 1,
          "what": "Aurora Borealis Viewing",
          "description": "The Aurora is an incredible light show caused by collisions between electrically charged particles released from the sun that enter the earth's atmosphere and collide with gases such as oxygen and nitrogen.",
          "photo": "img/aurora.jpg",
          "toDo": [
            {
              "pers": "Know the best time of the year to see Aurora Borealis.",
              "sec": "Book tickets and hotels in advance."
            },
            {
              "pers": "Get a travel guide book for help.",
              "sec": "Prepare stuff you may need to combat below 0 temperature."
            },
            {
              "pers": "Don't forget to bring a camera with you.",
              "sec": "Learn some Icelandic greetings if you can."
            }
          ],

          "location": "Jokulsarlon Lagoon, Iceland",
          "language": "Icelandic",
          "capital": "Reykjavik",
          "procedure": [
          "Get a valid passport 6 months beyond departure from Iceland",
          "Call or visit Iceland or Schengen Consulate for inquiry.",
          "Apply for a visa at least 90 days before your desired date of departure.",
          "Prepare clearances and documents necessary for visa application",
          "Secure a travel insurance in Schengen countries.",
          "Provide a bank statement showing you have enough money for travel.",
          "Reserve hotels and flight tickets with one month allowance from your return date.",
          "See visa application info online at the consulate's official website."   
          ]
        },

        {
          "id": 2,
          "what": "Ride the Steel Dragon 2000",
          "description": " Opened, appropriately, in 2000—The Year of the Dragon in Asia, the amusement park features several roller coasters, thrill rides, and kid rides, a giant Ferris wheel, and a water park.",
          "photo": "img/nabana.jpg",
          "toDo":[
            {
              "pers": "Decide on which season to travel to Japan.",
              "sec": "Book tickets and hotels in advance."
            },
            {
              "pers": "See the Shinkansen schedule online and order a tourist pass.",
              "sec": "Prepare stuff you may need depending on the season of your trip."
            },
            {
             "pers": "Check trip advisory and Japan tourist sites for more info.",
             "sec": "Learn basic Nihongo greetigs."
            }
          ],

          "location": "Nagashima Spa Land, Mie-ken, Japan",
          "language": "Nihongo",
          "capital" : "Tokyo",
          "procedure": [
          "Get a valid passport 6 months beyond departure from Japan.",
          "Call or visit Japanese Consulate for inquiry.",
          "Apply for a visa through Japan Embassy accredited agencies.",
          "Prepare clearances and documents necessary for visa application",
          "Secure a travel insurance that covers the duration of your trip.",
          "Provide a bank statement showing you have enough money for travel.",
          "Reserve hotels and flight tickets with one month allowance from your return date.",
          "See visa application info online at the consulate's official website."   
         ]
        },

        {
          "id": 3,
          "what": "Go fishing with Hime",
          "description": "The waters off Malindi, on Kenya’s central coast, offer one of the few places on the planet where anglers can realistically hope to accomplish a billfish royal slam, or even a fantasy slam.",
          "photo": "img/fishing.jpg",
          "toDo":[
            {
              "pers": "Fishing season starts from July to September, decide when to go.",
              "sec": "Contact a travel agency for advice if it's your first time in Africa."
            },
            {
              "pers": "See where to stay and check out the local guides in Malindi",
              "sec": "Book hotels and flight tickets ahead of time to save some penny."
            },
            {
             "pers": "Secure a certificate of immunization against yellow fever, malaria and cholera.",
             "sec": "Learn basic Kishwahili greetigs to interact with the locals."
            }
          ],

          "location": "Malindi Bay, Kenya",
          "language": "English, Kishwahili",
          "capital": "Nairobi",
          "procedure": [
          "Get a valid passport 6 months beyond departure from Kenya.",
          "Call or visit Kenya Consulate for inquiry.",
          "Accomplish a visa application form with an attached copy of itinerary.",
          "Prepare clearances and documents necessary for visa application",
          "Secure a travel insurance that covers the duration of your trip.",
          "Provide a bank statement showing you have enough money for travel.",
          "Reserve hotels and flight tickets with one month allowance from your return date.",
          "See visa application info online at the consulate's official website."   
         ]
        },

        {
          "id": 4,
          "what": "Stargazing in New Zealand, New Zealand",
          "description": "On a nightime tour, Magellanic Clouds can be spotted— satellite galaxies of the Milky Way visible only from the southern hemisphere.",
          "photo": "img/stargaze.jpg",
          "toDo":[
            {
              "pers": "The Magellanic Clouds can be seen throughout the year.",
              "sec": "Know when is the best time for you to travel to New Zealand."
            },
            {
              "pers": "Tekapo Starlight provides a guided tour in Aoraki. Book in advance.",
              "sec": "Reserve hotels and flight tickets ahead of time to save some penny."
            },
            {
             "pers": "Be sure to read or get some travel guide books before you go.",
             "sec": "Visit the tourist information center to get maps and other information."
            }
          ],

          "location": "Aoraki Mackenzie Dark Sky Reserve",
          "language": "English, Maori",
          "capital": "Wellington",
          "procedure": [
          "Check if you need a visa to enter New Zealand.",
          "Complete the visa application form and visa checklist.",
          "Read “Security Regulation” of visa application centre.",
          "Provide a clear photocopy of all the original documents needed.",
          "Secure a travel insurance that covers the duration of your trip.",
          "Refer to http://www.immigration.govt.nz for more details."
          ]
        },

        {
          "id": 5,
          "what": "Escape on a Safari Journey",
          "description": "In 1836 William Cornwallis Harris led an expedition purely to observe and record wildlife and landscapes by the expedition's members. Harris established the safari style of journey, starting with a not too strenuous rising at first light, an energetic day walking, an afternoon rest then concluding with a formal dinner and telling stories in the evening over drinks and tobacco.",
          "photo": "img/safari.jpg",
          "toDo":[
            {
              "pers": "East Africa is on the equator, and thus has no seasons.",
              "sec": "The best method of dress is layering. Prepare a hat, too."
            },
            {
              "pers": "You will do quite a lot of walking, so light weight hiking boots are advisable. ",
              "sec": "The wildlife is at its most active in the early morning and evening, rise early too."
            },
            {
             "pers": "Sunscreen, min 15 SPF, and moisturizer are a must in the African sunshine.",
             "sec": "Bring correct transformer and plug adapters, flashlight or headlamps, and binoculars."
            },
            {
             "pers": "Be sure you had your medical check up before the trip and medicines you might need.",
             "sec": "Leave your jewelry at home. A plastic watch is all you really need!"
            }
          ],

          "location": "Bwindi UNESCO World Heritage Site, Uganda",
          "language": "English, Swahili",
          "capital": "Kampala",
          "procedure": [
          "Get a valid passport 6 months beyond departure from Uganda.",
          "Contact the nearest embassy or consulate of Uganda.",
          "Fill-up the visa application form online at https://uganda.visahq.",
          "Prepare clearances and documents necessary for visa application",
          "Provide a bank statement showing you have enough money for travel.",
          "Get a travel insurance and medical certifate showing you're healthy to travel to Africa.",
          "Reserve hotels and flight tickets with one month allowance from your return date."
          ]
        },

        {
          "id": 6,
          "what": "Embark on a Santorini Wine Tour",
          "description": "A journey to the historic vineyards of Santorini, visit the most significant sights, and taste the power of the volcanic wines and traditional products of the island. Learn about the soil and the microclimate, see the vines, and learn about the cultivating techniques.",
          "photo": "img/winetaste.jpg",
          "toDo":[
            {
              "pers": "April, May, October, and early November are great times for touring Santorini.",
              "sec": "Hotels are much cheaper in November to March. Book early!"
            },
            {
              "pers": "Search for the best, but economical wine tour company in the island.",
              "sec": "Reserve a rent-a-car service and explore the island, it’s fun."
            },
            {
             "pers": "Read blogs and post of people who have embarked in Santorini Wine Tours.",
             "sec": "The island isn't all about wines, check other sightseeing place you can go."
            },
            {
             "pers": "Make a checklist of the stuff you may need for your trip.",
             "sec": "Don't forget to bring a camera to keep some of your memories in photos."
            }
          ],

          "location": "Santorini, Greece",
          "language": "Greek",
          "capital": "Athens",
          "procedure": [
          "Check the current validity of your passport.",
          "Make sure your passport has blank visa pages.",
          "confirm if transit visa is required for any connections.",
          "Prepare clearances and documents necessary for visa application",
          "Secure a travel insurance in Schengen countries.",
          "Provide a bank statement showing you have enough money for travel.",
          "Reserve hotels and flight tickets with one month allowance from your return date.",
          "See visa application info online at the consulate's official website."  
         ]
        }
      ];

      this.state = [
        {
          "bind": {
          "procedures": [],
          "toDopers": [],
          "toDosec": []
        }
            }
        ];

      this.homepaged = [
        {
          "img1": "img/shot.jpg",
          "button1":"component.entryCreate()",
          "name1":"Add New Entry",
        },

        {
          "img1":"img/shot1.jpg",
          "button1":"component.entryList()",
          "name1":"Visit Bucket List",
        },
      ];
    }

    render(html, component){
      component.innerHTML += html;
      }

    reRender(html, component){
      component.innerHTML = html;
      }

    createEntry(){
      let id = document.getElementById('entry_id');
      let what = document.getElementById('entry_what');
      let description = document.getElementById('entry_description');
      let photo = document.getElementById('entry_photo');
      let location = document.getElementById('entry_location');
      let language = document.getElementById('entry_language');
      let capital = document.getElementById('entry_capital');

      let dummytoDo = [];
        for(let i=0;i<this.state[0].bind.toDopers.length;i++){
          dummytoDo.push({
            "pers" : this.state[0].bind.toDopers[i],
            "sec" : this.state[0].bind.toDosec[i]
          });
        }
      let toDo = dummytoDo;

      let dummyProcedure = [];
        for(let i=0;i<this.state[0].bind.procedures.length;i++){
         dummyProcedure.push(this.state[0].bind.procedures[i]);
        }
      let procedure = dummyProcedure;

      let entry = {			
         "id": id.value,
         "what": what.value,
         "description": description.value,
         "photo": photo.value,
         "toDo": toDo,
         "location": location.value,
         "language": language.value,
         "capital": capital.value,
         "procedure": procedure
      };


      this.entry.push(entry);

      		//Clear Fields
      this.state[0].bind.procedures = this.state[0].bind.toDopers = this.state[0].bind.toDosec = [];
      	id.value = what.value = description.value = photo.value = location.value = language.value = capital.value = ''; 
    }	

    deleteEntry(key){
      let e = this.entry;
      for(let i=0;i<e.length;i++){
       if(e[i].id == key){
        this.entry.splice(i,1);
        break;
      }
    }		
    this.entryList();
   }

    updateEntry(id){    //trial for update function
      id = id+1;
        let formDummy = {
          "id" :  id,
          "what": $('#entrywhat').val(),
          "description" : $('#entrydes').val(),
          "photo": $('#entryimg').val(),
          "toDo": $('#toDonow').val(),
          "location": $('#itslocation').value(),
          "language": $('#itslanguage').value(),
          "capital": $('#itscapital').value(),
          "procedure": $('#procedure').value()
        }

        let e = this.entry;
        for(let i=0;i<e.length;i++){
          if(e[i].id == id){
              e[i] = formDummy;
          break;
          }
        }
        this.entryList();
    }

    findEntryByID(id){
    let e = this.entry;
    for(let i=0;i<e.length;i++){
     if(id==e[i].id){
      return e[i];

     }
    }
   }	

   findEntryByName(what){
    let objects = [];
    let e = this.entry;
    for(let i=0;i<e.length;i++){
     let expr = (e[i].what.toUpperCase().indexOf(what.toUpperCase()) > -1);
  			// console.log(name," vs ",r[i].name," = ",expr);
  			if(expr){
  				objects.push(e[i]);
  			}
  		}
  		return objects;
  	}

   bindEntryNewProcedures(val,id){
  		let bind = this.state[0].bind.procedures;
  		bind[id] = val;
  		// console.log(bind);
  	}	

   bindEntryNewtoDo(val,id,obj){
  		let bind = null;
  		if(obj === "pers"){
  			bind = this.state[0].bind.toDopers;
  		}
  		else if(obj === "sec"){
  			bind = this.state[0].bind.toDosec;
  		}
  		bind[id] = val;
  		// console.log(bind);
  	}	
  }

class Component extends App{
  constructor(){
    super();

  }
  
  landingpage(){
    let html = `

      <nav>
        <div class="nav-wrapper blue-grey">
          <a href="index.html" class="brand-logo">&nbsp;&nbsp;Bucket List of a Pug</a>
          <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
              <li><a href="#" onclick="component.home()"><i class="material-icons left">thumb_up</i>Homepage</a></li>
              <li><a href="#" onclick="component.entryList()"><i class="material-icons left">assignment</i>Bucket List</a></li>
              <li><a href="#" onclick="component.entryCreate()"><i class="material-icons left">note_add</i>New Entry</a></li>
            </ul>
            <ul class="side-nav" id="mobile-demo">
              <li><a href="#" onclick="component.entryList()"><i class="material-icons left">assignment</i>Bucket List</a></li>
              <li><a href="#" onclick="component.entryCreate()"><i class="material-icons left">note_add</i>New Entry</a></li>
            </ul>
        </div>
      </nav>

    `;

    html+=`
            <div class="slider">
            <ul class="slides">
      `;

      for(let i=0;i<this.media.length;i++){
        html += `
          <li>
            <img src="${this.media[i].img}"> <!-- random image -->
              <div class="caption ${this.media[i].alignment}">
                <h3>${this.media[i].caption}</h3>
                <h5 class="light grey-text text-lighten-3">${this.media[i].slogan}</h5>
              </div>
          </li>
        
        `;
      }

        html += `
            </div>

      <div id="entryRecent"></div>
      <div id="entryView"></div>
      <div id="entryList"></div>
      <div id="entryCreate"></div>
      <div id="landingpage"></div>
      <div id="home"></div>

      <div> 
        <img class="materialboxed" width="945" src="img/puggy5.jpg">
      </div>

      <footer class="page-footer blue-grey darken-1" >
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Bucket List App</h5>
              <p class="grey-text text-lighten-4">A sample Web App made to master materialize.css and apply the concept of OOP.</p>
            </div>
                <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                  <ul>
                    <li>
                    <a class="grey-text text-lighten-3" href="#" onclick="component.landingpage()">
                    Home</a></li>
                    <li><a class="grey-text text-lighten-3" href="#" onclick="component.entryList()">
                    <!-- <i class="material-icons left">assignment</i> -->
                    Bucket List</a></li>
                    <li><a class="grey-text text-lighten-3" href="#" onclick="component.entryCreate()">
                    <!-- <i class="material-icons left">dashboard</i> -->
                    New Entry</a></li>
                  </ul>
                </div>
            </div>
            </div>
          <div class="footer-copyright">
            <div class="container">
            © 2016-2017 Copyright Text
            <img class="right" src="img/kuma1.gif" width="35" height="30" style="margin-top:6px;" />
            </div>
        </div>
      </footer>

    `;

    this.reRender(`
     ${html}

     `,document.getElementById("app"));

    this.entryRecent();

      // $('#entryList').hide();
      // $('#entryView').hide();
      //$('#entryRecent').hide();
      // $('#entryCreate').hide();    
      //$('#home').hide(); 
      // $('#landingpage').show();
  }

  entryRecent(){
    let html = `
      <div class="row"> 
      `;
        for(let i=0;i<this.homepaged.length;i++){
          html+= `
            <div class="col s6 m6">
              <div class="card ">
                <div class="card-image">
                <img src="${this.homepaged[i].img1}">
                </div>
   
                  <div class="card-action">
                    <a href="#" onclick="${this.homepaged[i].button1}"><i class="material-icons right">zoom_in</i>${this.homepaged[i].name1}</a>
                </div>
              </div>
            </div>
      `;
        }

        html+=`
          <h5 class="center-align">RECENT LIST IN THE BUCKET</h5>
            <div class="row">
            `;
              let e = this.entry;
              let count = 0;
              for(let i=(e.length-1);i>=0;i--){
              if(count++ === 3)break;

                html+= `
                  <div class="col s12 m4">
                   <div class="card small hoverable">
                      <div class="card-image">
                        <img src="${e[i].photo}">
                        <span class="card-title">${e[i].what}</span>
                      </div>
                      <div class="card-content">
                        <p>${e[i].description}</p>
                      </div>
                      <div class="card-action">
                        <a href="#" onclick="component.entryView(${e[i].id})">More</a>
                      </div>
                   </div>
                 </div>
                 `;
              }

        html += `</div>`;

        this.render(`
          ${html}
            `,document.getElementById("entryRecent"));
  }

  entryView(id){
          let e = this.findEntryByID(id);

          let html = `
            <h5 class="center-align">${e.what}</h5>
            <div class="row">				
              <div class="col s12 m12">
                <div class="card horizontal small">
                  <div class="card-image">
                  <img src="${e.photo}">
                  </div>
                    <div class="card-stacked">
                      <div class="card-content">
                      <p>${e.description}</p>
                      </div>
                      <div class="card-action small">								
                      <span onclick="component.deleteEntry(${e.id})" class="new badge small red" data-badge-caption="">DELETE</span>
                      <span onclick="component.entryList()" class="new badge small" data-badge-caption="">BACK TO LIST</span>
                      <span onclick="component.entryUpdate()" class="new badge small" data-badge-caption="">EDIT ENTRY</span>
                      </div>
                    </div>					
                </div>				
              </div>			
            </div>
            `;

            html += `
              <div class="row">
                <table class="striped">
                  <thead>
                    <tr>
                      <th>Location</th>
                      <th>Language Used</th>
                      <th>Capital City</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>${e.location}</td>
                      <td>${e.language}</td>
                      <td>${e.capital}</td>
                    </tr>					
                  </tbody>
                </table>
              </div>
            `;

            html += `
            <div class="row">				
            <div class="col s6 m6">
            <h6>Things to do</h6>
            <ul class="collection">
            `;

        for(let i=0;i<e.toDo.length;i++){
        let ei = e.toDo[i];
           html += `
           <li class="collection-item avatar">
           <i class="material-icons circle">star</i>
           <span class="title">${ei.pers}</span>
           <p>${ei.sec}<br>

           </p>

           </li>
           `;
        }

           html += `				
             </ul>
             </div>
             <div class="col s6 m6">
             <h6>Visa Information</h6>
             <ul class="collection">
           `;

        for(let i=0;i<e.procedure.length;i++){
        let ep = e.procedure[i];
           html += `
           <li class="collection-item avatar">
           <i class="material-icons circle">done</i>
           <span class="title">Step ${i+1}</span>
           <p>${ep}<br>

           </p>

           </li>
           `;
        }	

           html += `
           </ul>
           </div>			
           </div>
           `;

         this.reRender(`		
           ${html}			
           `,document.getElementById("entryView"));
         $('#entryView').show();
         $('#entryeRecent').hide();
         $('#entryList').hide();
         $('#entryCreate').hide();
         $('#home').hide();
         $('#landingpage').hide();
       }

  entryList(){
    let html = `
      <br/>
        <nav>
        <div class="nav-wrapper white">
        <form>
        <div class="input-field">				
        <input onkeyup="component.entryListItems(this.value)" id="search" type="search" placeholder="Search" required>
        <label for="search"><i class="material-icons">search</i></label>
        <i class="material-icons">close</i>
        </div>
        </form>
        </div>
        </nav>
        <br/>
        `;

        html += `
        <div class="row" id="entryListItems">
        `;
        let e = this.entry;
        for(let i=0;i<e.length;i++){
         html+= `
         <div class="col s12 m4">
         <div class="card small hoverable">
         <div class="card-image">
         <img src="${e[i].photo}">
         <span class="card-title">${e[i].what}</span>
         </div>
         <div class="card-content">
         <p>${e[i].description}</p>
         </div>
         <div class="card-action">
         <a href="#" onclick="component.entryView(${e[i].id})">More</a>
         </div>
         </div>
         </div>
         `;
       }

       html += `</div>`;

       this.reRender(`
         ${html}
         `,document.getElementById("entryList"));
       $('#entryList').show();
       $('#entryView').hide();
       $('#entryRecent').hide();
       $('#entryCreate').hide();		
       $('#home').hide(); 
         $('#landingpage').hide();
     }

     entryListItems(what){ // showing an entry at search using name in the serch box calling entry view fxn
      let html = ``;
      let e = this.findEntryByName(what);
      for(let i=0;i<e.length;i++){
       html+= `
       <div class="col s12 m4">
       <div class="card small hoverable">
       <div class="card-image">
       <img src="${e[i].photo}">
       <span class="card-title">${e[i].what}</span>
       </div>
       <div class="card-content">
       <p>${e[i].description}</p>
       </div>
       <div class="card-action">
       <a href="#" onclick="component.entryView(${e[i].id})">More</a> 
       </div>
       </div>
       </div>
       `;
     }		
     this.reRender(`
       ${html}
       `,document.getElementById("entryListItems"));
     $('#entryList').show();
     $('#entryView').hide();
     $('#entryRecent').hide();
     $('#entryCreate').hide();	
     $('#home').hide(); 
       $('#landingpage').hide();
   }

   entryCreate(){ //
    let html = `
    <div class="row">
    <form class="col s12">
    <h5 class="center-align">Add New Entry to the Bucket</h5>
    <button onclick="component.createEntry()" class="btn waves-effect waves-light">Save</button>
    <div class="row">
    <div class="input-field col s6">
    <input disabled value="${this.entry.length+1}" id="entry_id" type="text" class="validate">
    </div>
    <div class="input-field col s6">
    <input id="entry_what" type="text" class="validate">
    <label for="entry_what">WHAT</label>
    </div>
    </div>
    <div class="row">
    <div class="input-field col s6">
    <input id="entry_description" type="text" class="validate">
    <label for="entry_description">DESCRIPTION</label>
    </div>
    <div class="input-field col s6">
    <input id="entry_photo" type="text" class="validate">
    <label for="entry_photo">PHOTO</label>
    </div>
    </div>
    <div class="row">
    <div class="input-field col s4">
    <input id="entry_location" type="text" class="validate">
    <label for="entry_location">LOCATION</label>
    </div>
    <div class="input-field col s4">
    <input id="entry_language" type="text" class="validate">
    <label for="entry_language">LANGUAGE USED</label>
    </div>
    <div class="input-field col s4">
    <input id="entry_capital" type="text" class="validate">
    <label for="entry_capital">CAPITAL CITY</label>
    </div>
    </div>


    <div class="row">
    <div class="input-field col s6">
    <h6> THINGS TO DO</h6>
    <button onclick="component.entryNewtoDo()" class="btn-floating waves-effect waves-light"><i class="material-icons">add</i></button>
    <div id="entryNewtoDo"></div>
    </div>
    <div class="input-field col s6">
    <h6>VISA INFORMATION</h6>
    <button onclick="component.entryNewProcedures()" class="btn-floating waves-effect waves-light"><i class="material-icons">add</i></button>
    <div id="entryNewProcedures"></div>
    </div>
    </div>					
    </form>
    </div>			
    `;

    this.reRender(`
     ${html}
     `,document.getElementById("entryCreate"));
    $('#entryCreate').show();
    $('#entryList').hide();
    $('#entryView').hide();
    $('#entryeRecent').hide();
    $('#home').hide();
      $('#landingpage').hide();
    this.state[0].bind.procedures = [];		
    this.state[0].bind.toDopers = [];		
    this.state[0].bind.toDosec = [];		
  }

  entryNewProcedures(){
    let bind = this.state[0].bind.procedures;
    bind.push("");		

    let html = ``;
    for(let i=0;i<bind.length;i++){
     let baba_bind = `onkeyup="component.bindEntryNewProcedures(this.value,${i})"`;
     html += `
     <div class="row">
     <div class="input-field col s12">
     <input ${baba_bind} value="${bind[i]}" type="text" />					
     </div>
     </div>		
     `;
   }

   this.reRender(`
     ${html}
     `,document.getElementById("entryNewProcedures"));

 }

 entryNewtoDo(obj){
  let bind_pers= this.state[0].bind.toDopers;
  let bind_sec = this.state[0].bind.toDosec;
  bind_pers.push("");		
  bind_sec.push("");		

  let html = ``;
  for(let i=0;i<bind_pers.length;i++){
   let baba_bind_pers = `onkeyup="component.bindEntryNewtoDo(this.value,${i},'pers')"`;
   let baba_bind_sec = `onkeyup="component.bindEntryNewtoDo(this.value,${i},'sec')"`;
   html += `
   <div class="row">
   <div class="input-field col s12">
   <input ${baba_bind_pers} value="${bind_pers[i]}" type="text" />					
   </div>
   </div>	
   <div class="row">
   <div class="input-field col s12">
   <input ${baba_bind_sec} value="${bind_sec[i]}" type="text" />					
   </div>
   </div>		
   `;
 }

 this.reRender(`
   ${html}
   `,document.getElementById("entryNewtoDo"));

 

}

   entryUpdate(id){

      id = id - 1;
      let html = `

      <div class="row">
      <div class="input-field col s6">
      <h5><B>Make changes as you you wish:</B></h5>
      <tr>
      <input id="formname" type="text" class="validate" value="${this.form[id].name}"></div>
      <input id="formimg" type="text" class="validate" value="${this.form[id].image}"></div>
      <div class="input-field col s6">
      <h5><B>Update Description</B></h5>


      <input id="formdes" type="text" class="validate" value="${this.form[id].description}"></div>
      </div>
      <a onclick="component.updateformApp(${id})" class="waves-effect blue waves-light btn">Update</a>

      `;  
      this.reRender(`

        ${html}

        `,document.getElementById("entryUpdate"));   

      $('#formList').hide();
      $('#viewForm').hide();
      $('#entryUpdate').show();
      $('#formRecent').hide();  
      $('#latestForm').hide();
      $('#home').hide();    

    }


home(){


  let html=`


<div class="row">


`;


    for(let i=0;i<this.homepaged.length;i++){
      html+= `
      <div class="col s6 m6">
      <div class="card ">
      <div class="card-image">
      <img src="${this.homepaged[i].img1}">

      </div>
      <div class="card-content">

      </div>
      <div class="card-action">
      <a href="#" onclick="${this.homepaged[i].button1}"><i class="material-icons right">zoom_in</i>${this.homepaged[i].name1}</a>
      </div>
      </div>
      </div>
      `;
    }





html+=`





  <h5 class="center-align">RECENT LIST IN THE BUCKET</h5>
  <div class="row">



  `;

  let e = this.entry;
  let count = 0;
  for(let i=(e.length-1);i>=0;i--){       
   if(count++ === 3)break;
   html+= `
   <div class="col s12 m4">
   <div class="card small hoverable">
   <div class="card-image">
   <img src="${e[i].photo}">
   <span class="card-title">${e[i].what}</span>
   </div>
   <div class="card-content">
   <p>${e[i].description}</p>
   </div>
   <div class="card-action">
   <a href="#" onclick="component.entryView(${e[i].id})">More</a>
   </div>
   </div>
   </div>
   `;
 }

 html+=`




 `;
 this.reRender(`
   ${html}
   `,document.getElementById("entryCreate"));
 $('#entryeRecent').show();
 $('#entryCreate').show();
 $('#entryList').hide();
 $('#entryView').hide();
 $('#landingpage').hide();
 $('#home').show();




}	

}

let component = new Component();
component.landingpage();

