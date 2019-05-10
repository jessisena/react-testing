//@ flow

import React from "react";

const ListContainer = ({commentsList}) => commentsList.map((item, i) => <div key={i}>{item}</div>);



export default ListContainer;