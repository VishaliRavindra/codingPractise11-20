import './index.css'

const ThumbnailItem = props => {
  const {thumbDetails, clickThumbItem, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbDetails
  const onClickThumbnailItem = () => {
    clickThumbItem(id)
  }

  const activeThumbNailImgClassName = isActive ? 'active-thumb-img' : ''
  console.log(thumbnailUrl)
  return (
    <li className="thumbnail-item-container">
      <button type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbNail-img ${activeThumbNailImgClassName}`}
          onClick={onClickThumbnailItem}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
