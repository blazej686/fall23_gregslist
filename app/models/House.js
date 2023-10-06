import { generateId } from "../utils/GenerateId.js"

export class House {
    constructor(data) {
        this.id = data.id || generateId()
        this.year = data.year
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
    }

    get HouseCard() {
        return `<div class="col-3 shadow text-center mb-2 p-3 bg-secondary">
        <img class="house-img"
          src="${this.imgUrl}" alt="House image">
        <p>Bedrooms:${this.bedrooms}</p>
        <p>bathrooms: ${this.bathrooms}</p>
        <p>Price: $${this.price}</p>
        <p>Year built: ${this.year}</p>
        <p>Total Sqft:${this.sqft}</p>
        <p>Property Description:${this.description}</p>
      </div>
`

    }


}