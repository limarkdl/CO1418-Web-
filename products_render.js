document.body.onload = grid_products;
function grid_products(prod_id) {
  document.getElementById("tabloid").innerHTML = "";
  let prod = "Hoodie";
  let pathway = "hoodies/hoodie";
 if (prod_id == "Jumper") {
  prod = "Jumper";
  pathway = "jumpers/jumper";
} else if (prod_id == "T-Shirt") {
  prod = "T-Shirt";
  pathway = "tshirt/tshirt";
}
for (let i = 0; i < 32; i++) {
  var div = document.createElement("div");
  let prod_index = String(i + 1);
  let code = '<div class="main-list"><table class="zoom"><tbody><tr><td><img width="200px" height="200px" src="' + pathway + ' (' + prod_index + ').jpg"></td></tr><tr><td><b>' + prod + ' #' + prod_index + '</b></td></tr><tr><td>£39.99</td></tr><tr><td><button class="buy_bt" onclick="">Buy</button></td></tr></tbody> </table> </div>';
  let string_i = String(i + 1);
  div.id = "div" + String(i);
  div.innerHTML = code;
  console.log(code);    //debugging  
  document.getElementById("tabloid").appendChild(div);
}
}




var item = [
  {type:'UCLan Hoodie',color:'Purple',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (1).jpg'},
  {type:'UCLan Hoodie',color:'Light Blue',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (2).jpg'},
  {type:'UCLan Hoodie',color:'Green',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (3).jpg'},
  {type:'UCLan Hoodie',color:'Dark Grey',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (4).jpg'},
  {type:'UCLan Hoodie',color:'Black',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (5).jpg'},
  {type:'UCLan Hoodie',color:'Salmon',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (6).jpg'},
  {type:'UCLan Hoodie',color:'Burgundy',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (7).jpg'},
  {type:'UCLan Hoodie',color:'Light Grey',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (8).jpg'},
  {type:'UCLan Hoodie',color:'Slate Blue',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (9).jpg'},
  {type:'UCLan Hoodie',color:'Orange',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (10).jpg'},
  {type:'UCLan Hoodie',color:'Teal',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (11).jpg'},
  {type:'UCLan Hoodie',color:'Navy',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (12).jpg'},
  {type:'UCLan Hoodie',color:'Orange',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (13).jpg'},
  {type:'UCLan Hoodie',color:'Creame',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (14).jpg'},
  {type:'UCLan Hoodie',color:'Lime',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (15).jpg'},
  {type:'UCLan Hoodie',color:'Off Blue',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (16).jpg'},
  {type:'UCLan Hoodie',color:'Red',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (17).jpg'},
  {type:'UCLan Hoodie',color:'Charcoal',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (18).jpg'},
  {type:'UCLan Hoodie',color:'Navy Blue',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (19).jpg'},
  {type:'UCLan Hoodie',color:'Lighter Grey',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (20).jpg'},
  {type:'UCLan Hoodie',color:'New Blue',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (21).jpg'},
  {type:'UCLan Hoodie',color:'Forest Green',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (22).jpg'},
  {type:'UCLan Hoodie',color:'Ocean Blue',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (23).jpg'},
  {type:'UCLan Hoodie',color:'Pink',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (24).jpg'},
  {type:'UCLan Hoodie',color:'Orange New',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (25).jpg'},
  {type:'UCLan Hoodie',color:'Black',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (26).jpg'},
  {type:'UCLan Hoodie',color:'Light Off Grey',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (27).jpg'},
  {type:'UCLan Hoodie',color:'Rusty Red',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (28).jpg'},
  {type:'UCLan Hoodie',color:'Slate Grey',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (29).jpg'},
  {type:'UCLan Hoodie',color:'Bright Green',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (30).jpg'},
  {type:'UCLan Hoodie',color:'Bright Pink',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (31).jpg'},
  {type:'UCLan Hoodie',color:'Burgundy New',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (32).jpg'},
  {type:'UCLan Hoodie',color:'Navy New',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (33).jpg'},
  {type:'UCLan Hoodie',color:'Bright Green',description:'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',price:' Only £39.99',src:'images/items/hoodies/hoodie (34).jpg'},
  {type:'UCLan Logo Jumper',color:'Purple',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (1).jpg'},
  {type:'UCLan Logo Jumper',color:'Rusty Red',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (2).jpg'},
  {type:'UCLan Logo Jumper',color:'Water Blue',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (3).jpg'},
  {type:'UCLan Logo Jumper',color:'White',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (4).jpg'},
  {type:'UCLan Logo Jumper',color:'Pink',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (5).jpg'},
  {type:'UCLan Logo Jumper',color:'Black',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (6).jpg'},
  {type:'UCLan Logo Jumper',color:'Old Blue',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (7).jpg'},
  {type:'UCLan Logo Jumper',color:'Dark Grey ',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (8).jpg'},
  {type:'UCLan Logo Jumper',color:'Red',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (9).jpg'},
  {type:'UCLan Logo Jumper',color:'Brown',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (10).jpg'},
  {type:'UCLan Logo Jumper',color:'Green',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (11).jpg'},
  {type:'UCLan Logo Jumper',color:'Dark Red',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (12).jpg'},
  {type:'UCLan Logo Jumper',color:'Yellow',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (13).jpg'},
  {type:'UCLan Logo Jumper',color:'Light Grey',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (14).jpg'},
  {type:'UCLan Logo Jumper',color:'Light Green',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (15).jpg'},
  {type:'UCLan Logo Jumper',color:'Old Red',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (16).jpg'},
  {type:'UCLan Logo Jumper',color:'Light Purple',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (17).jpg'},
  {type:'UCLan Logo Jumper',color:'Slate Blue',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (18).jpg'},
  {type:'UCLan Logo Jumper',color:'Real Red',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (19).jpg'},
  {type:'UCLan Logo Jumper',color:'Old Pink',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (20).jpg'},
  {type:'UCLan Logo Jumper',color:'Slate Grey',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (21).jpg'},
  {type:'UCLan Logo Jumper',color:'Bright Green',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (22).jpg'},
  {type:'UCLan Logo Jumper',color:'Teal',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (23).jpg'},
  {type:'UCLan Logo Jumper',color:'Sky Blue',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (24).jpg'},
  {type:'UCLan Logo Jumper',color:'Sunshine Pink',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (25).jpg'},
  {type:'UCLan Logo Jumper',color:'Bronze',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (26).jpg'},
  {type:'UCLan Logo Jumper',color:'Olive Green',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (27).jpg'},
  {type:'UCLan Logo Jumper',color:'Bright White Green',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (28).jpg'},
  {type:'UCLan Logo Jumper',color:'Navy Blue',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (29).jpg'},
  {type:'UCLan Logo Jumper',color:'Rusty Orange',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (30).jpg'},
  {type:'UCLan Logo Jumper',color:'Bright Orange',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (31).jpg'},
  {type:'UCLan Logo Jumper',color:'Sky Purple',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (32).jpg'},
  {type:'UCLan Logo Jumper',color:'Really Red',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (33).jpg'},
  {type:'UCLan Logo Jumper',color:'Plum Purple',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (34).jpg'},
  {type:'UCLan Logo Jumper',color:'Dark Purple',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (35).jpg'},
  {type:'UCLan Logo Jumper',color:'Vibrant Red',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (36).jpg'},
  {type:'UCLan Logo Jumper',color:'Ocean Blue',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (37).jpg'},
  {type:'UCLan Logo Jumper',color:'Creame',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (38).jpg'},
  {type:'UCLan Logo Jumper',color:'Lighter Blue',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (39).jpg'},
  {type:'UCLan Logo Jumper',color:'Light Grey',description:'cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks',price:' Only £29.99',src:'images/items/jumpers/jumper (40).jpg'},
  {type:'UCLan Logo Tshirt',color:'Navy Blue New',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (1).jpg'},
  {type:'UCLan Logo Tshirt',color:'Rusty Red New',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (2).jpg'},
  {type:'UCLan Logo Tshirt',color:'Burgundy',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (3).jpg'},
  {type:'UCLan Logo Tshirt',color:'Pink',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (4).jpg'},
  {type:'UCLan Logo Tshirt',color:'Teal',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (5).jpg'},
  {type:'UCLan Logo Tshirt',color:'Black',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (6).jpg'},
  {type:'UCLan Logo Tshirt',color:'Old Red',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (7).jpg'},
  {type:'UCLan Logo Tshirt',color:'Grey',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (8).jpg'},
  {type:'UCLan Logo Tshirt',color:'Red',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (9).jpg'},
  {type:'UCLan Logo Tshirt',color:'Brown',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (10).jpg'},
  {type:'UCLan Logo Tshirt',color:'Pdark Purple',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (11).jpg'},
  {type:'UCLan Logo Tshirt',color:'Yellow',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (12).jpg'},
  {type:'UCLan Logo Tshirt',color:'Mustard Yellow',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (13).jpg'},
  {type:'UCLan Logo Tshirt',color:'Dark Grey',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (14).jpg'},
  {type:'UCLan Logo Tshirt',color:'Dark Green',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (15).jpg'},
  {type:'UCLan Logo Tshirt',color:'Bright Green',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (16).jpg'},
  {type:'UCLan Logo Tshirt',color:'Olive Green',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (17).jpg'},
  {type:'UCLan Logo Tshirt',color:'Dark Grey',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (18).jpg'},
  {type:'UCLan Logo Tshirt',color:'Orange',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (19).jpg'},
  {type:'UCLan Logo Tshirt',color:'Purple',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (20).jpg'},
  {type:'UCLan Logo Tshirt',color:'Slate Blue',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (21).jpg'},
  {type:'UCLan Logo Tshirt',color:'Bright Pink',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (22).jpg'},
  {type:'UCLan Logo Tshirt',color:'Brightly Green',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (23).jpg'},
  {type:'UCLan Logo Tshirt',color:'Lime Green',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (24).jpg'},
  {type:'UCLan Logo Tshirt',color:'Ocean Blue',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (25).jpg'},
  {type:'UCLan Logo Tshirt',color:'Dark Red',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (26).jpg'},
  {type:'UCLan Logo Tshirt',color:'Another Green',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (27).jpg'},
  {type:'UCLan Logo Tshirt',color:'Slate Grey',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (28).jpg'},
  {type:'UCLan Logo Tshirt',color:'Bright Orange',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (29).jpg'},
  {type:'UCLan Logo Tshirt',color:'Another Purple',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (30).jpg'},
  {type:'UCLan Logo Tshirt',color:'Real Red',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (31).jpg'},
  {type:'UCLan Logo Tshirt',color:'Brilliant Blue',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (32).jpg'},
  {type:'UCLan Logo Tshirt',color:'Creame',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (33).jpg'},
  {type:'UCLan Logo Tshirt',color:'Teal Blue',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (34).jpg'},
  {type:'UCLan Logo Tshirt',color:'White',description:'cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days',price:' Only £19.99',src:'images/items/tshirts/tshirt (35).jpg'}
  ];






