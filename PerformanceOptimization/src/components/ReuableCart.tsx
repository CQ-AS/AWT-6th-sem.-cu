
function Card(Props:{firstName:string,lastName:string, id:number , image:string}) {
  return (
    <div  key={Props.id}  className="border rounded-lg p-4 shadow-md">
    <br/>
    <div style={{border:"1px solid white", display:"flex"}}>
        <div>
        <div>firstName: {Props.firstName}</div>
        <br/>
        <div>lastName : {Props.lastName}</div>
        </div>
    </div>
    <br/>
    <u/>
    </div>
  );
}

export default Card;