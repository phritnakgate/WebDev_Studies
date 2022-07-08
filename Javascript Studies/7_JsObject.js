let product = {
    name : "HyperX DDR4-3200 8GB",
    price : "1590 THB",
    brand : "Kingston",
    category : "RAM"
};
console.log("สินค้าที่สั่งซื้อ : " + product.name, "ราคา : " + product.price, "ยี่ห้อ : " + product.brand, "หมวดหมู่ : " + product.category);

//Methods of Array
let product2 = {
    name : "ESET NOD32 Internet Security 1-Year",
    price : "899 THB",
    brand : "ESET",
    category : "Antivirus",
    getUser:function(){
        return "สินค้าที่สั่ง:" + this.name + "" + this.price;
    }
};
let productData = product2.getUser();
console.log(productData);