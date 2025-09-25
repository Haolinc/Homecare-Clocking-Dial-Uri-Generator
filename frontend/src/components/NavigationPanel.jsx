export default function NavigationPanel({isFirstPage, setIsFirstPage}){
    const selectedColor = " bg-blue-200"
    const unselectedColor = ' bg-gray-200'
    return (
        <footer className="w-full h-20 flex flex-row me-auto fixed bottom-0 left-0">
            <div className={`w-1/2 flex justify-center items-center ${isFirstPage ? selectedColor: unselectedColor}`} onClick={() => setIsFirstPage(true)}>
                <p>打钟</p>
            </div>
            <div className={`w-1/2 flex justify-center items-center ${isFirstPage ? unselectedColor : selectedColor}`} onClick={() => setIsFirstPage(false)}>
                <p className="text-center">员工信息</p>
            </div>
        </footer>
    )
}