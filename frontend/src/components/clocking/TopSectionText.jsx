export default function TopSectionText(){
    const textClassName = 'text-lg text-red-500 font-bold'
    return (
        <>
            <div className='p-2'>
                <p className={textClassName}>1. 打卡时请按住屏幕保持光亮</p>
                <p className={textClassName}>2. 如超过11组工作代号， 请复制并储存生成出现的号码进入手机备忘录</p>
            </div>
            
        </>
    )
}