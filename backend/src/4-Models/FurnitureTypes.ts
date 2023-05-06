class FurnitureTypes{

    public furnitureTypeId : number
    public furnitureType : string

    public constructor(furnitureType : FurnitureTypes){
        this.furnitureTypeId = furnitureType.furnitureTypeId
        this.furnitureType = furnitureType.furnitureType

    }

}
export default FurnitureTypes