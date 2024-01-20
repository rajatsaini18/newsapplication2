import React, { Component } from 'react';

export default class NewsItem extends Component {


  

  render() {
    let { title, description, urlToImage, url, author, publishedAt, source } = this.props;

    return (
      <div className="box"  >
        <div className="card " >
          <img className="card-img-top" style={{ height: '200px',padding: '5px' }} src={urlToImage} alt="" />
          <span className="position-absolute top-10 translate-middle badge rounded-pill bg-secondary border border-dark border-2" style={{ left: '92%', zIndex: 1 }}>
            {source}
          </span> 
          <div className="card-body"style={{ height: '280px' ,overflow:'scroll'}} >
            <h5 className="card-title">
              <strong>{title}...</strong>
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              {' '}
              By <strong>{author}</strong> on <strong>{new Date(publishedAt).toGMTString()}</strong>
            </p>
            <a href={url} className="btn btn-secondary border border-dark border-2">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}


