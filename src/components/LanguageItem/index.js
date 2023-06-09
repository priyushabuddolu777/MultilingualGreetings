import './index.css'

const LanguageItem = props => {
  const {isActive, onClickChangeLanguage, LanguageItemDetails} = props
  const {buttonText, id} = LanguageItemDetails

  const onClickButton = () => {
    onClickChangeLanguage(id)
  }
  const activeTabBtnClassName = isActive ? 'highlighted' : 'not-highlighted'

  return (
    <ul className="button-container">
      <li className="list-container">
        <button
          type="button"
          value={isActive}
          className={`buttons ${activeTabBtnClassName}`}
          onClick={onClickButton}
        >
          {buttonText}
        </button>
      </li>
    </ul>
  )
}

export default LanguageItem
