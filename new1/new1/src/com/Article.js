import React from 'react';


export default class Article extends React.Component{
    render(){
        return (<div>
            <h2>Hello</h2>
            <p>These data structures are highly efficient on modern JavaScript VMs by using structural sharing via hash maps tries and vector tries as popularized by Clojure and Scala, minimizing the need to copy or cache data.</p>
            <p>Immutable.js also provides a lazy Seq, allowing efficient chaining of collection methods like map and filter without creating intermediate representations. Create some Seq with Range and Repeat.</p>
        </div>);
    }
}