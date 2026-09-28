
const reviewProduct =async ({params}) => {
            const{id,reviewId}=await params;
    return (
    <div>
      product id is {id}and review id id {reviewId}
    </div>
  )
}

export default reviewProduct
