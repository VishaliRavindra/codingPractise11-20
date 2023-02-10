import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {imageUrl, appName} = appDetails
  return (
    <>
      <li className="app-item-container">
        <img className="app-item-image" src={imageUrl} alt={appName} />

        <p className="app-item-title">{appName}</p>
      </li>
    </>
  )
}

export default AppItem
