// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeId: 0}

  leftArrow = () => {
    this.setState(prevState => {
      if (prevState.activeId <= 0) {
        return {activeId: 0}
      }
      return {activeId: prevState.activeId - 1}
    })
  }

  rightArrow = () => {
    const {reviewsList} = this.props
    const len = reviewsList.length
    this.setState(prevState => {
      if (prevState.activeId >= len - 1) {
        return {activeId: len - 1}
      }
      return {activeId: prevState.activeId + 1}
    })
  }

  render() {
    const {activeId} = this.state
    const {reviewsList} = this.props
    const object = reviewsList[activeId]
    console.log(object)
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Reviews</h1>

          <div className="carousel">
            <img
              src={object.imgUrl}
              alt={object.username}
              className="profile-picture"
            />
            <div className="navigators">
              <button
                data-testid="leftArrow"
                onClick={this.leftArrow}
                className="button"
                type="button"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                  alt="left arrow"
                  className="arrow"
                />
              </button>
              <p className="name">{object.username}</p>

              <button
                data-testid="rightArrow"
                onClick={this.rightArrow}
                className="button"
                type="button"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                  alt="right arrow"
                  className="arrow"
                />
              </button>
            </div>
            <p>{object.companyName}</p>
          </div>

          <p className="feedback">{object.description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
