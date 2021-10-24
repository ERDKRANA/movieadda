import React, {Component} from 'react';
class Movie extends Component{
constructor(props){

super(props);
this.state={

}
 }
render(){
    return(
    
        <div className="p-3">
            <h1>Movie LIST</h1>
            <div></div>Top Movie list For You<div/>
            <div> 
            
        <div className="container mt-3">
        <div className="row">
          <div className="col-sm-3">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/799/491/801/movies-hollywood-movies-wallpaper-preview.jpg"
              className="movie-pic"
            />
            <div>Doctore Stranger  </div>
          </div>
          <div className="col-sm-3">
            <img
              src="https://imgcacheblog.instube.com/2019/02/Full-HD-1080P-Hollywood-Movies-Free-Download-in-Hindi-1.jpg"
              className="movie-pic"
            />
            <div>Danger</div>
          </div>
          <div className="col-sm-3">
            <img
              src="https://i.ytimg.com/vi/wbHSJ5GOr00/maxresdefault.jpg"
              className="movie-pic"
            />
            <div>Alone</div>
          </div>
          <div className="col-sm-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9i78ALumzCZM143f1KP_YHd-qtPtfqSLlw&usqp=CAU"
              className="movie-pic"
            />
            <div>300</div>
          </div>
          </div>
        </div>
        <div className="container mt-3">
        <div className="row">
          <div className="col-sm-3">
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v"
              className="movie-pic"
            />
            <div>M.S.Dhoni</div>
          </div>
          <div className="col-sm-3">
            <img
              src="https://updatednewsreport.com/wp-content/uploads/2020/03/Captain-Marvel-movie-2019-.jpg"
              className="movie-pic"
            />
            <div>Captain Marvel</div>
          </div>
          <div className="col-sm-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/6/69/83_film_poster.jpg"
              className="movie-pic"
              
            />
            <div>Kpil Dev</div>
          </div>
          <div className="col-sm-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbEfjpvKBbk_oNPoV1_IYNSM6IKSIwKBr3VQ&usqp=CAU"
              className="movie-pic"
            />
            fandom 
          </div>
          <nav aria-label="Page navigation example">
            <ul class="pagination page-alignment-center">
               <li class="page-item"><a class="page-link" href="#">Previous</a></li>
               <li class="page-item"><a class="page-link" href="#">1</a></li>
               <li class="page-item"><a class="page-link" href="#">2</a></li>
               <li class="page-item"><a class="page-link" href="#">3</a></li>
               <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
         </nav>
         
          </div>
        </div>
        </div> 
        <div className="container-fluid bg-danger text-white  mt-3">
        
        </div>
        </div>
        
    )
}
}
export default Movie;