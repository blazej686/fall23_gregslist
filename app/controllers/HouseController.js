import { AppState } from "../AppState.js"
import { houseService } from "../services/HousesService.js";
import { setHTML } from "../utils/Writer.js";


// function _drawHouses() {

//     const house = AppState.houses
//     let content = ''
//     houses.forEach(house => content += house.HouseCard) 
//     setHTML{ 'houses', content }

// };



export class HouseController {

    constructor() {
        console.log("house controller loaded")
        // _drawHouses()

        const house = AppState.houses
        let content = ''
        houses.forEach(house => content += house.HouseCard)
        setHTML(houses, content)


    }

}

