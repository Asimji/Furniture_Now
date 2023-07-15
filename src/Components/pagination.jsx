

export default function Pagination ({handlePage,count,current_page}){

    return new Array(count).fill(0).map((a,i)=>{
        return (<button onClick={()=>handlePage(i+1)} disabled={current_page===i+1}
        style={{margin:"12px",padding:"10px",border:"none",borderRadius:"50px",width:"40px",backgroundColor: current_page === i + 1 ? "grey" : null, cursor:"pointer"}} 
       key={i} >
            {i+1}
            </button>)
    })

}