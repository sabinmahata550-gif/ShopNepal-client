
const blogDetails = async({params}) => {
    const{slug}=await params;
  return (
    <div>
      blog details {slug.join(",")};
    </div>
  )
}

export default blogDetails
