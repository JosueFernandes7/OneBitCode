import React from 'react'
import ButtonModal from './ButtonModal';
import Modal from './Modal';


const App = () => {
 const [modal, setModal] = React.useState(false);

  return (
    <section>
      <Modal setModal={setModal} modal={modal}/>
     <ButtonModal setModal={setModal} estado = {modal}/>
    </section>
  )
}

export default App
