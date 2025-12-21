
const ADMIN_PHONE='527221383605';

document.getElementById('fecha').addEventListener('change',()=>{
 const cont=document.getElementById('horarios');cont.innerHTML='';
 const fecha=document.getElementById('fecha').value;
 let citas=JSON.parse(localStorage.getItem('citas'))||[];
 for(let h=10;h<=18;h++){
  const hora=h+':00';
  const ocupado=citas.some(c=>c.fecha===fecha && c.hora===hora);
  const b=document.createElement('button');
  b.textContent=hora;
  if(ocupado){b.disabled=true;b.classList.add('ocupado');}
  b.onclick=()=>{
    const msg=encodeURIComponent(
      `Hola, quiero agendar una cita.%0AFecha: ${fecha}%0AHora: ${hora}`
    );
    window.open(`https://wa.me/${ADMIN_PHONE}?text=${msg}`,'_blank');
  };
  cont.appendChild(b);
 }
});
