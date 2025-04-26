import TestinomialCards from "./TestinomialCards"
import customers from "../data/customerData"
function Testinomial() {
  return (
    <div className="w-[85%] mx-auto flex flex-col gap-4 items-center py-20">
      <div>
        <h1 className="text-3xl font-bold">What our clients says about us</h1>
      </div>
      <div className="w-full flex justify-between items-center gap-10">
        <button className="h-10 bg-red-600 text-white flex justify-center items-center rounded-[50%] text-3xl">
            <i class="fi fi-sr-angle-small-left "></i>
        </button>
        <div className="flex justify-between gap-x-10 overflow-x-scroll hide-scrollbar ">
            {
                customers.map((data,index) => {
                    return <div key={index}>
                        <TestinomialCards
                        name={data.name}
                        profile={data.profile}
                        rating={data.rating}
                        description={data.description}
                        />
                    </div>
                })
            } 
        </div>
        <button className="bg-red-600 h-10 text-white flex justify-center items-center rounded-[50%] text-3xl">
            <i class="fi fi-sr-angle-small-right"></i>
        </button>
      </div>
    </div>
  )
}

export default Testinomial
