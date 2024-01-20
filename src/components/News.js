import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from './imagebk.jpg'



export default class News extends Component {

static defaultProps={
  country:"in",
  category:"general",

  
}  

static propTypes={
  country: PropTypes.string,
  category:PropTypes.string,
 

}
  

constructor(){
 super();
  this.state={
    articles: [],
    loading:true,
    page:1,
    totalResults:0
  }
}




async componentDidUpdate(prevProps) {
  if (prevProps.country !== this.props.country) {
    this.props.setProgress(10);
    this.setState({
      loading: true,
      articles: [],
      totalResults: 0,
      page: 1,
    });
    this.props.setProgress(30);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pagesize=10`;

    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({
      loading: false,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    this.props.setProgress(100);
  }
}







fetchMoreData= async()=>{
  this.props.setProgress(40);
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pagesize=10`;
  this.props.setProgress(70);
  let data= await fetch(url);
  let parsedData=await data.json();
  this.props.setProgress(80);
  this.setState({
    articles:this.state.articles.concat(parsedData.articles),
    page:this.state.page+1
  })
  this.props.setProgress(100);
}

async componentDidMount(){
  this.props.setProgress(20);
  this.setState({
    loading:true
  })

  

  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pagesize=10`;
  this.props.setProgress(50);
  let data= await fetch(url);
  let parsedData=await data.json();
  this.props.setProgress(70);
  
  
  this.setState({
    loading:false,
    articles:parsedData.articles,
    totalResults:parsedData.totalResults
  })
  this.props.setProgress(100);
  
}

  render() {
    return (
      <>

      {this.state.loading && <Spinner ></Spinner>}
      
       {!this.state.loading && <InfiniteScroll
          style={{
            backgroundImage:`url(${Image})`,
            backgroundSize:'contain'
           
        }}
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length<this.state.totalResults-1}
          loader={<Spinner/>}
          
        >
      <div   >
      
       <Carousel ></Carousel>
      <div  >
        
        <div className='container' style={{marginTop:'-100px'}}>
      
        <div className='row'>
      
          {this.state.articles.map((element)=>{
           return <div className='col-md-4' style={{padding:'10px'}} key={`${element.publishedAt}.concat(${element.url}.concat(${element.title}))`}>
            <NewsItem modeType={this.props.modeType } source={element.source.name} title={element.title?element.title.slice(0,45):""} publishedAt={element.publishedAt?element.publishedAt:"Unidentified"} author={element.author?element.author:"Unknown"} description={element.description?element.description.slice(0,95):""} urlToImage={!element.urlToImage?"https://photos5.appleinsider.com/gallery/57769-117634-53753-108089-app-store-on-iPhone-xl-xl.jpg":element.urlToImage} url={element.url}></NewsItem>
          </div>

          })}
         
          
        </div>
        </div>
       
        
      </div>
      </div>
      </InfiniteScroll>}
      
      </>
    )
  }
}
