import React from "react";

class WordResultTable extends React.Component{
    render(){
        const {data,counter} = this.props;
        console.log(data);
        let rows =[];
        for(let i=0;i< counter;i++){
            rows.push(<tr key={i}><td>{data[i].name}</td><td>{data[i].total}</td></tr>);
        }
        return(
            <div className="container" style={{marginTop:"2%"}}>
                <table className="table table-hover">
                <thead>
                <tr>
                    <th>Word</th>
                    <th>Total Occurance</th>               
                </tr>
                </thead>
                <tbody>
                   {rows}
                </tbody>
                </table>
            </div>
        )
    }
}



export default WordResultTable;