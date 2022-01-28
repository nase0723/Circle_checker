'use strict'

document.getElementById('input_value').focus();

const get_info = () => {
  let $input_value = document.getElementById('input_value').value;
  if ($input_value == "") {
    document.getElementById('answer').style.display="none";
  } else {
    document.getElementById('answer').style.display="flex";
  }
  let $input_radius_value = document.getElementById('input_value').value;
  let $circle_info = document.getElementById('circle_info').value;
  const $pi = 3.14;

  
  if ($circle_info == '直径') {
     $input_radius_value = $input_value / 2; 
  }



const radius_diameter = () => {
  if ($circle_info == '直径') {
    document.getElementById('radius_diameter').textContent = '半径';
    document.getElementById('radius_diameter_value').textContent = $input_value / 2 ;
  } else {
    document.getElementById('radius_diameter').textContent = '直径';
    document.getElementById('radius_diameter_value').textContent = $input_value * 2 ;
  }
}

const area = () => {
  document.getElementById('area').textContent = '円の面積';
  document.getElementById('area_value').textContent = Math.floor($input_radius_value * $input_radius_value * 100) / 100 + 'π' + ' (' + Math.floor($input_radius_value * $input_radius_value * $pi * 100) / 100 + 'cm)';
}


const perimeter = () => {
  document.getElementById('perimeter').textContent = '円周';
  document.getElementById('perimeter_value').textContent = Math.floor(($input_radius_value * 2) * 100) / 100 + 'π' + ' (' +Math.floor(($input_radius_value * 2) * $pi * 100) / 100 + 'cm)';
}


const ball_surface_area = () => {
  document.getElementById('ball_surface_area').textContent = '球の表面積';
  document.getElementById('ball_surface_area_value').textContent = Math.floor(($input_radius_value * $input_radius_value) * 4 * 100) / 100 + 'π' + ' (' + Math.floor(($input_radius_value * $input_radius_value) * 4 * $pi * 100) / 100 + 'cm²)';
}


const ball_volume = () => {
  document.getElementById('ball_volume').textContent = '球の体積'
  document.getElementById('ball_volume_value').textContent = Math.floor(($input_radius_value * $input_radius_value * $input_radius_value) / 3 * 4 * 100) / 100 + 'π' + ' (' + Math.floor(($input_radius_value * $input_radius_value * $input_radius_value) / 3 * 4 * $pi * 100) / 100 + 'cm³)';
}

if ($input_value !== ""){
  radius_diameter();
  area();
  perimeter();
  ball_surface_area();
  ball_volume();
}
}