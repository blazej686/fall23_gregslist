export const HousesView = `
<Section class="container-fluid bg-dark">
      <div class="row">
        <section class="col-12 text-center text-light">
          <h1>Houses</h1>
        </section>
      </div>

      <div class="row text-light">
        <div class="col-6">
          <form onsubmit="app.HousesController.createHouse(event)">
            <div class="mt-2">
              <label for="Bedrooms">Bedrooms</label>
              <input id="Bedrooms" type="number" name="Bedrooms" minlength="1" maxlength="9"
                placeholder="Input number of Bedrooms">
            </div>
            <div class="mt-2">
              <label for="Bathrooms">Bathrooms</label>
              <input id="Bathrooms" type="number" name="Bathrooms" minlength="1" maxlength="9"
                placeholder="Input number of Bathrooms">
            </div>
            <div class="mt-2">
              <label for="Price">Price</label>
              <input id="Price" type="number" name="Price" minlength="1" maxlength="100000000"
                placeholder="Input number of Price">
            </div>
            <div class="mt-2">
              <label for="Year">Year it was Built</label>
              <input id="Year" type="number" name="Year" minlength="1800" maxlength="2023"
                placeholder="Input Year Built">
            </div>
            <div class="mt-2">
              <label for="Sqft">Sqft</label>
              <input id="Sqft" type="number" name="Sqft" minlength="1" maxlength="30000"
                placeholder="Input number of Sqft">
            </div>
            <div class="mt-2">
              <label for="Sqft">Property Description</label>
              <textarea name="description" id="description" rows="10"></textarea>
            </div>

            <button>Submit</button>
          </form>
        </div>

        </section>

      <section id="houses" class="row justify-content-center">
      
      </section>
      </div>



`

