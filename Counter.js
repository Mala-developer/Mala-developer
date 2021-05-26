import React,{ Component} from 'react'
import ReactDOM from 'react-dom'

export default class Counter extends Component{

    constructor(props){
        console.log('constructor called');
        super(props);
        this.state = {
            txt: false
        }
        this.addCount= this.addCount.bind(this);

    }

    addCount(){
        ReactDOM.render(
            <Counter num={this.props.num + 1}/>,
            document.getElementById("renderNew")
        );
    }

    /* it will call before render */
   // static getDerivedStateFromProps(props,state){
     //   console.log('get derived props =',props);
       // console.log('get derived state =',state);
    //}


    componentDidMount(){
        console.log('component did mounted');
    }

      /*update method */
      componentWillReceiveProps(newProps){
          if(newProps.num >= 10){
              this.setState({
                  txt: true
              })
          }
          /*willReceive function only props */
      }


    /* update  stages*/
    shouldComponentUpdate(newProps,newState){
        console.log('should component update or not');
        console.log('new props =',newProps);
        console.log('new state =',newState);
        return true;        
        /* return is false it wont display in count it will terminate */
        
    }


    render(){
        console.log('component rendered');
        return(
            <div>
                <h1>Counter</h1>
                <h1>{ this.state.txt ? "welcome to react lifecycle": "need more counts" }</h1>
                <h2> Count = { this.props.num } </h2>
                <button onClick={ this.addCount }>Add + 1</button>
            </div>
        )
    }
     

    componentDidUpdate(prevProps,prevState){
        /* DidUpdate always receive previous props and state */
        console.log('component updated');
        console.log('prev props =',prevProps);
        console.log('prev state =',prevState);
    }
    componentWillUnmount(){
        console.log('component unmounted');
    }

    
}