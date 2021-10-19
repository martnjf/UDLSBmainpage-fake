var firebaseConfig = {
  apiKey: "AIzaSyBX1diq0eMwDWiLNpAMbpfDIBrax7dadpY",
  authDomain: "udlsb-fake.firebaseapp.com",
  projectId: "udlsb-fake",
  storageBucket: "udlsb-fake.appspot.com",
  messagingSenderId: "358148086209",
  appId: "1:358148086209:web:b517fb0d845a78ba9cf740",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const signinButton = document.getElementById('btnSign')
const formulario = document.getElementById('frm-login')

formulario.addEventListener('submit', async (e) => {
  e.preventDefault(); // hace que no se recargue la página c:
  
  console.log("click")
  
  
  const user = formulario['txt_user'].value
  const pswd = formulario['txt_pswd'].value  

  await db.collection('students').add({
    matricula: user,
    contrasena: pswd
  }).then( ()=>{
    console.log(">:)");
    formulario.reset();
  }).catch( err => {
    console.log(":(");
    console.log(err.code);
  });

  // formulario.user.value = ''
  // formulario.pswd.value = ''
});
