import '../../auth.css'
import '../../../globals.css'
import Link from "next/link";
import Image from "next/image";

export default function Registration() {
    return (
        <div className='wrapper'>
            <div className='registration_container'>
                <div className='registration_table final'>
                    <h2 className='main_text'>Реєстрація</h2>
                    <div className='stages_container'>
                        <div className='stage one'>1</div>
                        <div className='arrow'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="16" viewBox="0 0 64 16" fill="none">
                                <path d="M63.7071 8.70711C64.0976 8.31658 64.0976 7.68342 63.7071 7.29289L57.3431 0.928932C56.9526 0.538408 56.3195 0.538408 55.9289 0.928932C55.5384 1.31946 55.5384 1.95262 55.9289 2.34315L61.5858 8L55.9289 13.6569C55.5384 14.0474 55.5384 14.6805 55.9289 15.0711C56.3195 15.4616 56.9526 15.4616 57.3431 15.0711L63.7071 8.70711ZM0 9H63V7H0V9Z" fill="black" />
                            </svg>
                        </div>
                        <div className='stage one'>2</div>
                    </div>
                    <div className='inputs_container'>
                        <div className='inputs_table'>
                            <h2>Дякуємо за вашу реєстрацію<br />Слава Україні!</h2>
                            <div className='image'>
                                <svg width="178" height="178" viewBox="0 0 178 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="mage:check">
                                        <path id="Vector" d="M33.375 87.4796L64.6807 118.785C65.7819 119.901 67.0937 120.787 68.54 121.392C69.9864 121.997 71.5384 122.308 73.1061 122.308C74.6738 122.308 76.2258 121.997 77.6721 121.392C79.1185 120.787 80.4303 119.901 81.5314 118.785L144.625 55.6992" stroke="#373737" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
                            </div>
                            <p style={{ textAlign: 'center', fontSize: '1.2em' }}><Link style={{ color: 'blue' }} href='/login'>Увійдіть</Link>, щоб продовжити</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
