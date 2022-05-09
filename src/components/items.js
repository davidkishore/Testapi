import { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import getItem from "./Redux/action/itemAction";
import { getData } from "./Redux/action/action";

function Items(props) {
  const [num, Snum] = useState([]);

  useEffect(() => {
    props.getData();
  }, []);

  return (
    <>
      <h2>All Items</h2>
      {/* {console.log(props.statvalue)} */}
      {props.statvalue.map((res) => {
        console.log(res[0].price, "test");
        return <div>hello</div>;
      })}

      <button onClick={props.incr}>increment</button>
      <button onClick={props.decr}>decrement</button>
      {/* <button onClick={reset}>reset</button> */}
    </>
  );
}

const mapStateToProps = (state) => ({
  statvalue: state,
});
export default connect(mapStateToProps, { getData })(Items);
