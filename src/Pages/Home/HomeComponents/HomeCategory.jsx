import useData from "../../../Hooks/useData"

const HomeCategory = () => {
    const {categorys} = useData();
  return (
    <div>
        <div className='container mx-auto px-24 py-10'>
            <div className='grid grid-cols-6 gap-8'>
                {
                    categorys.map(category => (
                        <div className='bg-gray-100 flex flex-col items-center justify-center px-16 py-5 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer'>
                            <img className='w-20 h-20 mb-3' src={category.image} alt="" />
                            <p className='bg-gray-100 mb-1'>{category.name}</p>
                            <p className='text-xs text-gray-400'>{category.items} Items</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default HomeCategory