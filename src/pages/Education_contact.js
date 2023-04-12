import React from 'react'
import Header from '../components/Header'
import { HashLink as Link } from 'react-router-hash-link'
function Education() {
  return (
    <div>
      <Header/>
      <div className='Education-contact-intro'
      style={{backgroundImage:`url('./edu-contact.svg')`}}>
<div className='Education-contact-intro-content'>
  <a href='#div-stack-edu' >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
   
    {/* <Link to='#div-stack-edu' smooth>  */}
    MY EDUCATION
    {/* </Link> */}
  </a>
  <a href='#contact' >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    {/* <Link to='#contact'>  */}
    CONTACT
    {/* </Link> */}

  </a>
 
</div>
      </div>
  


<div className="container my-5 n-box2 py-5  div-stack" id='div-stack-edu'>
<h3 className="font-bold">My Education</h3>
<img src="./developer.svg" alt="" height={200} width={200}/>

<div className="row">
  <div className="col-md-4">
    <div>
      <h3 className="font-bold">2021-continue</h3>
      <hr />
      <p>Bachelor's in Computer application</p>
      <p>Chhatrapati shahuji maharaj (UIET) </p>
      <p>Kanpur University</p>
    </div>
  </div>
  <div className="col-md-4">
    <div >
      <h3 className="font-bold">2020</h3>
      <hr />
      <p>Intermediate</p>
      <p>Shatrughan singh GIC </p>
      <p>kalyanpur kanpur</p>
    </div>
  </div>
  <div className="col-md-4">
    <div >
      <h3 className="font-bold">2018</h3>
      <hr />
      <p>High school</p>
      <p>Shatrughan singh GIC </p>
      <p>kalyanpur kanpur</p>
    </div>
  </div>
</div>
</div>
<div className="container mt-3" id='contact'  >
  <div className="row">
    <div className="col-md-6">
      <img src="./contactimg.webp" alt=""  height='400 ' width='400'/>
    </div>
    <div className="col-md-6 n-box2 contact" data-aos="fade-left">
      <h1 className='font-bold my-3'>Contact</h1>
      <hr />
      <div className=" my-5 contact-form">
      <input type="text"className='form-field n-box2' id='name' placeholder='name'/>
      <input type="text"className='form-field n-box2' id='email' placeholder='email'/>
   < textarea className="form-field n-box2" rows={3} defaultValue={"Discription"}/>
   <button className='primary-button font-bold n-box2'>
     SUBMIT
   </button>
   </div>

    </div>
  </div>
</div>
</div>
  )
}

export default Education