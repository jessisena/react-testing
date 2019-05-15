//@ flow
import React from "react";

const ListContainer = ({commentsList}) => 
<div className="ui divided relaxed list">

    {commentsList.map((item, i) => <div className="item" key={i}>{item.name}</div>)}

</div>
;

export default ListContainer;