function toRad(angle) {return angle * (Math.PI / 180);}
function sin(angle) {return Math.sin(toRad(angle));}
function cos(angle) {return Math.cos(toRad(angle));}

function drawPolygon(StartDeg,length,x,y,scale) {
  var c2 = document.getElementById('c').getContext('2d');
  c2.fillStyle = '#000';
  c2.beginPath();
  // draw inside circle
  for (i = length + StartDeg; i > 0 + StartDeg; i--) {c2.lineTo((cos(i)*scale)+x,(sin(i)*scale)+y);}
  // draw data
  for (i = 1 + StartDeg; i <= length + StartDeg; i++) { 
      r = scale + Math.floor(Math.random() * (0.3 * scale));
      c2.lineTo((cos(i)*r)+x,(sin(i)*r)+y);
      if (i == length + StartDeg) {
        c2.lineTo((cos(length+StartDeg)*scale)+x,(sin(length+StartDeg)*scale)+y);
      }
  }
  c2.closePath();
  c2.fill();
}
drawPolygon(0,90,90,90,60);
drawPolygon(90,90,90,90,60);
drawPolygon(180,90,90,90,60);
drawPolygon(270,90,90,90,60);
