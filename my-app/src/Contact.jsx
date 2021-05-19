import React,{useState} from "react";


const Contact = ( ) => {
    const [data, setData] = useState({
        Fullname:"",
        phone:"",
        mail:"",
        messsage:"",
    });

    const InputEvent  =(event) => {
        const{name,value}=event.target;
        setData((preVal) =>{
            return{
                ...preVal,[name]:value,
            }
        })
    };

    const formSubmit = () =>{
      
        alert(`My name is ${data.Fullname}. My mobile no. is ${data.phone}. My email is ${data.mail}. `);
    };
    return (
        <>
        <div className="my-5">
        <h1 className="text-center"> Contact US</h1>
        </div>
        <div className="container contact_div">
        <div className="row">
        <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" name="Fullname" value={data.Fullname} onChange={InputEvent} placeholder="Enter your name" required/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone no</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter your Phone no" required/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name="mail" value={data.mail} onChange={InputEvent} placeholder="name@example.com" required/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={InputEvent}></textarea>
</div>
<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div></form>
        </div>
        </div>
        </div>
        </>
    );
};

export default Contact;