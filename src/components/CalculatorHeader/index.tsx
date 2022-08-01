import React from 'react'
import style from "@/components/CalculatorHeader/Calculator_header.module.css"
type Props = {}

const CalculatorHeader = (props: Props) => {
    return (
        <div>
            <div className='flex justify-between w-full px-14'>
                <div className={style.calculator__header}>
                    <div className={style.calculator__header__item}>
                        <div className={style.calculator__item__logo}>
                            <img src="https://mconsultingprep.com/wp-content/uploads/2021/06/android-chrome-192x192-1.png" alt="Mental Math Practice" width="100px" />
                        </div>
                        <div className={style.calculator__item__text}>
                            <h1>MENTAL MATH</h1>
                            <h1>PRACTICE TOOL</h1>
                        </div>
                    </div>
                    <div className={style.calculator__text}>
                        Knock down five calculations as fast as possible but stay within the Ceiling Margin of Error!
                        If you overshoot the mark even once, you're out!!
                    </div>
                </div>
                <div className={style.calculator__option}>
                    <div className={style.calculator__option__item}>
                        <h3 className="small-title">Ceiling Margin of Error</h3>
                        <label htmlFor="addend" className="pct">
                            <input type="number" id="margin" value="5 " />
                        </label>
                    </div>
                </div>
                <div className={style.calculator__button}>
                    <button>
                        <img src="https://mconsultingprep.com/wp-content/uploads/2021/07/reload-arrow.png" className='inline-block' />
                    </button>
                </div>
            </div></div>
    )
}

export default CalculatorHeader