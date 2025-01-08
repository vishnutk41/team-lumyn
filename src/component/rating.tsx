

export const Rating= ({number}:any) =>{
    return(
<div className="rating_container">
{
    Array.from({ length: number }).map((item,index)=>{
        return(
                <svg key={index}  width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L5.25 5.25H0L4.375 8.75L2.625 14L7 10.5L11.375 14L9.625 8.75L14 5.25H8.75L7 0Z" fill="#FFCC00"/>
                </svg>
        )
    })
}
</div>
    )
}

export default Rating;