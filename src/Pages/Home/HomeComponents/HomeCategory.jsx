import useData from "../../../Hooks/useData"

const HomeCategory = () => {
    const { categorys } = useData();
    return (
        <div>
            <div className='container mx-auto px-4 md:px-12 lg:px-24 py-10'>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 xl:gap-10'>
                    {
                        categorys.map((category, index) => (
                            <div key={index} className='bg-gray-100 flex flex-col items-center justify-center p-6 rounded-xl hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer group'>
                                <div className="w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 mb-4 flex items-center justify-center">
                                    <img 
                                        className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-300' 
                                        src={category.image} 
                                        alt={category.name} 
                                    />
                                </div>
                                
                                <p className='text-gray-800 font-semibold text-sm md:text-base mb-1 text-center'>{category.name}</p>
                                <p className='text-xs text-gray-500 font-medium'>{category.items} Items</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeCategory;