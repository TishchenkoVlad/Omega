function Button({children, handleClick}) {


    return (
        <button class="button" onClick={handleClick}>{children}</button> //чилдрен это меняеющийся текст или контент, а хандл это обработчик передающее действие, состояние

    )
}

export default Button;