import React from 'react';


// class TOC extends Component{
    


//     // shouldComponentUpdate(newProps, newState) {
      
//     //   console.log(newProps.data, props.data);

//     //   if(props.data === newProps.data) {
//     //     return false;
//     //   }else {
//     //     return true;
//     //   }
//     // }


//     render() {
      
//     }
//   }

  function TOC(props) {
    var lists =[];
      var data = props.data;

      for(var i = 0; i<data.length; i++) {
      lists.push(<li key={data[i].id}> <a data-id={data[i].id} href={"/content/"+data[i].id} onClick={function(e) {
        e.preventDefault();
        props.onChangePage(e.target.dataset.id);
      }}>{data[i].title}</a></li>
        )
      }
      return (
      <nav>
      <ul>
        {lists}
      </ul>
      </nav>
      );

  }

  export default TOC;