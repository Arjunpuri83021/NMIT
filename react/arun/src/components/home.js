import { useEffect, useState } from "react";


const Form = ()=>{

 
  const [name,setName]=useState('')
  const [userID,setuserID]=useState('') 
  const[message,setMessage]=useState('')
  const [product,setProduct] =useState([])
  function handelsumbit(e){
    e.preventDefault();
    const formadata={name}

    fetch('http://localhost:7000/register',{
     method:"POST",
    headers:{"Content-type":"application/JSON"},
    body:JSON.stringify(formadata)
    })
    .then((res)=>{return res.json()}).then((data)=>{
        console.log(data.data)
        if(data.data){
            setName('');
            

            e.target.reset();
            findreg( )
        }else {
            setMessage(data.message)
        }
    })
  }


  useEffect(()=>{
 
  findreg()
},[])
function findreg(){
    fetch('http://localhost:7000/findreg').then((res)=>{return res.json()}).then((data)=>{
            // console.log(data.data) 
            setProduct(data.data)
         })
}
 
    function findUpdateuser(id){
    //  console.log(id)
     fetch(`http://localhost:7000/findUpdateuser/${id}`,{
           method:"POST",
           headers:{"Content-type":"application/json"},
           
     }).then((res)=>{return res.json()}).then((data)=>{
      //  console.log(data)
       if(data){
        setName(data.Name)
        
        setuserID(data._id)
       }
     })
    }
     function handelupdate(userID){
      const updateuser ={name}
    fetch (`http://localhost:7000/update/${userID}`,{
      method:"PUT",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(updateuser)
    }).then((res)=>{return res.json()}).then((data)=>{
      console.log(data)
      if(data){
      findreg()
      }
    })

     }
     function handeldelete(id){
      fetch (`http://localhost:7000/deletereg/${id}`,{
        method:"DELETE",
        
      })
      .then((res)=>{return res.json()}).then((data)=>{
        // console.log(data)
        if(data.data._id){
        findreg()
        }
      })
     }


    return( 

<>
    <form onSubmit={(e)=>{handelsumbit(e)}} className="w-25 m-auto" action="">
        <label htmlFor="">Name</label>
        <input onChange={(e)=> {setName(e.target.value)}} className="form-control" type="text" />

        
        <p className="text-danger">{message}</p>
          <button className="form-control btn btn-dark mt-4"  type="sumbit" >sumbit</button>
    </form>  
 {/* <h1>{fisrt}</h1>
  <button onClick={handelsumbit}>decrease</button> */}

    
     <table className="table table-hover w-50 m-auto">
        <thead>
            <tr>
                <th>S.no</th>
             <th>Name</th>
             <th>Update</th>
             <th>Delete</th>
             </tr>
        </thead>
        <tbody>
            {product.map((items,key)=>(
          <tr>
            <td>{key+1}</td>
           <td>{items.Name}</td>
          
           <td><i className="bi bi-pencil-square" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"  onClick={()=>{findUpdateuser(items._id)}} ></i></td>
           <td><i onClick={()=>{handeldelete(items._id)}} className="bi bi-trash3"></i></td>
          </tr>
          ))}
        </tbody>
     </table>

  {/* update modal  */}

  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">update</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
      <label htmlFor="">Name</label>
        <input value={name} onChange={(e)=> {setName(e.target.value)}} className="form-control" type="text" />

        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button onClick={()=>{handelupdate(userID)}} type="button" className="btn btn-primary" data-bs-dismiss="modal">update user</button>
      </div>
    </div> 
  </div>
</div>

</>

    )
}
export default Form;
 