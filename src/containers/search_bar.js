import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import { fetchWeather } from '../actions/index'

 class  SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    onInputChange(event){
        
       this.setState({term:event.target.value})
       
    }
    onFormSubmit(e){
        e.preventDefault()
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''})

    }
    render() {
        return (   
            <div className="row">   
                <form
                onSubmit= {this.onFormSubmit} 
                className="form-horizontal" >
                    <div className="form-group">
                        <div className="col-sm-10">
                            <input
                            value = {this.state.term}
                            onChange = {this.onInputChange}
                            type="text" className="form-control"  placeholder="Get a weather forecast"/>
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

function mapDispatchToProps (dispatch){
    return bindActionCreators({fetchWeather},dispatch)
}
export default connect (null, mapDispatchToProps)(SearchBar)