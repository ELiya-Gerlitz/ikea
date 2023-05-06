class FurnitureModel{

    public code: number
    public furnitureTypeId: string
    public dimensions: string
    public color: string
    public price: number

    public constructor(furniture : FurnitureModel){
        this.code = furniture.code
        this.furnitureTypeId = furniture.furnitureTypeId
        this.dimensions = furniture.dimensions
        this.color = furniture.color
        this.price = furniture.price
    }


}

export default FurnitureModel