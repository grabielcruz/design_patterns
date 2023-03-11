function Television(brand, model) {
  this.brand = brand
  this.model = model
  this.type = "television"
}

function Blender(brand, model) {
  this.brand = brand
  this.model = model
  this.type = "blender"
}

function DVD(brand, model) {
  this.brand = brand
  this.model = model
  this.type = "dvd"
}

function ElectronicDeviceFactory() {
  this.create = (brand, model, type) => {
    switch (type) {
      case 1:
        return new Television(brand, model)
        break;
      case 2:
        return new Blender(brand, model)
        break;
      default:
        return new DVD(brand, model)
    }
  }
}

function DescribeElectronic() {
  console.log(`${this.type} is a device with a brand ${this.brand} and a model ${this.model}`)
}

const myElectronicDeviceFactory = new ElectronicDeviceFactory();

const electronicDevices = [];

electronicDevices.push(myElectronicDeviceFactory.create("oster", "high power", 2))
electronicDevices.push(myElectronicDeviceFactory.create("samsung", "led", 1))
electronicDevices.push(myElectronicDeviceFactory.create("toshiba", "blue ray", 3))

electronicDevices.forEach((device) => {
  DescribeElectronic.apply(device)
})