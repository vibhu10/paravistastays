export default function PropertyReview(){
    return(  <div className="reviews-section">
        <h2>Reviews</h2>
        <div className="rating-summary">
          <span className="average-rating">4.98</span>
          <span className="stars">⭐⭐⭐⭐⭐</span>
          <span className="review-count">118 Reviews</span>
        </div>
        <div className="reviews-list">
          <div className="review-card">
            <div className="review-header">
              <div className="avatar">S</div>
              <div>
                <h3>Sahil</h3>
                <span className="review-date">3 weeks ago</span>
              </div>
            </div>
            <p className="review-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has...
            </p>
            <a href="#" className="read-more">
              Read more..
            </a>
          </div>
  
          <div className="review-card">
            <div className="review-header">
              <div className="avatar">S</div>
              <div>
                <h3>Sahil</h3>
                <span className="review-date">3 weeks ago</span>
              </div>
            </div>
            <p className="review-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has...
            </p>
            <a href="#" className="read-more">
              Read more..
            </a>
          </div>
        </div>
        <button className="show-all-btn">Show all reviews</button>
      </div>)
}