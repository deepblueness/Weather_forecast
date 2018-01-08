import React, {Component} from 'react'

export default class  SearchBar extends Component {
    render() {
        return (   
            <div className="row">   
                <form className="form-horizontal" >
                    <div className="form-group">
                        <div className="col-sm-10">
                            <input type="text" className="form-control"  placeholder="Search"/>
                         </div>
                            <div className="form-group">
                            <button className="btn btn-secondary " type = "submit"> Submit</button>
                        </div> 
                    </div>
                 </form> 
           </div>
        )
    }
}

