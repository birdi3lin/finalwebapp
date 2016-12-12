updateEntry(id){

      id = id - 1;
      let html = `
          <center>
            <div class="form-style-3">
              <div class="row">
                <fieldset>
                  <center><h1>Update Entries</h1></center>
                  <center><span >Entry Passes<span class="required">*</span></span><input disabled value="${this.entry.length+1}" id="entry_id" type="text" ></label></center>
                  <center><span>Update Name</span><input type="text" id="what_1" value="${this.entry[id].what}"/> </label></center>
                  <center><span>Update Description</span><input type="text" id="description_1" value="${this.entry[id].description}"/> </label></center>
                  <center><span>Update Photo</span><input type="text" id="photo_1" value="${this.entry[id].photo}"/> </label></center>
              	  <center><span>Update Location</span><input type="text id="location_1" value="${this.entry[id].location} "/> </label></center>
              	  <center><span>Update Language</span><input type="text" id="language_1" value="${this.entry[id].language}"/> </label></center>
                  <center><span>Update Capital</span><input type="text" id="capital_1" value="${this.entry[id].capital}"/> </label></center>
               
                  <div class="center-align">
                  <button onclick="component.entryList()" class="btn waves-effect waves-light">Back</button>
                  <a onclick="component.updateEntryId(${id})" class="waves-effect blue waves-light btn">Update</a>
                  </div>
                </fieldset>
              </div>
            </div>
          </center>
      `;  
      
      this.reRender(`
         ${html}
                    `,document.getElementById("updateEntry"));   
                    $('#entryCreate').hide();
                    $('#entryList').hide();
                    $('#entryView').hide();
                    $('#entryeRecent').hide();
                    $('#home').hide();
                    $('#landingpage').hide();
                    $('#updateEntry').show();  
      
    }