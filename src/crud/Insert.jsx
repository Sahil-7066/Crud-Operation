import React, { Component } from "react";
import View from "./view";
class Insert extends Component {
  state = {
    value: [],
    upval: [],
    tbval: [{ tb1: " ", tb2: " " }],
    id: 0,
    index: "",
  };

  HandleInsert = (name, sname) => {
    let id = this.state.id;
    id = id + 1;

    const value3 = { id: id, name: name, sname: sname };
    //console.log("value1", value3);
    let value4 = this.state.value;
    value4.push(value3);
    //console.log("value2", this.state.value);
    // this.setState({ value: this.state.value2 });
    // console.log("value", this.state.value);
    this.setState({ id: id });
    document.getElementById("tb1").value = "";
    document.getElementById("tb2").value = "";
    //console.log("id", this.state.id);
  };

  HandleRemove = (record) => {
    let rec = this.state.value.filter((r) => r.name !== record);
    this.setState({ value: rec });
    document.getElementById("tb1").value = "";
    document.getElementById("tb2").value = "";
  };

  Search = (name) => {
    if (name === "") {
      window.alert("Name to be search is invalid. Please enter valid name");
    } else {
      console.log("name", name);
      let rec = this.state.value.filter((r) => r.name === name);
      if (rec.length === 0) {
        window.alert("Record not found");
      } else {
        console.log("rec", rec);
        let rec1 = rec[0];
        let val = this.state.value;
        let index = val.indexOf(rec1);
        // let index1 = [];
        // index1.push(index);
        this.setState({ index: index });
        console.log("index,this.state.index");
        document.getElementById("tb2").value = rec1.sname;
        console.log("rec.sname", rec1.sname);
      }
    }
  };
  HandleUpdate = (name, sname) => {
    if (name === "" || sname === "") {
      window.alert(
        "Name of the record to be updated is invalid. Please enter valid name"
      );
    } else {
      const ct3 = [...this.state.value];
      let index = this.state.index;
      ct3[index].name = name;
      ct3[index].sname = sname;
      this.setState({ value: ct3 });
      window.alert("Record of " + name + " is updated");
      document.getElementById("tb1").value = "";
      document.getElementById("tb2").value = "";
    }
  };

  //var data1 = this.props.data;
  // HandleUpdate2 = (id, name, sname) => {
  //   console.log("Function called handle update2");
  //   const val = this.state.upval.filter((v) => v.id === id);
  //   console.log("val", val);

  //   if (val.length === 0) {
  //     console.log("Entered if loop");
  //     const value3 = { id: id, name: name, sname: sname };
  //     console.log("value1", value3);
  //     let value4 = [];
  //     value4.push(value3);
  //     this.setState({ upval: value4 });
  //     console.log("upval", this.state.upval);
  //     return (
  //       <>
  //         <td id="td1"> {id} </td>
  //         <td id="td2"> {name} </td>

  //         <td id="td3"> {sname} </td>
  //         <td>
  //           <button
  //             id="b1"
  //             class="btn btn-primary"
  //             onClick={() =>
  //               this.HandleUpdate2(
  //                 document.getElementById("td1").innerHTML,
  //                 document.getElementById("td2").innerHTML,
  //                 document.getElementById("td3").innerHTML
  //               )
  //             }
  //           >
  //             Update
  //           </button>
  //         </td>
  //       </>
  //     );
  //   } else {
  //     console.log("Entered else loop");
  //     const index = this.state.upval.indexOf(id);
  //     console.log("index", index);
  //     this.state.upval.splice(index, 1);

  //     return (
  //       <>
  //         <td id="td4"> {id} </td>
  //         <td>
  //           {" "}
  //           <input
  //             id="tb3"
  //             type="text"
  //             class="form-control"
  //             placeholder="Name"
  //             autoComplete="off"
  //             value={name}
  //           />{" "}
  //         </td>

  //         <td>
  //           {" "}
  //           <input
  //             id="tb4"
  //             type="text"
  //             class="form-control"
  //             placeholder="Name"
  //             autoComplete="off"
  //             defaultValue={sname}
  //           />{" "}
  //         </td>
  //         <td>
  //           <button
  //             id="b1"
  //             class="btn btn-primary"
  //             onClick={() =>
  //               this.HandleUpdate2(
  //                 document.getElementById("td4").innerHTML,
  //                 document.getElementById("tb3").value,
  //                 document.getElementById("tb4").value
  //               )
  //             }
  //           >
  //             Save
  //           </button>
  //         </td>
  //       </>
  //     );
  //   }
  // };

  render() {
    return (
      <div className="container" style={{ paddingTop: "2%" }}>
        <fieldset>
          <legend>
            <h5> Enter Details : </h5>
          </legend>
          <div class="row">
            <div class="col-6">
              <label> Name : </label>
              <input
                id="tb1"
                type="text"
                class="form-control"
                placeholder="Name"
                autoComplete="off"
              />
            </div>
            <div class="col-6">
              <label> City Name : </label>
              <input
                id="tb2"
                type="text"
                class="form-control"
                placeholder="City Name"
                autoComplete="off"
              />
            </div>
          </div>
          <br></br>
          <div class="row">
            <div class="col-3">
              <button
                type="button"
                class="btn btn-primary"
                onClick={() =>
                  this.HandleInsert(
                    document.getElementById("tb1").value,
                    document.getElementById("tb2").value
                  )
                }
              >
                Add
              </button>
            </div>
            <div class="col-3">
              <button
                type="button"
                class="btn btn-primary"
                onClick={() =>
                  this.Search(document.getElementById("tb1").value)
                }
              >
                Search
              </button>
            </div>
            <div class="col-3">
              <button
                type="button"
                class="btn btn-primary"
                onClick={() =>
                  this.HandleUpdate(
                    document.getElementById("tb1").value,
                    document.getElementById("tb2").value
                  )
                }
              >
                Update
              </button>
            </div>
            <div class="col-3">
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => {
                  if (window.confirm("Delete the item?")) {
                    this.HandleRemove(document.getElementById("tb1").value);
                  }
                }}
              >
                Delete
              </button>
            </div>
          </div>
          <br></br>
          <div class="row">
            <div class="col-lg-12">
              <table id="table1" class="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>City Name</th>
                  </tr>
                </thead>
                <tbody id="t">
                  {this.state.value.map((row) => (
                    <View
                      rowdata={row}
                      deleterecord={this.HandleRemove}
                      data={this.HandleUpdate2}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default Insert;
