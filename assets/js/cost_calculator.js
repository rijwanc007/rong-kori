let div_product_category = document.getElementById('div_product_category');
let div_painting_cost = document.getElementById('div_painting_cost');
let div_square_feet = document.getElementById('div_square_feet');
let product_category = document.getElementById('product_category');
let painting_cost = document.getElementById('painting_cost');
let square_feet = document.getElementById('square_feet');
let div_total_without_vat = document.getElementById('div_total_without_vat');
let div_total_with_vat = document.getElementById('div_total_with_vat');
let selected_product_category = document.getElementById('selected_product_category');
let selected_painting_cost = document.getElementById('selected_painting_cost');
$(document).on('click','.location',function(){
    document.getElementById('div_location').innerHTML = document.getElementById('location').value;
});
$(document).on('click','.select_category',function(){
    $('#product_category').empty();
    document.getElementById('div_select_category').innerHTML = document.getElementById('select_category').value;
    let i;
    let value = document.getElementById('select_category').value;
    let interior_paint = ['Royale Aspira','Breathe Easy','Luxury Silk','Easy Clean','Plastic Paint','Economical Plastic Paint','Distemper'];
    let exterior_paint = ['Ultima','Anti-dirt Long Life','Weather Coat','Economical Weather Coat','Snocem'];
    let enamel_paint = ['Enamel Paint(wall)','Breathe Easy Enamel(grill)','Enamel Paint(grill)'];
    if(value == 'Interior Paint'){
        for(i = 0;i < interior_paint.length;i++){
            let node = document.createElement('OPTION');
            node.text = interior_paint[i];
            document.getElementById('product_category').options.add(node);
        }
    }else if(value == 'Exterior Paint'){
        for(i = 0;i < exterior_paint.length;i++){
            let node = document.createElement('OPTION');
            node.text = exterior_paint[i];
            document.getElementById('product_category').options.add(node);
        }
    }else if(value == 'Enamel Paint'){
        for(i = 0;i < enamel_paint.length;i++){
            let node = document.createElement('OPTION');
            node.text = enamel_paint[i];
            document.getElementById('product_category').options.add(node);
        }
    }else{
        let node = document.createElement('OPTION');
        node.text = 'No Product Category Selected Yet';
        document.getElementById('product_category').options.add(node);
    }
});
$(document).on('click','.product_category',function(){
    div_product_category.innerHTML = product_category.value;
    selected_product_category.value = product_category.value;
});
$(document).on('click','.painting_cost',function(){
    div_painting_cost.innerHTML = painting_cost.value;
    selected_painting_cost.value = painting_cost.value;
});
$(document).on('input','.square_feet',function(){
    div_square_feet.innerHTML = square_feet.value + '  Feet';
});
$(document).on('click','.calculate_button',function(){
   if(square_feet.value > 400){
       if (selected_product_category.value == 'Royale Aspira' && selected_painting_cost.value == 'Including Product Cost With Painter & Other Charge') {
           div_total_without_vat.innerHTML = 30 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 30 * square_feet.value + (30 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Royale Aspira' && selected_painting_cost.value == 'Only Painter & Other Charge') {
           div_total_without_vat.innerHTML = 12 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 12 * square_feet.value + (12 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Breathe Easy' && selected_painting_cost.value == 'Including Product Cost With Painter & Other Charge') {
           div_total_without_vat.innerHTML = 30 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 30 * square_feet.value + (30 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Breathe Easy' && selected_painting_cost.value == 'Only Painter & Other Charge') {
           div_total_without_vat.innerHTML = 12 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 12 * square_feet.value + (12 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Luxury Silk' && selected_painting_cost.value == 'Including Product Cost With Painter & Other Charge') {
           div_total_without_vat.innerHTML = 24 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 24 * square_feet.value + (24 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Luxury Silk' && selected_painting_cost.value == 'Only Painter & Other Charge') {
           div_total_without_vat.innerHTML = 10 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 10 * square_feet.value + (10 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Easy Clean' && selected_painting_cost.value == 'Including Product Cost With Painter & Other Charge') {
           div_total_without_vat.innerHTML = 23 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 23 * square_feet.value + (23 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Easy Clean' && selected_painting_cost.value == 'Only Painter & Other Charge') {
           div_total_without_vat.innerHTML = 10 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 10 * square_feet.value + (10 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Plastic Paint' && selected_painting_cost.value == 'Including Product Cost With Painter & Other Charge') {
           div_total_without_vat.innerHTML = 14 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 14 * square_feet.value + (14 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Plastic Paint' && selected_painting_cost.value == 'Only Painter & Other Charge') {
           div_total_without_vat.innerHTML = 6 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 6 * square_feet.value + (6 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Economical Plastic Paint' && selected_painting_cost.value == 'Including Product Cost With Painter & Other Charge') {
           div_total_without_vat.innerHTML = 12 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 12 * square_feet.value + (12 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Economical Plastic Paint' && selected_painting_cost.value == 'Only Painter & Other Charge') {
           div_total_without_vat.innerHTML = 5 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 5 * square_feet.value + (5 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Distemper' && selected_painting_cost.value == 'Including Product Cost With Painter & Other Charge') {
           div_total_without_vat.innerHTML = 10 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 10 * square_feet.value + (10 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Distemper' && selected_painting_cost.value == 'Only Painter & Other Charge') {
           div_total_without_vat.innerHTML = 5 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 5 * square_feet.value + (5 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Ultima' && selected_painting_cost.value == 'Including Product Cost With Painter & Other Charge') {
           div_total_without_vat.innerHTML = 19 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 19 * square_feet.value + (19 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Ultima' && selected_painting_cost.value == 'Only Painter & Other Charge') {
           div_total_without_vat.innerHTML = 6 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 6 * square_feet.value + (6 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Anti-dirt Long Life' && selected_painting_cost.value == 'Including Product Cost With Painter & Other Charge') {
           div_total_without_vat.innerHTML = 19 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 19 * square_feet.value + (19 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Anti-dirt Long Life' && selected_painting_cost.value == 'Only Painter & Other Charge') {
           div_total_without_vat.innerHTML = 6 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 6 * square_feet.value + (6 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Weather Coat' && selected_painting_cost.value == 'Including Product Cost With Painter & Other Charge') {
           div_total_without_vat.innerHTML = 15 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 15 * square_feet.value + (15 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Weather Coat' && selected_painting_cost.value == 'Only Painter & Other Charge') {
           div_total_without_vat.innerHTML = 6 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 6 * square_feet.value + (6 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Economical Weather Coat' && selected_painting_cost.value == 'Including Product Cost With Painter & Other Charge') {
           div_total_without_vat.innerHTML = 13 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 13 * square_feet.value + (13 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Economical Weather Coat' && selected_painting_cost.value == 'Only Painter & Other Charge') {
           div_total_without_vat.innerHTML = 6 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 6 * square_feet.value + (6 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Snocem' && selected_painting_cost.value == 'Including Product Cost With Painter & Other Charge') {
           div_total_without_vat.innerHTML = 14 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 14 * square_feet.value + (14 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Snocem' && selected_painting_cost.value == 'Only Painter & Other Charge') {
           div_total_without_vat.innerHTML = 4 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 4 * square_feet.value + (4 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Enamel Paint(wall)' && selected_painting_cost.value == 'Including Product Cost With Painter & Other Charge') {
           div_total_without_vat.innerHTML = 13 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 13 * square_feet.value + (13 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Enamel Paint(wall)' && selected_painting_cost.value == 'Only Painter & Other Charge') {
           div_total_without_vat.innerHTML = 5 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 5 * square_feet.value + (5 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Breathe Easy Enamel(grill)' && selected_painting_cost.value == 'Including Product Cost With Painter & Other Charge') {
           div_total_without_vat.innerHTML = 13 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 13 * square_feet.value + (13 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Breathe Easy Enamel(grill)' && selected_painting_cost.value == 'Only Painter & Other Charge') {
           div_total_without_vat.innerHTML = 5 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 5 * square_feet.value + (5 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Enamel Paint(grill)' && selected_painting_cost.value == 'Including Product Cost With Painter & Other Charge') {
           div_total_without_vat.innerHTML = 10 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 10 * square_feet.value + (10 * square_feet.value) * 0.05 + ' tk';
       } else if (selected_product_category.value == 'Enamel Paint(grill)' && selected_painting_cost.value == 'Only Painter & Other Charge') {
           div_total_without_vat.innerHTML = 4 * square_feet.value + ' tk';
           div_total_with_vat.innerHTML = 4 * square_feet.value + (4 * square_feet.value) * 0.05 + ' tk';
       }else{
           alert('you have choose product category $ painting cost');
       }
   }else{
       alert('you have only calculate above 400 square feet');
   }
});