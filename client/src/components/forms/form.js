import React from "react";
import InlineError from '../messages/InlineError';
import Validator from "validator";
class InputForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            n:'',
            errors:'',
            loading :false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange = (e) =>{
        this.setState ({
            n : e.target.value
        });
    }
    onSubmit =(e) => {
        e.preventDefault();
        let errors = '';
        if(this.state.n === '') { errors = 'Please enter any number!'}
        else if(!Validator.isNumeric(this.state.n)) { errors = 'Please enter valid number!'}
        else if(this.state.n <= 0) { errors = 'Please enter valid number, Should be greater than 0!'}
        this.setState({errors});     
        
        if(!errors){
            this.setState({loading:true});
            this.props.onSubmit(this.state.n)
            .catch(err => {
                this.setState({
                    errors:err,
                    loading:false
                })
            });
            
        }
    }
    render(){
        const {n,errors,loading} = this.state;
        const inputClassName = errors ? 'form-control is-invalid' : 'form-control';
        return(
            <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Enter count</label>
                    <input type="text" className={inputClassName} id="email" aria-describedby="emailHelp"
                     placeholder="Input number" name="email" value={n} onChange={this.onChange}/>
                    {errors && <InlineError text={errors} /> }                   
                </div> 
                <div className="text-center">      
                   {
                       loading ? <button disabled="true" className="btn btn btn-outline-default">Please Wait.... <i className="fa fa-spin"></i></button>  :        
                       <button className="btn btn btn-outline-success" onClick={this.handleFormSubmit}>Submit <i className="fa fa-paper-plane-o ml-2"></i></button>    
                   }                                               
                </div>      
            </form>
        )
    }
}


export default InputForm;