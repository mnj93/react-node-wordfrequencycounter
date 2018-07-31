import React from 'react';
import InputForm from '../components/forms/form';
import WordResultTable from '../components/ResultTable';
import * as api from '../Service/api';

class MainView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
            visible:false,
            counter :0
        }
    }
    onSubmit =(n)=>api.fetchResult(n)
    .then(res=> {
        console.log('res : '+res);
        this.setState({
            data:res,
            visible:true,
            counter:n
        });
    });
    
    render(){
        const {visible,data,counter} = this.state;
        return(
            <div>
            <InputForm onSubmit={this.onSubmit}/>
            {
                visible && <WordResultTable counter={counter} data={data} />
            }            
            </div>
        )
    }
}


export default MainView;